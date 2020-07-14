<template>
  <div>
    <slot :obj="obj">
      {{ obj.a }}
    </slot>
  </div>
</template>
<script>
export default {
  name: 'ZTest',
  props: {
    obj: {
      type: Object,
      required: true
    }
  }
}
</script>
