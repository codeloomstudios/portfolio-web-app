// EditProject.js
import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Typography, Divider, Button, Select, message } from "antd";
import axios from "axios";

const { Option } = Select;
const { Title } = Typography;

const EditProject = ({ visible, onCancel, project, onUpdate }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState(project?.thumbnail || null);
  const [sampleImagePreviews, setSampleImagePreviews] = useState(
    project?.samples?.map((sample) => ({ images: sample.images || [] })) || []
  );

  useEffect(() => {
    form.setFieldsValue(project);
    setThumbnailPreview(project?.thumbnail || null);
    setSampleImagePreviews(
      project?.samples?.map((sample) => ({ images: sample.images || [] })) || []
    );
  }, [project, form]);

  const handleUpdate = () => {
    form
      .validateFields()
      .then(async (values) => {
        setLoading(true);
        try {
          // Make API call to update project
          await axios.put(
            `http://localhost:5000/projectSample/updateProjectSample/${project._id}`,
            values
          );
          message.success("Project updated successfully");
          onUpdate(values);
          onCancel();
          window.location.reload();
        } catch (error) {
          console.error("Error updating project:", error);
          message.error("Error updating project");
        } finally {
          setLoading(false);
        }
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };

  const handleThumbnailChange = (e) => {
    const thumbnailUrl = e.target.value;
    setThumbnailPreview(thumbnailUrl);
  };

  const handleSampleImageChange = (sampleIndex, imageIndex, e) => {
    const imageUrl = e.target.value;
    setSampleImagePreviews((prevPreviews) => {
      const updatedPreviews = [...prevPreviews];
      updatedPreviews[sampleIndex] = updatedPreviews[sampleIndex] || { images: [] };
      updatedPreviews[sampleIndex].images[imageIndex] = imageUrl;
      return updatedPreviews;
    });
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      width={"80vw"}
      style={{ top: 20 }}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="update"
          type="primary"
          loading={loading}
          onClick={handleUpdate}
        >
          Update
        </Button>,
      ]}
      maskClosable={false}
    >
      <Form form={form} layout="vertical" onFinish={handleUpdate}>
        <Title level={2}>Update Project</Title>
        <Divider style={{ backgroundColor: "#abaead" }} />
        <Form.Item
          name="projectName"
          label="Project Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter Project Name" />
        </Form.Item>
        <Form.Item
          name="projectType"
          label="Project Type"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter Project Type" />
        </Form.Item>
        <Form.Item
          name="projectDescription"
          label="Project Description"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter Project Description" />
        </Form.Item>
        <Form.Item
          name="thumbnail"
          label="Thumbnail URL"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Enter Thumbnail URL"
            onChange={handleThumbnailChange}
          />
        </Form.Item>
        {thumbnailPreview && (
          <img
            src={thumbnailPreview}
            alt="Thumbnail Preview"
            style={{ maxWidth: "100%", maxHeight: "150px", marginTop: "10px" }}
          />
        )}
        <Form.Item name="status" label="Status" rules={[{ required: true }]}>
          <Select placeholder="Select Status">
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
        </Form.Item>

        <Title style={{ lineHeight: "0.5", marginTop: "100px" }} level={3}>
          Add Samples Here...
        </Title>
        <Divider style={{ backgroundColor: "#abaead" }} />
        <Form.List name="samples">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key: sampleKey, name: sampleName, fieldKey: sampleFieldKey, ...sampleField }) => (
                <div key={sampleKey}>
                  <Title level={4}>Sample {sampleKey + 1}</Title>
                  <Form.Item
                    {...sampleField}
                    name={[sampleName, "type"]}
                    label="Sample Type"
                    fieldKey={[sampleFieldKey, "type"]}
                    rules={[{ required: true }]}
                  >
                    <Input
                      placeholder="Sample Type (eg: Home Page, Contact Page, etc.)"
                    />
                  </Form.Item>
                  <Form.Item
                    {...sampleField}
                    name={[sampleName, "description"]}
                    label="Sample Description"
                    fieldKey={[sampleFieldKey, "description"]}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Sample Description" />
                  </Form.Item>
                  <Form.List name={[sampleName, "images"]}>
                    {(subFields, { add: subAdd, remove: subRemove }) => (
                      <>
                        {subFields.map(({ key: imageKey, name: imageName, fieldKey: imageFieldKey, ...imageField }) => (
                          <div key={imageKey}>
                            <Form.Item
                              {...imageField}
                              name={[imageName, imageKey]}
                              fieldKey={[imageFieldKey, imageKey]}
                              rules={[{ required: true }]}
                              label="Image URL"
                            >
                              <Input
                                placeholder="Image URL"
                                onChange={(e) => handleSampleImageChange(sampleKey, imageKey, e)}
                              />
                            </Form.Item>
                            {sampleImagePreviews[sampleKey]?.images[imageKey] && (
                              <img
                                src={sampleImagePreviews[sampleKey].images[imageKey]}
                                alt={`Sample Image ${imageKey + 1} Preview`}
                                style={{ maxWidth: "100%", maxHeight: "150px", marginTop: "10px" }}
                              />
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </Form.List>
                  <Button
                    type="primary"
                    danger
                    style={{ marginLeft: "5px", marginTop:"10px" }}
                    onClick={() => remove(sampleKey)}
                  >
                    Remove Sample
                  </Button>
                  <Divider style={{ backgroundColor: "#abaead" }} />
                </div>
              ))}
              <Button
                style={{ marginTop: "20px", backgroundColor: "#cceb5c", color: "#000", border: "none" }}
                onClick={() => add({ type: "", description: "", images: [""] })}
              >
                Add Sample
              </Button>
            </>
          )}
        </Form.List>
      </Form>
    </Modal>
  );
};

export default EditProject;
