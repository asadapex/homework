import { Injectable, NotFoundException } from '@nestjs/common';

const pens = [
  { id: 1, name: 'Pen 1', price: 123 },
  { id: 2, name: 'Pen 2', price: 123 },
  { id: 3, name: 'Pen 3', price: 123 },
  { id: 4, name: 'Pen 4', price: 123 },
];

@Injectable()
export class PenService {
  create(data: any) {
    pens.push(data);
    return data;
  }

  findAll() {
    return pens;
  }

  findOne(id: number) {
    const one = pens.find((p) => p.id == id);

    if (!one) {
      throw new NotFoundException('Pen not found');
    }

    return one;
  }

  update(id: number, data: any) {
    const one = pens.find((p) => p.id == id);
    if (!one) {
      throw new NotFoundException('Pen not found');
    }
    const oldIndex = pens.indexOf(one);

    pens.splice(oldIndex, 1, data);
    return pens.find((p) => p.id == id);
  }

  remove(id: number) {
    const one = pens.find((p) => p.id == id);
    if (!one) {
      throw new NotFoundException('Pen not found');
    }
    const deleted = pens.filter((p) => p.id != id);
  }
}
