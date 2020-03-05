<template>

<div class="modal" tabindex="-1" v-bind:id="'modal'+id" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"> {{title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">

        <img class v-bind:src="img" alt="project-img"/>
          <p class="project-card__description text-justify p-4">

            {{ description }}
          </p>      </div>

    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'modal',
  props: {
    id: '',
    title: String,
    img: '',
    description: ''
  },
//   data: () => ({
//       id: this.id
//   })
}
</script>