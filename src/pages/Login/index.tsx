import React from 'react';

import { Container } from './styles';
import {FaSpotify} from 'react-icons/fa';

const Login: React.FC = () => {

  return(
    <Container>
      <div>
        <h1>
          <FaSpotify size={40} color="#FFF" />
          Super Spotify
        </h1>
        <p>Bem-vindo ao Super Spotify para ter acesso a nossa plataforma é necessario fazer login com a sua conta do Spotify</p>
        <button>
          <FaSpotify size={40} color="#000" />
          Single Sign On do Spotify
        </button>
      </div>
    </Container>
  );
}

export default Login;
