//Objects
//Eg.01 simple object
// let dog = { dogName: "JavaScript", 
//             weight: 2.4, 
//             color: "brown", 
//             breed: "chihuahua", 
//             age: 3, 
//             burglarBiter: true 
//           };

// console.log(dog)
// console.log(typeof dog)

//Eg.02 Access key
// let dogColor1 = dog["color"];
// let dogColor2 = dog.color;
// console.log(dogColor1)
// console.log(dogColor2)

//Update key
// dog["color"] = "blue";
// dog.weight = 2.3;

// console.log(dog)


//Eg.03 Objects in objects
let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 
              };

company.address.zipcode = "33117";
company["address"]["number"] = "100";

// console.log(company);


//Eg.04 Array in Object
let company2 = { companyName: "Healthy Candy",
                activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 
              };

// let activity = company2.activities[1];
// console.log(activity);

//Eg.05 objects in Array
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }];

// console.log(addresses[1].street);

//Eg.06 objects in array in object
  let company3 = { companyName: "Healthy Candy",
                    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
                    }],
                    yearOfEstablishment: 2021 
                  };

// console.log(company3.address[0].zipcode)
