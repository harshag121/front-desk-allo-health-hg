import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppointmentService } from './appointment.service';

@Controller('appointments')
export class AppointmentController {
  constructor(private service: AppointmentService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  book(@Body() body: { patientId: number; doctorId: number; time: string }) {
    const { patientId, doctorId, time } = body;
    return this.service.book(patientId, doctorId, time);
  }
}
