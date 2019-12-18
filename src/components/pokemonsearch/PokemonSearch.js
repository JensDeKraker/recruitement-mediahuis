import React from 'react';
import { useQuery } from 'react-apollo';
import Downshift from 'downshift';
import { GET_POKEMON } from './query';
import { SearchContainer, SearchInput, PokemonName } from './pokemonsearch.styled';
import { Title } from '../';
import translations from '../../utils/en.json';

const PokemonSearch = () => {
  const { loading, error, data } = useQuery(GET_POKEMON);

  if (loading) return <p>{translations.LOADING}</p>;
  if (error)
    return (
      <p>
        ${translations.ERROR} ${error.message}
      </p>
    );
  return (
    <SearchContainer>
      <Title>{translations.SELECT_POKEMON}</Title>
      <Downshift onChange={pokemon => console.log(pokemon)} itemToString={item => (item ? item.name : '')}>
        {({ getInputProps, getItemProps, inputValue }) => (
          <div>
            <SearchInput placeholder='TYPE TO FILTER' {...getInputProps()} />
            {data &&
              data.Pokemons.filter(pokemon => !inputValue || pokemon.name.includes(inputValue)).map((item, index) => (
                <PokemonName
                  {...getItemProps({
                    key: item.name,
                    index,
                    item,
                  })}
                >
                  {item.name}
                </PokemonName>
              ))}
          </div>
        )}
      </Downshift>
    </SearchContainer>
  );
};

export default PokemonSearch;
