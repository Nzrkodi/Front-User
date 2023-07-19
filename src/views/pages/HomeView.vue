<template>
    <Header />
    <main>
        <section class="container section section__height" id="about">
            <div class="row mt-4">
                <div class="container-fluid">
                    <section>
                        <div class="row">
                            <div class="col-md-6 col-6">
                                <div id="title">
                                    <h2><b>HALAMAN DASBOARD</b></h2>
                                    <p class="mt-3">Dashboar / home</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-6">
                                <a href="" class="btn btn-primary" id="button-order">Order Sekrang</a>
                            </div>
                            <div class="col-xl-12 col-md-12">
                                <div class="cardd">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between p-md-1">
                                            <div class="d-flex flex-row">
                                                <div class="align-self-center">
                                                    <i class="fas fa-pencil-alt text-info fa-2x me-4">
                                                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                                                    </i>
                                                </div>
                                                <div class="ml-2">
                                                    <h4 class="edit">Total Posts</h4>
                                                    <p class="mb-0 edit">Monthly blog posts</p>
                                                </div>
                                            </div>
                                            <div class="align-self-center">
                                                <h2 class="h3 mb-0 edit">18,000</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-md-12">
                                <div class="cardd">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between p-md-1">
                                            <div class="d-flex flex-row">
                                                <div class="align-self-center">
                                                    <i class="fas fa-pencil-alt text-info fa-2x me-4"></i>
                                                </div>
                                                <div class="ml-2">
                                                    <h4 class="edit">Total Posts</h4>
                                                    <p class="mb-0 edit">Monthly blog posts</p>
                                                </div>
                                            </div>
                                            <div class="align-self-center">
                                                <h2 class="h3 mb-0 edit">Rp.18000</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>
<script setup>
import Header from "../layout/HeaderView.vue";
import Footer from "../layout/FooterView.vue";
import Carousel from 'vue-carousel';
</script>