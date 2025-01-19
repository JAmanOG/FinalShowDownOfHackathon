import React from 'react'

const Trends = () => {
  return (
<div id="trends" className="py-10 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Industry Trends & Patterns</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Health & Wellness Industry Trends</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-800">Mental Health & Self-Care</h4>
                            <div className="mt-2 relative pt-1">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                    <div style="width: 85%" className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                                </div>
                                <p className="text-sm text-gray-600">85% market growth in mental health solutions</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-100 text-purple-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-800">Personalized Healthcare</h4>
                            <div className="mt-2 relative pt-1">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                                    <div style="width: 75%" className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"></div>
                                </div>
                                <p className="text-sm text-gray-600">75% users prefer personalized health plans</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 text-green-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-800">Digital Health Platforms</h4>
                            <div className="mt-2 relative pt-1">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                                    <div style="width: 90%" className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
                                </div>
                                <p className="text-sm text-gray-600">90% increase in digital health adoption</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">User Behavior Patterns</h3>
                
                <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-700">Health Content Interest</span>
                            <span className="text-2xl font-bold text-green-600">↑68%</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">Year-over-year growth in content engagement</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-700">Personalization Demand</span>
                            <span className="text-2xl font-bold text-blue-600">↑82%</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">Users seeking personalized health advice</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-700">Digital Tool Adoption</span>
                            <span className="text-2xl font-bold text-purple-600">↑75%</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">Increase in health app usage</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Environmental Health Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-medium text-gray-700">Sustainability Focus</span>
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                    </div>
                    <p className="text-sm text-gray-600">70% users prioritize eco-friendly health solutions</p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-medium text-gray-700">Green Practices</span>
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
                    </div>
                    <p className="text-sm text-gray-600">85% increase in sustainable wellness products</p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-medium text-gray-700">Environmental Health</span>
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <p className="text-sm text-gray-600">90% concerned about environmental health impact</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Trends
