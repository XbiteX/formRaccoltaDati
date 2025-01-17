<script>
    let { id, question, type, list, datalist, formState, subparagraph} = $props();


    function nextStep(id) {
        if (!formState.answers[id]) {
            formState.error = `Please enter your ${id}`;
        } else {
            formState.step += 1;
            formState.error = "";
        }
    }

    function lastStep(){
        formState.step -= 1;
    }
</script>

<div class="width-full bg-green-500 h-full relative flex flex-col items-center pt-10 ">
    <div class="w-4/5 flex flex-col items-center gap-y-0">
        <div class="bg-white w-full">
            <label for={id} class="font"> {question}</label>
            <p>{subparagraph}</p>
        </div>

        {#if datalist}
            {#each datalist as scelta}
            <label>
                <input type="radio" name={id} value={scelta} {id} bind:group={formState.answers[id]}/>
                {scelta}
            </label>
            {/each}
        {/if}
    
        {#if type === "textarea"}
            <textarea {id} bind:value={formState.answers[id]}></textarea>
        {/if}
    
        {#if type === "checkbox"}
            <input type="checkbox" name={type} {id} bind:checked={formState.answers[id]} />
        {/if}
    
        {#if type === "text" || type === "number"}
            <input {type} name={type} {id} bind:value={formState.answers[id]} />
        {/if}
    
        {#if list}
            <form>
                <select {id} bind:value={formState.answers[id]}>
                    {#each list as scelta}
                        <option value={scelta}>{scelta}</option>
                    {/each}
                </select>
            </form>
        {/if}
    
    
        {#if formState.error}
            <p>{formState.error}</p>
        {/if}

    </div>
    {#if formState.step !== 0}
        <button class="absolute bottom-0 left-0" onclick={() => lastStep()}>Go Back</button>
    {/if}
    <button class="absolute bottom-0 right-0" onclick={() => nextStep(id)}>Next Step</button>
</div>

<style>
    @font-face {
        font-family: "Ubuntu-Bold";
        src: url("assets/fonts/Ubuntu-Bold.ttf") format("truetype");
        weight: 700;
    }

    @font-face {
        font-family: "Ubuntu-Regular";
        src: url("assets/fonts/Ubuntu-Regular.ttf") format("truetype");
        weight: 400;
    }

    @font-face {
        font-family: "Ubuntu-Medium";
        src: url("assets/fonts/Ubuntu-Medium.ttf") format("truetype");
        weight: 500;
    }

    label{
        font-family: Ubuntu-Bold;
        color: hsl(213, 96%, 18%);
        font-size:  2.5rem;
    }

    input{
        width: 100%;
        border-radius: 0.8rem;
    }

    p{
        font-family: Ubuntu-Regular;
        color: hsl(231, 11%, 63%);
        font-size:  1.2rem;
    }

</style>