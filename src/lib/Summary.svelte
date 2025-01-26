<script>
       let { nome, eta, presentazione, paese, lavoro, lavoroRemoto, anniEsperienza } = $props();
</script>


<div class="width-full h-full flex flex-col items-center p-6">
    <div class="w-4/5 h-full flex flex-col items-center gap-y-10 relative">
        <div class="w-full ubuntu-bold text-4xl text-Marine_blu">
            Grazie per aver compilato il form, ecco un riepilogo dei tuoi dati:
        </div>
        <div>
            <div class="text-Cool_gray text-xl ubuntu-regular">
                <p>Nome: {nome}</p>
                <p>Età: {eta}</p>
                <p>Presentazione: {presentazione}</p>
                <p>Paese: {paese}</p>
                <p>Agenzia: {lavoro}</p>
                <p>Remote: {lavoroRemoto}</p>
                <p>Esperienza: {anniEsperienza}</p>
            </div>
        </div>

        <!-- <div class="form_container w-full">
            <div class="ubunru-medium">
              
            </div>
        </div> -->

    </div>
</div>