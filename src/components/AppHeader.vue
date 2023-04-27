<script>


export default {
    name: 'AppHeader',
    data() {
        return {
            activeEl: 0,
            componentsNavbar: [
                'home',
                'About us',
                'Feature',
                'Testimonials',
                'Contact US',
            ],

        }
    },
    methods: {
        set_active(i) {
            console.log('cliccato' + i);
            this.activeEl = i
        }
    },
}
</script>

<template>
    <!-- navbar with logo and link  -->
    <div class="navbarContainer container-md d-flex align-items-center">
        <div>
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo-2.png" alt="logo_Market" width="40">
            </a>
        </div>
        <div class="d-flex align-items-baseline">
            <ul class="d-flex ">
                <li @click="set_active(index)" v-for="(component, index) in componentsNavbar"><a
                       :class="activeEl == index ? 'active' : ''" href="#">{{
                           component }}</a></li>

            </ul>
            <button class=" bg-transparent border-0">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
            <button class="btn btn-primary"> Get Started</button>
        </div>

    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

header {
    background-color: $bgHeader;
}

.navbarContainer {
    justify-content: space-around;
    overflow: hidden;
    padding: 1rem;

    button {
        &:hover {
            background-color: $bgHooverBtn;
        }
    }

    ul {
        list-style: none;

        a {
            color: $textNavbar;
            text-decoration: none;
            border-bottom: 3px solid transparent;
            padding: 1rem 0;
            margin: 0 1rem;

            &.active {
                color: $textPrimary;
                border-bottom: 3px solid $textPrimary;

            }

            &:hover {
                border-bottom: 3px solid $textPrimary;
            }
        }

    }



}
</style>