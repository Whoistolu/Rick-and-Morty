import { gql } from "@apollo/client";

export const RICK_MORTY = gql`
    query {
        characters(page: 2) {
            info {
                count
            }
            results {
                name
                image
                status
                id
            }
        }
        location(id: 1) {
            id
        }
        episodesByIds(ids: [1, 2]) {
            id
        }
    }
`;