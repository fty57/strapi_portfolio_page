import { Wrapper } from './styles';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

const Heading = styled.h1`
  color: purple;
`;

const Container = styled.div`
  background: purple;

  ${({ theme, bg }) => css`
    color: ${theme.colors.secondaryBg};
    background: ${bg};
  `}

  ${Heading} {
    color: yellowgreen;
  }
`;

const Container2 = styled(Container).attrs({ as: 'article' })`
  background: blue;

  ${Heading}:hover {
    color: #c77b34;
  }

  &:hover {
    background: pink;
  }
`;

function Home() {
  return (
    <div className="App">
      <Wrapper>
        <Container bg="red">
          <Heading>Hello</Heading>
        </Container>
        <Container2>
          <Heading>Hello</Heading>
        </Container2>
      </Wrapper>
    </div>
  );
}

export default Home;
