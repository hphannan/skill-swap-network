const express = require('express');
const testRoute = require('./routes/testRoutes.js')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});
app.use('/api', testRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
