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
                                    <h2><b>STATUS PENCUCIAN</b></h2>
                                    <p class="mt-3">Dashboar / home</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-6">
                                <a href="" class="btn btn-primary" id="button-order">Order Sekrang</a>
                            </div>
                            <div class="d-flex justify-content-center align-items-center mb-5">
                                <div class="col-md-6 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="icon">
                                                <div class="bulat">
                                                    <font-awesome-icon :icon="['fas', 'clock-rotate-left']"
                                                        class="text-warning" />
                                                </div>
                                            </div>
                                            <div class="title">Sedang dicuci</div>
                                            <div class="content">
                                                Ini adalah konten dari card menarik dengan Font Awesome.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="title" class="mb-2">
                                <h2><b>DATA MENU</b></h2>
                                <p class="mt-3">Click pada bagian dibawah ini</p>
                            </div>
                            <div class="col-md-4 col-4">
                                <a href="" style="color: black; text-decoration: none;">
                                    <div class="cardd">
                                        <div class="text-center">
                                            <div class="ico">
                                                <font-awesome-icon :icon="['fas', 'cart-shopping']" /><br>
                                            </div>
                                            <span>Order</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-4 col-4">
                                <a href="" style="color: black; text-decoration: none;">
                                    <div class="cardd">
                                        <div class="text-center">
                                            <div class="ico">
                                                <font-awesome-icon :icon="['fas', 'file-lines']" /><br>
                                            </div>
                                            <span>Cucian</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-4 col-4">
                                <a href="" style="color: black; text-decoration: none;">
                                    <div class="cardd">
                                        <div class="text-center">
                                            <div class="ico">
                                                <font-awesome-icon :icon="['fas', 'user-pen']" /><br>
                                            </div>
                                            <span>User</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div id="title" class="">
                                <h2><b>Data Riwayat Transaksi</b></h2>
                                <p class="mt-3">Click pada bagian dibawah ini</p>
                            </div>
                            <div class="col-xl-12 col-md-12">
                                <div class="cardd">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between p-md-1">
                                            <div class="d-flex flex-row">
                                                <div class="align-self-center">
                                                    <i class="fas fa-pencil-alt text-info fa-2x me-4">
                                                        <font-awesome-icon :icon="['fas', 'cash-register']" />
                                                    </i>
                                                </div>
                                                <div class="ml-2">
                                                    <h4 class="edit">Total Posts</h4>
                                                    <p class="mb-0 edit">Monthly blog posts</p>
                                                </div>
                                            </div>
                                            <div class="align-self-center">
                                                <h2 class="h3 mb-0 edit">Rp.28,000</h2>
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
                                                    <i class="fas fa-pencil-alt text-info fa-2x me-4">
                                                        <font-awesome-icon :icon="['fas', 'cash-register']" />
                                                    </i>
                                                </div>
                                                <div class="ml-2">
                                                    <h4 class="edit">Total Posts</h4>
                                                    <p class="mb-0 edit">Monthly blog posts</p>
                                                </div>
                                            </div>
                                            <div class="align-self-center">
                                                <h2 class="h3 mb-0 edit">Rp.28,000</h2>
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
                                                    <i class="fas fa-pencil-alt text-info fa-2x me-4">
                                                        <font-awesome-icon :icon="['fas', 'cash-register']" />
                                                    </i>
                                                </div>
                                                <div class="ml-2">
                                                    <h4 class="edit">Total Posts</h4>
                                                    <p class="mb-0 edit">Monthly blog posts</p>
                                                </div>
                                            </div>
                                            <div class="align-self-center">
                                                <h2 class="h3 mb-0 edit">Rp.28,000</h2>
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
        <section class="container section section__height" id="profil">

        </section>
    </main>
    <Footer />
</template>
<style scoped>
.card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.cardd:hover {
    transform: translateY(-5px);
    background-color: lightskyblue;
}

.card .card-body {
    text-align: center;
}

.card .icon {
    font-size: 60px;
    color: #007bff;
    /* ganti warna ikon sesuai kebutuhan Anda */
    margin-bottom: 20px;
}

.ico {
    font-size: 25px;

}

.card .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.card .content {
    font-size: 16px;
    color: #333;
}
</style>
<script setup>
import Header from "../layout/HeaderView.vue";
import Footer from "../layout/FooterView.vue";
</script>