import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  async seedIfEmpty() {
    const count = await this.gameRepository.count();
    if (count === 0) {
      await this.gameRepository.save([
        {
          title: 'FIFA 23',
          platform: 'PC',
          price: 19.99,
          currency: 'EUR',
          discount: 60,
          cashback: 2.5,
          imageUrl: 'https://example.com/fifa23.jpg',
          store: 'EA App',
          region: 'EU',
        },
        {
          title: 'Red Dead Redemption 2',
          platform: 'PC',
          price: 29.99,
          currency: 'EUR',
          discount: 50,
          cashback: 3.0,
          imageUrl: 'https://example.com/rdr2.jpg',
          store: 'Rockstar',
          region: 'GLOBAL',
        },
        {
          title: 'Split Fiction',
          platform: 'PC',
          price: 40.93,
          currency: 'EUR',
          discount: 18,
          cashback: 4.5,
          imageUrl: 'https://example.com/splitfiction.jpg',
          store: 'EA App',
          region: 'GLOBAL',
        },
      ]);
    }
  }

  async findAll(search?: string) {
    if (!search) {
      return this.gameRepository.find();
    }

    return this.gameRepository
      .createQueryBuilder('game')
      .where('LOWER(game.title) LIKE :search', {
        search: `%${search.toLowerCase()}%`,
      })
      .getMany();
  }
}
