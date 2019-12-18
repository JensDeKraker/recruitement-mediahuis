import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './graphql';
import { PokemonDetail, PokemonSearch, Squad } from './components';
import { Container, Logo, Pokedex, Upper } from './app.styled';

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [squad, setSquad] = useState([]);
  return (
    <ApolloProvider client={client}>
      <Container>
        <Logo src='https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest/scale-to-width-down/639?cb=20170115063554' />
        <Pokedex>
          <Upper>
            <PokemonSearch />
            <PokemonDetail />
          </Upper>
          <Squad />
        </Pokedex>
      </Container>
    </ApolloProvider>
  );
};

export default App;
