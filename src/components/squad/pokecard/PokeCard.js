import React from 'react';
import styled from 'styled-components';
import { POKEMON_TYPES, GENERAL } from '../../../utils/_colors';

const PokeCardContainer = styled.div`
  background-color: ${props => props.bgColor || GENERAL.GREY};
  width: 146px;
  height: 290px;
  margin: 0 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  &:last-child {
    margin: 0 0 0 0;
  }

  h2 {
    color: ${GENERAL.WHITE};
    margin: 0 0 5px 0;
  }
`;

const SelectedMove = styled.p`
  padding: 1rem 1.5rem;
  background-color: ${GENERAL.WHITE};
  color: ${GENERAL.BLUE};
  margin: 0 0 5px 0;
  border-radius: 1rem;
`;

const PokeCard = ({ item, onClick }) => {
  return (
    <PokeCardContainer onClick={() => onClick(item.name.name)} bgColor={POKEMON_TYPES[item.type]}>
      <img src={item.image} alt={`${item.name.name}'s`} />
      <h2>{item.name.name}</h2>
      {item.moves && item.moves.map(move => <SelectedMove key={move.name}>{move.name}</SelectedMove>)}
    </PokeCardContainer>
  );
};

export default PokeCard;
