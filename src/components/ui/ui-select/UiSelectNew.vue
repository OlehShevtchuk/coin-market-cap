<template>
    <div class="select-container">

            <div
                :class="{ disable: disabled, 'el-container': true, activeElement: isActive || localValue.text }"
                tabindex=2
                @click="toggleState"
                @blur="checkSelectedValue">
                <div class="title-wrapper">
                    <label v-if='isActive || localValue.text'>{{ title }}</label>
                    <div v-if='!isOpen' class='title'>{{ localValue.text ? localValue.text: title }}</div>
                </div>
            </div>
        <div class="wrapper">
            <div
                v-if='isOpen'
                class="options-container">
                <ul class='options' @mousedown="emitInput" >
                    <li v-for='(option, index) in options'
                            :index="index"
                            :key='index'>
                        {{ option.text }}
                    </li>
                </ul>
        </div>
    </div>
        </div>

</template>

<script>
export default {
  props: {
    title: String,
    disabled: Boolean,
    options: Array,
    value: Object,
    openFromParent: Boolean
  },
  data: function () {
    return {
      isActive: false,
      selectedOption: '',
      isOpen: false,
      localValue: this.value
    }
  },
  methods: {
    toggleState () {
      this.isOpen = !this.isOpen

      if (!this.isOpen && !this.selectedOption) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },
    emitInput (event) {
      if (event.target.tagName !== 'LI') return

      const index = +event.target.getAttribute('index')
      const value = this.options[index]
      this.localValue = value
      this.selectedOption = value.text
      this.$emit('input', value)
      this.isOpen = false
      this.isActive = true
    },
    checkSelectedValue () {
      if (this.isOpen) {
        this.selectedOption = ''
        this.isActive = false
        this.localValue = { text: '', value: '' }
        this.$emit('input', this.localValue)
      }
      this.isOpen = false
    }
  },
  created () {
    if (this.openFromParent) {
      this.isOpen = true
      this.isActive = true
    }
  },
  watch: {
    value: function (newValue) {
      this.localValue = newValue
      if (!this.localValue.value) {
        this.isOpen = false
        this.isActive = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        position: relative;
        width: 100%;
    }
    .title-wrapper {
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
    .select-container {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        font-family: 'Roboto', sans-serif;
        width: 320px;
    }
    .el-container:focus {
         outline: none;
    }
    .el-container {
        display: flex;
        color: #7A7A7A;
        font-size: 18px;
        border: 1px solid #CBCBCB;
        @include border-radius(6px);
        padding: 0 40px 0 30px;
        height: 50px;
        background: white url("../../../assets/angle-arrow-down.png") no-repeat bottom 50% right 6.25%;
        cursor: pointer;
        white-space: nowrap;

    }
      .disable {
        border: 1px solid #EAEAEA;
        color: #CBCBCB;
        pointer-events: none;
        background: white url("../../../assets/angle-arrow-down-disabled.png") no-repeat bottom 50% right 6.25% ;
    }
    .title {
        display: inline-block;
        margin-top: 14px;
    }
    .activeElement {
        position: relative;
        border: 1px solid #0084FF;
        @include border-radius(6px);
    }
    .activeElement label {
        position:absolute;
        top:-10px;
        left:20px;
        background-color: white;
        padding: 0 12px 0 6px;
        color: #0084FF;
        font-size: 16px;
        border: none;
    }

    .options-container {
        position: absolute;
        width: inherit;
        color: #7A7A7A;
        font-size: 18px;
        border: white;
        @include border-radius(6px);
        -webkit-box-shadow: 0px 3px 6px 2px rgba(0,0,0,0.16);
        -moz-box-shadow: 0px 3px 6px 2px rgba(0,0,0,0.16);
        box-shadow: 0px 3px 6px 2px rgba(0,0,0,0.16);
        max-height: 188px;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        background-color: white;
        z-index: 1;
        .options {
            list-style: none;
            color: #8A8A8A;
            background-color: white;
            width: 100%;
            @include border-radius(6px);
        }
        .options li {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            align-items: flex-start;
            min-height: 42px;
            width: 100%;
            border-bottom: 1px solid #EFEFEF;
            padding: 10px 5px 10px 20px;
            cursor: pointer;
            background-color: white;
        }
         .options li:last-child {
            border-bottom: none;
        }
    }
    .options-container::-webkit-scrollbar {
            width: 0 !important;
        }
</style>
