import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        gender
        species
        image
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

export { GET_CHARACTERS };
