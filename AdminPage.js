import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('/api/auth/admin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(data);
      } catch (error) {
        alert('Access Denied: You are not an Admin');
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default AdminPage;
