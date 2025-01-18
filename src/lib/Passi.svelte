<script>
    import { Input, Checkbox, Radio, Textarea, Helper, Button} from 'flowbite-svelte';
    import colors from "$lib/utils.json";


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

<div class="width-full bg-green-500 h-full relative flex flex-col items-center pt-10 ">
    <div class="w-4/5 flex flex-col items-center gap-y-0">
        <div class="bg-white w-full">
            <label for={id} class="font"> {question}</label>
            <p>{subparagraph}</p>
        </div>

        <div class="form_container">
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
                    <Input {id} {type} name={type} color={colorForTheInputs()} size="lg" placeholder="eg pippo..." bind:value={formState.answers[id]}/>
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
                <Helper class='mt-2' color='red'><span class="font-medium">Mannaggia a te!</span> {formState.error}</Helper>
            {/if}

        </div>

    </div>

    {#if formState.step !== 0}
        <Button class="absolute bottom-0 left-0" style="background-color:transparent" onclick={() => lastStep()}>Go Back</Button>
    {/if}
    <Button class="absolute bottom-0 right-0" style="background-color:hsl(213, 96%, 18%)" onclick={() => nextStep(id)}>Next Step</Button>
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