async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = promise; // do NOT wait until the promise resolves (*)
  
    alert(result); // "[object Promise]"
  }
  
  f();

  