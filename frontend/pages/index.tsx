export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Front Desk System</h1>
      <ul className="list-disc ml-4 mt-4">
        <li><a href="/queue" className="text-blue-500">Queue Management</a></li>
        <li><a href="/appointments" className="text-blue-500">Appointments</a></li>
      </ul>
    </div>
  );
}
