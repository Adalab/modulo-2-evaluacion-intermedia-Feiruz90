"use strict";
 const button= document.querySelector(".jugar");

 button.addEventListener("click", () => {const select=document.querySelector(".select");

 let valor= select.value;

 console.log( valor);
    console.log("Jugar");
    getRandomNumber(6);

    let numberAleator=getRandomNumber(6);
  });

  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);

    }

    console.log("")


   


  

