<script>


export default {
    name: 'TricksSales',
    data() {
        return {

        }
    },
}
</script>

<template>
    <!-- section trick sales -->
    <div class="TricksSales row row-cols-2">
        <div class="col_40 textTrick">
            <h2>Get tips tricks on how to skyrocket your sales.</h2>
            <span>Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser cras nice one boot
                fanny!</span>

            <div class="card">
                <div class="card_img">
                    <img src="../assets/img/510.png" alt="">
                </div>
                <div class="card_text">
                    <h5>Reporting Analysis</h5>
                    <span>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.</span>
                </div>
            </div>

            <div class="card">
                <div class="card_img">
                    <img src="../assets/img/511.png" alt="">
                </div>
                <div class="card_text">
                    <h5>Technical SEO Audit</h5>
                    <span>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.</span>
                </div>
            </div>
        </div>
        <div class="col imgTrick">
            <img src="../assets/img/509.jpeg" alt="">
        </div>
    </div>
</template>





<style lang="scss">
@use '../assets/scss/partials/variables' as *;

h2 {
    padding-right: 2rem;
    font-size: 2.5rem;
}

.col_40 {
    width: 45%;
}

span {
    font-size: 0.8rem;
    color: $TextGray;
}

.card {
    border-radius: 0;
    border: 0;
    padding: 1rem;
    flex-direction: row;
    margin: 2rem 0;

    &:hover {
        box-shadow: 9px 8px 23px 0px #888888;
    }


    .card_img {
        img {
            width: 4rem;
            padding: 1rem 0;
        }
    }

    .card_text {
        padding: 0.5rem;

        ul {
            padding: 1rem 0;
            list-style: none;

            li {
                line-height: 2.5rem;
            }
        }
    }

}
</style>