import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import World from "../img/world.jpg";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color:#202020;
  height: 4rem;
  font-size: 22px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  font-weight: bold;
  height: 100%;
  padding: 0rem 1.3rem;
  position: relative;
  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;

`;

const Img = styled.img`
  height: 25px;
  border-radius: 50%;
`;



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
                <Img src={World} />
                World Map
            </Logo>
          </Link>
        </Wrapper>
    </Container>
  )
}

export default Navbar