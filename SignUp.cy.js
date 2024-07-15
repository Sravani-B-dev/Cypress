
function generateRandomEmail() {
  return `user${Math.floor(Math.random() * 100000)}@gmail.com`;
}
const email = generateRandomEmail(); 

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
const password = generatePassword(10);

function isPasswordValid(password) {
  return password.length >= 8;
}

describe('suite name', () => 
    {
    it('Signup', function() 
        {
        cy.visit(' https://dev-fe.buttonshift.com')
        cy.get('img[alt="ButtonShift Logo"]').should('be.visible').then(($img) => {
            if ($img.length > 0) {
                Signup()  
            } else {
              cy.log('ButtonShift Logo is not visible or does not exist');
                }
            });
    })
    
})//input[placeholder="Enter password"]
 function Signup(){
 cy.xpath('//button[.="Sign up"]').click();
 cy.wait(2000) // Wait for 2 secondscls
 enterEmailAddress();
cy.get('button[type="submit"]').click();
enterPassword()
cy.get('button[type="submit"]').click();
enterotp()
cy.get('button[type="submit"]').click();
cy.get('#mui-8').type('India', { force: true })
cy.wait(10000) ;
cy.get('#mui-8').should('have.value', 'India')
cy.get('#mui-8').type('{enter}')
cy.get('input[placeholder="enter your phone number"]').type('1234567890');
cy.wait(10000) ;
cy.xpath('//div[.="community"]').should('be.visible');
cy.get('#Icons').click();
cy.get('button[aria-label="Logout"]').click();

   }
   
   function enterotp(){
    const inputString = '123456'
    cy.xpath('//input[@type="number"]').should('have.length', 6).then(($elements) => {
      expect($elements.length).to.equal(inputString.length)
      cy.wrap($elements).each(($el, index) => {
        const char = inputString[index]
        cy.wrap($el).type(char)
      })
    })
   }

   function enterEmailAddress(){
    if(validateEmail(email)){
      cy.get('input[placeholder="Enter email address"]').type(email)
     }else {
      console.log("Invalid email address");
    }
   }
    function enterPassword(){
      if (isPasswordValid(password)) {
        cy.get('input[placeholder="Enter password"]').type(password);
        cy.get('input[placeholder="Retype password"]').type(password);
        }else{
          console.log("Password must be at least 8 characters long.");
        }
    }
   describe('suite name', () => 
    {
    it('Login', function() 
        {
        cy.visit(' https://dev-fe.buttonshift.com')
        cy.get('img[alt="ButtonShift Logo"]').should('be.visible').then(($img) => {
            if ($img.length > 0) {
                loginPage() 
            } else {
              cy.log('ButtonShift Logo is not visible or does not exist');
                }
            });
    })
    
})
 function enterPasswordLogin(){
  if (isPasswordValid(password)) {
    cy.get('input[placeholder="Enter password"]').type(password);
    }else{
      console.log("Password must be at least 8 characters long.");
    }
 }
function loginPage(){
cy.xpath('//button[.="Log in"]').click();
enterEmailAddress();
cy.get('button[type="submit"]').click(); 
enterPasswordLogin();
cy.get('button[type="submit"]').click();
cy.xpath('//div[.="community"]').should('be.visible');
}


 