const mongoose = require('mongoose');

// Iniciar conexão com o banco de dados.
mongoose.connect('mongodb://localhost:27017/user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});