import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from '../entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor) private repo: Repository<Doctor>,
  ) {}

  create(data: Partial<Doctor>) {
    const doctor = this.repo.create(data);
    return this.repo.save(doctor);
  }

  findAll() {
    return this.repo.find();
  }
}
