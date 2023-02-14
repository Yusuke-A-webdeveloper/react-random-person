import styled from 'styled-components';
import Main from './components/Main';

function App() {
  return (
    <Wrapper>
      <Main />
      <div className="top"></div>
      <div className="bottom"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  .top {
    position: relative;
    background: var(--bg-dark);
    width: 100%;
    height: 50%;
  }
  .bottom {
    position: relative;
    background: var(--bg-grey);
    width: 100%;
    height: 50%;
  }
`;

export default App;
