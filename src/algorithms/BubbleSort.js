function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
}



export default async function BubbleSort(array, updateArray) {
    let n = array.length;
    for(let i = 1; i < n; i++) {
        for(let j = 0; j < n-i; j++) {
            document.getElementById(`Bar-${j}`).style.backgroundColor = 'yellow';
            document.getElementById(`Bar-${j+1}`).style.backgroundColor = 'yellow';
            await delay(1);
            if (array[j] > array[j + 1]) {
                document.getElementById(`Bar-${j}`).style.backgroundColor = 'red';
                document.getElementById(`Bar-${j+1}`).style.backgroundColor = 'red';
                await delay(1);
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp; 
                updateArray(array);
                document.getElementById(`Bar-${j}`).style.backgroundColor = 'yellow';
                document.getElementById(`Bar-${j+1}`).style.backgroundColor = 'yellow';
                await delay(1);
            }
            document.getElementById(`Bar-${j}`).style.backgroundColor = '#019031';
            document.getElementById(`Bar-${j+1}`).style.backgroundColor = '#019031';
        }
        document.getElementById(`Bar-${n - i}`).style.backgroundColor = '#4834DF';
    }
    { /* color min element */ }
    document.getElementById(`Bar-${0}`).style.backgroundColor = '#4834DF';
}
