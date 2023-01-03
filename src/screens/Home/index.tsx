import { useTheme } from "styled-components"

// Components
import { Issue } from "./components/Issues"

// Icons
import { FiArrowUpRight } from "react-icons/fi"
import { FaGithub, FaBuilding } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"

// Styles
import { useEffect, useState } from 'react'
import * as S from './styles'

export function Home() {
  const [user, setUser] = useState<any>([])
  const [issues, setIssues] = useState<any>([])

  const theme = useTheme()

  async function fetchGithubUser() {
    const data = await fetch('https://api.github.com/users/eronaralves').then(res => res.json())

    setUser(data)
  }

  async function fetchGithubIssues() {
    const data = await fetch('https://api.github.com/repos/eronaralves/github-blog/issues').then(res => res.json())

    setIssues(data)
    console.log(data)
  }

  useEffect(() => {
    fetchGithubUser()
    fetchGithubIssues()
  }, [])

  return (
    <S.ContainerHome> 
      <S.User>
        <S.Avatar>
          <img src={user.avatar_url}/>
        </S.Avatar>
        <S.InfomationsUser>
          <S.Heading>
            <h2>{user.name}</h2>
            <S.Github href={user.html_url} target="_blank">
              github
              <FiArrowUpRight size={15}/>
            </S.Github>
            
          </S.Heading>
          <p>
            {user.bio}
          </p>

          <S.ContainerInfoGithub>
            <S.InfoGithub>
              <FaGithub size={18} color={theme.blue400}/> 
              <span>{user.login}</span>   
            </S.InfoGithub>
            <S.InfoGithub>
              <FaBuilding size={18} color={theme.blue400}/> 
              <span>Rockeseat</span> 
            </S.InfoGithub>
            <S.InfoGithub>
              <HiUsers size={18} color={theme.blue400}/> 
              <span>{user.followers} seguidores</span>   
            </S.InfoGithub>
          </S.ContainerInfoGithub>
        </S.InfomationsUser>
      </S.User>
      <S.ContainerSearch>
        <S.HeadingSearch>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </S.HeadingSearch>
        <input type="text" placeholder="Buscar conteúdo"/>
      </S.ContainerSearch>
      <S.ContainerIssues>
        {issues.map((issue: any) => (
          <Issue key={issue.id} paragraph={issue.body} title={issue.title}/>
        ))}
      </S.ContainerIssues>
    </S.ContainerHome>
  )
}