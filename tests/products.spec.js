const pactum = require('pactum');
require('dotenv').config();

describe('Produtos API', () => {

  it('Adicionar produto', async () => {

    await pactum.spec()
      .post(`${process.env.BASE_URL}/products`)
      .withJson({
        title: 'Notebook Gamer',
        price: 5000
      })
      .expectStatus(201);
  });

  it('Editar produto', async () => {

    await pactum.spec()
      .put(`${process.env.BASE_URL}/products/1`)
      .withJson({
        title: 'Notebook Editado',
        price: 4500
      })
      .expectStatus(200);
  });

  it('Deletar produto', async () => {

    await pactum.spec()
      .delete(`${process.env.BASE_URL}/products/1`)
      .expectStatus(200);
  });

});