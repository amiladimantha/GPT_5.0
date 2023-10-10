import React from "react";
import { Modal, Form, Input, Button } from "antd";
import './signUp.css';

const SignUpForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    // Handle form submission logic here
  };

  return (
    <Modal
      title="Sign Up"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" className="submit_button" type="primary" onClick={handleOk}>
          Sign Up
        </Button>,
      ]}
      className="registration-form"
    >
        <br />
      <Form form={form} name="registrationForm">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item
          name="re-password"
          label="Re-Password"
          rules={[{ required: true, message: "Please re-enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUpForm;
