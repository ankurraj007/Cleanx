import React from "react";

const Views = () => {
  return (
    <>
      <div className="noto-sans-canadian-aboriginal text-center text-3xl text-black  mt-8">
        See our Cleaning Videos💦🧽
      </div>
      <hr className="mt-4"></hr>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-6">
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/sfpXASLCNwA?si=eMXVMRnH16Lxr7zT"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/S63sTCiCU9Y?si=o6w5TFnyJ-nfxx2T"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/1SJgH80Jvtk?si=DVpKCLRthpeiapBs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/T7P0oq2KtXQ?si=yU0Fb_GoJnmdwbEt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Views;
