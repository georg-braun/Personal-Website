describe('landing page shows correct content', () => {
    it('page title is visible', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
    
      cy.get('h2').contains('Georg Braun')
    })


    it('should show a project', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')
      
        cy.contains('Garage Buddy')
      })
  })

