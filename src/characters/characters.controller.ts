import { Controller, Get } from '@nestjs/common';

@Controller('characters')
export class CharactersController {
  @Get()
  findAll(): string {
    return 'This action returns all characters';
  }
}
