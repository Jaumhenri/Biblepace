require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors({
  origin: '*', // Permite chamadas do Next.js (porta 3000) e Vite (porta 5173)
  credentials: true
}));
app.use(express.json());

// Rotas da API
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ error: 'Erro inesperado no servidor.' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor BiblePace Auth rodando na porta ${PORT}`);
  console.log(`🔗 API Base: http://localhost:${PORT}/api/auth`);
});

