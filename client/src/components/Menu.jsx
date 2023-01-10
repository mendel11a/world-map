import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Container = styled.div`
    position: relative;
    flex: 1;
    background-color:#202020;
    height: 100vh;
    color: white;
    font-size: 14px;
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
    position: absolute;
    top: 30%;
    padding: 18px 26px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 15px 0px;

  &:hover {
    background-color: #373737;
  }
`;



const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Link to="/countries" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <HomeIcon />
                        Countries
                    </Item>
                </Link>
                <Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <LanguageOutlinedIcon />
                        Map
                    </Item>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Menu