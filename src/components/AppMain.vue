<script>
import AppJambotron from './AppJambotron.vue'
import OptionMArket from './OptionMarket.vue'


export default {
    name: 'AppMain',
    components: {
        AppJambotron,
        OptionMArket
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class=" container-md debug">
        <AppJambotron />
        <!-- option of marketing -->
        <OptionMArket />
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