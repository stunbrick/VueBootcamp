<template>
  <div id="app">
    <p>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex velit, hendrerit ut facilisis vel, luctus vitae ipsum. Donec vitae arcu mauris. Aliquam fringilla, tellus ut ornare condimentum, risus mauris lobortis metus, quis egestas urna felis vitae magna. Vestibulum ipsum nisi, aliquet vitae semper dapibus, condimentum maximus ipsum. Aenean pellentesque, nibh at lacinia efficitur, ligula felis eleifend dui, ut porttitor orci sapien sit amet nisi. Phasellus vel placerat enim, eget sagittis massa. Suspendisse vel ipsum eget lectus mollis mattis. Duis nisi arcu, maximus ut arcu ac, vulputate congue dui. Aliquam erat volutpat. Nam consectetur dolor in ante imperdiet, in condimentum felis semper. Proin nec luctus sapien. Proin egestas tellus quam, et mollis ex dignissim sit amet. Nulla et consectetur magna, nec bibendum elit. Morbi tincidunt lorem id lacus volutpat consequat.

Praesent justo lorem, rutrum ac nibh a, euismod cursus eros. Maecenas at ornare nulla. Morbi quam enim, aliquam ut tortor et, pharetra malesuada dui. In sit amet felis sed enim imperdiet finibus eget in lorem. Cras vel scelerisque tellus. Pellentesque pellentesque imperdiet nibh nec ultricies. Vivamus nisi ligula, pretium et velit et, vestibulum ullamcorper lorem. Aliquam feugiat sapien ut sollicitudin aliquet. Cras molestie sem quis dolor ultrices, sed fermentum augue ultrices.

Pellentesque quam mauris, pharetra id ligula quis, tempus semper ligula. In blandit non tellus bibendum feugiat. Integer lobortis, eros eu iaculis gravida, nibh libero suscipit neque, vitae laoreet elit nunc at ligula. Maecenas dictum, tellus in congue fermentum, metus arcu convallis quam, eget consequat eros mauris sit amet massa. Mauris euismod, nisi id sodales rutrum, lectus metus rutrum dui, sed scelerisque nibh ante quis sapien. Mauris a vulputate odio. Nam scelerisque gravida molestie. Etiam sem mi, sagittis sit amet vulputate nec, ultricies a lectus. Integer iaculis auctor fermentum. Etiam luctus justo et tempor blandit. Morbi gravida nisl consectetur, iaculis massa at, condimentum tortor. Aenean imperdiet, ligula id condimentum bibendum, turpis est suscipit dolor, nec maximus nibh odio eu felis. Suspendisse efficitur, sapien sed sollicitudin scelerisque, augue nulla malesuada velit, eget aliquam lorem mauris vel neque. Nunc vel sagittis erat. Vestibulum mattis sem est, eu rutrum nunc dapibus eu.

Cras iaculis magna eu nisi sollicitudin facilisis a a ex. Nam nisl justo, suscipit in tincidunt at, egestas vitae odio. Vivamus nec laoreet felis. Proin molestie, lacus a efficitur imperdiet, ipsum tellus aliquet augue, nec efficitur nulla magna ut ligula. Sed suscipit porttitor blandit. Morbi eleifend convallis dolor sit amet venenatis. Duis tristique sit amet nisi et aliquet. Proin vel erat risus. Nullam enim sem, vehicula sed mattis at, ornare id massa. Nam commodo efficitur mauris nec ullamcorper. Curabitur semper massa eget massa dignissim sodales. Nulla eget tortor gravida, vehicula enim in, ornare quam. Maecenas bibendum nulla sagittis risus aliquam, eget facilisis dui aliquet. Maecenas nec est egestas, tincidunt eros eget, scelerisque nisl. Integer in congue dui. Fusce consectetur nisl tellus, vitae ullamcorper elit vestibulum non.

Donec sit amet posuere risus. Sed sed quam tortor. Integer congue urna ac purus dignissim iaculis. Vivamus id diam vulputate, faucibus sem hendrerit, consectetur quam. Nullam vitae accumsan justo. Donec elementum lorem sed risus vulputate, ac dapibus mi pretium. Maecenas ut ante sit amet dolor rhoncus maximus. Nulla semper libero metus, id facilisis ipsum laoreet sit amet. Praesent vulputate ultrices hendrerit.

    </p>
    <div class="mt-2 ml-2">
      <button type="button" class="btn btn-primary" @click="open = true">
        Open
      </button>
    </div>

    <app-modal :show="open" @hide="open = false"/>
  </div>
</template>

<script>
import AppModal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    AppModal,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
