<script>


export default {
    name: 'PopularFeatures',
    data() {
        return {
            Features: [
                {
                    name: 'customized Invoice',
                    image: 'invoice.png',
                    bgcolor: '#377DFF'
                },
                {
                    name: 'Stock Management',
                    image: 'airplane.png',
                    bgcolor: '#FF796D'
                },
                {
                    name: 'Receivable & Payables',
                    image: 'profile.png',
                    bgcolor: '#6CDAC1'
                },
                {
                    name: 'Manage Buying',
                    image: 'manage.png',
                    bgcolor: '#377DFF'
                },
                {
                    name: ' Powerful & Secure',
                    image: 'secure.png',
                    bgcolor: '#FF796D'
                },
                {
                    name: 'Fastest Return Filling',
                    image: 'profile.png',
                    bgcolor: '#6CDAC1'
                },
                {
                    name: 'Monthly Detailed',
                    image: 'detailed.png',
                    bgcolor: '#377DFF'
                },
                {
                    name: 'Product Management',
                    image: 'product_management.png',
                    bgcolor: '#FF796D'
                },
            ]

        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
        changeBackground(event, color) {
            console.log(color);
            event.target.style.backgroundColor = color
        }
    },
}
</script>

<template>
    <div class="popularFeatures container_md row row-cols-2 position-relative">

        <img class="circle position-absolute" src="../assets/img/14.png" alt="">
        <div class="col-12 d-flex justify-content-between align-items-baseline">
            <div>
                <h2>Popular features that your business needs</h2>
                <span>Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser cras nice one
                    boot fanny.!</span>
            </div>
            <div>
                <button class="btn btn-primary">Explore More Feature</button>
            </div>
        </div>
        <div class="col-12">
            <div class="row row-cols-4">
                <div class="col" v-for="feature in Features">
                    <div class="card flex-column" @mouseenter="changeBackground($event, feature.bgcolor)"
                         @mouseleave="changeBackground($event, 'white')">
                        <h5>{{ feature.name }}</h5>
                        <img :src="getImagePath(`../assets/img/icon_features/${feature.image}`)" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.popularFeatures {

    .circle {
        top: 0;
        left: -40rem;
    }

    margin: 4rem auto !important;


    .card {
        box-shadow: 0px 0px 71px -17px #818181;
        aspect-ratio: 2/1;



        &:hover h5 {
            color: $TextOverFeatures;
        }

        &:hover img {
            filter: invert(1);
            filter: saturate(0);
        }

        span {
            font-size: 0.8rem;
            color: $TextGray;
        }

        img {
            width: 4rem;
            margin: 1rem;
        }
    }

    button {
        padding: 0.5rem 1.5rem;
        margin: 0rem 3rem;
    }
}


h2 {
    font-size: 2.5rem;
}
</style>