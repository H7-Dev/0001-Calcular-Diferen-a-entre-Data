

### **❓ Questão: calcular a diferença entre duas datas e exibir o resultado em uma forma fácil de ler para os seres humanos.**
#### **Descrição**

    Este código implementa duas funções: diffInTimeUnits e humanize. A função diffInTimeUnits recebe dois argumentos de data, start e end, e calcula a diferença entre eles em diferentes unidades de tempo (milissegundos, segundos, minutos, horas, dias, meses e anos) e retorna essa diferença em um objeto. A função humanize recebe esse objeto de diferença e retorna uma string humanizada com a diferença em anos, meses, dias, horas, minutos, segundos ou milissegundos, dependendo do valor mais significativo.

    Depois disso, o código adiciona dois listeners de eventos para os elementos de entrada startInput e endInput (assumindo que são campos de data). Quando os valores destes campos mudarem, a diferença entre eles é calculada, humanizada e exibida no console.

#### **Aqui está um passo a passo para entender melhor o código:**
    ✔️ 1. As duas funções são definidas: diffInTimeUnits e humanize.
    ✔️ 2. A função diffInTimeUnits calcula a diferença entre duas datas em diferentes unidades de tempo (milissegundos, segundos, minutos, horas, dias, meses e anos) e retorna essa diferença em um objeto.
    ✔️ 3. A função humanize recebe o objeto de diferença e retorna uma string humanizada com a diferença em anos, meses, dias, horas, minutos, segundos ou milissegundos, dependendo do valor mais significativo.
    ✔️ 4. Os elementos de entrada startInput e endInput são recuperados pelo seu ID.
    ✔️ 5. Listeners de evento são adicionados aos elementos startInput e endInput, que chamam a função diffInTimeUnits e humanize quando os valores destes elementos mudarem.
    ✔️ 5. A diferença entre as datas é calculada, humanizada e exibida no console.

    Este código pode ser usado para calcular a diferença entre duas datas e exibir o resultado em uma forma fácil de ler para os seres humanos.

   ***Criado usando chatGP***


