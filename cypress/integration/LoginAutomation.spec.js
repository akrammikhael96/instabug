// https://docs.cypress.io/api/introduction/api.html



describe("Scenario 1", () => {
  it("Incorrect email and password", () => {
    cy.visit("/");
    cy.get('input[name=email]').type('akrammikhael96@gmail.com');
    cy.get('input[name=password]').type('Instabug22');
    cy.get('.loginBtn').click();
    cy.get('.incorrectData').should('have.text', 'Your email and/or password are incorrect!');
  });
});

describe("Scenario 2", () => {
  it("A valid email and incorrect password", () => {
    cy.visit("/");
    cy.get('input[name=email]').type('mohamed@instabug.com');
    cy.get('input[name=password]').type('Instabug22');
    cy.get('.loginBtn').click();
    cy.get('.incorrectData').should('have.text', 'Your email and/or password are incorrect!');
  });
});

describe("Scenario 3", () => {
  it("A successful login", () => {
    cy.visit("/");
    cy.get('input[name=email]').type('mohamed@instabug.com');
    cy.get('input[name=password]').type('A12345678');
    cy.get('.loginBtn').click();
    cy.url().should('include', '/welcome')
  });
});


describe("Scenario 4", () => {
  it("Email validation", () => {
    cy.visit("/");
    cy.get('input[name=email]').type('dddd');
    cy.get('.emailValidate').should('have.text', 'Enter a valid Email address');
    cy.get('.emailValidate').should('have.css', 'color', 'rgb(255, 0, 0)')
    cy.get('input[name=email]').should('have.css', 'border-color', 'rgb(255, 0, 0)')
  });
});




