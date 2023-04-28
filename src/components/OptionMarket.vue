<script>


export default {
    name: 'OptionMarket',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="container_md">
        <div class="optionMarket">
            <div class="row row-cols-3 d-flex justify-content-center">
                <!-- option -->
                <div class="col">
                    <div class="card">
                        <div class="card_img">
                            <img src="../assets/img/24.png" alt="">
                        </div>
                        <div class="card_text">
                            <h5>Online Marketing</h5>
                            <span>It is a long established fact that a reader will be distracted.</span>
                            <ul>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> SEO</li>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> SEM</li>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> Website Strategi</li>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> Social management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- other option -->
                <div class="col">
                    <div class="card">
                        <div class="card_img">
                            <img src="../assets/img/24.png" alt="">
                        </div>
                        <div class="card_text">
                            <h5>Online Marketing</h5>
                            <span>It is a long established fact that a reader will be distracted.</span>
                            <ul>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> SEO</li>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> SEM</li>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> Website Strategi</li>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> Social management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- other option -->
                <div class="col">
                    <div class="card">
                        <div class="card_img">
                            <img src="../assets/img/24.png" alt="">
                        </div>
                        <div class="card_text">
                            <h5>Online Marketing</h5>
                            <span>It is a long established fact that a reader will be distracted.</span>
                            <ul>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> SEO</li>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> SEM</li>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> Website Strategi</li>
                                <li> <img width="20" src="../assets/img/check.png" alt=""> Social management</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.optionMarket {
    margin-top: 4rem;
    padding-top: 2rem;

    .card {
        border: 0;
        padding: 1rem 0rem;
        flex-direction: row;

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
            padding: 0.5rem 2.5rem 0.5rem 2rem;

            ul {
                padding: 1rem 0;
                list-style: none;

                li {
                    line-height: 2.5rem;
                    font-weight: bold;
                }
            }
        }


        span {
            font-size: 0.8rem;
            color: $TextGray;
        }
    }
}
</style>