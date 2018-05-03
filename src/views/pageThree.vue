<template>
    <div>
      <p id="batman" style="display:none;">
        <svg version="1.0" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="1152px" height="1152px" xml:space="preserve">
          <g>
            <path  id="batman-path" style="fill:rgb(0,0,0);" d="M 0 0 Q 437.7329559326172 150.1136474609375 880 0 "/>
          </g>
        </svg>
      </p>
    </div>
</template>

<script>
// import svgThree from '@/utils/svg-three';
import svgThreeR from '@/utils/restructureSVG';
export default{
  data() {
    return {
      msg: 'hello vue'
    }
  },
  mounted() {
    svgThreeR();
  },
  components: {}
}
</script>

<style>

</style>
