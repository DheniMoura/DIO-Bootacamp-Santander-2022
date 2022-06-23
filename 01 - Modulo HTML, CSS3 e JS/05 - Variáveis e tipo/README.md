## Atribuição de valores

![case types](most-common-programming-case-types-by-chase-adams-chase-adams-362406022740.png)

*Camel case* é muito utilizado no JavaScritp para funções e variáveis
*Upper Case Snake Case* é muito utilizado para constantes
<br>
<br>

### var / let

#### var
Escopo global<br>
Possível atribuir valor antes de declarar a variável (hoisting)<br>
Permite redeclaração e reatribuição<br>

#### let
Escopo dentro de um bloco<br>
não faz hoisting<br>
Permite reatribuição<br>
Mais seguro<br>
<br><br>


### const
Declarada em SNAKE_UPPER_CASE<br>
Escopo de bloco<br>
Não faz hoisting<br>
Não permite redeclaração e reatribuição<br>
<br><br>

### Resumo
| |var|const|let|
|:--:|:--:|:--:|:--:|
escopo|global ou local|bloco|bloco
redeclarar|sim|não|não
reatribuir|sim|não|sim
hoisting|sim|não|não

<br><br>

## Tipos de valores

### Estruturas de dados
JavaScript possuí tipagem fraca/dinâmica, ou seja, antes de declarar um valor não é especificado o **tipo** dele.

Tipos de dados em JavaScript
![tipos](Tipos.png)

Dica: Utilizar a biblioteca Math para lidar com números.<br><br>


## Atividades da aula

### [Atividade 01](https://github.com/DheniMoura/DIO-Bootacamp-Santander-2022/blob/main/01%20-%20Modulo%20HTML%2C%20CSS3%20e%20JS/05%20-%20Vari%C3%A1veis%20e%20tipo/palindromo.js)
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
<br><br>

### [Atividade 02](https://github.com/DheniMoura/DIO-Bootacamp-Santander-2022/blob/main/01%20-%20Modulo%20HTML%2C%20CSS3%20e%20JS/05%20-%20Vari%C3%A1veis%20e%20tipo/troca-pares.js)
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1
