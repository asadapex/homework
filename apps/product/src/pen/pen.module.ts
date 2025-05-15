import { Module } from '@nestjs/common';
import { PenService } from './pen.service';
import { PenController } from './pen.controller';

@Module({
  controllers: [PenController],
  providers: [PenService],
})
export class PenModule {}
