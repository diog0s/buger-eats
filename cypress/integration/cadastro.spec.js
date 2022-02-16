import SignUpPage from '../pages/SignUpPage'

describe('Cadastro', () => {
    // before( ()=>{
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes');
    // })

    // after( ()=>{
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes');
    // })

    // beforeEach( ()=>{
    //     cy.log('Tudo aqui é executado SEMPRE ANTES de cada caso de teste');
    // })

    // afterEach( ()=>{
    //     cy.log('Tudo aqui é executado SEMPRE DEPOIS de cada caso de teste');
    // })

    var signup = new SignUpPage()

    beforeEach(function() {
        cy.fixture('deliver').then( (massaTeste)=>{
            this.deliver = massaTeste
        })
    })
    it('Usuário deve se tornar um entregador', function() {

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBeSucess(message)
    });

    it('CPF inválido', function() {

        signup.go()
        signup.fillForm(this.deliver.cpfInv)
        signup.submit()
        signup.modalContentShouldBeCPFError('Oops! CPF inválido')
    });
})