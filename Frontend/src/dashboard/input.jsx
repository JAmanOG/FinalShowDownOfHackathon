import React, { useState } from 'react';
import { Search, ChevronDown, ArrowRight, Globe, Sparkles, Loader2 } from 'lucide-react';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    searchQuery: '',
    platform: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const platforms = [
    { value: 'reddit', label: 'Reddit', icon: '🔴', color: 'from-orange-500 to-red-500' },
    // { value: 'google-trends', label: 'Google Trends', icon: '📈', color: 'from-blue-500 to-green-500' },
    { value: 'quora', label: 'Quora', icon: '❓', color: 'from-red-500 to-pink-500' },
    // { value: 'youtube', label: 'YouTube', icon: '▶', color: 'from-red-600 to-red-700' }
  ];

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError('');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Navigating to dashboard with data:', formData);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      setShowSuccess(false);
    }
  };

  const selectedPlatform = platforms.find(p => p.value === formData.platform);

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="w-full max-w-md relative bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full transform translate-x-16 -translate-y-16 blur-2xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full transform -translate-x-16 translate-y-16 blur-2xl opacity-30" />

        <div className="relative p-6 space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-600" />
                Search Platform
              </h2>
              <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
            </div>
            <p className="text-gray-500 text-sm">
              Discover insights across multiple platforms
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md text-red-700 text-sm animate-shake">
              {error}
            </div>
          )}

          {/* Search input */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000" />
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your search query"
                value={formData.searchQuery}
                onChange={(e) => setFormData(prev => ({ ...prev, searchQuery: e.target.value }))}
                className="w-full px-4 h-12 pr-10 rounded-lg border-2 border-gray-200 bg-white/90 backdrop-blur-sm 
                         transition-all duration-300 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isLoading}
              />
              <Search className="absolute right-3 top-3.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Custom dropdown */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000" />
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full h-12 px-4 rounded-lg border-2 border-gray-200 bg-white/90 backdrop-blur-sm
                       flex items-center justify-between text-left text-gray-700
                       transition-all duration-300 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={isLoading}
            >
              {formData.platform ? (
                <span className="flex items-center gap-3">
                  <span className="text-xl">{platforms.find(p => p.value === formData.platform)?.icon}</span>
                  <span>{platforms.find(p => p.value === formData.platform)?.label}</span>
                </span>
              ) : (
                <span className="text-gray-400">Select a platform</span>
              )}
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                {platforms.map((platform) => (
                  <button
                    key={platform.value}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, platform: platform.value }));
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-xl">{platform.icon}</span>
                    <span className="font-medium">{platform.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={!formData.searchQuery || !formData.platform || isLoading}
            className={`w-full h-12 relative rounded-lg text-white font-medium
                     transition-all duration-500 overflow-hidden
                     ${selectedPlatform 
                       ? `bg-gradient-to-r ${selectedPlatform.color}` 
                       : 'bg-gradient-to-r from-purple-600 to-blue-600'}
                     hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
          >
            <span className={`flex items-center justify-center gap-2 transition-opacity duration-200 
                          ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
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