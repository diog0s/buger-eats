class SignUpPage{
    go(){
        cy.visit('/')

        cy.get('.content main a').click() //OU a[href="/deliver"]
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver){
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
    }

    submit(){
        cy.get('button[type=submit][class="button-success"]').click()
    }

    modalContentShouldBeCPFError(message){
        cy.get('div[class="field"] span[class="alert-error"]').should('have.text', message)
    }

    modalContentShouldBeSucess(message){
        cy.get('#swal2-html-container').should('have.text', message)
        cy.get('button[type="button"][class="swal2-confirm swal2-styled"]').click()
    }
}
export default SignUpPage;