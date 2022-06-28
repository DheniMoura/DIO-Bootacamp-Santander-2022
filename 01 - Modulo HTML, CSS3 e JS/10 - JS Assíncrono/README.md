# JavaScript Assíncrono

**Objetivo do curso**
* Coinceito de assincronicidades;
  * "Algo que não ocorre ou não se efetiva ao mesmo tempo.";
  * Por padrão o JS é síncrono.
* Promisses;
  * Objeto de processamento assíncrono, inicialmente seu valor é desconhecido. Ela pode então ser **resolvida** ou **rejeitada**.
  * Três estados da promisse:
    * Pending;
    * Fulfilled;
    * Rejected.
*  *"async"* e *"await"*: palavras necessárias para o funcionamento da `promisse`
  * O resultado de uma *promisse* é outra *promisse*
* Requisições de APIs.
  * Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end;
  * São acessadas por meio de URLs;
  * É muito comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebemos;
  * Método `fetch`:
    * Retorna uma promisse;

## [Atividade](https://github.com/DheniMoura/DIO-Bootacamp-Santander-2022/tree/main/01%20-%20Modulo%20HTML%2C%20CSS3%20e%20JS/10%20-%20JS%20Ass%C3%ADncrono/projeto-html): API "catAPI"

" Nesta atividade, criamos uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

  1. Utilize a API `https://thatcopy.pw/catapi/rest/` para fazer as chamadas com o método `fetch()`;
  2. Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão! "
