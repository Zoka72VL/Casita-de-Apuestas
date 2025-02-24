function Video() {
  return (
      <div>
        <video className="object-fit: contain" autoPlay loop muted id="video">
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default Video;
