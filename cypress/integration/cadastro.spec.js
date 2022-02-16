import SignUpPage from '../pages/SignUpPage'

describe('Cadastro', ()=>{
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

    it.skip('Usuário deve se tornar um entregador', () => {
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
        var signup = new SignUpPage()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBeSucess(message)
    });

    it('CPF inválido', () => {
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

        var signup = new SignUpPage()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBeCPFError('Oops! CPF inválido')
    });
})