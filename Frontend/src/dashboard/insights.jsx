import React from 'react'

const insights = (insights) => {
console.log(insights)
  return (
<div id="insights" className="py-10 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Visualized Insights</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Top Health & Wellness Trends</h3>
                <div className="space-y-6">
                    <div className="flex items-center">
                        <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div className="ml-4 flex-grow">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Mental Health Solutions</span>
                                <span className="text-sm font-medium text-blue-600">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="w-12 h-12 flex-shrink-0 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div className="ml-4 flex-grow">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Digital Health Platforms</span>
                                <span className="text-sm font-medium text-purple-600">92%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-purple-600 h-2.5 rounded-full" style={{width: "92%"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="w-12 h-12 flex-shrink-0 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </div>
                        <div className="ml-4 flex-grow">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Personalized Healthcare</span>
                                <span className="text-sm font-medium text-green-600">78%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-green-600 h-2.5 rounded-full" style={{width: "78%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">User Engagement Metrics</h3>
                <div className="space-y-6">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">Average Time Spent</span>
                            <span className="text-sm font-bold text-green-600">↑ 45%</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">12.5 minutes</div>
                        <p className="text-sm text-gray-500 mt-1">Per session</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">Click-through Rate</span>
                            <span className="text-sm font-bold text-blue-600">↑ 32%</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">4.8%</div>
                        <p className="text-sm text-gray-500 mt-1">Average CTR</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">Content Shares</span>
                            <span className="text-sm font-bold text-purple-600">↑ 28%</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-800">2.3K</div>
                        <p className="text-sm text-gray-500 mt-1">Monthly average</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Global Health & Wellness Market</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-medium text-gray-800">North America</h4>
                    <div className="mt-2 text-2xl font-bold text-blue-600">35%</div>
                    <p className="text-sm text-gray-600">Market Share</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-medium text-gray-800">Europe</h4>
                    <div className="mt-2 text-2xl font-bold text-green-600">28%</div>
                    <p className="text-sm text-gray-600">Market Share</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-medium text-gray-800">Asia Pacific</h4>
                    <div className="mt-2 text-2xl font-bold text-purple-600">25%</div>
                    <p className="text-sm text-gray-600">Market Share</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="text-lg font-medium text-gray-800">Rest of World</h4>
                    <div className="mt-2 text-2xl font-bold text-red-600">12%</div>
                    <p className="text-sm text-gray-600">Market Share</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default insights
