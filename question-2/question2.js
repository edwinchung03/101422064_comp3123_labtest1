const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('message: delayed success!');
      }, 500)
  })
  }

  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try{
          reject('error: delayed exception!');
        }catch(e){
          console.error(e);
        }
      }, 500)
  })
  }
  
  resolvedPromise()
  .then(result=>console.log(result))
  
  rejectedPromise()
  .then(result=>console.log(result))
  .catch((error) => console.log(error));