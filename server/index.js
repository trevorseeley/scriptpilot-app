const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const analyzeRoute = require('./routes/analyze');

app.use(express.json());
app.use('/api/analyze', analyzeRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
