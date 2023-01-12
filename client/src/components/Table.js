import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditCountry from './EditCountry';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 2rem;
    padding: 2rem 1rem;
    height: 100%;
    width: 100%;
`;

const TableContent = styled.table``
const TableBody = styled.tbody``
const Tabletr = styled.tr`
    color: #aaaaaa;
`
const Tableth = styled.th`
    color: white;
`
const Tabletd = styled.td`
    padding: 0.5rem 6rem;
    left: 2rem;
`
const Img = styled.img`
    height: 25px;
    width: 40px;
`;


const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Table = ({ countries, query, setOpen }) => {
    const [openEdit, setOpenEdit] = useState(false)
    const [country, setCountry] = useState("")

    const handleDelete = async (name) => {
        try {
            await axios.delete(`/countries/${name}`)
            setOpen(true)
        }
        catch (err) {
            // dispatch(changePictureFailure())
        }
    }

    return (
        <>
            <Container>
                <TableContent>
                    <TableBody>
                        <Tabletr>
                            <Tableth>Country</Tableth>
                            <Tableth>Code</Tableth>
                            <Tableth>Flag</Tableth>
                            <Tableth>Actions</Tableth>
                        </Tabletr>
                        {countries.filter(country => country.name.toLowerCase().includes(query)).map((item) => (
                            <Tabletr key={item.name}>
                                <Tabletd>{item.name}</Tabletd>
                                <Tabletd>{item.code}</Tabletd>
                                <Tabletd>
                                    <Img src={item.flag}></Img></Tabletd>
                                <Tabletd>
                                    <Buttons>
                                        <Button onClick={() => { setOpenEdit(true); setCountry(item.name) }}>Edit</Button>
                                        <Button onClick={() =>  handleDelete(item.name) }>Delete</Button>
                                    </Buttons>
                                </Tabletd>
                            </Tabletr>
                        ))}
                    </TableBody>
                </TableContent>
            </Container>
            {openEdit && <EditCountry setOpen={setOpenEdit} country={country} setUpdate={setOpen} />}
        </>
    )
}

export default Table