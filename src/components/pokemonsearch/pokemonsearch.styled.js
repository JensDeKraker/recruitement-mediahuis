import styled from 'styled-components';
import { GENERAL } from '../../utils/_colors';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 27rem;
  overflow-y: scroll;
  margin: 0 2rem 0 0;
`;

export const SearchInput = styled.input`
  width: 85%;
  padding: 1rem;
  margin: 0 auto;
  border: 0.5rem solid ${GENERAL.BLUE};
  outline: none;
`;

export const PokemonName = styled.p`
  padding: 1rem 1rem 1rem 2.5rem;
  margin: 0.3rem 0;
  border-radius: 1rem;
  text-transform: uppercase;
  color: ${GENERAL.YELLOW};
  background-color: ${GENERAL.BLUE};
  cursor: pointer;

  &:first-child {
    margin-top: 1.5rem;
  }
`;
