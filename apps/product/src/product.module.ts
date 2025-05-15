import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PenModule } from './pen/pen.module';

@Module({
  imports: [PenModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
