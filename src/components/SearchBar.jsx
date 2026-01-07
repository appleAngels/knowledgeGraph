import React, { useState, useEffect, useCallback } from 'react';
import { Input, List, Typography, Empty } from 'antd';

const { Search } = Input;
const { Text } = Typography;

const SearchBar = ({ nodes, onNodeSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // 节流函数
  const throttle = (func, delay) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, delay);
      }
    }
  };

  // 节流处理的搜索函数
  const throttledSearch = useCallback(
    throttle((term) => {
      if (term.trim() === '') {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      const results = nodes
        .filter(node => node.type === 'word')
        .filter(node => 
          node.label.toLowerCase().includes(term.toLowerCase())
        );

      setSearchResults(results);
      setIsSearching(false);
    }, 300),
    [nodes]
  );

  // 处理搜索输入变化
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setIsSearching(true);
    throttledSearch(term);
  };

  // 处理搜索结果点击
  const handleResultClick = (node) => {
    onNodeSelect(node);
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className="search-bar" style={{ marginBottom: 16 }}>
      <Search
        placeholder="Search words in the graph"
        value={searchTerm}
        onChange={handleSearchChange}
        allowClear
        style={{ width: '100%' }}
      />
      
      {searchResults.length > 0 && (
        <div 
          className="search-results" 
          style={{
            marginTop: 8,
            border: '1px solid #f0f0f0',
            borderRadius: 4,
            maxHeight: 200,
            overflowY: 'auto',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            zIndex: 1000
          }}
        >
          <List
            bordered
            dataSource={searchResults}
            renderItem={node => (
              <List.Item 
                onClick={() => handleResultClick(node)}
                style={{ cursor: 'pointer', padding: '8px 16px' }}
                hoverable
              >
                <Text strong>{node.label}</Text>
                {node.definition && (
                  <Text type="secondary" style={{ display: 'block', fontSize: 12, marginTop: 4 }}>
                    {node.definition.length > 50 ? `${node.definition.substring(0, 50)}...` : node.definition}
                  </Text>
                )}
              </List.Item>
            )}
          />
        </div>
      )}
      
      {isSearching && searchTerm.trim() !== '' && (
        <div style={{ marginTop: 8, textAlign: 'center' }}>
          <Text type="secondary">Searching...</Text>
        </div>
      )}
      
      {!isSearching && searchTerm.trim() !== '' && searchResults.length === 0 && (
        <div style={{ marginTop: 8 }}>
          <Empty description="No results found" />
        </div>
      )}
    </div>
  );
};

export default SearchBar;