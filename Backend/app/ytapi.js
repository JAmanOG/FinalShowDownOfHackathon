const axios = require('axios');

// Function to fetch search results based on query
const searchVideos = async (query) => {
  const API_KEY = 'AIzaSyCsg8OuEdW3h1kwRIDI-SIkGenrumDn-Vk';
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`;
  
  try {
    const response = await axios.get(url);
    const videoIds = response.data.items.map(item => item.id.videoId);
    return videoIds;
  } catch (error) {
    console.error("Error searching for videos:", error);
    return [];
  }
};

// Function to fetch detailed info about the videos
const getVideoDetails = async (videoIds) => {
  const API_KEY = 'AIzaSyCsg8OuEdW3h1kwRIDI-SIkGenrumDn-Vk';
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds.join(',')}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching video details:", error);
    return [];
  }
};

// Function to search for fitness videos and sort by view count
const getFitnessVideosSortedByViews = async (input) => {
  // Step 1: Search for fitness videos
  const videoIds = await searchVideos(input);

  // Step 2: Get video details (including view count)
  const videoDetails = await getVideoDetails(videoIds);

  // Step 3: Sort the videos by view count
  const sortedVideos = videoDetails.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount);

  // Return sorted videos
  return sortedVideos.map(video => ({
    title: video.snippet.title,
    description: video.snippet.description,
    viewCount: video.statistics.viewCount,
    channelTitle: video.snippet.channelTitle,
    thumbnailUrl: video.snippet.thumbnails.high.url,
    videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
  }));
};

// Call the function
// getFitnessVideosSortedByViews()
//   .then(sortedVideos => {
//     console.log('Sorted Fitness Videos by View Count:', sortedVideos);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });

module.exports = {
  searchVideos,
  getVideoDetails,
  getFitnessVideosSortedByViews
};
