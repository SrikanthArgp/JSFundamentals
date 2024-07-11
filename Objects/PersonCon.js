class Person {
    constructor(name, contactInfo, preferredContact) {
      this.name = name;
      this.contactInfo = contactInfo;
      this.preferredContact = preferredContact;
    }
  
    makeContact() {
      this.preferredContact(this.contactInfo);
    }
  }

  let callPerson = function(phoneNumber) {
    console.log("Dialing " + phoneNumber);
  }
  
  let emailPerson = function(emailAddress) {
    console.log("Emailing " + emailAddress);
  }

  let erik = new Person("Erik", "555-444-3030", callPerson);

 erik.makeContact();

 let lina = new Person("Lina", "smoochiebear@sweetheart.com", emailPerson);

 lina.makeContact()

//  let sonya = new Person("Sonya", "Mom", ((x) => console.log("Hi " + x)))
//  sonya.makeContact()

//  let people = [erik, lina, sonya]
//  people.map(person=>person.makeContact())