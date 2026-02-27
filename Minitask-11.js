/*
input: nama : string
output : logging text string name
batasan dan kendala : setelah 1500,2000,500
*/


const data = [
  {name:"John"},
  {name:"Ed"},
  {name:"Jane"},
];

const time = [500,1500,2000];

const showName = (data,time) => {
  return new Promise((resolve,reject)=>{
    const dataArr =
     Object.values(data)
    setTimeout(()=>{
      for(let i of dataArr){
        resolve([i])
      }      
    },()=>{
      for(let i of time){
        return [i]
      }})
   reject("Fetch data gagal")
  })
};


showName(data,...time)
  .then((data,time)=>{
    console.log(data)
  })
  // .then()
  .catch(err =>{
    console.log(err)
  })

const asyncAwaitFn = async () =>{
  try{
    const result = await showName()
    console.log(`${result}`)
  }
  catch(err){
    console.log(`${err}`)
  }
}
