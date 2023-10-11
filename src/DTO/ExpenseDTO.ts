
export class Expense {
    name: string
    value: number
    type: 'fixed' | 'variable'
    isPaid: boolean

    constructor(name: string, value: number, type: 'fixed' | 'variable', isPaid: boolean ){
        this.name = name
        this.value = value
        this.type = type
        this.isPaid = isPaid
    }

}