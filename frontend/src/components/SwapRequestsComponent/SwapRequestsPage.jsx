import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation
import styles from './SwapRequestsPage.module.css'; // Importing CSS Module

const SwapRequestsPage = () => {
  const [swapRequests, setSwapRequests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const itemsPerPage = 10; // Set number of items per page
  const navigate = useNavigate(); // Hook for navigation
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

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle accept action
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

  // Handle decline action
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

  const handleGoBack = () => {
    navigate('/'); // Navigate to the login page
  };

  // Get current page data (sliced requests)
  const indexOfLastRequest = currentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = swapRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  // Calculate total pages
  const totalPages = Math.ceil(swapRequests.length / itemsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
       <button className={styles.go_back} onClick={handleGoBack}>← Go Back</button>
      <h1 className={styles.heading}>Swap Requests</h1>
      {swapRequests.length === 0 ? (
        <p className={styles.noRequests}>No swap requests found</p>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.swapTable}>
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
              {currentRequests.map((request) => (
                <tr key={request._id}>
                  <td>{request.requester.name}</td>
                  <td>{request.receiver.name}</td>
                  <td>{request.skillOffered.name}</td>
                  <td>{request.skillRequested.name}</td>
                  <td>{request.status}</td>
                  <td>
                    {request.status === 'pending' && (
                      <>
                        {request.requester._id === JSON.parse(sessionStorage.getItem('user')).id ? (
                          <span className={styles.waitingMsg}>Waiting for the response from the user you requested</span>
                        ) : (
                          <>
                            <button
                              onClick={() => handleAccept(request._id)}
                              className={styles.acceptBtn}
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleDecline(request._id)}
                              className={styles.declineBtn}
                            >
                              Decline
                            </button>
                          </>
                        )}
                      </>
                    )}
                    {request.status === 'accepted' && (
                      <span className={styles.responseMsg}>User accepted your swapping request</span>
                    )}
                    {request.status === 'rejected' && (
                      <span className={styles.responseMsgDeclined}>User declined your swapping request</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className={styles.pagination}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.pageBtn}
            >
              Previous
            </button>
            <span className={styles.pageNumber}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.pageBtn}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwapRequestsPage;
