import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PenService } from './pen.service';

@Controller()
export class PenController {
  constructor(private readonly penService: PenService) {}

  @MessagePattern('createPen')
  create(@Payload() createPenDto: any) {
    return this.penService.create(createPenDto);
  }

  @MessagePattern('findAllPen')
  findAll() {
    return this.penService.findAll();
  }

  @MessagePattern('findOnePen')
  findOne(@Payload() id: number) {
    return this.penService.findOne(id);
  }

  @MessagePattern('updatePen')
  update(@Payload() updatePenDto: any) {
    return this.penService.update(updatePenDto.id, updatePenDto);
  }

  @MessagePattern('removePen')
  remove(@Payload() id: number) {
    return this.penService.remove(id);
  }
}
