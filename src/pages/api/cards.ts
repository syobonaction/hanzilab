// get flashcard content from Hygraph
import { gql, request } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_PROJECT_API;

// getting post comments
export const getCards = async (id: string) => {
  const query = gql`
    query Cards($id: ID!) {
      cards(where: { id: $id }) {
        createdAt
        id
        translation
        prefix
        publishedAt
        suffix
        target
        updatedAt
        word
      }
    }
  `;
  const result = await request(graphqlAPI, query, { id });
  return result.cards;
};
