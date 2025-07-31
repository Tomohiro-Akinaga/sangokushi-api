import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService],
  imports: [PrismaModule],
})
export class CharactersModule {}
