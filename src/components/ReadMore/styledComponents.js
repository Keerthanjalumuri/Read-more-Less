import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  min-height: 100vh;
  background-color: #ffffff;
`

export const Heading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: #1e293b;
  text-align: center;
`

export const Title = styled.p`
  color: #334155;
  font-size: 16px;
  font-family: 'Roboto';
`

export const Image = styled.img`
  height: 400px;
  width: 650px;
`

export const Description = styled.p`
  width: 650px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
`

export const Button = styled.button`
  background-color: #1f81ff;
  padding: 5px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 100px;
  text-align: center;
  cursor: pointer;
`
