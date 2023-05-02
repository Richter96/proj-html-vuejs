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
    <header>
        <div class="navbarContainer container-md d-flex align-items-center">
            <!-- brand logo  -->
            <div>
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/logo-2.png" alt="logo_Market" width="40">
                </a>
            </div>

            <!-- botton navbar active section click -->
            <div class="d-flex align-items-baseline">
                <ul class="d-flex ">
                    <li @click="set_active(index)" v-for="(component, index) in componentsNavbar"><a
                           :class="activeEl == index ? 'active' : ''" href="#">{{
                               component }}</a></li>
                </ul>
                <button class=" bg-transparent border-0">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
                <button class="btn btn-primary over_black"> Get Started</button>
            </div>


            <!-- link up site -->
        </div>
        <div class="up float-end"><a href="#"><font-awesome-icon icon="fa-solid fa-angle-up" /></a></div>
    </header>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

header {
    background-color: $bgHeader;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    box-shadow: 0 0 5px var(--db-grey-txt);
    z-index: 1;

    .up {
        width: 2.5rem;
        aspect-ratio: 1;
        border-radius: 50%;
        margin: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $TextLightGray;
        position: absolute;
        bottom: -90vh;
        right: 0;

        a {
            color: white;
        }
    }

    .navbarContainer {
        justify-content: space-around;
        overflow: hidden;
        padding: 1rem;

        button .over_black {
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

}
</style>