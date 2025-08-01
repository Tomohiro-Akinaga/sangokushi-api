import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';

describe('CharactersController', () => {
  let controller: CharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
    }).compile();

    controller = module.get<CharactersController>(CharactersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "This action returns all characters" when accessing /characters', () => {
    const result = controller.findAll();
    expect(result).toBe('This action returns all characters');
  });
});
