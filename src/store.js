import { get, writable } from "svelte/store";


function generateArray() {
    const {subscribe, set, update} = writable([])
    return {
        subscribe,
        update: (arr) => update(() => arr),
        reset: () => set(Array.from({length: get(val)}, () => Math.floor(Math.random() * 100)))
    }
};

export const array = generateArray()

export function newArray() {
    array.reset()
    resetColors()
};

export let colors = {
    active: [],
    finished: [],
    bigger: []
}


export const val = writable(10);

export const currentAlgorithm = writable(0);

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const resetColors = () => {
    colors.active = []
    colors.finished = []
    colors.bigger = []
}

const bubbleSort = async() => {
    let currentArray = get(array);
    for (let i in currentArray) {
        let helper = 0
        for (let num = 0; num < (currentArray.length - parseInt(i) - 1); num++) {
            colors.active = [num, num + 1]
            colors.bigger = []
            if (currentArray[num] > currentArray[num + 1]) {
                colors.bigger = [num]
                await sleep(200)
                const helper = currentArray[num]
                currentArray[num] = currentArray[num + 1]
                currentArray[num + 1] = helper
                colors.bigger = [num + 1]
                array.update(currentArray)
            } else {
                helper += 1
            }
            await sleep(200)
        }
        if (helper === currentArray.length - parseInt(i) - 1) {
            break
        }
        colors.finished.push(currentArray.length - parseInt(i) - 1)
    }
    resetColors()
    colors.finished.push(...currentArray.map((_, i) => i))
}

const quickSort = async(arr, position) => {
    if (arr.length <= 1) return arr
    const pivot = arr.at(-1)
    let leftArr = []
    let rightArr = []
    for (const [index, value] of arr.slice(0, -1).entries()) {
        let currentArray = get(array)
        currentArray = [...currentArray.slice(0, position - arr.length),...currentArray.slice(position - arr.length + 1)]

        if (value > pivot) {
            rightArr.push(value)
        } else {
            leftArr.push(value)
        }
    }

    const updatedLeftArr = await quickSort(leftArr, (position-1-rightArr.length))
    const updatedRightArr = await quickSort(rightArr, position)
    return [...updatedLeftArr, pivot, ...updatedRightArr]
}

export const runAlgo = async () => {
    resetColors()
    switch (get(currentAlgorithm)) {
        case 1: 
            array.update([... await quickSort(get(array), get(array).length)])
            break
        case 3: 
            bubbleSort()
            break
        default: 
            bubbleSort()
            break
    }
};