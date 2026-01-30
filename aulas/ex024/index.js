// RECURSIVIDADE
function fatorial(n){
    if (n == 1 || n == 0){
        return 1
    }else{
        return n * fatorial(n-1)
        /* a função vai ser feita n vezes, cada vez n perde 1
        a função vai ser feita 5 vezes, cada vez n = 5 - 1:
        fatorial(5) → 5 * fatorial(4)
        fatorial(4) → 4 * fatorial(3)
        fatorial(3) → 3 * fatorial(2)
        fatorial(2) → 2 * fatorial(1)
        fatorial(1) → 1  (caso base)
         */
    }
}
console.log(fatorial(5))

/*
5! -> 5 x 4 x 3 x 2 x 1 = 120
%! = 5 x 4!

n! = n x (n-1)!

1! =1
*/