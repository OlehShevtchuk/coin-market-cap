<template>
    <div class='main'>
         <div class="header">
           <p>UI components</p>
       </div>
       <div class="ui-components-container">
            <div class="row">
                <div class="row-element">
                    <div class='ui-header-container'>
                        <p>Input - empty</p>
                    </div>
                    <app-ui-input
                        :disabled='false'
                        title='Name'></app-ui-input>
                </div>
                <div class="row-element">
                    <div class='ui-header-container'>
                        <p>Input - focus / not empty</p>
                    </div>
                    <app-ui-input
                        :disabled='false'
                        title='Name'
                        v-model='inputValue'></app-ui-input>
                </div>
                <div class="row-element">
                    <div class='ui-header-container'>
                        <p>Input - disabled</p>
                    </div>
                    <app-ui-input
                        :disabled='true'
                        title='Name'></app-ui-input>
                </div>
            </div>
            <div class="row row-select">
                <div class="row-element">
                    <div class='ui-header-container'>
                        <p>Select - empty</p>
                    </div>
                          <app-ui-select
                            :options="options"
                            :disabled='false'
                            title='Name'
                            :value="{text: '', value: ''}"></app-ui-select>
                </div>
                <div class="row-element">
                    <div class='ui-header-container'>
                        <p>Select - focus</p>
                    </div>
                    <app-ui-select
                            :options="options"
                            :disabled='false'
                            title='Name'
                            :value="{text: '', value: ''}"
                            v-model='selectValue'
                            :openFromParent="true"></app-ui-select>
                </div>
                <div class="row-element">
                    <div class='ui-header-container'>
                        <p>Select - disabled</p>
                    </div>
                    <app-ui-select
                            :options="options"
                            :disabled='true'
                            title='Name'
                            :value="{text: '', value: ''}"></app-ui-select>
                </div>
            </div>

         <div class="row row-btn">
                <div class="row-element">
                    <div class='ui-header-container'>
                        <p>Button - normal</p>
                    </div>
                          <app-ui-button
                            title='Button'
                            :disabled="false"></app-ui-button>
                </div>
                <div class="row-element">
                    <div class='ui-header-container'>
                        <p>Button - hover</p>
                    </div>
                    <app-ui-button
                        class='btn-hover'
                        title='Button'
                        :disabled="false"></app-ui-button>
                </div>
                <div class="row-element">
                    <div class='ui-header-container'>
                        <p>Button - disabled</p>
                    </div>
                    <app-ui-button
                        title='Button'
                        :disabled="true"></app-ui-button>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import UiInput from '../../ui/ui-input/UiInput.vue'
import UiSelect from '../../ui/ui-select/UiSelectNew.vue'
import UiButton from '../../ui/ui-button/UiButton.vue'

export default {
  data () {
    return {
      inputValue: 'Alan',
      selectValue: { text: '', value: '' },
      options: [
        { text: 'Item1', value: 1 },
        { text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
          value: 2 },
        { text: 'Item3', value: 3 },
        { text: 'Item3', value: 3 },
        { text: 'Item3', value: 3 }
      ]
    }
  },
  components: {
    'app-ui-input': UiInput,
    'app-ui-select': UiSelect,
    'app-ui-button': UiButton
  }
}
</script>

<style lang="scss" scoped>
    @import '..//../../sass/viewsStyle.scss';

    .ui-header-container {
        display: inline-block;
        color: #4D4D4D;
        font-size: 20px;
        margin-bottom: 26px;
    }

    .ui-components-container {
        @include border-radius(6px);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        background-color: white;
        padding: 51px 10px 55px 10px;
        min-height: 750px;
    }
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
    }
    .btn-hover {
        background-color: #3EA1FE;
    }
    .row-select{
        margin-top: 60px;
    }
    .row-btn {
         margin-top: 280px;
    }
    .row-element {
        margin-left: 45px;
        margin-top: 60px;
    }
</style>

<style lang="scss">
       .nn
         {
            .input-container {
            }
        }
</style>
