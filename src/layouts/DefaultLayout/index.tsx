import { Outlet } from 'react-router-dom'

// Styles
import * as S from './styles'

// Assets
import Logo from '../../assets/logo.png'

export function DefaultLayout() {

  return (
    <S.Container>
      <S.Capa>  
        <img src={Logo}/>
      </S.Capa>
      <S.Content>
        <Outlet/>
      </S.Content>
    </S.Container>
  )
}