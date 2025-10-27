import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { motion as DeviceMotion } from "framer-motion";
import { BsThreeDots } from 'react-icons/bs'
import Threedotmenu from "./Threedotmenu";

 function Recharts() {
  const data = [
  { subject: "Sales", A: 98, B: 120, fullMark: 150 },
  { subject: "Marketing", A: 100, B: 120, fullMark: 150 },
  { subject: "Development", A: 145, B: 115, fullMark: 150 },
  { subject: "Customer Support", A: 140, B: 100, fullMark: 150 },
  { subject: "Information Technology", A: 95, B: 140, fullMark: 150 },
  { subject: "Administration", A: 30, B: 135, fullMark: 150 },
];

 const [showAllocated, setShowAllocated] = useState(true);
  const [showActual, setShowActual] = useState(true);

  const handleLegendClick = (e) => {
  if (e.dataKey === "A") setShowAllocated(!showAllocated);
  if (e.dataKey === "B") setShowActual(!showActual);
};


  //  Animated Dot Component (Hover Effect)
  const AnimatedDot = ({ cx, cy, stroke }) => (
    <DeviceMotion.circle
      cx={cx}
      cy={cy}
      r={4}
      fill={stroke}
      whileHover={{
        scale: 1.6,
        filter: `drop-shadow(0 0 6px ${stroke}90)`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    />
  );

  
  return (
    <div className='w-full'>
      {/*Header*/}
     <div className='flex justify-between items-center mb-4'>
      <h2 className="text-lg font-semibold text-blue-950">Budget Report <span className="text-gray-400 font-medium text-sm ml-1">| This Month</span></h2>
       <Threedotmenu/>
     </div>

     {/*chart*/}

<div className="w-full h-[300px] flex flex-col items-center gap-4 rounded-2xl">
     <ResponsiveContainer width="100%" height="100%">
  <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data}>
    {/* Background Grid */}
    <PolarGrid gridType="polygon" radialLines={true} />
    <PolarAngleAxis
      dataKey="subject"
      tick={{ fill: "#475569", fontSize: 12 }}
    />
    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} tickCount={6} />

    {/* Allocated Budget */}
    <Radar
      name="Allocated Budget"
      dataKey="A"
      stroke="#2563eb"
      fill="none"
      fillOpacity={showAllocated ? 0.3 : 0.05} // make transparent instead of hiding
      strokeOpacity={showAllocated ? 1 : 0.}
      dot={<AnimatedDot stroke="#2563eb" />}
      isAnimationActive={false}
    />

    {/* Actual Spending */}
    <Radar
      name="Actual Spending"
      dataKey="B"
      stroke="#a3e635"
      fill="none"
      fillOpacity={showActual ? 0.3 : 0.05}
      strokeOpacity={showActual ? 1 : 0.4}
      dot={<AnimatedDot stroke="#a3e635" />}
      isAnimationActive={false}
    />

    {/* Custom Legend */}
    <Legend
      content={(props) => {
        const { payload } = props;
        return (
          <ul className="flex justify-center gap-6">
            {payload.map((entry, index) => {
              const isActive =
                (entry.dataKey === "A" && showAllocated) ||
                (entry.dataKey === "B" && showActual);
              return (
                <li
                  key={`item-${index}`}
                  onClick={() => handleLegendClick(entry)}
                  style={{
                    color: isActive ? entry.color : "#94a3b8",
                    opacity: isActive ? 1 : 0.6,
                    cursor: "pointer",
                    fontSize: 12,
                    transition: "all 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      backgroundColor: entry.color,
                      marginRight: 6,
                      borderRadius: 3,
                      opacity: isActive ? 1 : 0.4,
                    }}
                  ></span>
                  {entry.value}
                </li>
              );
            })}
          </ul>
        );
      }}
    />
  </RadarChart>
</ResponsiveContainer>


    
    </div>
    </div>
  )
}
export default Recharts