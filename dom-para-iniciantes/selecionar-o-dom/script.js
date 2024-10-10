// Retorne no console todas as imagens do site

const imagem = document.querySelectorAll('img ')

console.log(imagem)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagem1 = document.querySelectorAll('img[src^="img/imagem"]');

console.log(imagem1)


// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('a[href^="#"')
console.log(links)
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');

console.log(primeiroH2)

// Selecione o último p do site

const paragrafo = document.querySelectorAll('p')

console.log(paragrafo[--paragrafo.length]);

