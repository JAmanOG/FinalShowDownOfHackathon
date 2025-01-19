import React, { useState } from 'react';
import { Loader2, Search, ArrowRight, Globe, Sparkles } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    searchQuery: '',
    platform: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const navigate = useNavigate();

  

  const platforms = [
    { value: 'reddit', label: 'Reddit', icon: '🔴', color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    // { value: 'google-trends', label: 'Google Trends', icon: '📈', color: 'bg-gradient-to-r from-blue-500 to-green-500' },
    { value: 'quora', label: 'Quora', icon: '❓', color: 'bg-gradient-to-r from-red-500 to-pink-500' },
    // { value: 'youtube', label: 'YouTube', icon: '▶️', color: 'bg-gradient-to-r from-red-600 to-red-700' }
  ];

  const handleInputChange = (e) => {
    setError('');
    setFormData(prev => ({
      ...prev,
      searchQuery: e.target.value
    }));
  };

  const handlePlatformChange = (value) => {
    setError('');
    setFormData(prev => ({
      ...prev,
      platform: value
    }));
    setIsSelectOpen(false);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError('');
      setShowSuccess(false);

      // Simulate API call
      navigate('/loading', { state: { searchQuery: formData.searchQuery, platform: formData.platform } });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      setShowSuccess(false);
    }
  };

  const selectedPlatform = platforms.find(p => p.value === formData.platform);

  console.log(selectedPlatform);  

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="w-full max-w-md relative bg-white rounded-lg shadow-md">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full transform translate-x-16 -translate-y-16 blur-2xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full transform -translate-x-16 translate-y-16 blur-2xl opacity-30" />

        <div className="relative p-6 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-600" />
                Search Platform
              </h2>
              <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
            </div>
            <p className="text-gray-500">
              Discover insights across multiple platforms
            </p>
          </div>

          <div className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg animate-shake">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000" />
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your search query"
                    value={formData.searchQuery}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full pr-10 pl-4 h-12 border-2 rounded-lg bg-white/90 backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none disabled:opacity-50"
                  />
                  <Search className="absolute right-3 top-3.5 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000" />
                <div className="relative">
                  <button
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    disabled={isLoading}
                    className="w-full h-12 px-4 bg-white/90 backdrop-blur-sm border-2 rounded-lg flex items-center justify-between transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                  >
                    {selectedPlatform ? (
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{selectedPlatform.icon}</span>
                        <span className="font-medium">{selectedPlatform.label}</span>
                      </div>
                    ) : (
                      <span className="text-gray-500">Select a platform</span>
                    )}
                    <svg className={`w-4 h-4 transition-transform ${isSelectOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isSelectOpen && (
                    <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border py-1 z-50 max-h-64">
                      {platforms.map((platform) => (
                        <button
                          key={platform.value}
                          onClick={() => handlePlatformChange(platform.value)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{platform.icon}</span>
                            <span className="font-medium">{platform.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            className={`w-full h-12 relative overflow-hidden transition-all duration-500 rounded-lg text-white
              ${selectedPlatform ? selectedPlatform.color : 'bg-gradient-to-r from-purple-600 to-blue-600'}
              hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={handleSubmit}
            disabled={!formData.searchQuery || !formData.platform || isLoading}
          >
            <span className={`flex items-center justify-center gap-2 transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              {showSuccess ? 'Success!' : 'Search Now'}
              <ArrowRight className="w-5 h-5" />
            </span>
            {isLoading && (
              <span className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-5 h-5 animate-spin" />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;