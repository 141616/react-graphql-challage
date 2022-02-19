import * as React from "react";
import { useLaunchNextQuery } from "../../generated/graphql";

const NextLaunchContainer = () => {
  const { data, error, loading } = useLaunchNextQuery();

  if (loading) {
    return null;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const launch = data.launchNext;

  return (
    <div className="next-launch-container" style={{ textAlign: "center" }}>
      <h1>Next Launch</h1>
      <p>{launch?.mission_name}</p>
      <p>{launch?.launch_date_local}</p>
    </div>
  );
};

export default NextLaunchContainer;
