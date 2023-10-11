
export class Expense {
    name: string
    value: number
    type: 'fixed' | 'variable'

    constructor(name: string, value: number, type: 'fixed' | 'variable' ){
        this.name = name
        this.value = value
        this.type = type
    }

}