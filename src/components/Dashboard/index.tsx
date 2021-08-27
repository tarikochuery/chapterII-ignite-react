import { TransactionTable } from "../TransactionsTable"
import { Summary } from "../Summary"
import { Container } from "./styles"

export const Dashboard = () => {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}