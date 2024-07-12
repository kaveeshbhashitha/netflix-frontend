import React from 'react';
import PropTypes from 'prop-types';

const VideoGallery = ({ videoId, height = 'auto', width = 'auto' }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  return (
    <div>
      <iframe
        height={height}
        width={width}
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

VideoGallery.propTypes = {
  videoId: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default VideoGallery;
