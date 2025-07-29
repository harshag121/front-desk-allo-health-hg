import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../entities/patient.entity';

@Injectable()
export class QueueService {
  constructor(@InjectRepository(Patient) private repo: Repository<Patient>) {}

  async addPatient(name: string) {
    const count = await this.repo.count();
    const patient = this.repo.create({ name, queueNumber: count + 1, status: 'waiting' });
    return this.repo.save(patient);
  }

  updateStatus(id: number, status: string) {
    return this.repo.update({ id }, { status });
  }

  findAll() {
    return this.repo.find();
  }
}
