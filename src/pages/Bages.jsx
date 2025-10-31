import {
  CircleAlert,
  CircleCheck,
  FolderOpen,
  GalleryVerticalEnd,
  OctagonAlert,
  Star,
  TriangleAlert,
} from "lucide-react";
import React from "react";

function Badges() {
  return (
    <div className="bg-gray-100 p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Default Badges */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-3 text-lg">Default Badges</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
              Primary
            </span>
            <span className="bg-gray-500 text-white text-sm px-3 py-1 rounded">
              Secondary
            </span>
            <span className="bg-green-600 text-white text-sm px-3 py-1 rounded">
              Success
            </span>
            <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">
              Danger
            </span>
            <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded">
              Warning
            </span>
            <span className="bg-cyan-400 text-black text-sm px-3 py-1 rounded">
              Info
            </span>
            <span className="bg-gray-200 text-black text-sm px-3 py-1 rounded">
              Light
            </span>
            <span className="bg-black text-white text-sm px-3 py-1 rounded">
              Dark
            </span>
          </div>
        </div>

        {/* Border Badges */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-3 text-lg">Border Badges</h2>
          <div className="flex flex-wrap gap-2">
            <span className="border-2 border-blue-600 text-blue-600 text-sm px-3 py-1 rounded-lg">
              Primary
            </span>
            <span className="border-2 border-gray-500 text-gray-500 text-sm px-3 py-1 rounded-lg">
              Secondary
            </span>
            <span className="border-2 border-green-600 text-green-600 text-sm px-3 py-1 rounded-lg">
              Success
            </span>
            <span className="border-2 border-red-500 text-red-500 text-sm px-3 py-1 rounded-lg">
              Danger
            </span>
            <span className="border-2 border-yellow-400 text-yellow-500 text-sm px-3 py-1 rounded-lg">
              Warning
            </span>
            <span className="border-2 border-cyan-400 text-cyan-500 text-sm px-3 py-1 rounded-lg">
              Info
            </span>
            <span className="border-2 border-gray-300 text-gray-500 text-sm px-3 py-1 rounded-lg">
              Light
            </span>
            <span className="border-2 border-black text-black text-sm px-3 py-1 rounded-lg">
              Dark
            </span>
          </div>
        </div>

        {/* Pill Badges */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-3 text-lg">Pill Badges</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              Primary
            </span>
            <span className="bg-gray-500 text-white text-sm px-3 py-1 rounded-full">
              Secondary
            </span>
            <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">
              Success
            </span>
            <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
              Danger
            </span>
            <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full">
              Warning
            </span>
            <span className="bg-cyan-400 text-black text-sm px-3 py-1 rounded-full">
              Info
            </span>
            <span className="bg-gray-200 text-black text-sm px-3 py-1 rounded-full">
              Light
            </span>
            <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
              Dark
            </span>
          </div>
        </div>

        {/* Button Badges */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-3 text-lg">Button Badges</h2>
          <div className="flex flex-wrap gap-2">
            {[
              ["blue-600", "white", "blue-600"],
              ["gray-600", "white", "gray-600"],
              ["green-600", "white", "green-600"],
              ["red-500", "white", "red-500"],
              ["yellow-400", "black", "yellow-500"],
              ["cyan-400", "black", "cyan-500"],
              ["gray-200", "black", "gray-400"],
              ["black", "white", "black"],
            ].map(([bg, text, badge]) => (
              <button
                key={bg}
                className={`bg-${bg} text-${text} text-sm px-3 py-1 rounded inline-flex items-center gap-2`}
              >
                {bg.split("-")[0].charAt(0).toUpperCase() +
                  bg.split("-")[0].slice(1)}{" "}
                <span
                  className={`bg-white text-${badge} px-1 rounded text-xs`}
                >
                  4
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Icon Badges */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-3 text-lg">Icon Badges</h2>
          <div className="flex flex-wrap gap-2">
            <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-blue-600">
              <Star className="w-4 h-4" />
              Primary
            </button>
            <button className="bg-gray-500 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-gray-500">
              <GalleryVerticalEnd className="w-4 h-4" /> Secondary
            </button>
            <button className="bg-green-600 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-green-600">
              <CircleCheck className="w-4 h-4" /> Success
            </button>
            <button className="bg-red-500 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-red-500">
              <OctagonAlert className="w-4 h-4" /> Danger
            </button>
            <button className="bg-yellow-400 text-black text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-yellow-400">
              <TriangleAlert className="w-4 h-4" /> Warning
            </button>
            <button className="bg-cyan-400 text-black text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-cyan-400">
              <CircleAlert className="w-4 h-4 rotate-180" /> Info
            </button>
            <button className="bg-gray-200 text-black text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-gray-200">
              <Star className="w-4 h-4" /> Light
            </button>
            <button className="bg-black text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-black">
              <FolderOpen className="w-4 h-4" /> Dark
            </button>
          </div>
        </div>

        {/* Heading Badges */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold mb-3 text-lg">Heading Badges</h2>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Example h1 heading{" "}
              <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
                Primary
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Example h2 heading{" "}
              <span className="bg-gray-600 text-white text-sm px-3 py-1 rounded">
                Secondary
              </span>
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold">
              Example h3 heading{" "}
              <span className="bg-green-600 text-white text-sm px-3 py-1 rounded">
                Success
              </span>
            </h3>
            <h4 className="text-md sm:text-lg font-semibold">
              Example h4 heading{" "}
              <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">
                Danger
              </span>
            </h4>
            <h5 className="text-base font-semibold">
              Example h5 heading{" "}
              <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded">
                Warning
              </span>
            </h5>
            <h6 className="text-sm font-semibold">
              Example h6 heading{" "}
              <span className="bg-cyan-400 text-black text-sm px-3 py-1 rounded">
                Info
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Badges;
