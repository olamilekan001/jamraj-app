import React from "react";

import vid1 from "../videos/vid-1.mp4";
import vid2 from "../videos/vid-2.mp4";
import vid3 from "../videos/vid-3.mp4";
import vid4 from "../videos/vid-4.mp4";
import vid5 from "../videos/vid-5.mp4";
import vid6 from "../videos/vid-6.mp4";
import vid7 from "../videos/vid-7.mp4";
import vid8 from "../videos/vid-8.mp4";
import vid9 from "../videos/vid-9.mp4";

const videos = [
  { id: 1, vid: vid1 },
  { id: 2, vid: vid2 },
  { id: 3, vid: vid3 },
  { id: 4, vid: vid4 },
  { id: 5, vid: vid5 },
  { id: 6, vid: vid6 },
  { id: 7, vid: vid7 },
  { id: 8, vid: vid8 },
  { id: 9, vid: vid9 },
];

const VideoGallerySection = () => {
  return (
    <section className="bg-[#F4F6F8] z-40">
      <div className="custom-space-4">
        <div className="text-center">
          <h1 className="uppercase text-5xl font-bold leading-16">
            our video <span className="text-[rgb(14,239,29)]">gallery</span>
          </h1>
          <div className="grid lg:grid-cols-3 gap-8 z-20">
            {videos.map(({ id, vid, img }) => {
              return (
                <div key={id} className="video-container" id="videoBox">
                  <video
                    src={vid}
                    controls
                    playsInline
                    width="560"
                    height="315"
                    className="h-100"
                    id="video"
                  ></video>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;
