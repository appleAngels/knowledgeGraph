import React, { useState, useEffect, useRef } from 'react';
import GraphVisualization from './components/GraphVisualization';
import NodeDetail from './components/NodeDetail';
import AddContent from './components/AddContent';
import { knowledgeGraphData, getNodeById } from './data';
import './App.css';
import 'antd/dist/reset.css';
import { Button, Card, Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [graphData, setGraphData] = useState(knowledgeGraphData);
  const [showAddForm, setShowAddForm] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const appRef = useRef(null);

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleAddContent = (newContent) => {
    const newId = Math.max(...graphData.nodes.map(node => node.id)) + 1;
    
    const newNode = {
      id: newId,
      type: newContent.type,
      label: newContent.label,
      ...(newContent.definition && { definition: newContent.definition }),
      ...(newContent.image && { image: newContent.image })
    };

    const newNodes = [...graphData.nodes, newNode];
    let newLinks = [...graphData.links];

    if (newContent.relatedNodeId) {
      newLinks.push({
        source: newId,
        target: newContent.relatedNodeId,
        relationship: newContent.relationship || 'related to'
      });
    }

    setGraphData({ nodes: newNodes, links: newLinks });
    setSelectedNode(newNode);
  };

  // Calculate dynamic height for sections
  const calculateSectionHeight = () => {
    // Get app container height
    const appHeight = windowSize.height;
    // Subtract padding and header/footer space
    const sectionHeight = appHeight - 120; // Adjust based on actual layout
    return Math.max(sectionHeight, 500); // Minimum height
  };

  return (
    <Layout className="app" ref={appRef}>
      <Content className="app-main">
        <Card 
          className="graph-section" 
          title="Knowledge Graph"
          extra={
            <Button 
              type="primary" 
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Hide Add Form' : 'Add New Content'}
            </Button>
          }
        >
          <GraphVisualization 
            data={graphData} 
            onNodeClick={handleNodeClick}
            selectedNodeId={selectedNode?.id}
          />
        </Card>
        
        <Card className="detail-section">
          {showAddForm ? (
            <AddContent onAddContent={handleAddContent} />
          ) : selectedNode ? (
            <NodeDetail 
              node={selectedNode} 
            />
          ) : (
            <div className="empty-state">
              <Title level={3}>Select a Node</Title>
              <Paragraph>Click on any node in the graph to view its details</Paragraph>
            </div>
          )}
        </Card>
      </Content>
    </Layout>
  );
}

export default App;
