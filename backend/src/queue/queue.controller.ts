import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {
  constructor(private service: QueueService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  add(@Body('name') name: string) {
    return this.service.addPatient(name);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    return this.service.updateStatus(Number(id), status);
  }
}
