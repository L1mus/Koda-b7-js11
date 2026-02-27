/*
input: nama : string
output : logging text string name
batasan dan kendala : setelah 1500,2000,500
*/


const data = [
  {nama:"John"},
  {nama:"Ed"},
  {nama:"Jane"},
];

console.log(data[0].nama)

const showName = (data) =>{
  return new Promises((resolve,reject)=>{
    setTimeout(()=>{
        resolve(data[0].name)
    },1500)
   reject("Fetch data gagal")
  })
};


// showName()
//   .then()
//   .then()
//   .catch()

const asyncAwaitFn = async () =>{
  try{
    const result = await showName()
    console.log(`${result}`)
  }
  catch(err){
    console.log(`${err}`)
  }
   const result = await showName()
   return result
}
