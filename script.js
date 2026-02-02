
// criar o grid
const grid = document.createElement("div");
grid.classList.add("grid");
document.body.appendChild(grid);

// lista 
let allCells =[];
let solution =[];

const victorywindow = document.getElementsByClassName("window");
// ciclo para fazer os 9 squares
for (let i=0;i<9;i++){
	const square = document.createElement ("div");
	square.classList.add("square");
    grid.appendChild(square);
    
	//ciclo para fazer as 81 celulas (de 0 a 80) - criar 9 cells dentro do square
	for (let j=0;j<9;j++){
		//criar elemento do tipo input
		const cell = document.createElement("input");
		cell.classList.add("cell");
		
		cell.type = "text"; //para n apareceber as setas ao lado - q aparecem qd o input é numero
		cell.maxLength = "1";
		cell.inputMode = "numeric";
		
		// i = índice do square (0-8), j = índice da célula no square (0-8)
        let linha = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        let coluna = (i % 3) * 3 + (j % 3);

        cell.dataset.line = linha;
        cell.dataset.column = coluna;
        cell.dataset.square = i + 1;
		
		// so se pode escrever numeros de 1 a 9. isNaN impede letras
		cell.addEventListener("input", function() {
			if(isNaN(this.value) || this.value === "0"){
				this.value="";
			}
        });
		square.appendChild(cell);
        allCells.push(cell);
		}
		
	}


let numbers = [1,2,3,4,5,6,7,8,9];
// função baralhar (Fisher-Yates)
function shuffle(numbers){
	for (let i = numbers.length - 1; i>0; i--) {
		const j = Math.floor(Math.random()*(i+1));
		
		[numbers [i], numbers[j]]=[numbers [j], numbers[i]];
	}
	return numbers;
}


// number existe nesta line? .some "existe alguma cell q tenha isto?"
function verifyLine(number, l){
	return !allCells.some(cell => cell.dataset.line == l && cell.value==number); //se n encontrar, return true, pode colocar la o numero 
}

function verifyColumn(number, c){
	return !allCells.some(cell => cell.dataset.column == c && cell.value==number); //se n encontrar, return true, pode colocar la o numero 
}

function verifySquare(number, s){
	return !allCells.some(cell => cell.dataset.square == s && cell.value==number); //se n encontrar, return true, pode colocar la o numero 
}

function CompleteSudoku (){
	//procurar a primeira cell vazia
	let FoundCell = allCells.find(cell => cell.value === "");
	
	
	if (FoundCell){
		// as coordenadas da primeira cell vazia
		let l = FoundCell.dataset.line;
		let c = FoundCell.dataset.column;
		let s = FoundCell.dataset.square;
	
		let numbers = [1,2,3,4,5,6,7,8,9]; //criada nova lista para baralhar sempre antes de cada cell
		shuffle(numbers);
	
		for (let i=0;i<9;i++){
			let number = numbers[i];
			if (verifyLine(number,l) && verifyColumn(number,c) && verifySquare(number,s)){
			FoundCell.value = number;
			
				if (CompleteSudoku()){
					return true; // se o resto do tabuleiro funcionar, mantem o numero.
				}

			FoundCell.value="";
			}
		}
	}
	else{
		return true;
	}
	return false;
}


let CellstoTest =[...allCells];
shuffle (CellstoTest);
let solucoes = 0;

function TakeNumbers(){

let meta = 40;
let removidos = 0;
	
	for (let i=0;i<81;i++){
		if (CellstoTest[i].value !== ""){ // checkar se o value é true - tem numero
			let CellNumber = CellstoTest[i].value;
			CellstoTest[i].value="";
			
			solucoes = 0;
			verificador();
			if (solucoes === 1){
					removidos++;
				if (removidos===meta){
					return true;
				}
			}
			else {
			CellstoTest[i].value=CellNumber;
			}
		}
		
	}
}


function verificador() {
    if (solucoes > 1) return; // se já encontramos 2, não precisamos de mais

    let FoundCell = allCells.find(cell => cell.value === "");

    if (!FoundCell) {
        solucoes++; // Encontrou 1 solução completa
        return;
    }

    let l = FoundCell.dataset.line;
    let c = FoundCell.dataset.column;
    let s = FoundCell.dataset.square;

    for (let i = 1; i <= 9; i++) {
        if (verifyLine(i, l) && verifyColumn(i, c) && verifySquare(i, s)) {
            FoundCell.value = i;
            
            verificador(); 
            
            FoundCell.value = "";
            
            if (solucoes > 1) return;  
        }
    }
}
CompleteSudoku();

solution = allCells.map(cell=>cell.value); // guardar o tabuleiro gerado antes de tirar os numeros

TakeNumbers();

for (let i=0;i<81;i++){
	if (allCells[i].value !==""){
		allCells[i].readOnly = true; // para o user n mexer
		allCells[i].classList.add("fixed"); // para ficarem em bold
	}
}

// funcao para verificar input 
function VictoryCheck(){
	for (let i = 0; i<81;i++){
		if(allCells[i].value === "" || allCells[i].value!= solution[i]){
			return;
		}
	}
	document.querySelector(".window").style.display = "block";
}

allCells.forEach(function(cell) {
    if (!cell.readOnly) {
        cell.addEventListener("input", VictoryCheck);
    }
});






