import { FormEvent, useState } from "react"
import Modal from "react-modal"
import { Container, TransactionTypeContainer, RadioBox } from "./styles"
import closeImage from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from "../../hooks/useTransactions"

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
    const { createTransaction } = useTransactions()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit')

    const handleCreateNewTransaction = async (event:FormEvent) => {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('')
        setCategory('')
        setAmount(0)
        setType('Deposit')
        
        onRequestClose()
    }

    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close' 
            >
                <img src={closeImage} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input 
                    type='text'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder='Título'
                />

                <input 
                    type='number'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                    placeholder='Valor'
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type==='deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type==='withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    type='text'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    placeholder='Categoria'
                />

                <button type='submit' >
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}