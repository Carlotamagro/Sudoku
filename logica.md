cada casa é representada por (x,y,z)
x - linhas
y - colunas
z - square

1:1:1 1:2:1 1:3:1    1:4:2 1:5:2 1:6:2   1:7:3 1:8:3 1:9:3
2:1:1 2:2:1 2:3:1    2:4:2 2:5:2 2:6:2   2:7:3 2:8:3 2:9:3
3:1:1 3:2:1 3:3:1    3:4:2 3:5:2 3:6:2   3:7:3 3:8:3 3:9:3

4:1:4 4:2:4 4:3:4    4:4:5 4:5:5 4:6:5   4:7:6 4:8:6 4:9:6
5:1:4 5:2:4 5:3:4    5:4:5 5:5:5 5:6:5   5:7:6 5:8:6 5:9:6
6:1:4 6:2:4 6:3:4    6:4:5 6:5:5 6:6:5   6:7:6 6:8:6 6:9:6

7:1:7 7:2:7 7:3:7    7:4:8 7:5:8 7:6:8   7:7:9 7:8:9 7:9:9
8:1:7 8:2:7 8:3:7    8:4:8 8:5:8 8:6:8   8:7:9 8:8:9 8:9:9
9:1:7 9:2:7 9:3:7    9:4:8 9:5:8 9:6:8   9:7:9 9:8:9 9:9:9

se x for igual ao x de outra cell e tiverem o mesmo numero - cell vermelha/errado
se y for igual ao y de outra cell e tiverem o mesmo numero - cell vermelha/errado
se z for igual ao z de outra cell e tiverem o mesmo numero - cell vermelha/errado


GERAR SUDOKU RANDOM

Regras:
- casas com o mesmo x tem q ter numeros diferentes.
- casas com o mesmo y tem q ter numeros diferentes.
- casas com o mesmo z tem q ter numeros diferentes.
- numeros de 1 a 9 apenas

Encontra a próxima célula vazia (começando na 1:1:1).
Tenta colocar o primeiro número
    Criar uma lista: [1, 2, 3, 4, 5, 6, 7, 8, 9].
    Baralhar a lista uma única vez (ex: ela vira [4, 1, 9, 2...]).
    Escolhe o 4
    Verifica as regras: Esse número já existe no mesmo x, y ou z?
        Se for válido: Coloca o número e passa para a próxima célula (chama a função outra vez - recursividade).
        Se não for válido: Tenta o próximo número da lista baralhada.
Se tentares todos os números de 1 a 9 e nenhum funcionar, significa que cometeste um erro lá atrás. Então, a função "limpa" a célula atual (volta a zero) e regressa à célula anterior para tentar um número diferente.

numero
numero = math.floor(math.random()*9)+1

guardar este tabuleiro numa variavel solucao


MOSTRAR APENAS ALGUMAS CASAS

Dificuldade
Fácil 36 — 46 4 ou 5 casas
    ex: Tenho de retirar exatamente 40 números"
        Se ela tiver um número, tenta retirá-lo.
        Usa o VERIFICADOR: "Se eu tirar este número, o Sudoku ainda só tem 1 solução?"
            Se Sim: Retira e guarda esse tabuleiro novo (e comeca o processo de novo neste tabuleiro).
            Se Não: Deixa lá o número e escolhe outra coordenada.
Médio 30 — 35 3 ou 4 casas
Difícil 17 — 28 2 ou 3 casas


VERIFICADOR
igual ao gerar sudoku mas quando encontra uma solucao, soma às solucoes. se solucoes > 1, o verificador retorna q n pode tirar o numero.


USER
User mete um numero.
verificar se numero posto naquela cell é igual ao numero na solucao
se sim - 
