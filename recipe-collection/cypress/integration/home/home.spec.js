describe("Home page", () => {
  beforeEach(() => {
      cy.visit('/')
  })
  it("header contains recipe heading with a message that there are no recipes", () => {
    cy.findByRole('heading').should('contain', 'My Recipes')
    cy.get('p')
      .findByText('There are no recipes to list.')
      .should('exist')
  })
  it("contains an add recipe button that when clicked opens a form", () => {
    cy.findByRole('button').click();

    cy.get('form')
      .findByRole('button')
      .should('exist')
  })
  it("displays a recipe name under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
    const recipeName = 'Tofu Scramble Tacos';
    cy.findByRole('button').click()
    cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName)
    cy.findByRole('textbox', {name: /instructions/i}).type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")

    return cy.findByRole('button').click()
      .then(() => {
      expect(cy.findByRole('listitem', /tofu scramble tacos/i)).toExist();
      })
  })
  // it("adds multiple recipes", () => {
  //   const recipeName = 'Cereal';
  //   cy.findByRole('button').click()
  //   cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName)
  //   cy.findByRole('textbox', {name: /instructions/i}).type("1. Add cereal 2. Add Milk")

  //   return cy.findByRole('button').click()
  //     .then(() => {
  //     expect(cy.findByRole('newRecipeName', /tofu scramble tacos/i)).toExist()
  //     expect(cy.findByRole('n', /cereal/i)).toExist();
  //     })
  // })
})

