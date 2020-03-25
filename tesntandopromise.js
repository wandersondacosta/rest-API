const seila = new Promise((resolve,reject) => {
  let soma = 1 + 1;
  if(soma == 2){
    resolve('sucess');
  }else {
    reject('failed')
  }
});

seila.then(message => {
  console.log('this is in the then ' + message)
}).catch(err => {
  console.log('This is the catch' + err)
});