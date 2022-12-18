import { gql } from "@apollo/client";

export const RICK_MORTY = gql`
    query {
        characters {
            info {
                count
            }
            results (page: 2, perPage: 20){
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