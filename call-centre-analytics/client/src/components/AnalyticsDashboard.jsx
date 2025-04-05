import React, { useEffect, useState } from 'react';
import { getRealTimeData } from '../../services/analyticsService';

const RealTimeMonitor = () => {
  const [realTimeData, setRealTimeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRealTimeData();
      setRealTimeData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="real-time-monitor">
      <h2>Real-Time Monitoring</h2>
      <ul>
        {realTimeData.map((call) => (
          <li key={call.id}>
            <strong>Agent:</strong> {call.agent} | 
            <strong>Customer:</strong> {call.customer} | 
            <strong>Status:</strong> {call.status} | 
            <strong>Sentiment:</strong> {call.sentiment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeMonitor;
