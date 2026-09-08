import { useState } from "react";
import {
  FaShieldAlt,
  FaTachometerAlt,
  FaExclamationTriangle,
  FaFileAlt,
  FaEnvelope,
  FaHistory,
  FaCog,
  FaCircle,
} from "react-icons/fa";

function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleNavClick = (tab, targetId) => {
    setActiveTab(tab);
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="sidebar">
      <div>

        {/* ================= LOGO ================= */}

        <div className="logo">
          <h2>
            <FaShieldAlt
              style={{
                marginRight: "10px",
                color: "#22d3ee",
              }}
            />
            SecureOps AI
          </h2>

          <p>Enterprise Security Operations Center</p>
        </div>

        {/* ================= MENU ================= */}

        <nav>
          <div
            className={`menu-item ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => handleNavClick("dashboard", "dashboard-metrics-section")}
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </div>

          <div
            className={`menu-item ${activeTab === "incidents" ? "active" : ""}`}
            onClick={() => handleNavClick("incidents", "incident-form-section")}
          >
            <FaExclamationTriangle />
            <span>New Incident</span>
          </div>

          <div
            className={`menu-item ${activeTab === "reports" ? "active" : ""}`}
            onClick={() => handleNavClick("reports", "incident-report-section")}
          >
            <FaFileAlt />
            <span>Incident Report</span>
          </div>

          <div
            className={`menu-item ${activeTab === "email" ? "active" : ""}`}
            onClick={() => handleNavClick("email", "incident-report-section")}
          >
            <FaEnvelope />
            <span>Broadcast Alert</span>
          </div>

          <div
            className={`menu-item ${activeTab === "audit" ? "active" : ""}`}
            onClick={() => handleNavClick("audit", "incident-report-section")}
          >
            <FaHistory />
            <span>Timeline Logs</span>
          </div>

          <div
            className={`menu-item ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => handleNavClick("settings", null)}
          >
            <FaCog />
            <span>Settings</span>
          </div>
        </nav>

        {/* ================= LIVE SECURITY ================= */}

        <div className="sidebar-status">

          <h4>Live Security</h4>

          <div className="status-item">
            <span>🟢 AI Engine</span>
            <strong>Online</strong>
          </div>

          <div className="status-item">
            <span>🟢 Threat Feed</span>
            <strong>Connected</strong>
          </div>

          <div className="status-item">
            <span>🟢 Mail Gateway</span>
            <strong>Healthy</strong>
          </div>

          <div className="status-item">
            <span>🟡 Open Incidents</span>
            <strong>24</strong>
          </div>

          <div className="status-item">
            <span>🔴 Critical Alerts</span>
            <strong>6</strong>
          </div>

        </div>
                {/* ================= TODAY'S STATS ================= */}

        <div className="sidebar-stats">

          <div className="mini-card">
            <h5>98.7%</h5>
            <span>AI Accuracy</span>
          </div>

          <div className="mini-card">
            <h5>16</h5>
            <span>Reports</span>
          </div>

          <div className="mini-card">
            <h5>42</h5>
            <span>Threats</span>
          </div>

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <div className="sidebar-footer">

        <h4>SecureOps AI</h4>

        <p className="online">
          <FaCircle
            style={{
              fontSize: "10px",
              marginRight: "8px",
            }}
          />
          System Operational
        </p>

        <small
          style={{
            display: "block",
            marginTop: "14px",
            color: "#94a3b8",
            lineHeight: "1.8",
          }}
        >
          Version 1.0.0
          <br />
          Enterprise Edition
        </small>

      </div>
          </aside>
  );
}

export default Sidebar;