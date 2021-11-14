import styled from "@emotion/styled";
import UrlShortener from "./pages/UrlShortener";
import { RestUrlShortenerRepository } from "./pages/UrlShortener/url-shortener-repository/rest-url-shortener-repository";
import UrlShortenerRepositoryContext from "./pages/UrlShortener/url-shortener-repository/UrlShortenerRepositoryContext";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

function App() {
  const urlShortenerRepository = new RestUrlShortenerRepository();

  return (
    <Div>
      <UrlShortenerRepositoryContext.Provider value={urlShortenerRepository}>
        <UrlShortener />
      </UrlShortenerRepositoryContext.Provider>
    </Div>
  );
}

export default App;
