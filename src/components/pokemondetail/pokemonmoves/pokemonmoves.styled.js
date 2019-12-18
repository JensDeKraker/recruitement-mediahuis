import styled from 'styled-components';
import { GENERAL } from '../../../utils/_colors';

export const AllMovesContainer = styled.div`
  margin: 0 0 0 10px;
`;

export const MethodContainer = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`;

export const Text = styled.p`
  color: ${GENERAL.YELLOW};
  margin: 0 0.5rem 0 0;
  text-transform: uppercase;
  font-size: 1.1rem;
  cursor: pointer;
  border-bottom: 1px solid ${props => (props.isActive ? GENERAL.YELLOW : 'transparent')};
`;

export const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  overflow-y: scroll;

  p {
    margin: 0 0 5px 0;
    color: ${GENERAL.BLUE};
    cursor: pointer;
  }
`;
