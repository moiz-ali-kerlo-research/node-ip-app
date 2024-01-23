const express = require('express');
const requestIp = require('request-ip');

const app = express();

// Middleware to get user's actual IP address
app.use(requestIp.mw());

// Route to get the user's IP address
app.get('/getip', (req, res) => {
  const clientIp = req.clientIp;

  res.json({ ip: clientIp });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
