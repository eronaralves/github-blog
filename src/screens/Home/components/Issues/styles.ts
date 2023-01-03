import styled from "styled-components";

export const ContainerIssues = styled.div`
  width: 100%;

  padding: 32px;
  border-radius: 10px;

  background: ${({theme}) => theme.blue500};

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  margin-bottom: 1.25rem;

  h3 {
    flex: 1;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.4;
    color: ${({theme}) => theme.gray200};
  }

  span {
    line-height: 2;
    font-size: 0.875rem;
    color: ${({theme}) => theme.gray600};
  }
`