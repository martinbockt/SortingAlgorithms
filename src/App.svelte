<script>
  import Layout from './components/layout.svelte';
  import Algorithms from './lib/algorithms.svelte';
</script>

<Layout let:val let:array let:colors>
    <Algorithms val={val} array={array} colors={colors}/>  
</Layout>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
