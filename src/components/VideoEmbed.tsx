import React from 'react';

interface VideoEmbedProps {
  url: string;
  title?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ url, title = "Project demo video" }) => {
  return (
    <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={url}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default VideoEmbed;