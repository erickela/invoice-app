function StatusBadge({ status }) {
  const colors = {
    Draft: "gray",
    Pending: "orange",
    Paid: "green",
  };

  return (
    <span style={{ color: colors[status] }}>
      {status}
    </span>
  );
}

export default StatusBadge;
