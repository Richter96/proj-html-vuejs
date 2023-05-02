<script>
import SliderVue from './SliderVue.vue'

export default {
    name: 'OurTestimonial',
    components: {
        SliderVue
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
            ]

        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="Testimonial">
        <div class="onda w-100">
            <img class=" mw-100" src="../assets/img/15.png" alt="">
        </div>
        <div class="container_md">
            <div class="row justify-content-center">
                <div class="col-6 text-center">
                    <h2 class="testimonialTitle">Our Testimonials</h2>
                    <span class="testimonialSubtitle">If you are planning on developing a product landing app or website,
                        take a look at this
                        beautiful-crafted</span>
                </div>


                <div class="col-12">

                    <!-- slider vue, install npm slider vue -->
                    <SliderVue />



                    <!-- <div class="row">
                        <div class="col"
                             :class="index === activeTestimonial || index === activeTestimonial + 1 ? 'active' : ''"
                             v-for="(testimonial, index) in  Testimonials ">

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
                    </div> -->
                </div>

            </div>
        </div>
    </div>
</template>





<style lang="scss" >
@use '../assets/scss/partials/variables' as *;


.Testimonial {
    width: 100%;
    background-color: $bgTestimonial;
    background: linear-gradient(180deg, rgb(240, 247, 255) 70%, rgba(255, 255, 255, 1) 100%);

    .testimonialTitle {
        margin-bottom: 2rem;

    }

    .container_md {
        margin-top: -6rem;

    }

    .card {
        box-shadow: 0px 0px 10px 0px #BBBBBB;
        margin: 2rem 2rem;

    }


    .profile_circle {
        width: 100px;
        border-radius: 50%;
        border: 1px solid white;
        aspect-ratio: 1;
        z-index: 2;
        box-shadow: 0px 0px 10px 0px #BBBBBB;

        img {
            max-width: 100%;
            aspect-ratio: 1;
            position: relative;
            z-index: 0;
            border-radius: 50%;

        }
    }
}
</style>