import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 2rem;
`;

const TableContent= styled.table``
const TableBody= styled.tbody``
const Tabletr= styled.tr`
    color: #aaaaaa;

`
const Tableth= styled.th`
    color: white;
`
const Tabletd= styled.td`
    padding: 0.5rem 3rem;
    left: 2rem;
`

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

const Table = ({ countries , query }) => {
    return (
        <Container>
            <TableContent>
                <TableBody>
                    <Tabletr>
                       <Tableth>Country</Tableth> 
                       <Tableth>Code</Tableth> 
                       <Tableth>Flag</Tableth>
                       <Tableth>Actions</Tableth>
                    </Tabletr>
                    {countries.filter(country=>country.first_name.toLowerCase().includes(query)).map((item) => (
                        <Tabletr key={item.id}>
                            <Tabletd>{item.first_name}</Tabletd>
                            <Tabletd>{item.last_name}</Tabletd>
                            <Tabletd>{item.email}</Tabletd>
                            <Tabletd>
                                <Buttons>
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </Buttons>
                            </Tabletd>
                        </Tabletr>
                    ))}
                </TableBody>
            </TableContent>
        </Container>
    )
}

export default Table