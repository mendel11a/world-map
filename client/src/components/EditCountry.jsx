import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70vh;
    height: 70vh;
    top: 0;
    right:13rem;
    position: absolute;
    background-repeat:no-repeat;
    background-size:contain;
    background-image: url(https://pbs.twimg.com/profile_images/587949417577066499/3uCD4xxY_400x400.jpg);
    z-index: 9;
    border-radius: 50%;
`
const Wrapper = styled.div`
    height: 20rem;
    width: 20rem;
    background-color:#16345c;
    color: white;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    position: relative;
    border-radius: 1rem;
`
const Close = styled.div`
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;
    cursor: pointer;
`
const Title = styled.h1`
    text-align: center;
`
const Input = styled.input`
    border: 1px solid #373737;
    color: white;
    border-radius: 0.19rem;
    padding: 0.6rem;
    background-color: transparent;
    outline: none;
`
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #373737;
  color: #aaaaaa;
`;

const Label = styled.label`
    font-size: 0.9rem;
`

const EditCountry = ({ setOpen, country, setUpdate }) => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({})

    
    const handleChange = e => {
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        try{
            await axios.put(`/countries/${country}`,
                {...inputs}
            )
            setOpen(false)
            setUpdate(true)
            navigate('/')
        }
        catch(err){
        }
    }

    return (
        <Container>
            <Wrapper>
                <Close onClick={() => setOpen(false)}>X</Close>
                <Title>Update Country</Title>
                <Label>Country:</Label>
                <Input type="text" placeholder='Name' name="name" onChange={handleChange} />
                <Input type="text" placeholder='Code' name="code" onChange={handleChange} />
                <Input type="text" placeholder='Flag' name="flag" onChange={handleChange} />
                <Button onClick={handleUpload}>Update</Button>
            </Wrapper>
        </Container>
    )
}

export default EditCountry