<script>
    import { Input, Checkbox, Radio, Textarea, Helper, Button, Select} from 'flowbite-svelte';


    let { id, question, type, list, datalist, formState, subparagraph, textareaprops} = $props();


    function nextStep(id) {
        if (formState.answers[id] === "") {
            formState.error = `Please enter your ${id}`;
        } else {
            console.log(formState);
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
        <div class="w-full">
            <label for={id} class="ubuntu-bold text-6xl text-Marine_blu"> {question}</label>
            <p class="text-Cool_gray text-xl ubuntu-regular">{subparagraph}</p>
        </div>

        <div class="form_container w-full">
            <div class="ubuntu-medium">
                {#if datalist}
                <div class="grid gap-6 w-full md:grid-cols-3">
                    {#each datalist as scelta}
                    <Radio {id} name={id} value={scelta}  color={colorForTheInputs()} bind:group={formState.answers[id]} custom>
                        <div class="inline-flex justify-between items-center p-5 w-full aspect-square text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div>
                                <div class="w-full text-lg font-semibold">{scelta}</div>
                            </div>
                        </div>
                    </Radio>
                    {/each}
                </div>

                {/if}
            
                {#if type === "textarea"}
                    <Textarea class="bg-trasparent max-h-max" placeholder={subparagraph} bind:value={formState.answers[id]} color={colorForTheInputs()} {...textareaprops}/>
                {/if}
            
                {#if type === "checkbox"}
                    <Checkbox class="bg-trasparent" {id} name={type} color={colorForTheInputs()} bind:checked={formState.answers[id]} />
                {/if}
            
                {#if type === "text" || type === "number"}
                    <Input  class="bg-trasparent" min="16" max="100" {id} {type} name={type} color={colorForTheInputs()} size="lg" placeholder={subparagraph} bind:value={formState.answers[id]}/>
                {/if}
            
                {#if list}
                    <Select class="bg-trasparent" {id} bind:value={formState.answers[id]}>
                        {#each list as { value, name }}
                          <option class="color-red" {value}>{name}</option>
                        {/each}
                    </Select>
                {/if}

            </div>

            {#if formState.error}
                {console.log(formState)}
                <Helper class='mt-2' color='red'><span class="font-medium ">Mannaggia a te!</span> {formState.error}</Helper>
            {/if}

        </div>

        {#if formState.step !== 0}
        <Button class="absolute bottom-0 left-0 focus:outline-none focus:ring-0 bg-trasparent text-Marine_blu ubuntu-bold" onclick={() => lastStep()}>Go Back</Button>
    {/if}
    <Button class="absolute bottom-0 right-0 focus:outline-none focus:ring-0 bg-Marine_blu ubuntu-bold" onclick={() => nextStep(id)}>Next Step</Button>
    </div>
</div>

<style>

    
</style>