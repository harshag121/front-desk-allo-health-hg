import { Controller, Get } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patients')
export class PatientController {
  constructor(private service: PatientService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
