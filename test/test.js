let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);
// describe('Pruebas', function () {
//     describe('Validacion', function () {
//         it('El return es un array', function () {
//             result = fibonacci.getFibonacci(2);
//             console.log(result);
//             assert.typeOf(result, 'array');
//         });
//     });
// });

describe('Fibonacci.', () => {
    it('Devuelve status 200 si tiene contenido.', (done) => {
        chai.request(server)
            .get('/api/fibonacci?nums=5')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('Es array el contenido.', (done) => {
        chai.request(server)
            .get('/api/fibonacci?nums=5')
            .end((err, res) => {
                JSON.parse(res.text).should.be.a('array');
                done();
            });
    });

    it('Devuelve status 204 si esta vacio.', (done) => {
        chai.request(server)
            .get('/api/fibonacci?nums=0')
            .end((err, res) => {
                res.should.have.status(204);
                done();
            });
    });

    it('Si se envia como parametro 6 el ultimo elemento es igual a 8', (done) => {
        chai.request(server)
            .get('/api/fibonacci?nums=6')
            .end((err, res) => {
                let array = JSON.parse(res.text);
                array[array.length - 1].should.eql(8);
                done();
            });
    });
});