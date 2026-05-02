const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'BNCC RnD DevSecOps Demo', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.post('/echo', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'text field required' });
  }
  res.json({ echo: text });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
