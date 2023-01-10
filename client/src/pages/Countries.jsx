import React from 'react'
import styled from 'styled-components'
import Table from "../components/Table";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Users } from "../users";

const Container = styled.div`
    position: sticky;
    top: 0;
    height: 2rem;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0rem 1.3rem;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0rem;
  right: 0rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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



///////////////////////SEARCH ON A DATATABLE

// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["first_name", "last_name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };
// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={Search(Users)} />}
//   </div>
// );
// }



const Countries = () => {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            setUsers(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search country" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                    <SearchOutlinedIcon cursor="pointer" />
                </Search>
            </Wrapper>
            <Table countries={Users} query={query}/>
        </Container>
    )
}

export default Countries