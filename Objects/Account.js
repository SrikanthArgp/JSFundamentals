 class Account {
  
    constructor(name, accountNumber, balance) {
      this.cname = name;
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    getName() {
      return this.cname;
    }
  
     setName(name) {
      this.cname = name;
    }
  
     getAccountNumber() {
      return this.accountNumber;
    }
  
    setAccountNumber( accountNumber) {
      this.accountNumber = accountNumber;
    }
  
     getBalance() {
      return this.balance;
    }
  
    setBalance(balance) {
      this.balance = balance;
    }
  
   deposit(amount) {
      this.balance += amount;
    }
  
     withdraw(amount) {
      this.balance -= amount;
    }
  
     getAccountInfo() {
      return "Name: " + this.cname + ", Account Number: " + this.accountNumber + ", Balance: " +this.balance;
    }

}

let account1 = new Account("Peter Irmgard", "C0011", 5000);
let account2 = new Account("Katja Ruedi", "C0121", 4500);
let account3 = new Account("Marcella Gebhard", "C0222", 20000);

console.log(account1.getAccountInfo())
account1.withdraw(1000)
console.log(account1.getAccountInfo())
console.log(account1.getAccountNumber())
//account3.getAccountInfo()