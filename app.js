const fs = require ('fs');

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');
console.log(data)

const monArray = data.split(" ").map(x => parseInt(x))



function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    var result = [];
    var il = 0;
    var ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

console.log("Tri fusion :","comparaisons - " ,mergeSort(monArray));


/*
La fonction mergeSort est la fonction principale de cet algorithme de tri "Merge Sort".
Elle prend en entrée un tableau (arr) et utilise une approche de "diviser pour régner" pour trier les éléments du tableau.

La première étape de la fonction est de vérifier si la taille du tableau est inférieure à 2, 
dans ce cas, il n'y a pas besoin de trier car le tableau est déjà trié. 
Cela s'appelle la condition de sortie de la récursion. 
En effet, l'algorithme utilise la récursion pour continuer à diviser le tableau en sous-tableaux 
jusqu'à ce que chaque sous-tableau ne contienne qu'un élément, c'est-à-dire qu'ils soient triés par définition.

Sinon, elle calcule l'index du milieu du tableau en utilisant la fonction Math.floor() pour arrondir la valeur obtenue 
par la division de la longueur du tableau par 2.
Ensuite elle utilise la méthode slice() pour créer deux sous-tableaux : left (contenant les éléments de 0 à middle-1) 
et right (contenant les éléments de middle à la fin).

Après avoir divisé le tableau en deux, elle appelle alors récursivement mergeSort sur chacun de ces sous-tableaux pour les trier. 
C'est la récursion elle-même , en effet, pour chaque sous-tableau, la fonction va se rappeller elle même jusqu'a ce que tout les 
sous-tableau ne contienne qu'un élément.

La fonction merge est utilisée pour fusionner les deux sous-tableaux triés (left et right) 
en un seul tableau trié en utilisant une approche "fusionner".
Elle déclare un tableau vide (result) qui va contenir les éléments triés, et initialise deux variables (il et ir) à 0 pour parcourir 
les éléments des sous-tableaux.

La boucle while est utilisée pour parcourir les éléments des sous-tableaux jusqu'à ce qu'un des tableaux soit vide.
A chaque itération, elle compare le premier élément du tableau gauche (left[il]) et le premier élément du 
tableau droit (right[ir]). Elle ajoute à result le plus petit des deux éléments et incrémente la 
variable correspondante (il ou ir) pour conserver leur état.

Une fois que l'une des listes est vide, il reste encore des éléments dans l'autre liste, 
ils sont ajoutés à result en utilisant la méthode concat() pour concaténer les éléments restants de left
*/