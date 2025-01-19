import React from 'react'

const engagement = (engagement) => {
    console.log(engagement)
  return (
<div id="engagement" className="py-10 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Engagement Analysis</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Effective Hooks</h3>
                <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                        <blockquote className="italic text-gray-600">
                            "I try to separate from myself and see myself when I suffer mental challenges."
                        </blockquote>
                        <div className="mt-2 flex items-center">
                            <div className="flex text-yellow-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <span className="ml-2 text-sm text-gray-600">High engagement rate</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg border border-gray-100">
                        <blockquote className="italic text-gray-600">
                            "The best way to stay healthy is to maintain a balanced lifestyle."
                        </blockquote>
                        <div className="mt-2 flex items-center">
                            <div className="flex text-yellow-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <span className="ml-2 text-sm text-gray-600">Most shared</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Call-to-Action Performance</h3>
                <div className="space-y-4">
                    <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">"Get out and walk..."</span>
                            <span className="text-sm font-medium text-green-600">78% conversion</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                            <div style={{width: "78%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                        </div>
                    </div>

                    <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">"Schedule routine check-ups..."</span>
                            <span className="text-sm font-medium text-blue-600">65% conversion</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                            <div style={{width: "65%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                        </div>
                    </div>

                    <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">"Don't spoil your health..."</span>
                            <span className="text-sm font-medium text-purple-600">55% conversion</span>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                            <div style={{width: "55%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Content Format Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-medium text-gray-700">Personal Stories</span>
                        <span className="text-green-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">Highest engagement rate among all content formats</p>
                    <div className="mt-4">
                        <div className="text-2xl font-bold text-green-600">89%</div>
                        <div className="text-sm text-gray-500">User retention rate</div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-medium text-gray-700">Listicles</span>
                        <span className="text-blue-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                            </svg>
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">Most shared content format across platforms</p>
                    <div className="mt-4">
                        <div className="text-2xl font-bold text-blue-600">75%</div>
                        <div className="text-sm text-gray-500">Share rate</div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-medium text-gray-700">Infographics</span>
                        <span className="text-purple-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">Highest information retention rate</p>
                    <div className="mt-4">
                        <div className="text-2xl font-bold text-purple-600">82%</div>
                        <div className="text-sm text-gray-500">Comprehension rate</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default engagement
