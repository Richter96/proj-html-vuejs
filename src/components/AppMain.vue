<script>
import AppJambotron from './AppJambotron.vue'
import OptionMArket from './OptionMarket.vue'
import TricksSales from './TricksSales.vue'
import PopularFeatures from './PopularFeatures.vue'


export default {
    name: 'AppMain',
    components: {
        AppJambotron,
        OptionMArket,
        TricksSales,
        PopularFeatures
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class=" container-flud debug">
        <AppJambotron />
        <!-- option of marketing -->
        <div class="container_md">
            <OptionMArket />
            <!-- setion Tricks -->
            <TricksSales />
            <!-- section Popular features -->
            <PopularFeatures />
            <section class="Testimonials">
                <span>Section Testimonials</span>
            </section>
            <section class="latest_posts">
                <span>Section posts</span>
            </section>
        </div>
    </div>
</template>

<style lang="scss">
.container_md {
    width: 1178px;
    margin: auto;
}

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