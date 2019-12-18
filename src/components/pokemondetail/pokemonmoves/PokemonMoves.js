import React, { useEffect, useState, useMemo } from 'react';
import { AllMovesContainer, MethodContainer, Text, MovesContainer } from './pokemonmoves.styled';

const PokemonMoves = ({ data, setSelectedMoves, selectedMoves }) => {
  const { moves } = data.Pokemon;
  const [activeMethod, setActiveMethod] = useState('');
  useEffect(() => setActiveMethod(activeMethod), [activeMethod]);

  const allAvailableMethods = useMemo(() => moves.reduce((accumulator, move) => (!accumulator.includes(move.learnMethod) ? [...accumulator, move.learnMethod] : accumulator), []), [moves]);

  const handleClick = name => {
    const isDuplicate = selectedMoves.find(move => name.name.includes(move.name));
    if (!isDuplicate && selectedMoves.length < 4) setSelectedMoves([...selectedMoves, name]);
  };

  return (
    <AllMovesContainer>
      <MethodContainer>
        {allAvailableMethods.map(method => (
          <Text key={method} isActive={method === activeMethod} onClick={() => setActiveMethod(method)}>
            {method}
          </Text>
        ))}
      </MethodContainer>
      <MovesContainer>
        {moves
          .filter(move => move.learnMethod === activeMethod)
          .map(move => (
            <p key={move.name} onClick={() => handleClick(move)}>
              {move.name}
            </p>
          ))}
      </MovesContainer>
    </AllMovesContainer>
  );
};

export default PokemonMoves;
