import { GlobalRole, OrganizationRole, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction([
    prisma.aiReport.deleteMany(),
    prisma.aiSummary.deleteMany(),
    prisma.auditLog.deleteMany(),
    prisma.session.deleteMany(),
    prisma.message.deleteMany(),
    prisma.channelMember.deleteMany(),
    prisma.channel.deleteMany(),
    prisma.organizationMember.deleteMany(),
    prisma.organization.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  const password = await bcrypt.hash('Password123!', 10);

  const superAdmin = await prisma.user.create({
    data: {
      email: 'jsingh@fivestar.com',
      displayName: 'Five Star Admin',
      password,
      role: GlobalRole.SUPER_ADMIN,
    },
  });

  const user = await prisma.user.create({
    data: {
      email: 'demo@chatapp.com',
      displayName: 'Demo User',
      password,
    },
  });

  const organization = await prisma.organization.create({
    data: {
      name: 'Demo Organization',
      description: 'Sample organization to explore chatApp',
      members: {
        create: {
          userId: user.id,
          role: OrganizationRole.OWNER,
        },
      },
    },
  });

  const generalChannel = await prisma.channel.create({
    data: {
      organizationId: organization.id,
      name: 'general',
      description: 'Team-wide updates',
    },
  });

  const productChannel = await prisma.channel.create({
    data: {
      organizationId: organization.id,
      name: 'product',
      description: 'Product discussions',
    },
  });

  await prisma.message.createMany({
    data: [
      {
        channelId: generalChannel.id,
        authorId: user.id,
        content: 'Welcome to the demo organization!',
      },
      {
        channelId: generalChannel.id,
        authorId: user.id,
        content: 'Feel free to explore the different channels.',
      },
      {
        channelId: productChannel.id,
        authorId: user.id,
        content: 'Product standup happening every morning at 9 AM.',
      },
    ],
  });

  console.info('Seed data created');
  console.info(`Promoted ${superAdmin.email} to ${superAdmin.role}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
