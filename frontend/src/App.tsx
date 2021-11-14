import styled from '@emotion/styled';

const Button = styled.button`
  border: none;
  border-radius: 0.375rem;
  padding: 0 1rem;
  background-color: #3865fd;
  color: white;
  height: 2rem;
  font-size: 16px;
`;

const Div = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Div>
      <Button>Salut</Button>
    </Div>
  );
}

export default App;
