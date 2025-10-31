import React, { useState, useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion as DeviceMotion } from "framer-motion";



const AnimatedDot = ({ cx, cy, stroke }) => {
  return (
    <DeviceMotion.circle
      cx={cx}
      cy={cy}
      r={5}
      stroke={stroke}
      strokeWidth={2}
      fill="white"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    />
  );
};

export default function Charts() {
  const data = useMemo(
    () => [
      { subject: "Sales", A: 98, B: 120, fullMark: 150 },
      { subject: "Marketing", A: 130, B: 100, fullMark: 150 },
      { subject: "Development", A: 90, B: 110, fullMark: 150 },
      { subject: "Customer Support", A: 85, B: 95, fullMark: 150 },
      { subject: "IT", A: 110, B: 105, fullMark: 150 },
      { subject: "HR", A: 95, B: 90, fullMark: 150 },
    ],
    []
  );

  const [showAllocated, setShowAllocated] = useState(true);
  const [showActual, setShowActual] = useState(true);

  const handleLegendClick = (entry) => {
    const { dataKey } = entry;
    if (dataKey === "A") setShowAllocated((prev) => !prev);
    if (dataKey === "B") setShowActual((prev) => !prev);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Budget vs Actual Spending
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#4b5563" }} />
          <PolarRadiusAxis stroke="#d1d5db" />

          {/* Allocated Budget */}
          <Radar
            name="Allocated Budget"
            dataKey="A"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={showAllocated ? 0.45 : 0}
            strokeOpacity={showAllocated ? 1 : 0}
            dot={<AnimatedDot stroke="#2563eb" />}
            isAnimationActive={true}
          />

          {/* Actual Spending */}
          <Radar
            name="Actual Spending"
            dataKey="B"
            stroke="#a3e635"
            fill="#a3e635"
            fillOpacity={showActual ? 0.45 : 0}
            strokeOpacity={showActual ? 1 : 0}
            dot={<AnimatedDot stroke="#a3e635" />}
            isAnimationActive={true}
          />

          <Legend onClick={handleLegendClick} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
