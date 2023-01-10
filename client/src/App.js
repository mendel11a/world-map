import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Map from "./pages/Map";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
          <Routes>
                <Route path="/">
                  <Route index element={<Countries />} />
                  <Route path="countries" element={<Countries />} />
                  <Route path="map" element={<Map />} />
                </Route>
              </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
