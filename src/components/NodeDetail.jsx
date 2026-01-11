import React from 'react';
import { Card, Typography, Tag, Image, Space } from 'antd';

const { Title, Paragraph } = Typography;

const NodeDetail = ({ node }) => {
  if (!node) return null;

  return (
    <div className="node-detail">
      <div className="node-header">
        <Title level={4}>{node.label}</Title>
        {node.type === 'word' && (
          <>
            {/* 一级标签：Animal */}
            {['dog', 'cat', 'bird', 'turtle', 'bunny', 'mouse', 'goldfish', 'hamster', 'duck', 'pig', 'cow', 'chicken', 'goat', 'sheep', 'elephant', 'lion', 'fish', 'frog', 'zebra', 'ostrich', 'crocodile', 'giraffe', 'kid', 'puppy', 'kitten', 'mammal'].includes(node.label.toLowerCase()) && <Tag color="red">Animal</Tag>}
            {/* 二级标签：Farm Animal */}
            {['dog', 'duck', 'pig', 'cow', 'chicken', 'goat', 'sheep'].includes(node.label.toLowerCase()) && <Tag color="blue">Farm Animal</Tag>}
            {/* 二级标签：Pet */}
            {['dog', 'cat', 'bunny', 'mouse', 'goldfish', 'hamster'].includes(node.label.toLowerCase()) && <Tag color="blue">Pet</Tag>}
            {/* 二级标签：Plains Animal（Plains单词除外） */}
            {node.label.toLowerCase() !== 'plains' && ['elephant', 'zebra', 'ostrich', 'giraffe'].includes(node.label.toLowerCase()) && <Tag color="blue">Plains Animal</Tag>}
            {/* 二级标签：Baby Animal */}
            {['kid', 'puppy', 'kitten'].includes(node.label.toLowerCase()) && <Tag color="blue">Baby Animal</Tag>}
            {/* 二级标签：Mammal */}
            {['dog', 'cat', 'elephant', 'zebra', 'giraffe', 'pig', 'cow', 'goat', 'sheep', 'bunny', 'mouse', 'kid', 'puppy', 'kitten', 'hamster'].includes(node.label.toLowerCase()) && <Tag color="blue">Mammal</Tag>}
            {/* 非动物单词默认标签 */}
            {!['dog', 'cat', 'bird', 'turtle', 'bunny', 'mouse', 'goldfish', 'hamster', 'duck', 'pig', 'cow', 'chicken', 'goat', 'sheep', 'elephant', 'lion', 'fish', 'frog', 'zebra', 'ostrich', 'crocodile', 'giraffe', 'kid', 'puppy', 'kitten'].includes(node.label.toLowerCase()) && <Tag color="blue">Word</Tag>}
          </>
        )}
        {node.type === 'sentence' && <Tag color="green">Sentence</Tag>}
      </div>
      
      {node.type === 'word' && node.definition && (
        <Card size="small" style={{ marginBottom: 16 }}>
          <Paragraph>{node.definition}</Paragraph>
        </Card>
      )}
      
      <div className="node-image" style={{ marginBottom: 16 }}>
        <Image 
          src={node.image} 
          alt={node.label} 
          style={{ width: '100%', height: 'auto' }} 
          placeholder={true}
          fallback="https://via.placeholder.com/300x200?text=No+Image"
          onError={(e) => {
            console.error(`Failed to load image for ${node.label}: ${node.image}`);
            e.target.src = 'https://via.placeholder.com/300x200?text=Image+Failed';
          }}
        />
      </div>
      
      {node.type === 'word' && node.sentences && node.sentences.length > 0 && (
        <Card size="small" style={{ marginBottom: 16 }}>
          <Title level={5}>Sentences</Title>
          <Space orientation="vertical" style={{ width: '100%' }}>
            {node.sentences.map((sentence, index) => (
              <div key={index} style={{ borderBottom: '1px solid #f0f0f0', padding: 8 }}>
                <Paragraph>{sentence}</Paragraph>
              </div>
            ))}
          </Space>
        </Card>
      )}
    </div>
  );
};

export default NodeDetail;