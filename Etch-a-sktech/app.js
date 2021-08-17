const containerGrid = document.getElementById("mainGrid");

    function makeGrid(col) {
      for (let i = 0; i < col * col; i++) {
        const gridAdd = document.createElement("div");
        gridAdd.classList.add("box");
        gridAdd.textContent = "";

        containerGrid.appendChild(gridAdd);
      }
    }

    makeGrid(16); // make grid 16*16


    const btnClear = document.getElementById("clear");
    const blackBtn  = document.getElementById("blackchoice");
    const boxes = document.querySelectorAll('.box');
    const randomBtn = document.getElementById("randomgen");
    

    btnClear.addEventListener("click", () => {
        boxes.forEach(box => {
          box.style.backgroundColor = "white";
        });
      });

    blackBtn.addEventListener("click", () => { 
    boxes.forEach(box => {
      box.addEventListener('mouseover', event => {
        box.style.backgroundColor = "black";
      }) 
    })
    });

    

      randomBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.addEventListener('mouseover', event => {
            box.style.backgroundColor = genRandomColor();
        });
        
    });
});


    function genRandomColor () {
    const randomColor = '#'+Math.floor(Math.random()* 16777215).toString(16);
    return randomColor;
    }
   







  





    //const changeGrid = document.getElementById(".sizechange")
