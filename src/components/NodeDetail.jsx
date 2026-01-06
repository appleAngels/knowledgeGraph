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
            {['dog', 'cat', 'bird', 'turtle', 'bunny', 'mouse', 'goldfish', 'hamster', 'duck', 'pig', 'cow', 'chicken', 'goat', 'sheep', 'elephant', 'lion', 'fish', 'frog'].includes(node.label.toLowerCase()) && <Tag color="red">Animal</Tag>}
            {/* 二级标签：Farm Animal */}
            {['dog', 'duck', 'pig', 'cow', 'chicken', 'goat', 'sheep'].includes(node.label.toLowerCase()) && <Tag color="blue">Farm Animal</Tag>}
            {/* 二级标签：Pets */}
            {['dog', 'cat', 'bunny', 'mouse', 'goldfish', 'hamster'].includes(node.label.toLowerCase()) && <Tag color="blue">Pets</Tag>}
            {/* 非动物单词默认标签 */}
            {!['dog', 'cat', 'bird', 'turtle', 'bunny', 'mouse', 'goldfish', 'hamster', 'duck', 'pig', 'cow', 'chicken', 'goat', 'sheep', 'elephant', 'lion', 'fish', 'frog'].includes(node.label.toLowerCase()) && <Tag color="blue">Word</Tag>}
          </>
        )}
        {node.type === 'sentence' && <Tag color="green">Sentence</Tag>}
      </div>
      
      {node.type === 'word' && node.definition && (
        <Card size="small" style={{ marginBottom: 16 }}>
          <Paragraph>{node.definition}</Paragraph>
        </Card>
      )}
      
      {node.image && (
        <div className="node-image" style={{ marginBottom: 16 }}>
          <Image 
            src={node.image} 
            alt={node.label} 
            style={{ width: '100%' }} 
            placeholder={true}
          />
        </div>
      )}
      
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