<script>


export default {
    name: 'LatestPost',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="latestPost text-center my-5">
        <div class="container_md">
            <h2>Latest Posts</h2>
            <span>If you are planning on developing a product landing.</span>

            <div class="posts row row-cols-3">
                <div class="col">
                    <div class="card_post position-relative flex-column">
                        <span class="badge fw-light">November 28, 2019</span>
                        <img src="../assets/img/19.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title py-1 mt-3">Life Lack Meaning</h5>
                            <p class="card-text py-1">It is a long established fact that a reader will be distracted by the
                                readable.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card_post position-relative flex-column">
                        <span class="badge fw-light">November 28, 2019</span>
                        <img src="../assets/img/18.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title py-1 mt-3">Life Lack Meaning</h5>
                            <p class="card-text py-1">It is a long established fact that a reader will be distracted by the
                                readable.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card_post position-relative flex-column">
                        <span class="badge fw-light">November 28, 2019</span>
                        <img src="../assets/img/17.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title py-1 mt-3">Life Lack Meaning</h5>
                            <p class="card-text py-1">It is a long established fact that a reader will be distracted by the
                                readable.</p>

                        </div>
                    </div>
                </div>
                <div class="col"></div>
                <div class="col"></div>
            </div>

        </div>
    </div>
</template>





<style lang="scss">
@use '../assets/scss/partials/variables' as *;



.posts {
    margin-top: 4rem;
}

.card_post {
    text-align: start;
    padding: 0.5rem;
    border: 0.5px solid $borderLightGray;

    &:hover {
        box-shadow: 9px 8px 23px 0px #888888;
    }

    .card-body {
        padding: 1rem;
        padding-right: 4rem;
    }

    img {
        max-width: 100%;
    }
}

.badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: $bgBadge;
    color: $TextBadge;
    border-radius: 0.3rem;
    padding: 0.5rem;
}

p {
    color: $TextLightGray;
}
</style>