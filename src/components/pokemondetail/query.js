import gql from 'graphql-tag';

export const GET_POKEMON_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
    Pokemon(name: $name) {
      name
      image
      types(first: 0) {
        name
      }
      stats {
        name
        value
      }
      moves {
        name
        learnMethod
      }
    }
  }
`;
