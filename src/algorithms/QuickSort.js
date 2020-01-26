function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
}


export default async function QuickSort(array, updateArray, start, end) {

    // Base case
    if(start == end) {
        document.getElementById(`Bar-${start}`).style.backgroundColor = '#4834DF';
        return;
    }
    else if(start > end) {
        return;
    }

    let p = start; // piovet element index
    for(let i = p + 1; i <= end; i++) {
        document.getElementById(`Bar-${p}`).style.backgroundColor = '#4834DF';
        document.getElementById(`Bar-${i}`).style.backgroundColor = 'yellow';
        await delay(30);
        if(array[i] < array[p]) { 
            document.getElementById(`Bar-${p}`).style.backgroundColor = 'red';
            document.getElementById(`Bar-${i}`).style.backgroundColor = 'red';
            await delay(30);
            if(i-p > 1) {
                document.getElementById(`Bar-${p + 1}`).style.backgroundColor = '#BB2CD9';
                await delay(30);
                let temp = array[i];
                array[i] = array[p+1];
                array[p+1] = temp;
                updateArray(array);
                document.getElementById(`Bar-${i}`).style.backgroundColor = '#BB2CD9';
                document.getElementById(`Bar-${p+1}`).style.backgroundColor = 'red';
                await delay(30);
                document.getElementById(`Bar-${i}`).style.backgroundColor = '#019031';
                await delay(30);
            }
            let temp = array[p];
            array[p] = array[p+1];
            array[p+1] = temp;
            p++;
            updateArray(array);
            document.getElementById(`Bar-${p}`).style.backgroundColor = '#4834DF';
            document.getElementById(`Bar-${p-1}`).style.backgroundColor = '#019031';
        } else {
            document.getElementById(`Bar-${i}`).style.backgroundColor = '#019031';
        }
        await delay(10);
    }
    await QuickSort(array, updateArray, start, p-1);
    await QuickSort(array, updateArray, p+1, end);
}