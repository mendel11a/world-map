import React from 'react'
import styled from 'styled-components'
import Table from "../components/Table";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState, useEffect } from 'react';
import axios from "axios";

const Container = styled.div`
    position: sticky;
    top: 0;
    height: 100%;
    width: 100%;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1.3rem;
  position: relative;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  position: absolute;
  left: 0rem;
  right: 0rem;
  margin: auto;
  margin-top: 1rem;
  padding: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: white;
  `;

const Input = styled.input`
  color: white;
  border: none;
  background-color: transparent;
  outline: none;
`;

const Countries = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`/countries?c=${query}`);
          setData(res.data);
          setOpen(false);
        };
        fetchData();
      }, [query,open]);


    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search country" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                    <SearchOutlinedIcon cursor="pointer" />
                </Search>
            </Wrapper>
            <Table countries={data} query={query} setOpen={setOpen} setCountries={setData}/>
        </Container>
    )
}

export default Countries