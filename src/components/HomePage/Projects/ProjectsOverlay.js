export const LaonDetailsOverlay = ({
  openLaonDetails,
  openLaonDetailsHandler,
}) => {
  return (
    <div
      onClick={openLaonDetailsHandler}
      claition-all duration-500 ${
        openMfonAiDetails ? 'block' : 'hidden'
      }`}
    />
  );
};

export const MPBlogDetailsOverlay = ({
  openMPBlogDetails,
  openMPBlogDetailsHandler,
}) => {
  return (
    <div
      onClick={openMPBlogDetailsHandler}
      className={`fixed top-0 left-0 z-10 w-full h-screen bg-orange-50/50 transition-all duration-500 ${
        openMPBlogDetails ? 'block' : 'hidden'
      }`}
    />
  );
};



export const YoutubeDetailsOverlay = ({
  openYoutubeDetails,
  openYoutubeHandler,
}) => {
  return (
    <div
      onClick={openYoutubeHandler}
      className={`fixed top-0 left-0 z-10 w-full h-screen bg-orange-50/50 transition-all duration-500 ${
        openYoutubeDetails ? 'block' : 'hidden'
      }`}
    />
  );
};
