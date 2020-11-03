
export async function getAllPokemons(url) {
 return new Promise((resolve,reject)=>{
   fetch(url).then(res=> res.json()).then(data=>{ resolve(data)})
 })
}

export async function getOnePokemon({url}){
  return new Promise((resolve,reject)=>{
    fetch(url).then(res=> res.json()).then(data=>{ resolve(data)})
  })
}

