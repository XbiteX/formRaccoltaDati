<script>
    import Passi from "$lib/Passi.svelte";
    import Summary from "$lib/Summary.svelte";

    let formState = $state({
        answers: {
            lavoroRemoto: false,
        },
        step: 0,
        error: "",
    });
    // http://localhost:3080/utente
    async function sendData() {
        const res = await fetch("https://backend-form-sandy.vercel.app/utente", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(formState.answers),
        });
        const responseData = await res.json();
        return responseData;
    }

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
            textareaprops: {
                id: 'presentazione',
                name: 'textarea',
                label: 'Presentazione',
                rows: 4,
            }
        },
        {
            id: "paese",
            list:[
                {value:"it", name:"Italia"},
                {value:"esp", name:"Spagna"},
                {value:"fra", name:"Francia"},
                {value:"ger", name:"Germania"}
            ],
            question: "Paese",
            stepDescription: "PAESE",
            subparagraph: "Per favore scegli il tuo paese",
        },
        {
            id: "lavoro",
            list:[
                {value:"google",  name:"Google"},
                {value:"microsoft", name:"Microsoft"},
                {value:"amazon", name:"Amazon"},
                {value:"other", name:"altro"}
            ],
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
        return Object.values(formState.answers).every(value => value !== "" && value !== undefined);
    }

    function changeStep(step) {
        formState.step = step;
        formState.error = "";
        console.log(formState);
    }

    function iconColor(id){
        if(formState.step >= arrayOggetti.length && (formState.answers[id] == undefined || formState.answers[id] === "")){
            return "Strawberry_red";
        } else {
            return "Alabaster";

        }
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

    <div class="flex flex-col gap-4 w-5/6 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {#each arrayOggetti as oggetto, index}
            <div role="button" class="flex gap-4 w-5/6" onclick={() => changeStep(index)}>
                <i class="fa-{formState.step == index ? 'solid' : 'thin'} fa-circle-{index + 1} text-{iconColor(oggetto.id)} text-4xl" id="number{index + 1}" ></i>
                <!-- if the object has the same index of the step number than the icon will be thick (solid) -->
                <div>
                    <div class="text-Alabaster ubuntu-bold">STEP {index + 1}</div>
                    <div class="text-Alabaster ubuntu-regular">{oggetto.stepDescription}</div>
                </div>
            </div>
        {/each}
    </div>
</div>




<div class="w-full">
    {#if formState.step >= arrayOggetti.length}
        {#if allFieldFulfilled()}
        {#await sendData() then data}
            {#if data}
            <Summary {...data}></Summary>            
            {/if}    
        {/await}
        {:else}
            {alert("Compila tutti i campi")}
            {changeStep(arrayOggetti.length - 1)}
        {/if}
    {:else}
        {#each arrayOggetti as object, index}
            {#if formState.step === index}
                <Passi {...object} {formState}></Passi>
            {/if}
        {/each}
    {/if}
</div>

<style>

</style>
