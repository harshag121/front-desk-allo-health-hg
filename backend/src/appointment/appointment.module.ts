import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from '../entities/appointment.entity';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { Doctor } from '../entities/doctor.entity';
import { Patient } from '../entities/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, Doctor, Patient])],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
