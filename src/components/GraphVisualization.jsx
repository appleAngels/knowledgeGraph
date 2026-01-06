import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GraphVisualization = ({ data, onNodeClick, selectedNodeId }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data || !data.nodes || !data.links) return;

    // Clear previous visualization
    d3.select(svgRef.current).selectAll('*').remove();

    // Set up SVG with responsive dimensions
    const container = svgRef.current.parentElement;
    const width = container.clientWidth;
    const height = container.clientHeight || 600;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('preserveAspectRatio', 'xMinYMin meet');

    // Create a group for all content that will be draggable
    const g = svg.append('g');

    // Filter only word nodes
    const wordNodes = data.nodes.filter(d => d.type === 'word');
    
    // Set sphere radius and center
    let sphereRadius = Math.min(width, height) * 0.4;
    let centerX = width / 2;
    let centerY = height / 2;

    // Initialize nodes with random positions on sphere
    wordNodes.forEach(node => {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      node.x = centerX + sphereRadius * Math.sin(phi) * Math.cos(theta);
      node.y = centerY + sphereRadius * Math.sin(phi) * Math.sin(theta);
      node.vx = 0;
      node.vy = 0;
    });

    // Create simulation with only word nodes
    const simulation = d3.forceSimulation(wordNodes)
      .force('link', d3.forceLink(data.links).id(d => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('collision', d3.forceCollide().radius(40))
      .force('sphere', () => {
        // Custom force to pull nodes to sphere surface
        wordNodes.forEach(node => {
          const dx = node.x - centerX;
          const dy = node.y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 0) {
            const force = (sphereRadius - distance) * 0.05;
            node.vx += (dx / distance) * force;
            node.vy += (dy / distance) * force;
          }
        });
      });

    // Create links
    const link = g.append('g')
      .selectAll('line')
      .data(data.links)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6);

    // Create nodes
    const node = g.append('g')
      .selectAll('g')
      .data(wordNodes)
      .enter().append('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))
      .on('click', (event, d) => {
        // Call original click handler
        onNodeClick(d);
      });

    // Add circles to nodes
    // Calculate directly linked nodes for selected node
    const linkedNodeIds = new Set();
    if (selectedNodeId) {
      data.links.forEach(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        if (sourceId === selectedNodeId) linkedNodeIds.add(targetId);
        if (targetId === selectedNodeId) linkedNodeIds.add(sourceId);
      });
    }
    
    node.append('circle')
      .attr('r', d => {
        if (d.id === selectedNodeId) return 30;
        if (linkedNodeIds.has(d.id)) return 20;
        return 15;
      })
      .attr('fill', d => {
        if (d.id === selectedNodeId) return '#ff6b6b';
        if (linkedNodeIds.has(d.id)) return '#4caf50';
        return '#4ecdc4';
      });

    // Add text to nodes
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .attr('fill', 'white')
      .text(d => d.label.length > 10 ? d.label.substring(0, 10) + '...' : d.label);

    // Update simulation
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Drag functions for nodes
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Implement canvas drag behavior
    let transform = d3.zoomIdentity;

    const zoom = d3.zoom()
      .scaleExtent([0.1, 4]) // Limit zoom scale
      .on('zoom', (event) => {
        transform = event.transform;
        g.attr('transform', transform);
      });

    svg.call(zoom);

    // Update simulation on resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 600;
      
      svg.attr('width', newWidth)
         .attr('height', newHeight)
         .attr('viewBox', [0, 0, newWidth, newHeight]);

      // Update sphere radius and center
      const newSphereRadius = Math.min(newWidth, newHeight) * 0.4;
      const newCenterX = newWidth / 2;
      const newCenterY = newHeight / 2;

      // Reinitialize nodes on new sphere
      wordNodes.forEach(node => {
        const dx = node.x - centerX;
        const dy = node.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 0) {
          node.x = newCenterX + (dx / distance) * newSphereRadius;
          node.y = newCenterY + (dy / distance) * newSphereRadius;
        }
      });

      // Update references
      sphereRadius = newSphereRadius;
      centerX = newCenterX;
      centerY = newCenterY;

      simulation.alpha(0.3).restart();
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, [data, onNodeClick, selectedNodeId]);

  return (
    <div className="graph-visualization">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default GraphVisualization;