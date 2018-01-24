<template>
    <div>
      <iframe :src="urlr" id="ifm1" name="fei">
      </iframe>
    </div>
</template>

<script>
  import $ from 'jquery';
  export default{
    data() {
      return {
        urlr: '../../dist/static/html/dialog.html'
      }
    },
    components: {},
    mounted() {
      $('#mb1', parent.document).val('nihao');
    }
  }
</script>

<style>

</style>
