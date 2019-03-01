import Vue from 'vue'

Vue.filter('formatNumberToUsd', function (value) {
  return '$' + value.toLocaleString() + ' USD'
})
