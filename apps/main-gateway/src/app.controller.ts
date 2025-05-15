import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { PenService } from 'apps/product/src/pen/pen.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly penService: PenService,
  ) {}
}
