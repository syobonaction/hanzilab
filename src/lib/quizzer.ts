// get flashcard content from Hygraph
import { gql, request } from 'graphql-request';
//const graphqlAPI = process.env.HYGRAPH_PROJECT_API;
const graphqlAPI =
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cle2vhav24zro01um3q2ld7tc/master';
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
