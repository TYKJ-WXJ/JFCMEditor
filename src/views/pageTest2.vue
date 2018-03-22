<script>
  import draggable from 'vuedraggable'
  export default {
    data () {
      return {}
    },
    components: {
      draggable
    },
    methods: {
      getdata (evt) {
      },
      datadragEnd (evt) {
      }
    }
  }
</script>

<template>
  <draggable :move="getdata" @update="datadragEnd">
    <transition-group>
      <div :key="1">
        <one></one>
      </div>
      <div :key="2">
        <two></two>
      </div>
      <div :key="3">
        <three></three>
      </div>
    </transition-group>
  </draggable>
</template>
