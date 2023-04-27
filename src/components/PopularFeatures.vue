<script>


export default {
    name: 'PopularFeatures',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="popularFeatures row row-cols-2">
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
                <div class="col">
                    <div class="card flex-column">
                        <h5>Customized Invoices</h5>
                        <img src="../assets/img/invoice.png" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="card flex-column">
                        <h5>Customized Invoices</h5>
                        <img src="../assets/img/invoice.png" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="card flex-column">
                        <h5>Customized Invoices</h5>
                        <img src="../assets/img/invoice.png" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="card flex-column">
                        <h5>Customized Invoices</h5>
                        <img src="../assets/img/invoice.png" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="card flex-column">
                        <h5>Customized Invoices</h5>
                        <img src="../assets/img/invoice.png" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="card flex-column">
                        <h5>Customized Invoices</h5>
                        <img src="../assets/img/invoice.png" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="card flex-column">
                        <h5>Customized Invoices</h5>
                        <img src="../assets/img/invoice.png" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="card flex-column">
                        <h5>Customized Invoices</h5>
                        <img src="../assets/img/invoice.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.popularFeatures {
    margin-top: 4rem;

    .card {
        box-shadow: 0px 0px 71px -17px #818181;
        aspect-ratio: 2/1;

        &:hover {
            background-color: $bgPrimary;
        }

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
}

button {

    padding: 0.5rem 1.5rem;
    margin: 0rem 3rem;

    &:hover {
        background-color: $bgHooverBtn;
    }

}

h2 {
    font-size: 2.5rem;
}
</style>