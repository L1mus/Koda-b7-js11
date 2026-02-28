/*
input: nama : string , waktu : number
output : logging text string name
batasan dan kendala : setelah 1500,2000,500
*/

const data = [
  { nama: "jane", waktu: 500 },
  { nama: "ed", waktu: 1500 },
  { nama: "john", waktu: 2000 },
];

//Promise
const janjiNama = (nama, waktu) => {
  return new Promise((resolve, reject) => {
    if (typeof nama !== "string" || typeof waktu !== "number") {
      reject("Gagal Fetch");
    }
    setTimeout(() => {
      resolve(nama);
    }, waktu);
  });
};

let chainingPromise = Promise.resolve();

data.forEach((element) => {
  chainingPromise = chainingPromise.then(() => {
    return janjiNama(element.nama, element.waktu).then((result) => {
      console.log(result);
    });
  });
});
chainingPromise.catch((error) => {
  console.log(error);
});

const AsyncAwaitjanjiNama = async () => {
  try {
    for (let element of data) {
      const result = await janjiNama(element.nama, element.waktu);
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
};

AsyncAwaitjanjiNama();
