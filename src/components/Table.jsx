import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterableTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const filterData = (term) => {
    const filtered = data.filter(
      (item) =>
        item.company.toLowerCase().includes(term.toLowerCase()) ||
        item.status.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://searchapi.brightquery.com/search");
      setData(response.data);
      setFilteredData(response.data);
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
        onChange={(e) => {
          setSearchTerm(e.target.value);
          filterData(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Status</th>
            <th>Revenue</th>
            <th>Head Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.company}</td>
              <td>{item.status}</td>
              <td>{item.revenue}</td>
              <td>{item.headCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterableTable;
