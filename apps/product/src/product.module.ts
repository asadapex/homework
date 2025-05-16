import { Module } from '@nestjs/common';
import { PenModule } from './pen/pen.module';

@Module({
  imports: [PenModule],
  controllers: [PenModule],
  providers: [PenModule],
})
export class ProductModule {}
