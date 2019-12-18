import React from 'react';
import styled from 'styled-components';
import { StatsTitle } from '../StatsTitle';
import { GENERAL } from '../../../utils/_colors';
import translations from '../../../utils/en.json';

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5rem 5rem 5rem;
  grid-gap: 0rem 4.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
      color: ${GENERAL.YELLOW};
      font-size: 1.4rem;
      text-transform: uppercase;

      &:last-child {
        color: ${GENERAL.BLUE};
        font-size: 3.5rem;
        margin: 0 0 0 0.5rem;
      }
    }
  }
`;

const Moves = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const Move = styled.div`
  padding: 0.5rem 3.5rem;
  border: 0.1rem solid ${GENERAL.BLUE};
  color: ${GENERAL.BLUE};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

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
      <StatsTitle>{translations.STATS}</StatsTitle>
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
        {selectedMoves.map(move => {
          return (
            <Move onClick={() => removeMove(move.name)} key={move.name}>
              <span>{move.learnMethod}</span>
              <span>{move.name}</span>
            </Move>
          );
        })}
      </Moves>
    </div>
  );
};

export default PokemonStats;
