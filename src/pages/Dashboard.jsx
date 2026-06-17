import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import { sortNotifications } from "../utils/priority";
import { Paper, Typography, Box, Card, CardContent } from "@mui/material";

export default function Dashboard() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchNotifications();
      const sorted = sortNotifications(data);
      setNotifications(sorted);
    }

    load();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Priority Inbox
      </Typography>

      {notifications.slice(0, 10).map((n) => (
        <Card key={n.ID} style={{ marginBottom: 10 }}>
          <CardContent>
            <Typography variant="h6">{n.Type}</Typography>
            <Typography>{n.Message}</Typography>
            <Typography variant="caption">{n.Timestamp}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}