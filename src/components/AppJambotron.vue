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
        <div class="text_jambotron">
            <h1>The biggest platform for your growth.</h1>
            <p>There are many varlations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form</p>
        </div>
        <div class="col_60">
            <img src="../assets/img/508.jpeg" alt="">
        </div>
    </div>
</template>

<style lang="scss">
.jambotron {
    background-color: lightblue;

    .text_jambotron {
        padding: 4rem;
    }

    h1 {
        font-size: 3rem;
    }

    .col_60 {
        width: 605;
    }


    img {
        width: 100%;
        margin-bottom: -10%;
    }
}
</style>