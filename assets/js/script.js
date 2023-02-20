let timer;
function rodar(){
timer = setTimeout(function(){
    document.querySelector('.demo').innerHTML = 'RODOU!!!'}, 3000) //setar o que mudara ao final do timer e o tempo dele.
}
function parar(){
    clearTimeout(timer); //para o timer antes de terminar
}