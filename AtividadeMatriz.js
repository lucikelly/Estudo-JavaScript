matriz = [];
linhas = 4;
colunas = 5;
//primeiro for cria o formato da matriz 
for (i= 0;i<linhas;i++){
    matriz[i] = [];
    for (j= 0;j<colunas;j++){
        //usei o switch pra preencher a matriz e multiplicar por linha 
        switch (i) { 
            case 0:
                // Múltiplos de 2 na primeira linha
                matriz[i][j] = (j + 1) * 2;
                break;
            case 1:
                // Múltiplos de 3 na segunda linha
                matriz[i][j] = (j + 1) * 3;
                break;
            case 2:
                // Múltiplos de 4 na terceira linha
                matriz[i][j] = (j + 1) * 4;
                break;
            case 3:
                // Múltiplos de 5 na quarta linha
                matriz[i][j] = (j + 1) * 5;
                break;
        }
   }
}
// pra exibir a matriz
for (var i = 0; i < 1; i++) {
    console.log(matriz);
}









