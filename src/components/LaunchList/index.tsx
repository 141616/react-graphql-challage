import * as React from "react";
import { useLaunchesPastQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";

const LaunchListContainer = () => {
  const [loadingMore, setLoadingMore] = React.useState<boolean>(false);
  const { data, error, loading, fetchMore } = useLaunchesPastQuery({
    variables: {
      offset: 0,
    },
  });

  const handleFetchMore = async () => {
    setLoadingMore(true);
    await fetchMore({
      variables: {
        offset: data?.launchesPast?.length,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        return Object.assign({}, previousResult, {
          launchesPast: [
            ...(previousResult.launchesPast || []),
            ...(fetchMoreResult.launchesPast || []),
          ],
        });
      },
    });
    setLoadingMore(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <LaunchList data={data} />
      <button className="load-more" onClick={handleFetchMore}>
        {loadingMore ? "Loading" : "Load more"}
      </button>
    </div>
  );
};

export default LaunchListContainer;
