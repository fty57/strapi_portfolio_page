import { Wrapper } from './styles';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { Heading } from '../../components/Heading';

function Home() {
  return (
    <div className="App">
      <Wrapper>
        <Heading>O texto que eu quero</Heading>
      </Wrapper>
    </div>
  );
}

export default Home;
