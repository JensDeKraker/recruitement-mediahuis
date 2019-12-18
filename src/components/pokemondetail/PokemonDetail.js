import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { GET_POKEMON_BY_NAME } from './query';
import translations from '../../utils/en.json';
import Pokemoninfo from './pokemoninfo/PokemonInfo';
import PokemonStats from './pokemonstats/PokemonStats';
import { PokemonDetailContainer } from './pokemondetail.styled';
import PokemonMoves from './pokemonmoves/PokemonMoves';

const PokemonDetail = ({ selectedPokemon, squad, setSquad }) => {
  const { name } = selectedPokemon;
  const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: name },
  });
  const [selectedMoves, setSelectedMoves] = useState([]);

  useEffect(() => {
    setSelectedMoves([]);
  }, [selectedPokemon]);

  const handleSave = pokemon => {
    if (squad.length < 6) setSquad([...squad, pokemon]);
  };

  const removeMove = name => {
    setSelectedMoves(selectedMoves.filter(move => !name.includes(move)));
  };

  if (loading) return <p>{translations.LOADING}</p>;
  if (error)
    return (
      <p>
        ${translations.ERROR} ${error.message}
      </p>
    );
  return (
    <PokemonDetailContainer>
      <Pokemoninfo data={data} onSave={handleSave} />
      <PokemonStats data={data} selectedMoves={selectedMoves} removeMove={removeMove} />
      <PokemonMoves data={data} selectedMoves={selectedMoves} setSelectedMoves={setSelectedMoves} />
    </PokemonDetailContainer>
  );
};

export default PokemonDetail;
