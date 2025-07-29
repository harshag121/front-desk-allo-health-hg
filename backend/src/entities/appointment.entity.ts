import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Patient } from './patient.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor)
  doctor: Doctor;

  @ManyToOne(() => Patient)
  patient: Patient;

  @Column()
  time: string;

  @Column({ default: 'booked' })
  status: string;
}
