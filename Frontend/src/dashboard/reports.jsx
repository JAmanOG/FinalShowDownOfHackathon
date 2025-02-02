import React from 'react'

const reports = (reports) => {
    console.log(reports)
  return (
<div id="reports" className="py-10 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Health Analytics Reports</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Monthly Summary</h3>
                    <div className="bg-blue-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Active Users</span>
                        <span className="text-green-600 font-bold">↑ 12.5K</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Engagement Rate</span>
                        <span className="text-green-600 font-bold">↑ 68%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Content Views</span>
                        <span className="text-green-600 font-bold">↑ 45K</span>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Demographics</h3>
                    <div className="bg-purple-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative pt-1">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Age 18-34</span>
                            <span className="text-purple-600 font-bold">45%</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                            <div style={{width: "45%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"></div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Age 35-54</span>
                            <span className="text-purple-600 font-bold">35%</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                            <div style={{width: "35%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"></div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Age 55+</span>
                            <span className="text-purple-600 font-bold">20%</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                            <div style={{width: "20%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Content Performance</h3>
                    <div className="bg-green-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                        </svg>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Health Tips</span>
                            <span className="text-green-600 font-bold">92% CTR</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: "92%"}}></div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Wellness Guides</span>
                            <span className="text-green-600 font-bold">85% CTR</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: "85%"}}></div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Mental Health</span>
                            <span className="text-green-600 font-bold">78% CTR</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: "78%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Generated Reports</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Generate New Report
                </button>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        <span className="text-gray-700">Monthly Analytics Report</span>
                    </div>
                    <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">Download PDF</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        <span className="text-gray-700">User Engagement Summary</span>
                    </div>
                    <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">Download PDF</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default reports
