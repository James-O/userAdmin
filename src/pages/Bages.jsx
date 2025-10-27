import { Circle, CircleAlert, CircleCheck, FolderOpen, GalleryVerticalEnd, OctagonAlert, Square, Star, TriangleAlert } from 'lucide-react';
import React from 'react'

function Badges() {
    // //  <meta charSet="UTF-8">
    // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    // <title>Badges Example</title>
    // <script src="https://cdn.tailwindcss.com"></script>
    // <link href="https://unpkg.com/lucide-static/font/lucide.css" rel="stylesheet">{/*<!-- Lucide icons -->*/}</link>
    return (



        <div className="bg-gray-100 p-6">

            <div className="grid lg:grid-cols-2 gap-6">

                {/* <!-- Default Badges --> */}
                <div className="bg-white shadow rounded p-4">
                    <h2 className="font-semibold mb-3">Default Badges</h2>
                    <div className="space-x-2">
                        <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded">Primary</span>
                        <span className="bg-gray-500 text-white text-sm px-3 py-1 rounded">Secondary</span>
                        <span className="bg-green-600 text-white text-sm px-3 py-1 rounded">Success</span>
                        <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">Danger</span>
                        <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded">Warning</span>
                        <span className="bg-cyan-400 text-black text-sm px-3 py-1 rounded">Info</span>
                        <span className="bg-gray-200 text-black text-sm px-3 py-1 rounded">Light</span>
                        <span className="bg-black text-white text-sm px-3 py-1 rounded">Dark</span>
                    </div>
                </div>

                {/* <!-- Border Badges --> */}
                <div className="bg-white shadow rounded p-4">
                    <h2 className="font-semibold mb-3">Border Badges</h2>
                    <div className="space-x-2">
                        <span className="border-2 border-blue-600 text-blue-600 text-sm px-3 py-1 rounded-lg">Primary</span>
                        <span className="border-2 border-gray-500 text-gray-500 text-sm px-3 py-1 rounded-lg">Secondary</span>
                        <span className="border-2 border-green-600 text-green-600 text-sm px-3 py-1 rounded-lg">Success</span>
                        <span className="border-2 border-red-500 text-red-500 text-sm px-3 py-1 rounded-lg">Danger</span>
                        <span className="border-2 border-yellow-400 text-yellow-500 text-sm px-3 py-1 rounded-lg">Warning</span>
                        <span className="border-2 border-cyan-400 text-cyan-500 text-sm px-3 py-1 rounded-lg">Info</span>
                        <span className="border-2 border-gray-300 text-gray-500 text-sm px-3 py-1 rounded-lg">Light</span>
                        <span className="border-2 border-black text-black text-sm px-3 py-1 rounded-lg">Dark</span>
                    </div>
                </div>

                {/* <!-- Pill Badges --> */}
                <div className="bg-white shadow rounded p-4">
                    <h2 className="font-semibold mb-3">Pill Badges</h2>
                    <div className="space-x-2">
                        <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Primary</span>
                        <span className="bg-gray-500 text-white text-sm px-3 py-1 rounded-full">Secondary</span>
                        <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">Success</span>
                        <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Danger</span>
                        <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full">Warning</span>
                        <span className="bg-cyan-400 text-black text-sm px-3 py-1 rounded-full">Info</span>
                        <span className="bg-gray-200 text-black text-sm px-3 py-1 rounded-full">Light</span>
                        <span className="bg-black text-white text-sm px-3 py-1 rounded-full">Dark</span>
                    </div>
                </div>

                {/* <!-- Button Badges --> */}
                <div className="bg-white shadow rounded p-4">
                    <h2 className="font-semibold mb-3">Button Badges</h2>
                    <div className="flex flex-wrap gap-2">
                        <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-2">Primary <span className="bg-white text-blue-600 px-1 rounded text-xs">4</span></button>
                        <button className="bg-gray-600 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-2">Secondary <span className="bg-white text-gray-600 px-1 rounded text-xs">4</span></button>
                        <button className="bg-green-600 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-2">Success <span className="bg-white text-green-600 px-1 rounded text-xs">4</span></button>
                        <button className="bg-red-500 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-2">Danger <span className="bg-white text-red-500 px-1 rounded text-xs">4</span></button>
                        <button className="bg-yellow-400 text-black text-sm px-3 py-1 rounded inline-flex items-center gap-2">Warning <span className="bg-white text-yellow-500 px-1 rounded text-xs">4</span></button>
                        <button className="bg-cyan-400 text-black text-sm px-3 py-1 rounded inline-flex items-center gap-2">Info <span className="bg-white text-cyan-500 px-1 rounded text-xs">4</span></button>
                        <button className="bg-gray-200 text-black text-sm px-3 py-1 rounded inline-flex items-center gap-2">Light <span className="bg-white text-gray-400 px-1 rounded text-xs">4</span></button>
                        <button className="bg-black text-white text-sm px-3 py-1 rounded inline-flex items-center gap-2">Dark <span className="bg-white text-black px-1 rounded text-xs">4</span></button>
                    </div>
                </div>

                {/* <!-- Icon Badges --> */}
                <div className="bg-white shadow rounded p-4">
                    <h2 className="font-semibold mb-3">Icon Badges</h2>
                    <div className="space-x-2">
                        <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-blue-600">
                            <Star className="w-4 h-4" />
                            Primary
                        </button>

                        <button className="bg-gray-500 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1  border border-gray-500"><GalleryVerticalEnd className="w-4 h-4"/> Secondary</button>
                        <button className="bg-green-600 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-green-600"><CircleCheck className="w-4 h-4" /> Success</button>
                        <button className="bg-red-500 text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-red-500"><OctagonAlert className="w-4 h-4" /> Danger</button>
                        <button className="bg-yellow-400 text-black text-sm px-3 py-1 rounded inline-flex items-center gap-1  border border-yellow-400"><TriangleAlert className="w-4 h-4 " /> Warning</button>
                        <button className="bg-cyan-400 text-black text-sm px-3 py-1 rounded inline-flex items-center gap-1  border border-cyan-400"><CircleAlert className="w-4 h-4 rotate-180" /> Info</button>
                        <button className="bg-gray-200 text-black text-sm px-3 py-1 rounded inline-flex items-center gap-1 border border-gray-200"> <Star className="w-4 h-4" /> Light</button>
                        <button className="bg-black text-white text-sm px-3 py-1 rounded inline-flex items-center gap-1  border border-black">< FolderOpen  className="w-4 h-4"/> Dark</button>
                    </div>
                </div>

                {/* <!-- Heading Badges --> */}
                <div className="bg-white shadow rounded p-4">
                    <h2 className="font-semibold mb-3">Heading Badges</h2>
                    <h1 className="text-3xl font-semibold mb-2">Example h1 heading <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded">Primary</span></h1>
                    <h2 className="text-2xl font-semibold mb-2">Example h2 heading <span className="bg-gray-600 text-white text-sm px-3 py-1 rounded">Secondary</span></h2>
                    <h3 className="text-xl font-semibold mb-2">Example h3 heading <span className="bg-green-600 text-white text-sm px-3 py-1 rounded">Success</span></h3>
                    <h4 className="text-lg font-semibold mb-2">Example h4 heading <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">Danger</span></h4>
                    <h5 className="text-md font-semibold mb-2">Example h5 heading <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded">Warning</span></h5>
                    <h6 className="text-sm font-semibold">Example h6 heading <span className="bg-cyan-400 text-black text-sm px-3 py-1 rounded">Info</span></h6>
                </div>

            </div>

        </div>
    )
}

export default Badges;