const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: { email: 'joao.pedro@biblepace.com' }
  });

  if (!existingUser) {
    const passwordHash = await bcrypt.hash('12345678', 10);
    const user = await prisma.user.create({
      data: {
        name: 'João Pedro',
        email: 'joao.pedro@biblepace.com',
        passwordHash,
        role: 'STUDENT',
        streakDays: 5
      }
    });
    console.log('✅ Usuário de teste criado com sucesso:', user.email);
  } else {
    console.log('ℹ️ Usuário de teste já existe:', existingUser.email);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

