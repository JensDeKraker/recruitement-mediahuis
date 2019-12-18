import gql from 'graphql-tag';

export const GET_POKEMON = gql`
Pokemons(first: 151) {
  id
  name
}
`;
