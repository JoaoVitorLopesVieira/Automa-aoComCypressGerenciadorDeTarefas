



describe('Visita o site Poe', () => {
  it('Deve abrir a página do chat', () => {
    // Visita o site
    cy.visit('https://joaovitorlopesvieira.github.io/GerenciadorDeTarefasParaEstudoComCypress/');


    cy.wait(6000); 
    cy.get('#taskInput')
    .type('Estudar Focado Cypress')
    cy.wait(6000); 


      cy.get('#priorityInput').select('Alta');
      cy.wait(6000); 


      cy.get('button').click();

  });
});