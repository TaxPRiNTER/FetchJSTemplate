// Function to simplify wait/delay.
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

// Inject JS
const ns = {
  //injects client js file
  require: async u => {
    await new Promise((res, rej) => {
      fetch(u)
        .then(r => r.ok ? r.blob() : rej)
        .then(b => {
          let ou = URL.createObjectURL(b),
            el = document.createElement("script");
          el.setAttribute("src", ou);
          el.setAttribute("type", "text/javascript");
          el.onload = () => res();
          document.body.appendChild(el);
        })
        .catch(e => rej);
    });
  },
}

// Where 'example.com' is the .JS raw github file you want to execute.
fetch('example.com')
.then(response => response.text())
.then(txt => eval(txt))
// Script is executed and variables and ETC is available.
