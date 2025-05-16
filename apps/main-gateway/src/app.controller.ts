import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PenService } from 'apps/product/src/pen/pen.service';

@Controller('pen')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly penService: PenService,
  ) {}

  @Get()
  findAllPen() {
    return this.penService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.penService.findOne(+id);
  }
}
