describe('Cadastro', ()=>{
    it.skip('Usuário deve se tornar um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('.content main a').click() //OU a[href="/deliver"]
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'Diogo',
            cpf: '00011122233',
            email: 'diogo@gmail.com',
            whatsapp: '83999999999',
            address: {
                postalcode: '53090000',
                street: 'Rua Rosa de Oliveira',
                number: '000',
                details: 'Esquina com a Av. Cypress',
                district: 'Rio Doce',
                city_state: 'Olinda/PE'
            },
            delivery_method: {
                motocycle: 'Moto',
                bike: 'Bicicleta',
                van_car: 'Van/Carro'
            },
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)


        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method.motocycle).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

        cy.get('button[type=submit][class="button-success"]').click()

        const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get('#swal2-html-container').should('have.text', message)
        cy.get('button[type="button"][class="swal2-confirm swal2-styled"]').click()
    });

    it('CPF inválido', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('.content main a').click() //OU a[href="/deliver"]
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'Diogo',
            cpf: '000111222MM',
            email: 'diogo@gmail.com',
            whatsapp: '83999999999',
            address: {
                postalcode: '53090000',
                street: 'Rua Rosa de Oliveira',
                number: '000',
                details: 'Esquina com a Av. Cypress',
                district: 'Rio Doce',
                city_state: 'Olinda/PE'
            },
            delivery_method: {
                motocycle: 'Moto',
                bike: 'Bicicleta',
                van_car: 'Van/Carro'
            },
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)


        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method.motocycle).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

        cy.get('button[type=submit][class="button-success"]').click()

        cy.get('div[class="field"] span[class="alert-error"]').should('have.text', 'Oops! CPF inválido')
    });
})