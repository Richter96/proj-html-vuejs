<script>


export default {
    name: 'OurTestimonial',
    data() {
        return {

        }
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
                    <h2>Our Testimonials</h2>
                    <span>If you are planning on developing a product landing app or website, take a look at this
                        beautiful-crafted</span>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col">
                            <div class="card flex-column align-items-center ">
                                <div class="card-img profile_circle">
                                    <img src="../assets/img/26.jpeg" alt="">
                                </div>
                                <div class="card-body d-flex flex-column">
                                    <div class="text-center card-title">
                                        <span><strong>Julia Aann</strong> - coo Softbox</span>
                                    </div>
                                    <div class=" card-text">
                                        <p>
                                            At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditiis
                                            proesentium
                                            vero eos et consectetur
                                            accus adip adio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card flex-column align-items-center">
                                <div class="card-img profile_circle">
                                    <img src="../assets/img/26.jpeg" alt="">
                                </div>
                                <div class="card-body d-flex flex-column">
                                    <div class="text-center card-title">
                                        <span><strong>Julia Aann</strong> - coo Softbox</span>
                                    </div>
                                    <div class=" card-text">
                                        <p>
                                            At vero eos et accusamus et lusto odio dignissimos ducimus qui blanditiis
                                            proesentium
                                            vero eos et consectetur
                                            accus adip adio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

    .container_md {
        margin-top: -6rem;

    }

    .card {
        box-shadow: 0px 0px 10px 0px #BBBBBB;
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
            position: relative;
            z-index: 0;
            border-radius: 50%;

        }
    }
}
</style>