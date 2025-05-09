const events = [
  { id: 1, name: "Kathmandu T20 Final", price: "Rs. 500", date: "May 20, 2025" },
  { id: 2, name: "Pokhara Semis", price: "Rs. 300", date: "May 18, 2025" },
];

export default function Tickets() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tickets</h2>
      {events.map(event => (
        <div key={event.id} className="bg-white p-4 rounded shadow mb-4">
          <h3 className="font-bold">{event.name}</h3>
          <p>{event.date}</p>
          <p className="text-green-700 font-semibold">{event.price}</p>
          <button className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80">
            Buy Ticket
          </button>
        </div>
      ))}
    </div>
  );
}
