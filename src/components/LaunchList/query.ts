import gql from "graphql-tag";

export const QUERY_LAUNCHS_PAST = gql`
  query launchesPast($offset: Int) {
    launchesPast(offset: $offset, limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      launch_success
      details
    }
  }
`;
