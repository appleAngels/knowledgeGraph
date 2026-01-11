import { knowledgeGraphData } from './src/data.js';

// Check image properties
console.log('Checking image properties:');
knowledgeGraphData.nodes.forEach(node => {
  if (!node.image) {
    console.log(`- ID: ${node.id}, Label: ${node.label}, Type: ${node.type} - NO IMAGE PROPERTY`);
  } else if (node.image.trim() === '') {
    console.log(`- ID: ${node.id}, Label: ${node.label}, Type: ${node.type} - EMPTY IMAGE URL`);
  } else if (!node.image.startsWith('https://')) {
    console.log(`- ID: ${node.id}, Label: ${node.label}, Type: ${node.type} - INVALID IMAGE URL: ${node.image}`);
  }
});

// Count total nodes
console.log(`\nTotal nodes: ${knowledgeGraphData.nodes.length}`);

