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
    <div class="navbarContainer container-md d-flex">
        <div>
            logo
        </div>
        <div class="d-flex">
            <ul class="d-flex">
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
            </ul>
            <button>
                src
            </button>
            <button class="btn btn-primary"> Get Started</button>
        </div>

    </div>
</template>

<style lang="scss">
.navbarContainer {
    justify-content: space-around;

    ul {
        list-style: none;

        li {
            padding-left: 1rem;
        }
    }



}
</style>