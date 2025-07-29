import { useEffect, useState } from 'react';

export default function Appointments() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(setAppointments);
    fetch('/api/patients')
      .then(res => res.json())
      .then(setPatients);
    fetch('/api/doctors')
      .then(res => res.json())
      .then(setDoctors);
  }, []);

  const book = async () => {
    await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patientId: Number(patientId), doctorId: Number(doctorId), time }),
    });
    setTime('');
    setDoctorId('');
    setPatientId('');
    const res = await fetch('/api/appointments');
    setAppointments(await res.json());
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Appointments</h1>
      <div className="mt-2 space-x-2">
        <select className="border" value={patientId} onChange={e => setPatientId(e.target.value)}>
          <option value="">Select patient</option>
          {patients.map((p: any) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        <select className="border" value={doctorId} onChange={e => setDoctorId(e.target.value)}>
          <option value="">Select doctor</option>
          {doctors.map((d: any) => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
        <input className="border p-1" placeholder="Time" value={time} onChange={e => setTime(e.target.value)} />
        <button onClick={book} className="px-2 py-1 bg-blue-500 text-white">Book</button>
      </div>
      <ul className="mt-4 list-disc ml-4">
        {appointments.map(a => (
          <li key={a.id}>{a.patient?.name} with {a.doctor?.name} at {a.time}</li>
        ))}
      </ul>
    </div>
  );
}
