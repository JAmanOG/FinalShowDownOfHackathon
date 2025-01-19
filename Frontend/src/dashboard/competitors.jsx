import React from 'react'

const competitors = (messageText) => {
    console.log(messageText)
  return (
<div id="competitors" className="py-10 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Competitor Analysis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Fitness Apps</h3>
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                </div>
                <div className="text-sm text-gray-600">
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Market Share: 35%
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Growth Rate: 28%
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Health Blogs</h3>
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                </div>
                <div className="text-sm text-gray-600">
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Market Share: 25%
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Growth Rate: 15%
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Personal Trainers</h3>
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                </div>
                <div className="text-sm text-gray-600">
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Market Share: 20%
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Growth Rate: 22%
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Healthcare Providers</h3>
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                </div>
                <div className="text-sm text-gray-600">
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Market Share: 20%
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Growth Rate: 12%
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Our Key Differentiators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center mb-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                            </svg>
                        </div>
                        <h4 className="ml-3 text-lg font-medium text-gray-800">Personalized Approach</h4>
                    </div>
                    <p className="text-sm text-gray-600">Tailored solutions for individual health needs</p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center mb-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <h4 className="ml-3 text-lg font-medium text-gray-800">Mental Health Focus</h4>
                    </div>
                    <p className="text-sm text-gray-600">Comprehensive mental wellness support</p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center mb-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                            </svg>
                        </div>
                        <h4 className="ml-3 text-lg font-medium text-gray-800">Prevention First</h4>
                    </div>
                    <p className="text-sm text-gray-600">Early intervention and preventive care</p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center mb-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                            </svg>
                        </div>
                        <h4 className="ml-3 text-lg font-medium text-gray-800">Tech Integration</h4>
                    </div>
                    <p className="text-sm text-gray-600">Advanced digital health solutions</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default competitors
