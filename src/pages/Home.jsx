import React, { useState } from 'react';
import Chat from './Chat'; // Import the Chat component

const Home = () => {
  const [showChat, setShowChat] = useState(false); // State to toggle chat visibility

  const handleGetStarted = () => {
    setShowChat(true); // Show the chatbox when "Get Started" is clicked
  };

  return (
    <div>
      {!showChat ? (
        <>
          {/* Hero Section */}
          <div className="hero-section">
            <h1>Connecting EXTC Alumni and Students</h1>
            <p>Empowering the future with one-to-one mentorship and guidance.</p>
            <button
              onClick={handleGetStarted}
              className="btn btn-success btn-lg"
            >
              Get Started
            </button>
          </div>

          {/* Features Section */}
          <div className="container my-5" id="features">
            <h2 className="text-center mb-4">Features</h2>
            <div className="row">
              <div className="col-md-4 d-flex align-items-stretch">
                <div className="card feature-card shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title">Mentor Directory</h5>
                    <p className="card-text">
                      Find and connect with experienced alumni based on expertise
                      and profession.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-stretch">
                <div className="card feature-card shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title">Interactive Chat</h5>
                    <p className="card-text">
                      Real-time communication between mentors and mentees.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-stretch">
                <div className="card feature-card shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title">Secure Platform</h5>
                    <p className="card-text">
                      Ensuring privacy and data security for all users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Chat /> // Render the Chat component when the button is clicked
      )}
    </div>
  );
};

export default Home;
n
