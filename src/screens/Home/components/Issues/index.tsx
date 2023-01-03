
// Styles
import * as S from './styles'

//Interfaces
interface IssueProps {
  title: string;
  createdAt: string;
  paragraph: string;
}

export function Issue({title, createdAt, paragraph}: IssueProps) {

  return (
    <S.ContainerIssues>
      <S.Heading>
        <h3>{title}</h3>
        <span>Há 1 dia</span>
      </S.Heading>
      <p>
        {paragraph}
      </p>
    </S.ContainerIssues>
  )
}