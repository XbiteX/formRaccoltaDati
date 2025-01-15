<script>
    let {proprietis} = $props();

</script>

<div class="width-full">

    {console.log(proprietis)}
    {#each proprietis as prop}
        <div class="flex justify-between">
            <div class="stepNumber">{prop.tag}</div>
        </div>
    {/each}
</div>