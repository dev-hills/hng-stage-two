import ReactPlayer from "react-player";

type TrailerProps = {
  videoKey: string;
  height?: string;
  width?: string;
};

const Trailer = ({ videoKey, height, width }: TrailerProps) => {
  const videoId = videoKey; // Replace with your YouTube video ID

  return (
    <div className="rounded-[20px]">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width={width}
        height={height}
        controls={true}
        playing={true} // Use playing prop to enable autoplay
        className="rounded-[20px]"
      />
    </div>
  );
};

export default Trailer;
