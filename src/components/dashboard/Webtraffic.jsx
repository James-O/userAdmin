import React, { useState }  from 'react'
import { BsThreeDots } from 'react-icons/bs'
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Threedotmenu from './Threedotmenu';

const data = [
  { name: "Search Engine", value: 400 },
  { name: "Direct", value: 300 },
  { name: "Email", value: 200 },
  { name: "Union Ads", value: 100 },
  { name: "Video Ads", value: 150 },
];

//  Colors for each section
const COLORS = ["#3b82f6", "#84cc16", "#475569", "#f97316", "#0ea5e9"];



 function Webtraffic() {

    const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };
  
  return (
    <div className='w-full overflow-y-hidden'>
       {/*Header*/}
           <div className='flex justify-between items-center mb-4'>
            <h2 className="text-lg font-semibold text-blue-950">Website Traffic <span className="text-gray-400 font-medium text-sm ml-1">| This Month</span></h2>
             <Threedotmenu/>
           </div>

       <div className="relative w-full h-[400px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="55%"
            innerRadius={60}
            outerRadius={120}
            dataKey="value"
            paddingAngle={0}
            isAnimationActive={true}
            activeIndex={activeIndex}
            activeShape={(props) => {
              const { outerRadius, ...rest } = props;
              return (
                <g>
                  {/* Raised Effect */}
                  <Pie
                    {...rest}
                    outerRadius={outerRadius + 10} // 👈 Raise effect
                    fill={props.fill}
                  />
                </g>
              );
            }}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                cursor="pointer"
              />
            ))}
          </Pie>

          {/* Legend */}
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="center"
            iconType="square"
            iconSize={10}
            wrapperStyle={{
              fontSize: 12,
              marginBottom: 20,
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* ✅ Center Text */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-lg font-semibold text-gray-800">
          {activeIndex !== null ? data[activeIndex].name : ""}
        </span>

        {/* ✅ Overlay slab */}
        {activeIndex !== null && (
          <span className="mt-1 text-xs bg-gray-900 text-white px-3 py-1 rounded-md shadow-md animate-fade-in">
            Access from Section 486
          </span>
        )}
      </div>
    </div>

    
    </div>
  )

}
export default Webtraffic