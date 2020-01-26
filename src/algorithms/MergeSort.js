function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
}


async function Merge(array, updateArray, startIndex, mid, lastIndex) {
    let arr1 = array.slice(startIndex, mid+1);
    let arr2 = array.slice(mid+1, lastIndex+1);
    let i=0, j=0, k = startIndex;
    for(; i < arr1.length && j < arr2.length ; k++) {
        document.getElementById(`Bar-${startIndex + i}`).style.backgroundColor = "yellow";
        document.getElementById(`Bar-${mid + 1 + j}`).style.backgroundColor = "yellow";
        await delay(1);
        if(arr1[i] < arr2[j]) {

            array[k] = arr1[i];
            i++;
            updateArray(array);
            document.getElementById(`Bar-${startIndex + i - 1}`).style.backgroundColor = "#019031";
            document.getElementById(`Bar-${mid + 1 + j}`).style.backgroundColor = "#019031";
        } else {
            array[k] = arr2[j];
            j++;
            updateArray(array);
            document.getElementById(`Bar-${startIndex + i}`).style.backgroundColor = "#019031";
            document.getElementById(`Bar-${mid + j}`).style.backgroundColor = "#019031";
        }
    }
    while( i < arr1.length ) {
        document.getElementById(`Bar-${startIndex + i}`).style.backgroundColor = "yellow";
        array[k] = arr1[i]; i++; k++;
        await delay(1);
        updateArray(array);
        document.getElementById(`Bar-${startIndex + i - 1}`).style.backgroundColor = "#019031";
    }
    while ( j < arr2.length ) {
        document.getElementById(`Bar-${mid + j + 1}`).style.backgroundColor = "yellow";
        array[k] = arr2[j]; j++; k++;
        await delay(1);
        updateArray(array);
        document.getElementById(`Bar-${mid + j}`).style.backgroundColor = "#019031";
    }
}

export default async function MergeSort(array, updateArray, startIndex, lastIndex) {
    if(startIndex === lastIndex) {
        return;
    }
    let mid = Math.floor((lastIndex + startIndex)/2);
    await MergeSort(array, updateArray, startIndex, mid);
    await MergeSort(array, updateArray, mid+1, lastIndex);
    await Merge(array, updateArray, startIndex, mid, lastIndex);
}