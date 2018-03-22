<template>
    <div class="login">
      <label>
      <input v-model="username" @change="setUser">
		  <!-- <button type="button" id="btn">btn</button> -->
		  <br>
		  <select name="" id="">
			<option value="open">开</option>
			<option value="close">关</option>
		</select>
    </label>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
   return {
     username: ''
    }
  },
  methods: {
    // 声明方法，用事件来调用
    setUser: function () {
      // 通过事件传递给父组件
      this.$emit('transferUser', this.username)
    }
  }
}
</script>

<style>

</style>
