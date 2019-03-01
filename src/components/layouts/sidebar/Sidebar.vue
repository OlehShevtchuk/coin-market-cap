<template>
    <div class='sidebar'>
        <div class="column">
            <ul>
                    <router-link to='/' tag='li' active-class='active' exact >
                        <a>
                            <img
                                v-if='$route.name == "main"'
                                src="../../../assets/sidebar/home-active.png"
                                alt="home Icon" >
                            <img
                                v-else
                                src="../../../assets/sidebar/home.png"
                                alt="home Icon">
                        </a>
                    </router-link>
                     <router-link to='/uicomponents' tag='li' active-class='active'>
                          <a>
                            <img
                                v-if='$route.name == "uiComponents"'
                                src="../../../assets/sidebar/list-active.png"
                                alt="home Icon" >
                            <img
                                v-else
                                src="../../../assets/sidebar/list.png"
                                alt="home Icon">
                        </a>
                    </router-link>
                     <router-link to='/profile' tag='li' active-class='active'>
                          <a >
                            <img
                                v-if='$route.name == "profile"'
                                src="../../../assets/sidebar/avatar-active.png"
                                alt="profile Icon" >
                            <img
                                v-else
                                src="../../../assets/sidebar/avatar.png"
                                alt="profile Icon">
                        </a>
                    </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .sidebar {
        display: flex;
        min-height: 100%;
        min-width: 110px;
        flex-direction: column;
        -webkit-box-shadow: 2px 0px 1px 0px rgba(0,0,0,0.08);
        -moz-box-shadow: 2px 0px 1px 0px rgba(0,0,0,0.08);
        box-shadow: 2px 0px 8px 0px rgba(0,0,0,0.08);
        z-index: 1;
    }
    .column {
        display: flex;
        padding-left: 1.5px;
    }

    ul {
        margin-top: 170px;
        list-style: none;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    li {
        display: inline-block;
        width: 100%;
        text-align: center;
        padding: 20px 0;
        margin-bottom: 30px;
    }
    .active {
        -webkit-box-shadow: inset 3px 0px 0px 0px rgba(0,132,255,1);
        -moz-box-shadow: inset 3px 0px 0px 0px rgba(0,132,255,1);
        box-shadow: inset 3px 0px 0px 0px rgba(0,132,255,1);
    }

    @media screen and (max-width: 1080px) {
        .sidebar {
            min-width: 70px;
        }
    }
</style>
