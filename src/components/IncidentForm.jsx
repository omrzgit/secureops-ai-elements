import { useState } from "react";
import {
  FaBuilding,
  FaUser,
  FaEnvelope,
  FaExclamationTriangle,
  FaServer,
  FaCalendarAlt,
  FaFileAlt,
  FaRobot,
  FaMagic,
  FaUndo,
} from "react-icons/fa";

const SAMPLE_INCIDENTS = [
  {
    company: "Apex Financial Systems",
    reporter: "Sarah Vance (Senior SOC Lead)",
    email: "security-ops@apexfinancial.com",
    incidentType: "Ransomware",
    severity: "Critical",
    system: "Primary Oracle DB & Active Directory Domain Controller",
    date: new Date().toISOString().slice(0, 16),
    description:
      "At 03:15 UTC, automated EDR triggered alerts for suspicious PowerShell executions followed by bulk file encryption using BlackCat/ALPHV variant extensions. Primary database volume unmounted and volume shadow copies deleted. Containment isolation initiated on VLAN 4.",
  },
  {
    company: "CloudVanguard Logistics",
    reporter: "David Miller (Incident Analyst)",
    email: "soc-triage@cloudvanguard.io",
    incidentType: "Phishing Attack",
    severity: "High",
    system: "Corporate Office 365 Tenant & Finance Mailboxes",
    date: new Date().toISOString().slice(0, 16),
    description:
      "Spear-phishing email masquerading as Microsoft Payroll Notification bypassed initial spam filters. Three accounts entered credentials into an adversary-in-the-middle (AitM) proxy page, bypassing MFA session cookies. Malicious OAuth app registration detected.",
  },
  {
    company: "HealthCore Medical Hub",
    reporter: "Elena Rostova (SecOps Specialist)",
    email: "infosec@healthcore.org",
    incidentType: "Data Breach",
    severity: "Critical",
    system: "Electronic Health Record (EHR) S3 Backup Repository",
    date: new Date().toISOString().slice(0, 16),
    description:
      "Anomalous outbound transfer of 48 GB encrypted archives detected originating from an internal staging IP to an unknown external endpoint. AWS CloudTrail logs indicate compromised IAM access key with elevated S3 read permissions.",
  },
];

function IncidentForm({ onGenerate }) {
  const getInitialState = () => ({
    company: "",
    reporter: "",
    email: "",
    incidentType: "",
    severity: "",
    system: "",
    date: new Date().toISOString().slice(0, 16),
    description: "",
  });

  const [formData, setFormData] = useState(getInitialState);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  const handleLoadSample = () => {
    const randomSample =
      SAMPLE_INCIDENTS[Math.floor(Math.random() * SAMPLE_INCIDENTS.length)];
    setFormData({
      ...randomSample,
      date: new Date().toISOString().slice(0, 16),
    });
  };

  const handleReset = () => {
    setFormData(getInitialState());
  };

  return (
    <div className="incident-form glass-card" id="incident-form-section">
      <div className="form-header-bar">
        <div>
          <h2>Generate Incident Report</h2>
          <p className="form-subtitle">
            Provide incident parameters or load real-world sample telemetry.
          </p>
        </div>
        <button
          type="button"
          onClick={handleLoadSample}
          className="sample-btn"
          title="Autofill form with realistic SOC incident telemetry"
        >
          <FaMagic /> Load Sample Data
        </button>
      </div>

      <form onSubmit={handleGenerate}>
        {/* ================= COMPANY ================= */}
        <div className="input-group">
          <label htmlFor="company">
            <FaBuilding /> Company Name
          </label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="e.g. Apex Financial Systems"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        {/* ================= REPORTER ================= */}
        <div className="input-group">
          <label htmlFor="reporter">
            <FaUser /> Reporter Name
          </label>
          <input
            id="reporter"
            type="text"
            name="reporter"
            placeholder="e.g. Sarah Vance (SOC Lead)"
            value={formData.reporter}
            onChange={handleChange}
            required
          />
        </div>

        {/* ================= EMAIL ================= */}
        <div className="input-group">
          <label htmlFor="email">
            <FaEnvelope /> Reporter Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="security-ops@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* ================= ROW: INCIDENT TYPE & SEVERITY ================= */}
        <div className="input-row-duo">
          <div className="input-group">
            <label htmlFor="incidentType">
              <FaExclamationTriangle /> Incident Type
            </label>
            <select
              id="incidentType"
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              required
            >
              <option value="">Select Incident</option>
              <option value="Phishing Attack">Phishing Attack</option>
              <option value="Ransomware">Ransomware</option>
              <option value="Malware Infection">Malware Infection</option>
              <option value="Data Breach">Data Breach</option>
              <option value="DDoS Attack">DDoS Attack</option>
              <option value="Insider Threat">Insider Threat</option>
              <option value="Unauthorized Access">Unauthorized Access</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="severity">Severity Level</label>
            <select
              id="severity"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              required
            >
              <option value="">Select Severity</option>
              <option value="Critical">🔴 Critical (P1)</option>
              <option value="High">🟠 High (P2)</option>
              <option value="Medium">🟡 Medium (P3)</option>
              <option value="Low">🟢 Low (P4)</option>
            </select>
          </div>
        </div>

        {/* ================= AFFECTED SYSTEM ================= */}
        <div className="input-group">
          <label htmlFor="system">
            <FaServer /> Affected System / Host / Cloud Resource
          </label>
          <input
            id="system"
            type="text"
            name="system"
            placeholder="e.g. Finance Server Cluster, Domain Controller, AWS S3"
            value={formData.system}
            onChange={handleChange}
            required
          />
        </div>

        {/* ================= INCIDENT DATE ================= */}
        <div className="input-group">
          <label htmlFor="date">
            <FaCalendarAlt /> Incident Timestamp (UTC/Local)
          </label>
          <input
            id="date"
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="input-group">
          <label htmlFor="description">
            <FaFileAlt /> Incident Telemetry & Technical Summary
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Describe IoCs (IPs, hashes), affected accounts, attack progression, business impact, and containment actions..."
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* ================= ACTIONS ================= */}
        <div className="form-button-group">
          <button type="submit" className="generate-btn">
            <FaRobot />
            Generate AI Report
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="reset-form-btn"
            title="Reset form"
          >
            <FaUndo /> Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default IncidentForm;