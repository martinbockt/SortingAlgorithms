<script>
    import {Button, Slider, RadioChipGroup} from "attractions";

    const items = [
    { value: "0", label: 'Merge Sort' },
    { value: "1", label: 'Quick Sort' },
    { value: "2", label: 'Heap Sort' },
    { value: "3", label: 'Bubble Sort' },
    ];

    const generateArray = () => Array.from({length: val}, () => Math.floor(Math.random() * 100));

    let val = 10;
    let currentAlgorithm = 0;


    let array = generateArray();

    let colors = {
        active: [],
        finished: [],
        bigger: []
    }
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const resetColors = () => {
        colors.active = []
        colors.finished = []
        colors.bigger = []
    }

    const newArray = () => {
        array = generateArray();
        resetColors()
    };

    const bubbleSort = async() => {
        for (let i in array) {
            let helper = 0
            for (let num = 0; num < (array.length - parseInt(i) - 1); num++) {
                colors.active = [num, num + 1]
                colors.bigger = []
                if (array[num] > array[num + 1]) {
                    colors.bigger = [num]
                    await sleep(200)
                    const helper = array[num]
                    array[num] = array[num + 1]
                    array[num + 1] = helper
                    colors.bigger = [num + 1]
                } else {
                    helper += 1
                }
                await sleep(200)
            }
            if (helper === array.length - parseInt(i) - 1) {
                break
            }
            colors.finished.push(array.length - parseInt(i) - 1)
        }
        resetColors()
        colors.finished.push(...array.map((_, i) => i))
    }

    const quickSort = (arr) => {
        if (arr.length <= 1) return arr
        const pivot = arr.at(-1)
        let leftArr = []
        let rightArr = []
        for (let i of arr.slice(0, -1)) {
            i > pivot ? rightArr.push(i) : leftArr.push(i)
        }
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    }

    const runAlgo = () => {
        resetColors()
        switch (currentAlgorithm) {
            case 1: 
                array = [...quickSort(array)]
                break
            case 3: 
                bubbleSort()
                break
            default: 
                bubbleSort()
                break
        }
    };

</script>

<header>
    <Button filled on:click={newArray}>Generate new Array</Button>
    <Slider
        bind:value={val}
        min={10}
        max={50}
        step={1}
        tooltips="always"
    />
    <RadioChipGroup {items} name="algorithms" value="0" on:change={(e) => {currentAlgorithm = parseInt(e.detail.value)}}/>
    <Button filled on:click={runAlgo}>Run</Button>
</header>
<main>
    <slot {val} {array} {colors}/>
</main>
<footer>

</footer>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }
</style>