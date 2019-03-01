<template>
    <div
    :class="{'button-container': true, disable: disabled}"
    @click="onClick">
            <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    disabled: Boolean
  },
  methods: {
    onClick () {
      if (!this.disabled) this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
    .button-container {
        display: flex;
        justify-content: center;
        color: white;
        width: 160px;
        height: 45px;
        background-color: #0084FF;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        @include border-radius(6px);
        cursor: pointer;

        span {
            display: inline-flex;
            align-self: center;
        }
    }
    .button-container:hover {
        background-color: #3EA1FE;
    }
    .disable {
        background-color:#E3E3E3;
    }
</style>
