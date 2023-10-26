
export class DocumentValidator{


    static validateEmail(email: string) : boolean {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return regex.test(email)
    }


    static validateCpf(cpf: string): boolean {
        cpf = cpf.replace(/\D/g, '');
      
        if (cpf.length !== 11) {
          return false;
        }
      
        const allSameDigits = /^(.)\1+$/;
        if (allSameDigits.test(cpf)) {
          return false;
        }
      
        const digits = cpf.split('').map(Number);
        const calculateCheckDigit = (cpf: number[], weight: number) => {
          const sum = cpf.reduce((total, value, index) => total + value * (weight - index), 0);
          const remainder = sum % 11;
          return remainder < 2 ? 0 : 11 - remainder;
        };
      
        const firstCheckDigit = calculateCheckDigit(digits.slice(0, 9), 10);
        const secondCheckDigit = calculateCheckDigit(digits.slice(0, 10), 11);
      
        return (
          digits[9] === firstCheckDigit && digits[10] === secondCheckDigit
        );
      }

      static validateEmailOrCpf(login: string): boolean  {
        return ((this.validateCpf(login) || this.validateEmail(login)))
      }
          
}