<template>
    <div class='crypto-container'>
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Volume(24h)</th>
                <th>Date added</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(crypto, index) in cryptocurrencies" :key='index'>
            <td><img :src="crypto.coinsImg" :alt="crypto.name"></td>
            <td>{{ crypto.name }}</td>
            <td>{{ crypto.usdPrice | formatNumberToUsd }}</td>
            <td>{{ crypto.volume24h | formatNumberToUsd }}</td>
            <td>{{ crypto.dateAdded }}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
  props: ['cryptocurrencies']
}
</script>

<style lang="scss" scoped>
    table {
        width: 100%;
        font-family: 'Roboto', sans-serif;
        border-collapse: separate;
        border-spacing: 0 30px;
        width: 100%; /* Ширина таблицы */

    }

    thead {
        color: #838B90;
        font-size: 22px;
        background-color: #F5F8FD;
        text-align: left;
        vertical-align: bottom;

        th {
            font-weight: normal;
        }
    }

    tbody{
        td {
            height: 106px;
            font-size: 26px;
            color: #000000;
            background-color: #FFFFFF;
        }
        td:first-child {
            -webkit-border-top-left-radius: 6px;
            -webkit-border-bottom-left-radius: 6px;
            -moz-border-radius-topleft: 6px;
            -moz-border-radius-bottomleft: 6px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            padding-left: 40px;
        }
        td:last-child {
            -webkit-border-top-right-radius: 6px;
            -webkit-border-bottom-right-radius: 6px;
            -moz-border-radius-topright: 6px;
            -moz-border-radius-bottomright: 6px;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
    @media screen and (max-width: 1080px) {
        tbody td {
            font-size: 22px;
        }
        td {
            padding-left: 20px;
        }
    }
     @media screen and (max-width: 830px) {
        td {
            padding-left: 15px;
            font-size: 16px;
        }
    }
</style>
