<template>
    <div class='main'>
       <div class="header">
           <p>Home</p>
       </div>
       <app-main-layout :cryptocurrencies='cryptocurrencies'></app-main-layout>
    </div>
</template>

<script>
import axios from 'axios'

import MainLayout from '../../layouts/MainLayout.vue'

export default {
  data () {
    return {
      cryptocurrencies: []
    }
  },
  components: {
    'app-main-layout': MainLayout
  },
  created () {
    this.cryptocurrencies = []
    axios({
      method: 'get',
      url: '/api/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD',
      headers: {
        'X-CMC_PRO_API_KEY': '380ac736-6367-4401-9b54-f86fef1c5e31',
        'Accept': 'application/json'
      }
    })
      .then(res => {
        let data = res.data.data

        for (let i = 0; i < data.length; i++) {
          let src = `https://s2.coinmarketcap.com/static/img/coins/32x32/${data[i].id}.png`
          let date = data[i].date_added.slice(0, data[i].date_added.indexOf('T'))

          this.cryptocurrencies.push({
            coinsImg: src,
            name: data[i].name,
            dateAdded: date,
            usdPrice: data[i].quote.USD.price,
            volume24h: data[i].quote.USD.volume_24h
          })
        }
      })
      .catch(error => console.log(error))
  }
}
</script>

<style lang="scss" scoped >
   @import '..//../../sass/viewsStyle.scss';
   .header {
     margin-bottom: 0;
   }
</style>
