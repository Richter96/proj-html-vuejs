<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue'
const myCarousel = ref(null)

export default {
    name: 'App',
    name: 'SliderVue',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            activeTestimonial: 0,
            Testimonials: [
                {
                    name: 'Julia Aann',
                    imageProfile: '26.jpeg',
                    workRole: 'coo Softbox',
                    description: ' At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditiis proesentium vero eos et consectetur accus adip adio.'
                },
                {
                    name: 'Mac Znder',
                    imageProfile: '27.jpeg',
                    workRole: 'Manager Softbox',
                    description: ' At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditiis proesentium vero eos et consectetur accus adip adio.'
                },
                {
                    name: 'Jacob Sing',
                    imageProfile: '25.jpeg',
                    workRole: 'design Artist ',
                    description: ' At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditiis proesentium vero eos et consectetur accus adip adio.'
                }
            ],
            settings: {
                itemsToShow: 2,
                itemsToScroll: 2,
                snapAlign: 'center',
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 2,
                    snapAlign: 'start',
                },
            },

        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },

    },
}
</script>

<template>
    <carousel :="settings" ref="myCarosel">
        <slide v-for="(testimonial, index) in  Testimonials " :key="index">
            <div class="carousel__item">
                <div class="card flex-column align-items-center">
                    <div class=" img-fluid profile_circle">
                        <img :src="getImagePath(`../assets/img/${testimonial.imageProfile}`)" alt="">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="text-center card-title">
                            <span><strong>{{ testimonial.name }}</strong> - {{ testimonial.workRole }}</span>
                        </div>
                        <div class=" card-text">
                            <p>
                                {{ testimonial.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>





<style lang="scss" >
@use '../assets/scss/partials/variables' as *;

.carousel {
    margin: 3rem 0;
}

.slide {
    width: calc(100% / 2) !important;
}
</style>