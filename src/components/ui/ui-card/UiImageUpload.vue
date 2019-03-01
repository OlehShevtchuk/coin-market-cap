<template>
  <div class='upload-container'>
    <img v-if='imageURL' :src="imageURL" alt="avatar" class="avatar">
    <img v-else src="../../../assets/anonim.jpg" alt="no-avatar" class="avatar">
        <div class="error-message">
            <p  v-if='isError'><span>{{ errorText }}</span></p>
        </div>

     <app-ui-button
        title='Select photo'
        :disabled="false"
        @click="launchFilePicker()"></app-ui-button>
    <input type="file"
       ref="file"
       :name="uploadFieldName"
       @change="onFileChange(
          $event.target.name, $event.target.files)"
       style="display:none">

  </div>
</template>

<script>
import UiButton from '../../ui/ui-button/UiButton.vue'

export default {
  components: {
    'app-ui-button': UiButton
  },
  data () {
    return {
      imageURL: null,
      isError: null,
      errorText: '',
      uploadFieldName: 'file',
      maxSize: 1024
    }
  },
  methods: {
    launchFilePicker () {
      this.$refs.file.click()
    },
    onFileChange (fieldName, file) {
      let imageFile = file[0]
      this.isError = null
      this.errorText = ''
      if (file.length > 0) {
        let size = imageFile.size / this.maxSize / this.maxSize
        if (!imageFile.type.match('image.*')) {
          this.isError = true
          this.errorText = 'Please choose an image file'
        } else if (size > 1) {
          this.isError = true
          this.errorText = 'Your file is too big! Please select an image under 1MB'
        } else {
          let imageURL = URL.createObjectURL(imageFile)
          this.imageURL = imageURL
          this.$emit('input', { fieldName, imageFile, imageURL })
        }
      }
    }

  }
}
</script>

<style lang="scss" scoped>
    .upload-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 230px;
        width: 200px;

        .avatar {
            width: 150px;
            height: 150px;
            @include border-radius(150px);
        }
        .no-avatar {
            background-color: #E3E3E3;
        }
        .error-message {
           color: #4D4D4D;
           font-family: 'Roboto', sans-serif;
           min-height: 30px;
        }
    }
</style>
