function gerarStringAleatoria(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    
    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres[indice];
    }
    
    return resultado;
  }
  
  describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:5500/login.html')
      cy.get('#Nome').type('Banana')
      cy.get('#Tipo').type('Fruta')
      cy.get('#Preco').type('R$ 99,99')
      cy.get('.btn').click()
      cy.get('#loginError').should('contain','Usuário ou senha inválidos!' )
      cy.get(':nth-child(5) > #btnCadastrar').click()
     
      //Cadastrar
      cy.get('#registerName').type(nome)
      cy.get('#registerType').type(tipo)
      cy.get('#registerPrice').type(preco)
      cy.get('.btn').click()
    })
  })