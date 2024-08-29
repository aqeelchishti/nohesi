<script>
    export let imgSrc;
    export let altText;
    export let gradentClass;
</script>

<div class="flex flex-col items-center w-24">
    <div class="">
        <img src={imgSrc} alt={altText} class="w-10 2xl:w-14 aspect-square"/>
    </div>
    <div class="{gradentClass} w-1.5 h-full"></div>         
</div>