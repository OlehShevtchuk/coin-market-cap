<template>
    <div class='input-container'>
        <div :class="{'el-container': true, activeElement: !isEmpty || value}">
            <label v-if='!isEmpty || value'>{{ title }}</label>
            <input
                type="text"
                :placeholder='isEmpty ? title: ""'
                :disabled='disabled'
                :value='value'
                ref='customInput'
                class='uiInput'
                @input='onInput'
                @focus="isEmpty = false"
                @blur="checkInputStatus">
    </div>
        </div>

</template>

<script>
export default {
  props: {
    title: String,
    disabled: Boolean,
    value: String
  },
  data: function () {
    return {
      isEmpty: true
    }
  },
  methods: {
    onInput () {
      const inputValue = this.$refs.customInput.value
      this.$emit('input', inputValue)
    },
    checkInputStatus () {
      if (this.$refs.customInput.value.trim() === '') {
        this.isEmpty = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .input-container {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        font-family: 'Roboto', sans-serif;
        width: 320px;
    }
    .uiInput {
        color: #7A7A7A;
        font-size: 18px;
        border: 1px solid #CBCBCB;
        @include border-radius(6px);
        padding: 0 10px 0 30px;
        height: 50px;
        width: 100%;
    }

    .uiInput:focus {
        border: none;
        outline: none;
    }
    input:disabled::-webkit-input-placeholder{
        color: #CBCBCB;
    }
    input:disabled:-moz-placeholder {
        color: #CBCBCB;
    }
    input:disabled::-moz-placeholder {
        color: #CBCBCB;
    }
    input:disabled:-ms-input-placeholder {
        color: #CBCBCB;
    }
    .uiInput:disabled {
        background-color: white;
        border: 1px solid #EAEAEA;
        color: #CBCBCB;
    }
    .el-container {
        display: inline-block;
    }
    .activeElement {
        position: relative;
    }
    .activeElement .uiInput {
        @include border-radius(6px);
        border: 1px solid #0084FF;
        outline: none;
    }
    .activeElement>label {
        position:absolute;
        top:-10px;
        left:20px;
        background-color: white;
        padding: 0 12px 0 6px;
        color: #0084FF;
        font-size: 16px;
        font-weight: normal;
    }
</style>
