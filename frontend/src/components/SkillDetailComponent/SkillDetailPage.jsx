// SkillDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import detail from './SkillDetailPage.module.css';

const SkillDetailPage = () => {
  const { skillId } = useParams();
  const navigate = useNavigate();
  const [skillDetail, setSkillDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requestMessage, setRequestMessage] = useState('');

  useEffect(() => {
    const fetchSkillDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/skills/${skillId}`);
        setSkillDetail(response.data);
      } catch (err) {
        setError('Failed to load skill details');
      } finally {
        setLoading(false);
      }
    };
    fetchSkillDetail();
  }, [skillId]);

  const handleRequestExchange = async () => {
    try {
      await axios.post(`http://localhost:5000/api/skills/${skillId}/request-exchange`, {
        message: requestMessage,
      });
      alert('Exchange request sent successfully');
      navigate('/skills'); // Redirect after success
    } catch (err) {
      setError('Failed to send exchange request');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="skill-detail-page">
      <h1>Skill Detail</h1>

      {skillDetail && (
        <div className="skill-info">
          <h2>{skillDetail.skillName}</h2>
          <p><strong>Category:</strong> {skillDetail.category}</p>
          <p><strong>Description:</strong> {skillDetail.description}</p>
          
          {/* User Information */}
          <div className="user-info">
            <h3>Offered By</h3>
            <p><strong>Name:</strong> {skillDetail.user.name}</p>
            <p><strong>Contact:</strong> {skillDetail.user.contact}</p>
            {/* Add more user fields if necessary */}
          </div>

          {/* Request Exchange Form */}
          <div className="exchange-request">
            <h3>Request Skill Exchange</h3>
            <textarea
              placeholder="Enter your message for the exchange request..."
              value={requestMessage}
              onChange={(e) => setRequestMessage(e.target.value)}
              rows="4"
              className="request-message"
            ></textarea>
            <button onClick={handleRequestExchange} className="request-button">Request Exchange</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillDetailPage;
