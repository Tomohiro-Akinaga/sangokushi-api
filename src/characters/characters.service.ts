import { Injectable } from '@nestjs/common';
import { Character } from './interfaces/character.interface';

@Injectable()
export class CharactersService {
  private readonly characters: Character[] = [];

  findAll(): Character[] {
    return [
      {
        id: '1',
        name: 'John Doe',
        affiliation: 'Acme Inc',
        description: 'John Doe is a software engineer',
        image_url: 'https://via.placeholder.com/150',
      },
    ];
    // return this.characters;
  }
}
