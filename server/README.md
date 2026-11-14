# BiblePace Auth & Database Server 🚀

Backend Node.js/Express com Prisma ORM e SQLite/PostgreSQL para autenticação e gerenciamento de usuários da plataforma BiblePace.

---

## 🛠️ Tecnologias Utilizadas
- **Node.js** + **Express**
- **Prisma ORM** (v6)
- **SQLite** (banco local pronto para uso imediato; compatível com PostgreSQL mudando a connection string)
- **bcryptjs** (criptografia segura de senhas com salting)
- **jsonwebtoken (JWT)** (autenticação baseada em tokens com expiração de 7 dias)
- **CORS & Dotenv**

---

## 📂 Estrutura de Pastas

```text
server/
├── prisma/
│   ├── schema.prisma       # Definição do banco e modelo User
│   ├── seed.js             # Criação do usuário de teste
│   └── dev.db              # Banco de dados SQLite local
├── src/
│   ├── controllers/
│   │   └── authController.js  # Lógica de login, register e getMe
│   ├── middleware/
│   │   └── auth.js            # Middleware de validação do token JWT
│   ├── routes/
│   │   └── authRoutes.js      # Rotas da API (/login, /register, /me)
│   ├── db.js                  # Instância do PrismaClient
│   └── index.js               # Servidor Express principal (porta 5001)
├── .env                       # Variáveis de ambiente
└── package.json
```

---

## 🚀 Como Executar

### 1. Iniciar o servidor de autenticação:
```bash
cd server
npm run dev
# ou
npm start
```
O servidor rodará em `http://localhost:5001`.

### 2. Rodar Migrações do Prisma (se alterar o schema):
```bash
npx prisma db push
```

### 3. Visualizar o banco de dados via interface gráfica:
```bash
npx prisma studio
```

---

## 🛡️ Rotas da API

| Método | Rota | Descrição | Autenticação |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Cria uma nova conta de discípulo | Pública |
| `POST` | `/api/auth/login` | Realiza login e retorna token JWT | Pública |
| `GET` | `/api/auth/me` | Retorna os dados do usuário autenticado | `Bearer <token>` |
| `GET` | `/api/health` | Health check da API | Pública |

---

## 👤 Conta de Teste Pré-configurada

- **E-mail:** `joao.pedro@biblepace.com`
- **Senha:** `12345678`
*(Há um botão de atalho "Preencher dados de teste" na própria tela de login)*

