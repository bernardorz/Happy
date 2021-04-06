//create map
const map = L.map("mapid").setView([-23.0942379, -48.9104969], 16);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [28, 68]
});

let marker;

//create and add marker
map.on('click', (event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);

});


// add photo fields

function addPhotoField(){
    //pegar o container de photos #images
    const container = document.querySelector('#images');
    //pegar o container para duplicar.new-image
    const fieldsContainer = document.querySelectorAll(".new-upload");
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0];

    if(input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao container de adicionar
    input.value = '';

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);

}

function deleteField(event){
    const span = event.currentTarget;
    
    const fieldsContainer = document.querySelectorAll(".new-upload");

    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = '';
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//select o sim e não

function toggleSelect(event){
    //retirar a class .active (dos botões)
    document.querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove('active'));
    
    //colocar a class .active no botão clicado
    const button = event.currentTarget;
    button.classList.add('active');


    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
    //verificar se sim ou não
    

}

// function validate(event){
//     const lat = document.querySelector('input[data-save-lat]').value.lat;
//     const lng = document.querySelector('input[data-save-lng]').value.lng;
//     // validar se late e lng estao preenchidos
//     const needsLatAndLng = false;
//     if(needsLatAndLng){
//         event.preventDefault();
//         alert('Escolha um ponto no mapa');
//     }     
//}
