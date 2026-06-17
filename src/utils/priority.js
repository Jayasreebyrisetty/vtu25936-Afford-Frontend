export function getPriority(type) {
  if (type === "Placement") return 3;
  if (type === "Result") return 2;
  if (type === "Event") return 1;
  return 0;
}

export function sortNotifications(data) {
  return [...data].sort((a, b) => {
    const diff = getPriority(b.Type) - getPriority(a.Type);
    if (diff !== 0) return diff;

    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });
}