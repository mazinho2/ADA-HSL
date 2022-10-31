// Complexidade de Algoritmo de forma simplificada


// 

const array = [12, 2, 9, 4, 17, 24, 3];
// Bubble Sort

function bubbleSort(array, tam = array.length) {
    if (tam ==1) return;
    for (let i = 0; i < tam-1; i ++) {
        console.log(array)
        if (array[i] > array [i+1]) {
            let aux = array[i];
            array [i] = array[i+1];
            array[i+1] = aux;
        }
    }

    bubbleSort(array, tam-1);

    return array;
}

function bubbleSort2(array) {
    for (let tam = array.length - 1; tam > 1; tam-- ) {
        for (let i = 0; i < tam-1; i ++) {
            if (array[i] > array [i+1]) {
                let aux = array[i];
                array [i] = array[i+1];
                array[i+1] = aux;
            } 
        }
    }

    return array
}

// console.log('bubbleSort')
// console.log(bubbleSort(array))

// console.log('bubbleSort2\n', bubbleSort2(array))


// Selection Sort

// Insertion Sort
function insertionSort(array) {
    for (let i=0; i < array.length; i++){
        // for (let j = i; j >= 0; j--){
        //     if (array[j] < array[j-1]) {
        //         let aux = array[j];
        //         array[j] = array[j-1];
        //         array[j-1] = aux;
        //     } else {
        //         break;
        //     }
        // }

        let j=i;
        while(array[j] < array[j-1]) {
            let aux = array[j];
            array[j] = array[j-1];
            array[j-1] = aux;
            j--;
        }
    }
    return array;
}

// console.log(insertionSort(array))


// Merge Sort
function mergeSort(){
    
}

// Quick Sort