import { useEffect, useState } from 'react';

const mockScores = [
  { id: 1, match: "Kathmandu Kings vs Pokhara Rhinos", score: "123/4 (15.2)" },
  { id: 2, match: "Lalitpur Lions vs Biratnagar Warriors", score: "97/2 (10.5)" },
];

export default function LiveScores() {
  const [scores, setScores] = useState(mockScores);

  useEffect(() => {
    const interval = setInterval(() => {
      setScores(scores.map(s => ({
        ...s,
        score: `${Math.floor(Math.random() * 200)}/${Math.floor(Math.random() * 10)} (${Math.floor(Math.random() * 20)}.${Math.floor(Math.random() * 6)})`
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Live Scores</h2>
      {scores.map(score => (
        <div key={score.id} className="bg-white p-4 rounded shadow mb-3">
          <h3 className="font-bold">{score.match}</h3>
          <p className="text-lg text-blue-700">{score.score}</p>
        </div>
      ))}
    </div>
  );
}
