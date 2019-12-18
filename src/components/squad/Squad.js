import React from 'react';
import styled from 'styled-components';
import { Title } from '../';
import translations from '../../utils/en.json';
import PokeCard from './pokecard/PokeCard';

const SquadWrapper = styled.div`
  height: 32rem;
  display: flex;
`;

const Squad = ({ squad, setSquad }) => {
  const removeSquadItem = name => {
    setSquad(squad.filter(item => !name.includes(item.name.name)));
  };

  return (
    <>
      <Title>{translations.SELECTED_SQUAD}</Title>
      <SquadWrapper>
        {squad.map(item => {
          return <PokeCard onClick={removeSquadItem} key={item.name} item={item} />;
        })}
      </SquadWrapper>
    </>
  );
};

export default Squad;
