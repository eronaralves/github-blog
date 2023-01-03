import styled from "styled-components";

export const ContainerHome = styled.div`
  
`

export const Avatar = styled.div`
  width: 148px;
  height: 148px;

  border-radius: 20px;
  overflow: hidden;
  background-color: ${({theme}) => theme.blue800};

  img {
    width: 100%;
  }
`

export const User = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  gap: 2rem;
  
  border-radius: 10px;
  margin-bottom: 4.5rem;

  background-color: ${({theme}) => theme.blue700};

  & > div:nth-child(2) {
    display: flex;
  }

  & > div:nth-child(2) h2 {
    font-size: 1.5rem;
    color: ${({theme}) => theme.gray200};
  }
`

export const InfomationsUser = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`

export const Github = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  color: ${({theme}) => theme.blue100};
`

export const ContainerInfoGithub = styled.div`
  flex: 1;

  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
`

export const InfoGithub = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${({theme}) => theme.gray300};
  }
`

export const ContainerSearch = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  input {
    width: 100%;
    padding: 12px 16px;

    border: 0;
    border-radius: 6px;
    border: 1px solid #1C2F41;

    color: ${({theme}) => theme.blue400};
    background: ${({theme}) => theme.blue900};
  }
`

export const HeadingSearch = styled(Heading)`

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({theme}) => theme.gray300};
  }

  span {
    font-size: 0.875rem;
    color: ${({theme}) => theme.gray600};
  }
`

export const ContainerIssues = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;


`