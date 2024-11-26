import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swap from './SwapRequestsPage.module.css';

const SwapRequestsPage = () => {
  const [swapRequests, setSwapRequests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSwapRequests = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem('user'));

        if (!user || !user.id) {
          throw new Error('User not found in session storage');
        }

        const response = await axios.get(
          `http://localhost:5000/api/requests/${user.id}`
        );
        setSwapRequests(response.data);
      } catch (err) {
        setError(err.message || 'Failed to load swap requests');
      } finally {
        setLoading(false);
      }
    };

    fetchSwapRequests();
  }, []);

  const handleAccept = async (requestId) => {
    const confirmAction = window.confirm('Are you sure you want to accept this request?');
    if (confirmAction) {
      try {
        await axios.put(`http://localhost:5000/api/requests/${requestId}/accept`);
        alert('Request accepted successfully!');
        setSwapRequests((prev) =>
          prev.map((req) =>
            req._id === requestId ? { ...req, status: 'accepted' } : req
          )
        );
      } catch (err) {
        alert('Failed to accept the request. Please try again.');
      }
    }
  };

  const handleDecline = async (requestId) => {
    const confirmAction = window.confirm('Are you sure you want to decline this request?');
    if (confirmAction) {
      try {
        await axios.put(`http://localhost:5000/api/requests/${requestId}/reject`);
        alert('Request declined successfully!');
        setSwapRequests((prev) =>
          prev.map((req) =>
            req._id === requestId ? { ...req, status: 'rejected' } : req
          )
        );
      } catch (err) {
        alert('Failed to decline the request. Please try again.');
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={swap.page}>
      <h1 className={swap.heading}>Swap Requests</h1>
      {swapRequests.length === 0 ? (
        <p className={swap.noRequests}>No swap requests found</p>
      ) : (
        <table className={swap.table}>
          <thead>
            <tr>
              <th>Requester</th>
              <th>Receiver</th>
              <th>Skill Offered</th>
              <th>Skill Requested</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {swapRequests.map((request) => (
              <tr key={request._id}>
                <td>{request.requester.name}</td>
                <td>{request.receiver.name}</td>
                <td>{request.skillOffered.name}</td>
                <td>{request.skillRequested.name}</td>
                <td>{request.status}</td>
                <td>
                  {request.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleAccept(request._id)}
                        className={swap.acceptButton}
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDecline(request._id)}
                        className={swap.declineButton}
                      >
                        Decline
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SwapRequestsPage;
