export default function Sponsors() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Sponsorship Options</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg">Banner Ad (Top of Events Page)</h3>
          <p>Displayed to all users visiting the events listing.</p>
          <p className="text-sm text-gray-500">Starting at Rs. 10,000/week</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg">Sidebar Sponsor Block</h3>
          <p>Visible throughout the site sidebar.</p>
          <p className="text-sm text-gray-500">Starting at Rs. 5,000/week</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg">Custom Sponsored Matches</h3>
          <p>Feature your brand in a cricket match broadcast.</p>
          <p className="text-sm text-gray-500">Contact us for pricing.</p>
        </div>
      </div>
    </div>
  );
}
