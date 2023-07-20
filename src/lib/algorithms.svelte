<script>
    import {array, colors} from '../store'
</script>

<div class="arrayWrap">
    {#each $array as item, index}
        <div 
        style="
            height: {50 + item * 8}px;
            background: {
            colors.active.includes(index)
                ? (colors.bigger.includes(index) ? "red" : "green") 
                : (colors.finished.includes(index) ? "purple" : null)}
            "
        >{array.length < 15 ? item : ""}</div>
    {/each}
</div>

<style>
    .arrayWrap {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 4rem;
    max-width: calc(100vw - 100px);
  }
  .arrayWrap div {
    padding: 10px;
    width: 35px;
    background: #4300b0;
    border-radius: 10px;
  }
</style>