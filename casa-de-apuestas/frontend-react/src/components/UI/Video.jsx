
function Video() {
  return (
      <>
        <div style={{ opacity: 0.3 }}>
          <video className="object-fit: contain" autoPlay loop muted id="video">
          <source src="/videos/video-ok.mp4" type="video/mp4" />
        </video>
      </div>
      </>
  );
}

export default Video;
