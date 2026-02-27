/*
input: nama : string
output : logging text string name
batasan dan kendala : setelah 1500,2000,500
*/


const data = ["john","ed","jane"];

const time = [500,1500,2000];

data.forEach((value)=>{
  const janjiJiwa = (time)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              return resolve(value)
    },time)
  }

  janjiJiwa(500)
  .then((value)=>{
    console.log(value)
  })
  .catch(err=>{
    console.log(err)
  })
})



data.forEach((value)=>{
  const janjiJiwa = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              return resolve(value)
    },time)
    return reject("Fetch gagal")})
  }

const asyncAwait = async () => {
  const data = await jajiJiwa(500)
  console.log(data)
}
})
