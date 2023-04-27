<script>


export default {
    name: 'AppFooter',
    data() {
        return {

        }
    },
}
</script>

<template>
    <footer>
        <div class="footer_top container_md">
            <div class="row">
                <div class="contact_title col-12 text-center ">
                    <h3>Contact With our team</h3>
                    <span>If you are planning on developing a product landing.</span>
                </div>
                <div class="col">
                    <img src="../assets/img/StaticMapService.GetMapIma.png" alt="">
                </div>
                <div class="col">
                    <img src="../assets/img/35.png" alt="">
                    <span class=" d-block text-black fs-4 py-3"><strong>9840 Share St. Fond Du Lac, WI 54935</strong></span>
                    <span class=" d-block text-black-50 py-1">0 1223 458 789</span>
                    <span class=" d-block text-black-50 ">mali@softbox.com</span>
                    <div class="icones d-flex gap-2 mt-5">
                        <div class="icone border border-1">
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            </a>
                        </div>
                        <div class="icone border border-1">
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-twitter" />
                            </a>
                        </div>
                        <div class="icone border border-1">
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-github" />
                            </a>
                        </div>
                        <div class="icone border border-1">
                            <a href="#">
                                <font-awesome-icon icon="fa-brands fa-instagram" />
                            </a>
                        </div>
                    </div>

                    <!-- contact area for mor info  -->
                    <div class="contact my-4">
                        <h3>Get in Touch</h3>
                        <div class="d-flex gap-4 my-4">
                            <input type="text" placeholder="Your Name">
                            <input type="text" placeholder="Your Email">
                        </div>
                        <div class="d-flex flex-column gap-4">
                            <input type="text" placeholder="Your Subject">
                            <textarea name="" id="" cols="30" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button class="btn btn-primary py-2 my-3">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom border-top">
            <div class="container_md my-5">
                <div class="row row-cols-4 justify-content-between">
                    <div class="col">
                        <img src="../assets/img/35.png" alt="">
                        <p class=" mb-5">It is a long established fact that a reader will be distracted by the readable
                            content
                        </p>
                        <span>Copyright &copy; 2018 <a class=" text-decoration-none text-primary" href="">Softbox</a>
                        </span>
                    </div>
                    <div class="col">
                        <h5><strong>Menu</strong></h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Theme</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5><strong>About Us</strong></h5>
                        <ul>
                            <li><a href="#">About Softbox</a></li>
                            <li><a href="#">Roadmap</a></li>
                            <li><a href="#">How it Work</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5><strong>Quicj Links</strong></h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Theme</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;


.contact_title {
    margin: 3rem 0;
}

.contact {
    input {
        width: 100%;
    }

    input,
    textarea {
        border: 1px solid $borderLightGray;
    }
}

ul {
    list-style: none;
    padding: 0;

    li {
        line-height: 1.9rem;
    }

    a {
        text-decoration: none;
        color: $TextLightGray;
    }
}

.icone {
    width: 2rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $borderLightGray;
}
</style>