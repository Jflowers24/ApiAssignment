function get_image(){
    url="https://dog.ceo/api/breeds/image/random"
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        display_image(data.message) 
    })
    .catch(function(error){
        console.log("Error: " +error);
    });
}

function display_image(picture_url){
    document.getElementById("picture").src = picture_url;
}

const button = document.getElementById("butto");
button.addEventListener("click", get_image)