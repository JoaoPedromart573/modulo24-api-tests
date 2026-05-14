const pactum = require('pactum');

describe('Categorias API', () => {

  it('Listar categorias', async () => {

    await pactum.spec()
      .get('https://fakestoreapi.com/products/categories')
      .expectStatus(200);

  });

});