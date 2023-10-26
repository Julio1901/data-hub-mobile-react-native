import { Expense } from "../DTO/ExpenseDTO";



export class MockUtils{


     expensesMockTest = [
    new Expense('Mock test item', 1000, 'fixed', false),
    new Expense('Gás', 4000, 'fixed', false),
    new Expense('Investimentos', 5000, 'variable', true),
    new Expense('IPVA Carro', 10000, 'variable', true),
    new Expense('Gym Pass', 3000, 'fixed', false),
    new Expense('Conta de luz', 1000, 'fixed', false),
    new Expense('Gás', 4000, 'fixed', false),
    new Expense('Investimentos', 5000, 'variable', true),
    new Expense('IPVA Carro', 10000, 'variable', true),
    new Expense('Gym Pass', 3000, 'fixed', false),
    new Expense('Telefone', 120, 'variable', false),
    new Expense('Internet', 240, 'fixed', false),
    new Expense('Café da Manhã', 300, 'fixed', false),
    new Expense('Transporte Público', 600, 'variable', true),
    new Expense('Almoço', 1500, 'variable', true),
    new Expense('Cinema', 250, 'variable', false),
    new Expense('Restaurante', 800, 'variable', true),
    new Expense('Café Expresso', 150, 'fixed', false),
    new Expense('Seguro de Vida', 2000, 'fixed', true),
    new Expense('Assinatura de Streaming', 300004515, 'fixed', true),
    new Expense('Roupas', 900, 'variable', true),
    new Expense('Manutenção do Carro', 1200, 'fixed', true),
    new Expense('Educação', 750, 'variable', true),
    new Expense('Livros', 180, 'fixed', false),
    new Expense('Academia', 500, 'fixed', false),
    new Expense('Internet Móvel', 180, 'fixed', true),
    new Expense('Presentes', 750, 'variable', false),
    new Expense('Aluguel de Filme', 50, 'fixed', false),
    new Expense('Taxa de Estacionamento', 350, 'fixed', true),
    new Expense('Assinatura de Revista', 180, 'fixed', true),
    new Expense('Combustível', 500, 'variable', true),
    new Expense('Farmácia', 420, 'variable', false),
    new Expense('Lavanderia', 400, 'fixed', false),
    new Expense('Reparos Domésticos', 750, 'variable', true),
    new Expense('Médico', 900, 'variable', true),
    new Expense('Material de Escritório', 120, 'fixed', false),
    new Expense('Assinatura de Ginásio', 300, 'variable', true),
    new Expense('Assinatura de Música', 200, 'fixed', false),
    new Expense('Refeições Fora de Casa', 800, 'variable', true),
    new Expense('Impostos', 650, 'fixed', true),
    new Expense('Educação Continuada', 1000, 'variable', true),
    new Expense('Hobbies', 350, 'variable', false),
    new Expense('Presentes de Aniversário', 180, 'fixed', false),
    new Expense('Despesas de Viagem', 1200, 'variable', true),
    new Expense('Cachorro', 400, 'variable', true),
  ];



  getMocks() : Expense[] {
    return this.expensesMockTest
  }

   updateExpense(expense: Expense) : Expense[]{
    // const itemIndex = this.expensesMockTest.findIndex(item =>  item.name === expense.name)
    
    let listUpdated = this.expensesMockTest.map( (item, i) => {
      if(item.name === expense.name ) {
        return { ...item, isPaid: !expense.isPaid }
      } else {
        return { ...item}
      }
    }).filter((item) => item !== undefined) as Expense[]

    this.expensesMockTest = listUpdated
    console.log('Item atualizado ----------------------------------------')
    // console.log(this.expensesMockTest )
    return this.expensesMockTest
  }


}



  