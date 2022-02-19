import gql from "graphql-tag";

export const QUERY_NEXT_LAUNCH = gql`
  query launchNext {
    launchNext {
      launch_date_local
      id
      launch_site {
        site_name_long
      }
      launch_success
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      details
      mission_name
    }
  }
`;
