export async function fetchNotifications() {
  const res = await fetch(
    "http://4.224.186.213/evaluation-service/notifications"
  );

  const data = await res.json();
  return data.notifications;
}