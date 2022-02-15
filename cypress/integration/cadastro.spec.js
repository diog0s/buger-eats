describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('.content main a').click() //OU a[href="/deliver"]
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Diogo',
            cpf: '00011122233',
            email: 'diogo@gmail.com',
            whatsapp: '83999999999',
            endereco: {
                cep: '53090000',
                rua: 'Rua Rosa de Oliveira',
                numero: '000',
                complemento: 'Esquina com a Av. Cypress',
                bairro: 'Rio Doce',
                cidade_UF: 'Olinda/PE'
            },
            metodo_entrega: {
                moto: 'Moto',
                bike: 'Bicicleta',
                van_car: 'Van/Carro'
            },
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)


        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_UF)

        cy.contains('.delivery-method li', entregador.metodo_entrega.moto).click()
    });
})