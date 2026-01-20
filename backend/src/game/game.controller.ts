import { Controller, Get, Query, OnModuleInit } from '@nestjs/common';
import { GameService } from './game.service';

@Controller()
export class GameController implements OnModuleInit {
  constructor(private gameService: GameService) {}

  async onModuleInit() {
    await this.gameService.seedIfEmpty();
  }

  @Get('list')
  async getList(@Query('search') search?: string) {
    return this.gameService.findAll(search);
  }
}
