// // Armazena a base da url da API
// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// // Arrow function para interagir com a API
// const getCats = async () => {
// 	try {
// 		// Faz leitura da API com o metodo Fetch
// 		const data = await fetch(BASE_URL);
// 		// a Variavel data recebe a resposta e converte em formato Json
// 		const json = await data.json();
// 		// pega o campo webpurl com o endereço da imagem em formato webp
// 		return json.webpurl;
// 	} catch (e) {
// 		// caso ocorra um erro, imprime no console
// 		console.log(e.message);
// 	}
// };


// // Função que despara ao clicar no botão Change Cat
// const loadImg = async () => {
// 	// declara uma variavel para armazenar o SRC da imagem
// 	const img = document.getElementsByTagName('img')[0];
// 	// altera o src da imagem
// 	img.src = await getCats();
// };


// // roda a função ao inicializar a página
// loadImg();

// // variavel que pega o botão de id=change-cat na página HTML 
// const btn = document.getElementById('change-cat');
// // adiciona um metodo para escutar o clique no botão e executar a função loadImg
// btn.addEventListener('click', loadImg);



/// -------------------------------------------
/// Outra forma de fazer
/// -------------------------------------------

// Armazena a base da url da API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// Arrow function para interagir com a API
const getCats = async () => {

		// Faz leitura da API com o metodo Fetch e usa o then e catch para pegar a resposta
		const data = await fetch(BASE_URL)
		.then((res) => res.json())
		.catch((e) => console.log(e));

		return data.webpurl;

};


// Função que despara ao clicar no botão Change Cat
const loadImg = async () => {
	// declara uma variavel para armazenar o SRC da imagem
	const img = document.getElementsByTagName('img')[0];
	// altera o src da imagem
	img.src = await getCats();
};


// roda a função ao inicializar a página
loadImg();

// variavel que pega o botão de id=change-cat na página HTML 
const btn = document.getElementById('change-cat');
// adiciona um metodo para escutar o clique no botão e executar a função loadImg
btn.addEventListener('click', loadImg);

