describe('Check Event List', () => {
    it('', () => {
        //visit the website
        cy.visit('/');

        //click first Add button
        cy.get('button[name=selectBtn]').first().click();
        //Number of entries should be 1
        cy.get('span#entryCnt').should('have.text', '1');
        cy.get('button[name=selectBtn]').first().should('have.text', 'REMOVE');

        //click first Add button again
        cy.get('button[name=selectBtn]').first().click();
        //Number of entries should be 0
        cy.get('span#entryCnt').should('have.text', '0');
        cy.get('button[name=selectBtn]').first().should('have.text', 'ADD');

        //click multiple buttons
        cy.get('button[name=selectBtn]').first().click();
        cy.get('button[name=selectBtn]').eq(1).click();
        cy.get('button[name=selectBtn]').eq(2).click();
        cy.get('button[name=selectBtn]').eq(3).click();
        cy.get('button[name=selectBtn]').eq(4).click();

        //Number of entries should be 3
        cy.get('span#entryCnt').should('have.text', '5');
    })
})