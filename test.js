const axios = require('axios');
const assert = require('assert');

const apiUrl = 'https://newsapi.org/v2/everything?q=Apple&from=2023-05-17&sortBy=popularity&apiKey=464ef52877404d65bc0d8f7d7608b526';

describe('Teste de API', function () {
  let response;

  before(async function () {
    response = await axios.get(apiUrl);
  });

  it('deve retornar status 200', function () {
    assert.strictEqual(response.status, 200);
  });

  it('deve conter uma propriedade "status" igual a "ok"', function () {
    assert.strictEqual(response.data.status, 'ok');
  });

  it('cada objeto "article" no array deve conter uma propriedade "title" ', function () {
    const articles = response.data.articles;
    articles.forEach(article => {
      assert.ok(article.title && typeof article.title === 'string');
    });
  });
});
