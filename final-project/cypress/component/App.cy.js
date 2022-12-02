import App from "../../src/App.js";

describe('App.cy.js', () => {
  it('be visible', () => {
    cy.viewport(1920, 1080)
    cy.mount(<App/>)
    cy.get('[data-cy=textarea]').should('be.visible')
  })

  it('edit text', () => {
    cy.viewport(1920, 1080)
    cy.mount(<App/>)
    cy.get('input[value*="Puedes editar este texto dando click en el!"]').click().type(" lorem ipsum")
  })
})