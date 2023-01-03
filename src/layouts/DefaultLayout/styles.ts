import styled from "styled-components";


export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-bottom: 50px;

`

export const Capa = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  justify-content: center;

  padding-top: 4rem;

  background-color: #112131;
  
  img {
    width: 148px;
    height: 98px;
  }
`

export const Content = styled.main`
  width: 100%;
  max-width: 54rem;


  margin-inline: auto;
  margin-top: -90px;
`