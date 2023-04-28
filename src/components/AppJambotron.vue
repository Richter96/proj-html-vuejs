<script>


export default {
    name: 'AppJambotron',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="jambotron d-flex">
        <div class="col_40 text_jambotron">
            <h1>The biggest platform for your growth.</h1>
            <p>There are many varlations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form</p>

            <button class="btn btn-primary px-3 ">Read More</button>

        </div>
        <div class="col_60">
            <img src="../assets/img/27-1.png" alt="">
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.jambotron {
    background-color: $bgJambotron;
    padding-top: 2rem;
    width: 1448px;
    margin: auto;
    margin-top: 4rem;

    .text_jambotron {
        padding: 4rem;

        button {
            &:hover {
                background-color: $bgHooverBtn;
            }
        }
    }

    h1 {
        font-size: 3rem;
    }

    .col_40 {
        width: 45%;
    }


    img {
        width: 100%;
        margin-bottom: -5%;
    }
}
</style>