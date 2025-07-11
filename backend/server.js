const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const db = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Temporary test route
app.use('/api/notes', require('./routes/notes'));


// Start the server
app.listen(5000, () => {
  console.log(`Server running on port ${port}`);
});


