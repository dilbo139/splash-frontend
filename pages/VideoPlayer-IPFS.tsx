import React, { useState, useEffect } from "react";
import IPFS from "ipfs-http-client";

const ipfs = IPFS({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

const VideoPlayer: React.FC<{ cid: string }> = ({ cid }) => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    (async () => {
      const videoFile = await ipfs.cat(cid);
      const videoBlob = new Blob([videoFile]);
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoUrl);
    })();
  }, [cid]);

  return (
    <div>
      {videoUrl ? <video controls src={videoUrl} /> : <p>Loading video...</p>}
    </div>
  );
};

export default VideoPlayer;
