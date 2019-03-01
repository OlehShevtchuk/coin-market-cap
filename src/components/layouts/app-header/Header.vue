<template>
    <div class="header">
        <router-link to='/' tag='div' active-class='logo'>
            <img src="../../../assets/logo-square.png" alt="logo-squre">
            <span>CoinMarketCap</span>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 110px;
        -webkit-box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.08);
        -moz-box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.08);
        box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.08);
        z-index: 1;
    }
    .logo {
        margin-left: 19px;
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
            width: 50px;
            height: 50px;
        }
        span {
            margin-left: 12px;
            font-family: 'Josefin Sans', sans-serif;
            font-size: 30px;
        }
    }
</style>
