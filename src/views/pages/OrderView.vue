<template>
    <Header />
    <main>
        <section class="container section section__height" id="about">
            <div class="row">
                <div class="col-md-6 col-6">
                    <div id="title">
                        <h2><b>HALAMAN ORDER</b></h2>
                        <p class="mt-3">Dashboard / Order</p>
                    </div>
                </div>
                <div class="col-md-6 col-6">
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <form class="form col-md-12`">
                    <div class="row">
                        <h4 class=""><b>Jumlah Order</b></h4>
                        <ul class="list-group list-group-flush col-sm-2">
                            <a role="button">
                                <li class="list-group mt-3">
                                    <div class="d-flex justify-content-between container-fluid">
                                        <span class="mr-4 mt-1">1. Contoh</span>
                                        <button class="btn btn-close btn-sm"></button>
                                    </div>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <hr>
                    <div class="form-group">
                        <h4 class="float-start">Detail Order</h4>
                        <button class="btn btn-outline-primary float-end">Tambah</button>
                    </div><br><br>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="mb-2">Cuci Satuan</label>
                        <select name="" id="" class="form-control mb-2">
                            <option value="" disabled selected>Pilih Jenis Cucian</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="mb-2">Jenis Paket</label>
                        <select name="" id="" class="form-control mb-2">
                            <option value="" disabled selected>Pilih Jenis Paket</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="mb-2">Berat/Kg</label>
                        <input type="text" class="form-control mb-2" id="exampleInputPassword1" placeholder="... /Kg">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="mb-2">Keterangan</label>
                        <textarea name="" id="" cols="30" rows="7" class="form-control mb-3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary float-end">Simpan</button>

                </form>
            </div>
        </section>
    </main>
    <Footer />
</template>
<script setup>
import Header from "../layout/HeaderView.vue";
import Footer from "../layout/FooterView.vue";
// import BaseInput from '../../components/Input/BaseInput.vue'
// import Paggination from '../../components/Paggination.vue';
// import BaseButton from '../../components/BaseButton.vue';
// import Paket from '../../utils/Paket'
// import Other from '../../utils/Other'
// import Order from '../../utils/Order'
// import Detail from '../../utils/Detail'

</script>