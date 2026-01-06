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

    // Create simulation
    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(50));

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
      .data(data.nodes)
      .enter().append('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))
      .on('click', (event, d) => {
        // Animate selected node to center and enlarge
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Animate node position and size
        d3.select(event.currentTarget)
          .transition()
          .duration(500)
          .attr('transform', `translate(${centerX},${centerY})`)
          .select('circle')
          .attr('r', 30)
          .attr('fill', '#ff6b6b');
        
        // Animate other nodes to be smaller and fade
        d3.selectAll('.node')
          .filter(n => n.id !== d.id)
          .transition()
          .duration(500)
          .select('circle')
          .attr('r', 15)
          .attr('fill', n => n.type === 'word' ? '#4ecdc4' : '#45b7d1');
        
        // Call original click handler
        onNodeClick(d);
      });

    // Add circles to nodes
    node.append('circle')
      .attr('r', 20)
      .attr('fill', d => {
        if (d.id === selectedNodeId) return '#ff6b6b';
        return d.type === 'word' ? '#4ecdc4' : '#45b7d1';
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

      simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2))
                .alpha(0.3).restart();
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