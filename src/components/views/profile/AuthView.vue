<template>
    <div class='main'>
        <div class="header">
           <p>User profile</p>
        </div>
        <div class="components-container">
            <div class="component-upload-container">
                <app-image-upload v-model="avatar"></app-image-upload>
            </div>
            <div class="ui-components-container">
                <div class="column">
                    <div class="column-element">
                        <app-ui-input
                        :disabled='false'
                        title='First name'
                        v-model='firstName'></app-ui-input>
                    </div>
                    <div class="column-element">
                          <app-ui-input
                            :disabled='false'
                            title='Last name'
                            v-model="lastName"></app-ui-input>
                    </div>
                     <div class="column-element">
                        <app-ui-input
                            :disabled='false'
                            title='Phone number'
                            v-model="phoneNumber"></app-ui-input>
                    </div>
                </div>
                <div class="column">
                    <div class="column-element">
                       <app-ui-select
                                :options="countrys"
                                :disabled='false'
                                title='Country'
                                v-model="country"></app-ui-select>
                    </div>
                    <div class="column-element">
                        <app-ui-select
                            :options="indexOfSelectedCountry"
                            :disabled='country.value ? false: true'
                            title='City'
                            v-model="city"></app-ui-select>
                    </div>
                     <div class="column-element">
                        <app-ui-input
                            :disabled='false'
                            title='Address'
                            v-model='address'></app-ui-input>
                    </div>
                </div>
                <div class="column last-column">
                    <div class="column-element">
                        <app-ui-input
                        :disabled='false'
                        title='Post code'
                        v-model='postCode'></app-ui-input>
                    </div>
                     <div class="column-element save-btn-container">
                        <app-ui-button
                            class='save-btn'
                            :disabled='false'
                            title='Save'
                            @click='saveData'></app-ui-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageUpload from '../../ui/ui-card/UiImageUpload.vue'
import UiInput from '../../ui/ui-input/UiInput.vue'
import UiSelect from '../../ui/ui-select/UiSelectNew.vue'
import UiButton from '../../ui/ui-button/UiButton.vue'

export default {
  components: {
    'app-image-upload': ImageUpload,
    'app-ui-input': UiInput,
    'app-ui-select': UiSelect,
    'app-ui-button': UiButton
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      country: { text: '', value: '' },
      city: { text: '', value: '' },
      address: '',
      postCode: '',

      imageUrl: '',
      image: null,
      avatar: {
        fieldName: '',
        imageFile: null,
        imageURL: ''
      },
      countrys: [
        { text: 'Ukraine', value: 'UA' },
        { text: 'Poland', value: 'PL' },
        { text: 'Canada', value: 'CA' }
      ],
      cities: [
        [
          { text: 'Vinnitsya', value: 'Vinnitsya' },
          { text: 'Kyiv', value: 'Kyiv' },
          { text: 'Lviv', value: 'Lviv' }
        ],
        [
          { text: 'Wrozlaw', value: 'Wrozlaw' },
          { text: 'Krakow', value: 'Krakow' },
          { text: 'Poznan', value: 'Poznan' }
        ],
        [
          { text: 'Winnipeg', value: 'Winnipeg' },
          { text: 'Whitehorse', value: 'Whitehorse' },
          { text: 'Toronto', value: 'Toronto' }
        ]
      ]
    }
  },
  methods: {
    saveData () {
      if (!this.checkValidation()) return
      const userDetail = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        country: this.country.value,
        city: this.city.value,
        address: this.address,
        postCode: this.postCode,
        imageUrl: this.avatar.imageURL,
        image: this.avatar.imageFile
      }
      this.$store.dispatch('setUserDetail', userDetail)
      console.info('Data saved successfully')
    },
    checkValidation () {
      if (!this.firstName || !this.lastName || !this.phoneNumber ||
        !this.country.value || !this.city.value || !this.address ||
        !this.postCode || !this.avatar.imageFile) {
        console.error('Some input value are wrong')
        return false
      }
      return true
    }
  },
  computed: {
    indexOfSelectedCountry: function () {
      return this.cities[this.countrys.indexOf(this.country)]
    }
  },
  watch: {
    country: function (newCountre, oldCountry) {
      this.city = { text: '', value: '' }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '..//../../sass/viewsStyle.scss';

    .components-container {
        @include border-radius(6px);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: white;
        padding: 110px 55px 80px 60px;
    }
    .component-upload-container {
        margin-bottom: 35px;
    }
    .save-btn {
        width: 100px;
    }
     .ui-components-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        margin-left: 105px;
    }
     .column {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
    }
    .column-element {
        margin-left: 85px;
        margin-bottom: 35px;
    }
    .last-column {
        justify-content: space-between;
        align-items: flex-end;
    }
    @media screen and (max-width: 2022px) {
        .last-column {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin-right: 55px;
        }
    }
    @media screen and (max-width: 1620px) {
      .ui-components-container {
          margin-left: 0;
      }
      .column-element {
          margin-left: 20px;
      }
    }
    @media screen and (max-width: 1383px) {
      .last-column {
            flex-direction: column;
            align-items: flex-end;
            margin-right: 0;
        }
        .ui-components-container {
            justify-content: center;
        }
    }
     @media screen and (max-width: 900px) {
       .components-container {
           flex-direction: column;
           align-items: center;
       }
       .column-element {
           margin-left: 0;
       }
       .ui-components-container {
           margin-left: 0;
       }
    }
</style>
