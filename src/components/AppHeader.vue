<script>


export default {
    name: 'AppHeader',
    data() {
        return {

        }
    },
}
</script>

<template>
    <!-- navbar with logo and link  -->
    <div class="navbarContainer container-md d-flex align-items-center">
        <div>
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo-2.png" alt="logo_Market" width="30">
            </a>
        </div>
        <div class="d-flex align-items-baseline">
            <ul class="d-flex ">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Feature</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact US</a></li>
            </ul>
            <button class=" bg-transparent border-0">
                🔍
            </button>
            <button class="btn btn-primary"> Get Started</button>
        </div>

    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;


.navbarContainer {
    justify-content: space-around;
    overflow: hidden;
    padding: 1rem;

    ul {
        list-style: none;

        a {
            color: $textNavbar;
            text-decoration: none;
            padding-left: 1rem;
            border-bottom: 3px solid transparent;
            padding: 1rem 1rem;

            &:hover {
                border-bottom: 3px solid $textPrimary;
            }
        }

    }



}
</style>