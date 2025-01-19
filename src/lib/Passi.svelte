<script>
    import { Input, Checkbox, Radio, Textarea, Helper, Button} from 'flowbite-svelte';


    let { id, question, type, list, datalist, formState, subparagraph, textareaprops} = $props();


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

    function colorForTheInputs(){
        return formState.error ? "red" : "";
    }


</script>

<div class="width-full h-full flex flex-col items-center p-6">
    <div class="w-4/5 h-full flex flex-col items-center gap-y-10 relative">
        <div class="bg-white w-full">
            <label for={id} class="font"> {question}</label>
            <p>{subparagraph}</p>
        </div>

        <div class="form_container w-full">
            <div class="inputs_container">
                {#if datalist}
                    {#each datalist as scelta}
                        <Radio {id} name={id} value={scelta} color={colorForTheInputs()} bind:group={formState.answers[id]}>{scelta}</Radio>
                    {/each}
                {/if}
            
                {#if type === "textarea"}
                    <Textarea  bind:value={formState.answers[id]} color={colorForTheInputs()} {...textareaprops}/>
                {/if}
            
                {#if type === "checkbox"}
                    <Checkbox {id} name={type} color={colorForTheInputs()} bind:checked={formState.answers[id]} />
                {/if}
            
                {#if type === "text" || type === "number"}
                    <Input {id} {type} name={type} color={colorForTheInputs()} size="lg" placeholder={subparagraph} bind:value={formState.answers[id]}/>
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

            </div>

            {#if formState.error}
                {console.log(formState)}
                <Helper class='mt-2' color='red'><span class="font-medium ">Mannaggia a te!</span> {formState.error}</Helper>
            {/if}

        </div>

        {#if formState.step !== 0}
        <Button class="absolute bottom-0 left-0 focus:outline-none focus:ring-0 bg-trasparent text-Marine_blu" onclick={() => lastStep()}>Go Back</Button>
    {/if}
    <Button class="absolute bottom-0 right-0 focus:outline-none focus:ring-0 bg-Marine_blu" onclick={() => nextStep(id)}>Next Step</Button>
    </div>
</div>

<style>



    label{
        font-family: "Ubuntu-Bold";
        color: hsl(213, 96%, 18%);
        font-size:  2.5rem;
    }

    .inputs_container{
        font-family: "Ubuntu-Medium";
    }
    p{
        font-family: "Ubuntu-Regular";
        color: hsl(231, 11%, 63%);
        font-size:  1.2rem;
    }

    
    Button{
        background-color: transparent;
        font-family: "Ubuntu-Bold";
        color: hsl(213, 96%, 18%);
        font-size:  1.5rem;
    }

</style>