const container = document.querySelector(".container");

const button = document.querySelector(".btn");

button.addEventListener("click", ()=>{
    imageNum = 10;
    addNewImages();

});


function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const image = document.createElement("img");
         image.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
         container.appendChild(image);
    }
}
    

