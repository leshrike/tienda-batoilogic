<template>
  <div class="about body-batoi">
      <div class="row justify-content-center">
        <h1 class="col-12">Descubre BatoiLogic</h1>
        <div class="col-12">
          <h1 class="col-12">Video explicativo de Batoilogic</h1>
          <video class="w-75" controls>
            <source src="@/assets/batoilogic.mp4" type="video/mp4;" codecs="av1.42E01E">
            <source src="@/assets/batoilogic.webm" type="video/webm;" codecs="theora,vorbis"> 
            <!-- En teoría ibamos a usar ogv como formato de video pero no funciona correctamente con vue -->
            <track src="@/assets/castellano_subtitulos.vtt" kind="subtitles" label="Spanish/Español" src-lang="es" default>
            <track src="@/assets/ingles_subtitulos.vtt" kind="subtitles" label="English/Inglés" src-lang="en-us">
            Todavia no hay video espere a que este archivo carge. 
          </video>
        </div>
        <div class="w-75 pt-4">    
          <p class="lead text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum vehicula fermentum. 
              Morbi egestas justo augue, vitae lacinia dolor auctor non. Curabitur non diam a odio tristique imperdiet ut at metus.
              Pellentesque quis gravida ligula. Quisque egestas, sem id porta eleifend, eros nisi laoreet nibh, non gravida neque sem tempor massa.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
              Curabitur et scelerisque est, sed facilisis quam.
              Aliquam non feugiat ipsum. Vestibulum ultrices erat sapien.
          </p>
          <p class="lead text-justify">
              Maecenas finibus pulvinar ex eu cursus. Pellentesque aliquam urna non blandit accumsan. Aenean condimentum libero ut quam mollis, quis porta ipsum consequat. Nam a justo vel neque cursus ullamcorper.
              Nam volutpat metus sit amet augue imperdiet, eget sollicitudin neque vehicula. Nullam cursus, massa non varius eleifend, ipsum sem dictum nisi, sit amet mollis enim odio non lectus. 
              In vestibulum lobortis ante. Sed mauris mi, posuere at lorem vel, ultricies ornare mauris. Nunc at feugiat ligula. Nunc non quam efficitur, dignissim tortor eu, tristique velit. 
              Sed nec erat nibh. Curabitur nec condimentum ante. Vivamus fringilla erat at arcu fringilla placerat. Donec a semper diam, sed laoreet diam. Integer in nisl urna.
          </p>
        </div>
      </div>
  </div>
</template>
