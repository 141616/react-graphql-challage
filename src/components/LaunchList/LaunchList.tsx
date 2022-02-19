import * as React from "react";
import { LaunchesPastQuery } from "../../generated/graphql";

const replace2EmbedUrl = (url: string) =>
  url
    .replace("youtu.be/", "www.youtube.com/embed/")
    .replace("www.youtube.com/watch", "www.youtube.com/embed");

export const EmbedYouTubeVideo = ({
  src,
}: {
  src: string | null | undefined;
}) => {
  if (!src) {
    return null;
  }

  return (
    <iframe
      width="400"
      height="300"
      src={replace2EmbedUrl(src)}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

interface Props {
  data: LaunchesPastQuery;
}

const LaunchList: React.FC<Props> = ({ data }) => {
  if (!data.launchesPast) {
    return <div>something error</div>;
  }

  return (
    <div className="launch-list-container">
      <h1>Post Launches</h1>

      <div className="launch-list flex">
        {data.launchesPast.map(
          (launch, i) =>
            !!launch && (
              <div key={`${launch.id}_${i}`} className=" launch-item">
                <EmbedYouTubeVideo src={launch.links?.video_link} />
                <p>{launch.mission_name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default LaunchList;
