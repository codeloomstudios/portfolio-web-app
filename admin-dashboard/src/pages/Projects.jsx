// Projects.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Modal, message, Input } from 'antd';
import { SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import EditProject from './EditProjectModal';

const Projects = () => {
  const [projectSamples, setProjectSamples] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchText, setSearchText] = useState('');

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: 'Project Type',
      dataIndex: 'projectType',
      key: 'projectType',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    // Fetch project samples from the API
    axios
      .get('http://localhost:5000/projectSample/getAllProjectSamples')
      .then((response) => {
        setProjectSamples(response.data);
        setFilteredProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project samples:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Update filtered projects when search text changes
    const filteredProjects = projectSamples.filter(
      (project) =>
        project.projectName.toLowerCase().includes(searchText.toLowerCase()) ||
        project.projectType.toLowerCase().includes(searchText.toLowerCase()) ||
        project.status.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProjects(filteredProjects);
  }, [searchText, projectSamples]);

  const handleEdit = (record) => {
    // Handle edit action
    setSelectedProject(record);
    setModalVisible(true);
  };

  const handleDelete = (projectId) => {
    // Handle delete action
    Modal.confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this project?',
      onOk: () => {
        // Make API call to delete project
        axios
          .delete(`http://localhost:5000/projectSample/deleteProjectSample/${projectId}`)
          .then((response) => {
            console.log('Project deleted successfully:', response.data);
            // Update state to reflect the deleted project
            setProjectSamples((prevSamples) =>
              prevSamples.filter((sample) => sample._id !== projectId)
            );
            message.success('Project deleted successfully');
          })
          .catch((error) => {
            console.error('Error deleting project:', error);
            message.error('Error deleting project');
          });
      },
    });
  };

  const handleUpdate = (updatedProject) => {
    // Update the local state with the edited project
    setProjectSamples((prevSamples) =>
      prevSamples.map((sample) =>
        sample._id === updatedProject._id ? { ...sample, ...updatedProject } : sample
      )
    );
    setModalVisible(false); // Close the modal after successful update
  };

  return (
    <div>
      <Input
        placeholder="Search projects"
        prefix={<SearchOutlined />}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <Table
        dataSource={filteredProjects}
        columns={columns}
        loading={loading}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: true }}
      />
      <EditProject
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        project={selectedProject}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default Projects;
