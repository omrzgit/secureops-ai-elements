import { useState, useEffect } from "react";
import { FaBell, FaUserShield, FaWifi, FaClock } from "react-icons/fa";

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [notifCount, setNotifCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="navbar">
      <div className="nav-title-group">
        <h1>Security Operations Center</h1>
        <p>Monitor, Analyze & Communicate Security Incidents</p>
      </div>

      <div className="nav-right">
        <div className="nav-time-badge">
          <FaClock />
          <span>{time}</span>
        </div>

        <div className="nav-live-pill">
          <FaWifi className="pulse-icon" />
          <span>SOC FEED: LIVE</span>
        </div>

        <div
          className="nav-icon-badge-wrapper"
          onClick={() => setNotifCount(0)}
          title={notifCount > 0 ? `${notifCount} Unacknowledged Alerts` : "All alerts caught up"}
        >
          <FaBell className="nav-icon" />
          {notifCount > 0 && <span className="badge-bubble">{notifCount}</span>}
        </div>

        <div className="profile">
          <FaUserShield className="profile-icon" />
          <div>
            <h4>Lead SecOps Analyst</h4>
            <span className="online-indicator">● Active Session</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;