let APIKey = "554fb2d6";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

// Corrected template literal with backticks;
const hi = async(movie)=>{
    
  let fetchdata=await fetch(`https://www.omdbapi.com/?apikey=${APIKey}&&t=${movie}`);
  let jsondata=await fetchdata.json();
  console.log(jsondata);
  document.querySelector('.card').innerHTML=""
  let div=document.createElement("div")
  div.classList.add("movieCard")
  div.innerHTML=`
  <div id="first">
       <div id="im">
    <img src="${jsondata.Poster}" alt="">
      </div>

      <div>
            <div class="cardText">
                <h1>${jsondata.Title}</h1>
                <p>Ratings:<span>${jsondata.Ratings[0].Value}</span></p>
                <a href=""><span id="genre">Genre:</span>${jsondata.Genre}</a>
                <p>Released:<span>${jsondata.Released}</span></p>
                <p>Year:<span>${jsondata.Year}</span></p>
                <p>Languagre:<span>${jsondata.Language}</span></p>
                <p>Plot:<span>${jsondata.Plot}</span></p>
                </div>
  </div>
  `
  
document.querySelector('.card').appendChild(div)
  
}


searchBtn.addEventListener("click",function(){
    let movieName=searchInput.value;
    console.log(movieName);
    
    if(movieName!=''){
        (movieName);
    }
    else{
        document.querySelector('.card').innerHTML="<h1>First search movie name!</h1>"
        //   document.querySelector('.card').innerHTML=""
        
    }
})
hi();
 
