let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
let btn = document.querySelector("button");

btn.addEventListener("click" , async () => {
  let word = document.querySelector("input").value;
  
  let defiArr = await getWord(word);
  show(defiArr);
} );

function show(defiArr) {
  for (defi of defiArr) {
    let defContainer = document.querySelector("#defContainer");
    defContainer.innerText = "";
    
    let p = document.createElement("p");
    p.innerText = "";
    p.innerHTML = `<b style=color:red;>Meaning</b> -${defi.meanings[0].definitions[0].definition}
                `;
                
    defContainer.appendChild(p);
    p.classList.add("font")
  }
}



async function getWord(word) {
  try{
    let res = await axios.get(url + word);
    // let partOfS
    console.log(res.data)
    return res.data;
  } catch(e) {
    if(massage="Request failed with status code 404"){
      console.log("ni");
      let defContainer = document.querySelector("#defContainer");
    defContainer.innerText = "";
    
    let p = document.createElement("p");
    p.innerHTML = `NO RESULT FOUND FOR THIS WORD.`;
    defContainer.appendChild(p);
    p.classList.add("error")
    }
    console.log("error - " , e)
    return [];
  }
}