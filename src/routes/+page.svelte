<script> 
    import Passo1 from '$lib/Passo1.svelte';
    let formState = $state({
        answers: {},
        step: 0,
        error: "",
    });
    let name = "user";

    const arrayOggetti = [
        {
            tag: "input",
            id: "nome",
            type: "text",
            question: "Qual è il tuo nome?",
            stepDescription: "NOME"
        },
        {
            tag: "input",
            id: "eta",
            type: "number",
            question: "Quanti anni hai?",
            stepDescription: "ETA'"
        },
        {
            tag: "textarea",
            id: "presentazione",
            question: "Scrivi una breve presentazione di te",
            stepDescription: "PRESENTAZIONE"
        },
        {
            tag: "select",
            id: "paese",
            list: ["italia", "spagna", "framncia", "germania", "altro"],
            question: "In quale paese vivi?",
            stepDescription: "PAESE"
        },
        {
            tag: "select",
            id: "lavoro",
            list: ["google", "microsoft", "amazon", "altro"],
            question: "In quale azienda hai lavorato?",
            stepDescription: "AZIENDA"
        },
        {
            tag: "input",
            id: "lavoroRemoto",
            type: "checkbox",
            question: "Sei disponibile a lavorare da remoto?",
            stepDescription: "LAVORO DA REMOTO"
        },
        {
            tag: "input",
            id: "anniEsperienza",
            type: "radio",
            datalist: ["1-2", "3-5", "più di 5"],
            question: "Quanti anni di esperienza lavorativa hai?",
            stepDescription: "ANNI DI ESPERIENZA"
        },
    ];

    function nextStep(id) {
        if (!formState.answers[id]) {
            formState.error = `Please enter your ${id}`;
        } else {
            formState.step += 1;
            formState.error = "";
        }
    }
    
</script>

<style>
    @font-face {
    font-family: 'Ubuntu-Bold';
    src: url('assets/fonts/Ubuntu-Bold.ttf') format('truetype');
    weight: 1000;
    
    }

    @font-face {
    font-family: 'Ubuntu-Regular';
    src: url('assets/fonts/Ubuntu-Regular.ttf') format('truetype');
    weight: 400;
    }

    @font-face {
    font-family: 'Ubuntu-Medium';
    src: url('assets/fonts/Ubuntu-Medium.ttf') format('truetype');
    weight: 400;
    }

    .steps {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }

    .stepNumber {
        font-size: 2rem;
    }
</style>

<div class="relative">
<svg 
    xmlns="http://www.w3.org/2000/svg"
    width="274"
    height="568"
    fill="none"
    viewBox="0 0 274 568"
    ><rect width="274" height="568" fill="#483EFF" rx="10" /><mask
        id="a"
        width="274"
        height="568"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style="mask-type:alpha"
        ><rect width="274" height="568" fill="#fff" rx="10" /></mask
    ><g mask="url(#a)"
        ><path
            fill="#6259FF"
            fill-rule="evenodd"
            d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z"
            clip-rule="evenodd"
        /><path
            fill="#F9818E"
            fill-rule="evenodd"
            d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z"
            clip-rule="evenodd"
        /><path
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="bevel"
            stroke-width="5"
            d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"
        /><path
            fill="#FFAF7E"
            d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
        /></g
    ></svg>

    <div id="steps" class="steps flex flex-col gap-4 w-5/6 items-center">
        {#each arrayOggetti as oggetto, index}
            <div class="flex gap-4 w-5/6 ">
                <i class="fa-{formState.step == index ? "solid" : "thin"} fa-circle-{index+1} stepNumber" id="number{index+1}" style="color: hsl(0, 0%, 100%);"></i> <!-- if the object has the same index of the step number than the icon will be thick (solid) -->
                <div>
                    <div style="font-family: Ubuntu-Medium; color: hsl(0, 0%, 100%);">
                        STEP {index+1}
                    </div>
                    <div style="font-family: Ubuntu-Bold; color: hsl(0, 0%, 100%);">
                        {oggetto.stepDescription}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

{#if formState.step >= arrayOggetti.length}
    <p>grazie {formState.answers.name} di aver risposto al sondaggio</p>
{/if}


<div>

    {#each arrayOggetti as object, index}
        {#if formState.step === index}
            {@render formStep(object)}
        {/if}
    {/each}

    {#if formState.error}
        <p>{formState.error}</p>
    {/if}

    {#snippet formStep({ tag, id, question, type, list, datalist })}
        <div>
            <label for={id}> {question} </label>

            <!-- tutto il filtraggio per i diversi tipi di tag-->
            {#if tag === "input"}
                {#if type === "checkbox"}
                    <input type="checkbox" {id} bind:checked={formState.answers[id]}/>
                {:else if type === "radio"}
                    {#each datalist as item}
                        <input type="radio" {id} value={item} bind:group={formState.answers[id]}/>
                        <label for={item}>{item}</label>
                    {/each}
                {:else}
                <input type={type} {id} bind:value={formState.answers[id]} />
                <Passo1 proprietis={{tag:tag, question:question, type:type, list:list}}/>
                {/if}
            {/if}

            {#if tag === "textarea"}
                <textarea {id} bind:value={formState.answers[id]}></textarea>
            {/if}

            {#if tag === "select"}
                <select {id} bind:value={formState.answers[id]}>
                    {#each list as item}
                        <option value={item}>{item}</option>
                    {/each}
                </select>
            {/if}
        </div>
        <button onclick={() => nextStep(id)}>next</button>
    {/snippet}
</div>
