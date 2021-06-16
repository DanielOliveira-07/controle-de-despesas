const transactionsUl = document.querySelector('#transactions')

const dummyTransactions = [
    {id: 1, name: 'Bolo de Brigadeiro', amount: -20 },
    {id: 2, name: 'Sálario', amount: 2000 },
    {id: 3, name: 'Coca Cola', amount: -10 },
    {id: 4, name: 'Empadão', amount: -15 }
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')
    
    li.classList.add(CSSClass)
    li.innerHTML = `
       ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `

    transactionsUl.append(li)

}

const updateBalanceValues = () => {
    const transactionAmounts = dummyTransactions.map(transaction => transaction.amount)
    console.log(transactionAmounts)
}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()