import { gql } from "@apollo/client";

export const RICK_MORTY = gql`
    query Characters($page: Int!){
        characters(page: $page){
            info {
                count
            }
            results{
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