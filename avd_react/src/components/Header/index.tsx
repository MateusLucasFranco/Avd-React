import logoImg from '../../assets/Logo.png'

import { Container, Content } from './styles'

export function Header() {
    return ( 
        <Container>
            <Content>
            <img src={ logoImg } alt="insta" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}