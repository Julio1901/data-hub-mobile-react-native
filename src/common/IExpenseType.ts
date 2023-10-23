

export interface IExpenseType {
    name: string
    value: number
    type: 'fixed' | 'variable'
    isPaid: boolean
}