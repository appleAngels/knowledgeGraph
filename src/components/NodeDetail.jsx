import React from 'react';
import { getRelatedNodes, getRelationship } from '../data';
import { Card, Typography, Tag, Image, List } from 'antd';

const { Title, Paragraph } = Typography;

const NodeDetail = ({ node, onRelatedNodeClick }) => {
  if (!node) return null;

  const relatedNodes = getRelatedNodes(node.id);

  return (
    <div className="node-detail">
      <div className="node-header">
        <Title level={4}>{node.label}</Title>
        {node.type === 'word' && <Tag color="blue">Word</Tag>}
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
      
      {relatedNodes.length > 0 && (
        <div className="related-nodes">
          <Title level={5}>Related Content</Title>
          <List
            size="small"
            dataSource={relatedNodes}
            renderItem={relatedNode => {
              const relationship = getRelationship(node.id, relatedNode.id);
              return (
                <List.Item 
                  style={{ 
                    cursor: 'pointer', 
                    border: '1px solid #f0f0f0', 
                    borderRadius: 4, 
                    marginBottom: 8,
                    padding: 12
                  }}
                  onClick={() => onRelatedNodeClick(relatedNode)}
                >
                  <List.Item.Meta
                    title={relatedNode.label}
                    description={relationship}
                  />
                </List.Item>
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default NodeDetail;