'use client';

import { useState } from 'react';
import { players } from './data/nbadata';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend
} from 'recharts';

export default function PlayerComparePage() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const radarData = Object.entries(selectedPlayer.metrics).map(([metric, value]) => ({
    metric,
    value
  }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">NBA Player Metrics</h1>

      <label className="block mb-4">
        <span className="text-lg font-medium">Select Player:</span>
        <select
          className="ml-2 p-2 border rounded"
          value={selectedPlayer.name}
          onChange={(e) =>
            setSelectedPlayer(players.find((p) => p.name === e.target.value)!)
          }
        >
          {players.map((player) => (
            <option key={player.name} value={player.name}>
              {player.name}
            </option>
          ))}
        </select>
      </label>

      <RadarChart outerRadius={120} width={500} height={400} data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name={selectedPlayer.name}
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
}
