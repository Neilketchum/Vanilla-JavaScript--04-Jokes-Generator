document.querySelector('.get-jokes').addEventListener('click',getJokes);
function getJokes(e){
    let number = document.querySelector('#number');
    number = number.value;
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload = function(){
      if(this.status === 200){
        let output = ''
        const response = JSON.parse(this.responseText);
        if(response.type === 'success'){
            response.value.forEach(function(joke){
              output += `<li>${joke.joke}</li>`
            }); 
        }else{
          output += `<li> Error </li>`
        }
        document.querySelector('.jokes').innerHTML = output;
        document.querySelector('.jokes').style.border = '5px solid black'
        document.querySelector('.jokes').style.padding = '10px'
      }
    }
    
    xhr.send()
  e.preventDefault();
}