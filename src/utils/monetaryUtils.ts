
export class MonetaryUtils{

    static monetaryFormate(value: number) : string {
          const amountString = value.toString();
          const [integerPart, decimalPart] = amountString.split('.');
          const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
          const formattedDecimalPart = decimalPart ? ',' + decimalPart.slice(0, 2) : ',00';
          let result = `${formattedIntegerPart}${formattedDecimalPart}`;
      
          if (result.length >= 14 ) {
                  result = `${result.substring(0,7)} m`
          }
      
          return result
      }
    
}