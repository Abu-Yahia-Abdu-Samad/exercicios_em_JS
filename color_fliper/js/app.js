// criei um array para guardar as cores 
const colors = ["green", "red","rgbd(133,122,200)", "#f15025" ];
// peguei o botao no html pelo ID
const btn = document.getElementById('btn');
// peguei o span no html pela classe usei o queryselector
const color = document.querySelector('.color');


// aqui eu setar os eventos de click
// usar a nomenclatura click para especificar o evento
btn.addEventListener("click", function(){
    // toda vez que eu clicar5 muda a cor do pano de fundo
    // uso a ramdon entre 0-3 dos elementos do array
    const ramdomNumber = getRamdomNumber();
    console.log(ramdomNumber);
    // aprendemos aqui que dá pra estilizar a partir do JS
    // peguei o body no html, add a prop style,até no backgroundColor do array
    // passo o ramdom dentro do colors pra girar
    document.body.style.backgroundColor = colors[ramdomNumber];
    // peguei o span color e mudei a cor dele com o colors
    color.textContent = colors[ramdomNumber]
})

// aqui eu crio a função com retorno que pegará os valores ramdom
function getRamdomNumber(){

    // multiplquei pelo array para obter valores dentro dele
    // usei o floor para arredondar pra baixo, obtendo valores entre 0 e 3 = ao array
return Math.floor (Math.random()*colors.length); }