import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { Patient } from './entities/patient.entity';
import { Appointment } from './entities/appointment.entity';

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'clinic.db',
  entities: [Doctor, Patient, Appointment],
  synchronize: true,
});

async function seed() {
  await dataSource.initialize();

  const doctorRepo = dataSource.getRepository(Doctor);
  const patientRepo = dataSource.getRepository(Patient);
  const apptRepo = dataSource.getRepository(Appointment);

  if (await doctorRepo.count() === 0) {
    const d1 = doctorRepo.create({ name: 'Dr. Smith', specialization: 'General' });
    const d2 = doctorRepo.create({ name: 'Dr. Jones', specialization: 'Cardiology' });
    await doctorRepo.save([d1, d2]);
  }

  if (await patientRepo.count() === 0) {
    const p1 = patientRepo.create({ name: 'Alice', queueNumber: 1 });
    const p2 = patientRepo.create({ name: 'Bob', queueNumber: 2 });
    await patientRepo.save([p1, p2]);
  }

  if (await apptRepo.count() === 0) {
    const [doctor] = await doctorRepo.find();
    const [patient] = await patientRepo.find();
    const appt = apptRepo.create({ doctor, patient, time: '10:00' });
    await apptRepo.save(appt);
  }

  await dataSource.destroy();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
