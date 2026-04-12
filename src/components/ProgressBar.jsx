import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container" style={styles.container}>
      <div className="progress-info" style={styles.info}>
        <span style={styles.label}>Today's Progress</span>
        <span style={styles.percent}>{progress}% Done</span>
      </div>
      <div style={styles.barBackground}>
        <div style={{ ...styles.barFill, width: `${progress}%` }} />
      </div>
      <span style={styles.tasks}>{`${Math.round((progress/100)*10)} of 10 tasks complete`}</span>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f3e9e0",
    padding: "12px",
    borderRadius: "10px",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif"
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#533b2d",
  },
  label: {},
  percent: {},
  barBackground: {
    backgroundColor: "#e2d3c6",
    height: "16px",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "6px",
  },
  barFill: {
    backgroundColor: "#7c4e2b",
    height: "100%",
    borderRadius: "8px",
    transition: "width 0.3s ease-in-out",
  },
  tasks: {
    fontSize: "12px",
    color: "#533b2d",
  },
};

export default ProgressBar;
