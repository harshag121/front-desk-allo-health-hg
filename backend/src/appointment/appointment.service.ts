import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from '../entities/appointment.entity';
import { Doctor } from '../entities/doctor.entity';
import { Patient } from '../entities/patient.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment) private repo: Repository<Appointment>,
    @InjectRepository(Doctor) private doctorRepo: Repository<Doctor>,
    @InjectRepository(Patient) private patientRepo: Repository<Patient>,
  ) {}

  async book(patientId: number, doctorId: number, time: string) {
    const patient = await this.patientRepo.findOne({ where: { id: patientId } });
    const doctor = await this.doctorRepo.findOne({ where: { id: doctorId } });
    const appt = this.repo.create({ patient, doctor, time });
    return this.repo.save(appt);
  }

  findAll() {
    return this.repo.find({ relations: ['patient', 'doctor'] });
  }
}
