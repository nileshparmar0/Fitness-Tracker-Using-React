import React, { useEffect, useState } from 'react';

function WearableSync() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wearable-sync">
      <h2>Wearable Data</h2>
      {data.map((item, index) => (
        <div key={index}>
          <p>
            {item.name}: {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default WearableSync;
