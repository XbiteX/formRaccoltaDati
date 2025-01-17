<script>
    import Passi from "$lib/Passi.svelte";
    let formState = $state({
        answers: {},
        step: 0,
        error: "",
    });

    const arrayOggetti = [
        {
            id: "nome",
            type: "text",
            question: "Nome",
            stepDescription: "NOME",
            subparagraph: "Per favore inserisci il tuo nome",

        },
        {
            id: "eta",
            type: "number",
            question: "Età",
            stepDescription: "ETA'",
            subparagraph: "Per favore inserisci la tua età",
        },
        {
            id: "presentazione",
            type: "textarea",
            question: "Presentazione",
            stepDescription: "PRESENTAZIONE",
            subparagraph: "Per favore inserisci una breve presentazione su di te",
        },
        {
            id: "paese",
            list: ["italia", "spagna", "framncia", "germania", "altro"],
            question: "Paese",
            stepDescription: "PAESE",
            subparagraph: "Per favore scegli il tuo paese",
        },
        {
            id: "lavoro",
            list: ["google", "microsoft", "amazon", "altro"],
            question: "Azienda",
            stepDescription: "AZIENDA",
            subparagraph: "Per favore inserisci l'azienda in cui hai lavorato",
        },
        {
            id: "lavoroRemoto",
            type: "checkbox",
            question: "Lavoro remoto",
            stepDescription: "LAVORO DA REMOTO",
            subparagraph: "Per favore inserisci se sei disposto a lavorare da remoto",
        },
        {
            id: "anniEsperienza",
            type: "radio",
            datalist: ["1-2", "3-5", "più di 5"],
            question: "Anni di esperienza",
            stepDescription: "ANNI DI ESPERIENZA",
            subparagraph: "Per favore inserisci i tuoi anni di esperienza",
        },
    ];


    function allFieldFulfilled(){
        return Object.keys(formState.answers).length === arrayOggetti.length;
    }

    function changeStep(step) {
        formState.step = step;
        console.log(formState);
    }


</script>

<!--sidebar with steps on it-->
<div class="relative">
    <svg width="274" height="568" xmlns="http://www.w3.org/2000/svg" fill="none">

        <mask maskUnits="userSpaceOnUse" y="0" x="0" height="568" width="274" id="a">
         <rect id="svg_1" rx="10" fill="#fff" height="568" width="274"/>
        </mask>
        <g>
         <title>Layer 1</title>
         <rect id="svg_2" rx="10" fill="#483EFF" height="568" width="274"/>
         <g id="svg_3" mask="url(#a)">
          <path id="svg_4" clip-rule="evenodd" d="m-34.692,542.101c37.939,89.437 203.459,141.916 246.652,69.419c43.194,-72.497 -66.099,-85.653 -104.735,-160.569c-38.635,-74.916 -68.657,-121.674 -124.482,-104.607c-55.824,17.068 -55.375,106.32 -17.436,195.757l0.001,0z" fill-rule="evenodd" fill="#6259FF"/>
          <path transform="rotate(-118.251 250.587 34.9546)" stroke="null" id="svg_5" clip-rule="evenodd" d="m286.095,113.153c60.679,-28.278 92.839,-143.526 41.875,-171.528c-50.965,-28.003 -57.397,47.579 -108.059,75.987c-50.662,28.408 -82.14,50.207 -69.044,88.241c13.096,38.034 74.549,35.578 135.228,7.3z" fill-rule="evenodd" fill="#F9818E"/>
          <path id="svg_7" d="m245.305,363.891c37.003,0 67,-29.997 67,-67s-29.997,-67 -67,-67s-67,29.997 -67,67s29.997,67 67,67z" fill="#FFAF7E"/>
          <path id="svg_8" d="m-3.695,556.891c37.003,0 67,-29.997 67,-67s-29.997,-67 -67,-67s-67,29.997 -67,67s29.997,67 67,67z" fill="#2a2af9"/>
         </g>
        </g>
       </svg>

    <div id="steps" class="steps flex flex-col gap-4 w-5/6 items-center">
        {#each arrayOggetti as oggetto, index}
            <div class="flex gap-4 w-5/6" onclick={() => changeStep(index)}>
                <i class="fa-{formState.step == index ? 'solid' : 'thin'} fa-circle-{index + 1} stepNumber" id="number{index + 1}" style="color: hsl(0, 0%, 100%);"></i>
                <!-- if the object has the same index of the step number than the icon will be thick (solid) -->
                <div>
                    <div style="font-family: Ubuntu-Medium; color: hsl(0, 0%, 100%);">STEP {index + 1}</div>
                    <div style="font-family: Ubuntu-Bold; color: hsl(0, 0%, 100%);">{oggetto.stepDescription}</div>
                </div>
            </div>
        {/each}
    </div>
</div>

{#if formState.step >= arrayOggetti.length}
    {#if allFieldFulfilled()}
        <p>grazie {formState.answers.name} di aver risposto al sondaggio</p>
    {:else}
        <p>Per favore compila tutti i campi</p>
    {/if}
{/if}

<div class="w-full">
    {#each arrayOggetti as object, index}
        {#if formState.step === index}
            {@render formStep(object)}
        {/if}
    {/each}

    {#snippet formStep({ id, question, type, list, datalist,subparagraph })}
        <Passi {id} {question} {type} {list} {datalist} {formState} {subparagraph}/>
    {/snippet}
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
