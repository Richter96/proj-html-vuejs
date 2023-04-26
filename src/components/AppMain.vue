<script>


export default {
    name: 'AppMain',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class=" container-md debug">
        <div class="jambotron">
            <span>jambotron</span>
        </div>
        <!-- option of marketing -->
        <section class="option_Market">
            <span>Section market</span>
        </section>
        <!-- setion Tricks -->
        <section class="Tricks">
            <span>Section Tricks</span>
        </section>
        <!-- section Popular features -->
        <section class="Popular_features">
            <span>Section Popular features</span>
        </section>
        <section class="Testimonials">
            <span>Section Testimonials</span>
        </section>
        <section class="latest_posts">
            <span>Section posts</span>
        </section>
    </div>
</template>

<style lang="scss">
.debug {

    .jambotron {
        width: 100%;
        height: 300px;
        background-color: lightblue;
    }

    .option_Market {
        width: 100%;
        height: 300px;
        background-color: antiquewhite;
    }

    .Tricks {
        width: 100%;
        height: 300px;
        background-color: rgb(168, 98, 8);
    }

    .Popular_features {
        width: 100%;
        height: 300px;
        background-color: lightcoral;
    }

    .Testimonials {
        width: 100%;
        height: 300px;
        background-color: lightgray;
    }

    .latest_posts {
        width: 100%;
        height: 300px;
        background-color: rgb(168, 204, 121);
    }

}
</style>