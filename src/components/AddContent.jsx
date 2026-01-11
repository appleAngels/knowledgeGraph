import React from 'react';
import { Form, Input, Select, Button, Typography } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

const AddContent = ({ onAddContent }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const newContent = {
      type: values.contentType,
      label: values.label,
      ...(values.contentType === 'word' && { definition: values.definition }),
      // Generate default image if none provided
      image: values.image || `https://neeko-copilot.bytedance.net/api/text2image?prompt=${encodeURIComponent(values.label)}+simple+style+friendly&image_size=square_hd`,
      relatedNodeId: values.relatedNodeId ? parseInt(values.relatedNodeId) : null
    };

    onAddContent(newContent);
    form.resetFields();
  };

  return (
    <div className="add-content">
      <Title level={4}>Add New Content</Title>
      <Form 
        form={form} 
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item 
          name="contentType" 
          label="Content Type"
          rules={[{ required: true, message: 'Please select content type' }]}
          initialValue="word"
        >
          <Select>
            <Select.Option value="word">Word</Select.Option>
            <Select.Option value="sentence">Sentence</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item 
          name="label" 
          label="Label"
          rules={[{ required: true, message: 'Please enter label' }]}
        >
          <Input placeholder="Enter word or sentence" />
        </Form.Item>

        <Form.Item 
          name="definition" 
          label="Definition"
          rules={[
            {
              required: ({ contentType }) => contentType === 'word',
              message: 'Please enter definition for word'
            }
          ]}
          dependencies={['contentType']}
        >
          <TextArea rows={3} placeholder="Enter definition" />
        </Form.Item>

        <Form.Item 
          name="image" 
          label="Image URL"
        >
          <Input placeholder="Enter image URL (optional)" />
        </Form.Item>

        <Form.Item 
          name="relatedNodeId" 
          label="Related Node ID"
        >
          <Input type="number" placeholder="Enter related node ID (optional)" />
        </Form.Item>



        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add Content
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddContent;