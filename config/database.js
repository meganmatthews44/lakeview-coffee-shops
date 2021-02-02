const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/lakeview-coffee-shops', { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;
// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});