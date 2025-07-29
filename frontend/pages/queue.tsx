import { useEffect, useState } from 'react';

export default function Queue() {
  const [patients, setPatients] = useState<any[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('/api/queue')
      .then(res => res.json())
      .then(setPatients);
  }, []);

  const refresh = async () => {
    const res = await fetch('/api/queue');
    setPatients(await res.json());
  };

  const add = async () => {
    await fetch('/api/queue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    setName('');
    refresh();
  };

  const updateStatus = async (id: number, status: string) => {
    await fetch(`/api/queue/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    refresh();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Queue</h1>
      <div className="mt-2">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-1"
          placeholder="Patient name"
        />
        <button onClick={add} className="ml-2 px-2 py-1 bg-blue-500 text-white">Add</button>
      </div>
      <ul className="mt-4 list-disc ml-4">
        {patients.map(p => (
          <li key={p.id} className="mb-2">
            <span className="mr-2 font-semibold">#{p.queueNumber}</span>
            {p.name} - {p.status}
            <select
              className="ml-2 border"
              value={p.status}
              onChange={e => updateStatus(p.id, e.target.value)}
            >
              <option value="waiting">Waiting</option>
              <option value="with-doctor">With Doctor</option>
              <option value="completed">Completed</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}
