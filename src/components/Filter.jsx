import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Filter = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://searchapi.brightquery.com/search', {
        params: {
          query: searchTerm
        }
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
