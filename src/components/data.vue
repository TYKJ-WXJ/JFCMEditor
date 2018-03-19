<template>
  <div>
    <button @click="postData()">click me----data</button>
  </div>
</template>
<script>
  import server from '@/services/server';
  export default {
    data () {
      return {}
    },
    methods: {
      postData () {
        server.getTest().then((res) => {
          console.log(res.data);
        })
      }
    }
  }
</script>
