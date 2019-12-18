import React from 'react';
import styled from 'styled-components';
import { StatsTitle } from '../StatsTitle';
import { GENERAL } from '../../../utils/_colors';
import translations from '../../../utils/en.json';

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 50px 50px;
  grid-gap: 0px 45px;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
      color: ${GENERAL.YELLOW};
      font-size: 14px;
      text-transform: uppercase;

      &:last-child {
        color: ${GENERAL.BLUE};
        font-size: 35px;
        margin: 0 0 0 5px;
      }
    }
  }
`;

const Moves = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const Move = styled.div`
  padding: 5px 35px;
  border: 1px solid ${GENERAL.BLUE};
  color: ${GENERAL.BLUE};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 12px;

  span {
    color: ${GENERAL.YELLOW};

    &:last-child {
      color: ${GENERAL.BLUE};
    }
  }
`;

const PokemonStats = ({ data, selectedMoves, removeMove }) => {
  const { stats } = data.Pokemon;
  return (
    <div>
      <StatsTitle>STATS</StatsTitle>
      <Stats>
        {stats.map(stat => (
          <div key={stat.name}>
            <p>{stat.name}</p>
            <p>{stat.value}</p>
          </div>
        ))}
      </Stats>
      <StatsTitle>{translations.SELECTED_MOVES}</StatsTitle>
      <Moves>
        {selectedMoves.map(move => (
          <Move onClick={() => removeMove(move)} key={move}>
            <span>{translations.LEVELUP}</span>
            <span>{move}</span>
          </Move>
        ))}
      </Moves>
    </div>
  );
};

export default PokemonStats;
