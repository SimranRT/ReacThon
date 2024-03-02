import React, { useState } from 'react';

function Home() {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState('');
  // State to track whether the mission link is clicked
  const [showMissionContent, setShowMissionContent] = useState(false);

  // Function to handle the change in the selected option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // Reset the state for showing the mission content when the dropdown changes
    setShowMissionContent(false);
  };

  // Function to handle the click on the mission link
  const handleMissionLinkClick = () => {
    // Toggle the state for showing/hiding the mission content
    setShowMissionContent(!showMissionContent);
    // Reset the selected option when the link is clicked
    setSelectedOption('');
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px', border: '2px solid #4CAF50' }}>
      <header style={{ textAlign: 'center', border: '2px solid #4CAF50', padding: '10px' }}>
        <h1 style={{ color: 'red' }}>Welcome to our Heartcare !</h1>
        <img
          src="https://www.hcigroupglobal.com/wp-content/uploads/2022/11/health-icon-4-3.png"
          alt="Heartcare logo"
          width="50"
          height="50"
        />
        <h3>Global heartcare to fit your lifestyle</h3>
      </header>
      <main style={{ textAlign: 'center', border: '2px solid #4CAF50', padding: '10px', marginTop: '10px' }}>
        <img
          src="https://heartcareintl.org/wp-content/uploads/2020/12/slider1.jpg"
          alt="A smiling child after heart surgery"
          style={{ border: '2px solid #4CAF50', maxWidth: '100%' }}
        />
        <section id="mission" style={{ border: '2px solid #4CAF50', marginTop: '10px', padding: '10px' }}>
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            <a href="#mission" onClick={handleMissionLinkClick}> OUR MISSION</a>
          </p>
          {showMissionContent && (
            <p>
              Welcome to HeratCare, your dedicated online resource for prioritizing and safeguarding your heart health.
               At Heartcare, we are passionate about empowering individuals with the knowledge and 
              tools they need to nurture a strong and resilient cardiovascular system.Explore our user-friendly platform to discover a wealth of expert-reviewed articles, tips, and insights on heart care, 
              covering topics ranging from heart-healthy diets and exercise routines to stress management and preventive measures. 
              Our team of experienced healthcare professionals is dedicated to delivering accurate and up-to-date information to help you make informed decisions about your heart well-being
            </p>
          )}
          <p>
            <h3>
              Heart Care International saves the lives of needy children born with congenital heart defects.
            </h3>
          </p>
          
          {/* Dropdown for Selecting Options */}
          <label htmlFor="dropdownMenu">More info</label>
          <select id="dropdownMenu" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Click</option>
            <option value="BoardOfDirectors">Board of Directors</option>
            <option value="Financials">Financials</option>
          </select>
          {selectedOption === 'BoardOfDirectors' && (
            <p>
             The Board of Directors is the governing body for Heart Care International. Its responsibilities include financial planning and oversight, 
             and strategic planning to enable that Heart Care International develops a more active and daily presence in the countries we serve.
             1.Chris Combe
             2.Paul Ghaffari
             3.Caroline Merin....
            </p>
          )}

          {selectedOption === 'Financials' && (
            <p>
              Heart Care International strives to make use of its monetary resources in the most responsible and efficient manner. 
              Administrative expenses are kept to a minimum. Having an active and committed board of directors allows HCI to manage its entire operations with only two full-time staff members.
              Mission expenses are tightly controlled with strict rules for covered expenditures. With well planned missions HCI avoids last minute expensive purchases.
              HCI makes every effort to maintain a high ratio of in-kind donations to monetary expenditures. This enables HCI multiply the reach of every dollar spent.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
