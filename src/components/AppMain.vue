<script>
import AppJambotron from './AppJambotron.vue'
import OptionMArket from './OptionMarket.vue'
import TricksSales from './TricksSales.vue'
import PopularFeatures from './PopularFeatures.vue'
import LatestPost from './LatestPost.vue'
import OurTestimonial from './OurTestimonial.vue'


export default {
    name: 'AppMain',
    components: {
        AppJambotron,
        OptionMArket,
        TricksSales,
        PopularFeatures,
        LatestPost,
        OurTestimonial,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <main>
        <div class=" container-flud">
            <AppJambotron />
            <!-- option of marketing -->
            <OptionMArket />
            <!-- setion Tricks -->
            <TricksSales />
            <!-- section Popular features -->
            <PopularFeatures />
            <!-- section Testimonial -->
            <OurTestimonial />
            <!-- section post -->
            <LatestPost />
        </div>
    </main>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

button {
    &:hover {
        background-color: $bgHooverBtn !important;
    }
}

.container_md {
    width: 1178px;
    margin: auto;
}

.card {
    border-radius: 0;
    border: 0;
    padding: 1rem;
    flex-direction: row;
    margin: 2rem 0;
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