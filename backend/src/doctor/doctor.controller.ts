import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctors')
export class DoctorController {
  constructor(private service: DoctorService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.service.create(data);
  }
}
