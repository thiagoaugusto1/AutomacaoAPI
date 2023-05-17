const axios = require('axios');

const apiUrl = 'https://newsapi.org/v2/everything?q=Apple&from=2023-05-17&sortBy=popularity&apiKey=464ef52877404d65bc0d8f7d7608b526';

axios.get(apiUrl)
  .then(response => {
    const responseData = response.data;
    console.log(responseData);
  })
  .catch(error => {
    console.error('Erro ao obter os dados da API:', error);
  });
