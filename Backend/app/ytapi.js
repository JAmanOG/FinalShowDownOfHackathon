const axios = require('axios');

// Function to fetch search results based on query
// Function to fetch search results based on query
const searchVideos = async (query) => {
  const API_KEY = 'AIzaSyCsg8OuEdW3h1kwRIDI-SIkGenrumDn-Vk';
  const maxResults = 20; // Maximum allowed by YouTube API
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=${maxResults}&key=${API_KEY}`;
  
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
// const getFitnessVideosSortedByViews = async (input) => {
//   try {
//     console.log('Input type:', typeof input);
//     console.log('Input value:', input);

//     if (!Array.isArray(input) || input.length === 0) {
//       throw new Error("Input is not an array or is empty.");
//     }

//     const allVideoIds = (
//       await Promise.all(input.map(searchVideos))
//     ).flat();
//     const videoDetails = await getVideoDetails(allVideoIds);

//     const sortedVideos = videoDetails.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount);

//     return sortedVideos.map(video => ({
//       title: video.snippet.title,
//       description: video.snippet.description,
//       viewCount: parseInt(video.statistics.viewCount, 20),
//       channelTitle: video.snippet.channelTitle,
//       thumbnailUrl: video.snippet.thumbnails.high.url,
//       videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
//     }));
//   } catch (error) {
//     console.error("Error fetching fitness videos:", error.message);
//     return [];
//   }
// };

// Function to search for fitness videos and sort by views and likes
const getFitnessVideosSortedByViews = async (input) => {
  try {
    console.log('Input type:', typeof input);
    console.log('Input value:', input);

    if (!Array.isArray(input) || input.length === 0) {
      throw new Error("Input is not an array or is empty.");
    }

    const allVideoIds = (
      await Promise.all(input.map(searchVideos))
    ).flat();
    const videoDetails = await getVideoDetails(allVideoIds);

    // Calculate engagement score based on views and likes
    const sortedVideos = videoDetails.sort((a, b) => {
      const aViews = parseInt(a.statistics.viewCount) || 0;
      const bViews = parseInt(b.statistics.viewCount) || 0;
      const aLikes = parseInt(a.statistics.likeCount) || 0;
      const bLikes = parseInt(b.statistics.likeCount) || 0;
      
      // Create weighted score (70% views, 30% likes)
      const aScore = (aViews * 0.7) + (aLikes * 0.3);
      const bScore = (bViews * 0.7) + (bLikes * 0.3);
      
      return bScore - aScore;
    });

    return sortedVideos.map(video => ({
      title: video.snippet.title,
      description: video.snippet.description, 
      viewCount: parseInt(video.statistics.viewCount, 10),
      likeCount: parseInt(video.statistics.likeCount, 10) || 0,
      channelTitle: video.snippet.channelTitle,
      thumbnailUrl: video.snippet.thumbnails.high.url,
      videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
      engagementScore: (
        parseInt(video.statistics.viewCount, 10) * 0.7 + 
        (parseInt(video.statistics.likeCount, 10) || 0) * 0.3
      ).toFixed(2)
    }));
  } catch (error) {
    console.error("Error fetching fitness videos:", error.message);
    return [];
  }
};

module.exports = {
  searchVideos,
  getVideoDetails,
  getFitnessVideosSortedByViews
};
