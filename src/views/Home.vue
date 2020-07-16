<template>
  <div>
    <div class="test">
      测试环境
    </div>
    <div>
      {{baseUrl}}
    </div>
    <z-test :obj="obj">
      <template #default="slotProps">
        {{slotProps.obj.b}}
      </template>
    </z-test>
    <el-button type="primary" @click="test">点击事件</el-button>
  </div>
</template>

<script>
import ZTest from '../components/Test'
export default {
  name: 'app',
  components: {
    ZTest
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_URL,
      obj: {
        a: 1,
        b: 2
      }
    }
  },
  created() {
    console.log(process.env)
  },
  methods: {
    test() {
      this.$http.getJobList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss">
.test {
  color: $red;
}
</style>
