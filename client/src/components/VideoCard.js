import React from "react";

const VideoCard = () => {
  return (
    <div className="col-md-6 p-3">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/6Z-fj9yu2kU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h4 className="mt-3">Title</h4>
    </div>
  );
};

export default VideoCard;
