import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import LiveScores from "./pages/LiveScores";
import Tickets from "./pages/Tickets";
import Sponsors from "./pages/Sponsors";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex h-screen font-sports bg-light text-gray-800">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Events />} />
              <Route path="/live-scores" element={<LiveScores />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/sponsors" element={<Sponsors />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );

  // return <div className="">Hello from Grassroots Sports !</div>;
}

export default App;
