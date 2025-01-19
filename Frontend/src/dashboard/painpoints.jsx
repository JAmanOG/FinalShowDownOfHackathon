import React from 'react'

const painpoints = (painpoints) => {
    console.log(painpoints)
  return (
<div id="painpoints" className="py-10 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">User Pain Points Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Mental Health</h3>
                    <span className="text-red-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Anxiety</li>
                    <li>• Stress</li>
                    <li>• Obsessive perfectionism</li>
                </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Work-Life Balance</h3>
                    <span className="text-blue-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Time management issues</li>
                    <li>• Performance pressure</li>
                    <li>• Career-life conflict</li>
                </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Health Concerns</h3>
                    <span className="text-green-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Chronic diseases</li>
                    <li>• Lifestyle diseases</li>
                    <li>• Limited self-care time</li>
                </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Emotional Management</h3>
                    <span className="text-purple-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Fear of criticism</li>
                    <li>• Burnout symptoms</li>
                    <li>• Emotional overwhelm</li>
                </ul>
            </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Impact Scale</h3>
            <div className="space-y-4">
                <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <span className="text-sm font-semibold text-gray-700">Mental Health Impact</span>
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-gray-700">85%</span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                        <div className="w-[85%] shadow-none flex flex-col justify-center bg-red-500"></div>
                    </div>
                </div>

                <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <span className="text-sm font-semibold text-gray-700">Work-Life Balance Impact</span>
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-gray-700">75%</span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                        <div className="w-[75%] shadow-none flex flex-col justify-center bg-blue-500"></div>
                    </div>
                </div>

                <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <span className="text-sm font-semibold text-gray-700">Physical Health Impact</span>
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-gray-700">70%</span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                        <div className="w-[70%] shadow-none flex flex-col justify-center bg-green-500"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default painpoints
