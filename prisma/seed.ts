import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.character.create({
    data: {
      name: '劉備',
      affiliation: '蜀國',
      description: '劉備是蜀國的創始人，也是蜀國的皇帝。',
      image_url: 'https://example.com/liu-bei.jpg',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
