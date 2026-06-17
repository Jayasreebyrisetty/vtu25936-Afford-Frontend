import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, password })
    );

    navigate("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f7fb"
    >
      <Paper elevation={6} style={{ padding: 30, width: 350 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Register
        </Typography>

        <TextField
          label="Name"
          fullWidth
          margin="normal"
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleRegister}
          style={{ marginTop: 15 }}
        >
          Register
        </Button>

        <Typography align="center" style={{ marginTop: 10 }}>
          Already have account? <Link to="/">Login</Link>
        </Typography>
      </Paper>
    </Box>
  );
}