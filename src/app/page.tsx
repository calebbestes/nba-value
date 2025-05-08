'use client';

import { players } from './data/nbadata';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';

const data = players.map(player => ({
  name: player.name,
  ...player.stats
}));

export default function PlayerComparePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">NBA Player Comparison</h1>
      <RadarChart outerRadius={150} width={600} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar name="LeBron" dataKey="points" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Curry" dataKey="points" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Radar name="Jokić" dataKey="points" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </div>
  );
}
