
// criar o grid
const grid = document.createElement ("div");
grid.classList.add ("grid");
document.body.appendChild(grid);

// lista 
let allcells =[];

// ciclo para fazer os 9 squares
for (let i=0;i<9;i++){
	const square = document.createElement ("div");
	square.classList.add ("square");
    grid.appendChild(square);
    
	//ciclo para fazer as 81 celulas (de 0 a 80) - criar 9 cells dentro do square
	for (let j=0;j<9;j++){
		//criar elemento do tipo input
		const cell = document.createElement("input");
		cell.classList.add("cell");
		
		cell.type = "text"; //para n apareceber as setas ao lado - q aparecem qd o input é numero
		cell.maxLength = "1";
		cell.inputMode = "numeric";
		
		// so se pode escrever numeros de 1 a 9. isNaN impede letras
		cell.addEventListener("input", function(){
			if(isNaN(this.value) || this.value === "0"){
				this.value="";
			}
        });
		square.appendChild(cell);
        allcells.push(cell);
		}
		
	}

// coordenadas
for (let k=0;k<allcells.length;k++){
    let currentCell = allcells[k];
		let x= Math.floor(k/9);
		let y=k%9;
		let z= Math.floor(x/3)*3 + Math.floor(y/3)+1 ;
		
		currentCell.dataset.linha = x;
		currentCell.dataset.coluna = y;
		currentCell.dataset.square = z;
}

//procurar a primeira cell vazia
let FoundCell = allCells.find(cell=>cell.value==="");

