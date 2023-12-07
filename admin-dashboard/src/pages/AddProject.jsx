// AddProject.js
import React, { useState } from "react";
import { Form, Input, Button, Typography, Divider, message, Select, Modal } from "antd";
import axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const AddProject = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [sampleImagePreviews, setSampleImagePreviews] = useState([]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:5000/projectSample/addProjectSample",
        values
      );
      message.success("Project created successfully");
      form.resetFields();
      setModalVisible(false);
    } catch (error) {
      console.error("Error creating project:", error);
      message.error("Error creating project");
    } finally {
      setLoading(false);
    }
  };

  const handleThumbnailChange = (e) => {
    const thumbnailUrl = e.target.value;
    setThumbnailPreview(thumbnailUrl);
  };

  const handleSampleImageChange = (index, e) => {
    const imageUrl = e.target.value;
    const previews = [...sampleImagePreviews];
    previews[index] = imageUrl;
    setSampleImagePreviews(previews);
  };

  const [form] = Form.useForm();

  return (
    <>
      <Title level={2} style={{ float: "left", marginLeft: "50px" }}>
        Add Projects
      </Title>
      <Divider style={{ backgroundColor: "#abaead" }} />
      <Button type="primary" size="large" onClick={() => setModalVisible(true)}>
        Add Project
      </Button>
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={"80vw"}
        style={{ top: 20 }}
        maskClosable={false}
      >
        <Form form={form} onFinish={handleSubmit}>
          <Title level={2}>Add Project</Title>
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
            <TextArea rows={5} placeholder="Enter Project Description" />
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
                {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                  <div key={key}>
                    <Title level={4}>Sample {index + 1}</Title>
                    <Form.Item
                      {...restField}
                      name={[name, "type"]}
                      label="Sample Type"
                      fieldKey={[fieldKey, "type"]}
                      rules={[{ required: true }]}
                    >
                      <Input
                        placeholder="Sample Type (eg: Home Page, Contact Page, etc.)"
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "description"]}
                      label="Sample Description"
                      fieldKey={[fieldKey, "description"]}
                      rules={[{ required: true }]}
                    >
                      <TextArea rows={5} placeholder="Sample Description" />
                    </Form.Item>
                    <Form.List name={[name, "images"]}>
                      {(subFields, { add: subAdd, remove: subRemove }) => (
                        <>
                          {subFields.map(
                            ({ key: subKey, name: subName, fieldKey: subFieldKey, ...subRestField }) => (
                              <div key={subKey}>
                                <Title level={5}>Image {subKey + 1}</Title>
                                <Form.Item
                                  {...subRestField}
                                  name={[subName, subKey]}
                                  fieldKey={[subFieldKey, subKey]}
                                  rules={[{ required: true }]}
                                  label="Image URL"
                                >
                                  <Input
                                    placeholder="Image URL"
                                    onChange={(e) => handleSampleImageChange(index, e)}
                                  />
                                </Form.Item>
                                {sampleImagePreviews[index] && (
                                  <img
                                    src={sampleImagePreviews[index]}
                                    alt={`Sample Image ${index + 1} Preview`}
                                    style={{ maxWidth: "100%", maxHeight: "150px", marginTop: "10px" }}
                                  />
                                )}
                              </div>
                            )
                          )}
                        </>
                      )}
                    </Form.List>
                    <Button
                      type="primary"
                      danger
                      style={{ marginLeft: "5px", marginTop:"10px" }}
                      onClick={() => remove(name)}
                    >
                      Remove Sample
                    </Button>
                    <Divider style={{ backgroundColor: "#abaead" }} />
                  </div>
                ))}
                <Button
                  style={{ marginTop: "20px", backgroundColor: "#cceb5c", color: "#000", border: "none" }}
                  onClick={() =>
                    add({ type: "", description: "", images: [""] })
                  }
                >
                  Add Sample
                </Button>
              </>
            )}
          </Form.List>

          <Form.Item style={{ display: "flex", justifyContent: "right" }}>
            <Button
              key="cancel"
              style={{ marginRight: "5px" }}
              onClick={() => setModalVisible(false)}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProject;
