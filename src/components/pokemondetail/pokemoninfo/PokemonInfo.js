import React from 'react';
import styled from 'styled-components';
import translations from '../../../utils/en.json';
import { GENERAL } from '../../../utils/_colors.js';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 2rem;
    color: ${GENERAL.BLUE};
    text-transform: uppercase;
    margin: 0;
  }

  button {
    padding: 1rem 3rem;
    background-color: ${GENERAL.BLUE};
    color: ${GENERAL.WHITE};
    text-transform: uppercase;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

const PokemonInfo = ({ data, onSave }) => {
  const { name, image } = data.Pokemon;
  return (
    <InfoContainer>
      <img src={image} alt={name} />
      <p>{name}</p>
      <button onClick={() => onSave(data.Pokemon)}>{translations.SAVE_POKEMON}</button>
    </InfoContainer>
  );
};

export default PokemonInfo;
