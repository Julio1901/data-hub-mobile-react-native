
export class MonetaryUtils{

    static monetaryFormate(value: number) : string {
        const formattedAmount = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return formattedAmount;
      }

}