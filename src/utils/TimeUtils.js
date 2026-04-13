const timeAgo = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now - past;

  if (diffMs < 60 * 1000) return "Just now";
  if (diffMs < 60 * 60 * 1000)
    return `${Math.floor(diffMs / (60 * 1000))} mins ago`;
  if (diffMs < 24 * 60 * 60 * 1000)
    return `${Math.floor(diffMs / (60 * 60 * 1000))} hours ago`;
  return (
    past.toLocaleDateString() +
    " " +
    past.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
};

const isOverdue = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  return now - past > 24 * 60 * 60 * 1000;
};

export { timeAgo as formatDraftedTime, isOverdue };
