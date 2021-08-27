import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onNewTransactionModalOpen: () => void;
}

export const Header = ({onNewTransactionModalOpen}: HeaderProps) => {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onNewTransactionModalOpen} >
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}