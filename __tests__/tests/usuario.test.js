const { usuario } = require('../src/usuario')

describe('Usuário', () => {
    // test('Propriedades', () => {
    //     expect(usuario).toHaveProperty('nome')
    //     expect(usuario).toHaveProperty('idade')
    //     expect(usuario).toHaveProperty('email')
    // })

    // test('Tipos de propriedades', () => {
    //     expect(typeof usuario.nome).toBe('string')
    //     expect(typeof usuario.idade).toBe('number')
    //     expect(typeof usuario.email).toBe('string')
    // })

    test('As propriedades devem ter valores esperados', () => {
        expect(usuario.nome).toBe('Ana Vitória')
        expect(usuario.idade).toBe(18)
        expect(usuario.email).toBe('ana.mesquita129@aluno.ce.gov.br')
    })
})
