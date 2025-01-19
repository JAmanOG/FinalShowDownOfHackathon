import React from 'react'

const competitors = ({ competitors }) => {
    const parseCompetitorsData = (data) => {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const categories = [];
        let currentCategory = null;

        lines.forEach(line => {
            if (line.startsWith('- **')) {
                if (currentCategory) {
                    categories.push(currentCategory);
                }
                currentCategory = {
                    name: line.match(/\*\*(.*?)\*\*/)[1],
                    details: []
                };
            } else if (line.startsWith('  - ')) {
                const detail = line.replace('  - ', '');
                currentCategory.details.push(detail);
            }
        });

        if (currentCategory) {
            categories.push(currentCategory);
        }

        return categories;
    };

    const competitorsData = parseCompetitorsData(competitors);

    return (
        <div id="competitors" className="py-10 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Competitor Analysis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {competitorsData.map((category, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <div className="text-sm text-gray-600">
                                {category.details.map((detail, detailIndex) => (
                                    <div key={detailIndex} className="flex items-center mb-2">
                                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                                        {detail}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default competitors;