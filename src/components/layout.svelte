<script>
    import {Button, Slider, RadioChipGroup} from "attractions";
    import {array, val, currentAlgorithm, runAlgo} from '../store'

    const items = [
    { value: "0", label: 'Merge Sort' },
    { value: "1", label: 'Quick Sort' },
    { value: "2", label: 'Heap Sort' },
    { value: "3", label: 'Bubble Sort' },
    ];

</script>

<header>
    <Button filled on:click={array.reset}>Generate new Array</Button>
    <Slider
        bind:value={$val}
        min={10}
        max={50}
        step={1}
        tooltips="always"
    />
    <RadioChipGroup {items} name="algorithms" value="0" on:change={(e) => {$currentAlgorithm = parseInt(e.detail.value)}}/>
    <Button filled on:click={runAlgo}>Run</Button>
</header>
<main>
    <slot/>
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