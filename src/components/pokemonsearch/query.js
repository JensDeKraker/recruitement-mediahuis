import gql from 'graphql-tag';

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    Pokemons(first: 151) {
      id
      name
    }
  }
`;
