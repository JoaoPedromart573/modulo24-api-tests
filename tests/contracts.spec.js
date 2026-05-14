const pactum = require('pactum');
const { like } = require('pactum-matchers');

describe('Contrato Produto', () => {

  it('Validar contrato do produto', async () => {

    await pactum.spec()
      .get('https://fakestoreapi.com/products/1')
      .expectStatus(200)
      .expectJsonMatch({
        id: like(1),
        title: like('Produto'),
        price: like(100),
        description: like('Descricao'),
        category: like('Categoria'),
        image: like('Imagem')
      });

  });

});