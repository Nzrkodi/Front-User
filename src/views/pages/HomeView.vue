<template>
	<Header />
	<main>
		<section class="container section section__height" style="height: max-content !important;" id="about">
			<div class="row mt-4 pb-5">
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
								<button @click="showHideModal({typeButton: 'new-data'})" class="btn btn-primary" id="button-order">Pesan Sekarang</button>
							</div>
							<div class="d-flex flex-nowrap overflow-auto mb-5 pb-3 justify-content-start gap-3">
								<div v-for="(item, index) in orderList" :key="index" class="col-md-6 col-12 pr-1">
									<!-- Berikan lebar tetap pada kartu -->
									<div class="card" style="width: 100% !important; margin-right: 10px;">
										<!-- Berikan lebar tetap pada kartu -->
										<div class="card-body">
											<div class="icon">
												<div class="bulat">
													<font-awesome-icon :icon="item.with_detail[0].status == 1 ? 'check' : 'clock'" :class="item.with_detail[0].status == 1 ? 'text-green' : 'text-warning'" />
												</div>
											</div>
											<div class="title">#{{ item.code_order }}</div>
											<div class="list-group-item list-group-item-action flex-column align-items-start mt-3">
												<div class="d-flex w-100 justify-content-between">
													<h5 class="mb-1">Total: {{ item.with_detail.length }}</h5>
													<small>{{ moment(item.created_at).locale('id').fromNow() }}</small>
												</div>
												<p class="mb-1 mt-3">Total Harga Dibayar: Rp.{{ item.with_detail.reduce((accumulator,
													currentValue) => accumulator + currentValue.harga, 0) }}</p>
											</div>
										</div>
									</div>

									<div id="title" class="mt-4 mb-4">
										<h5 class="ms-1">Data Riwayat Transaksi</h5>
									</div>
									<div v-for="(t, index3) in item.with_transaksi" :key="index3" class="col-xl-12 col-md-12">
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
															<h4 class="edit">{{ t.status }}</h4>
															<p class="mb-0 edit">{{ moment(t.created_at).locale('id').fromNow() }}</p>
														</div>
													</div>
													<div class="align-self-center">
														<h2 class="h3 mb-0 edit">Rp.{{ t.t_harga }}</h2>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div v-show="item.with_transaksi.length <= 0" class="text-center mt-5">
										<p class="text-danger">Belum Ada Transaksi</p>
									</div>
								</div>
								<!-- Tambahkan lebih banyak kartu di sini dengan memberikan lebar tetap pada masing-masing kartu -->
								<!-- Dan seterusnya -->
							</div>
							<!-- <div id="title" class="mb-2">
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
							</div> -->
						</div>
					</section>
				</div>
			</div>
		</section>
		<!-- <section class="container section section__height" style="height: fit-content !important;" id="profil">

		</section> -->
	</main>
	<Footer />

	<div class="modal fade" id="modalOrder" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Detail Cucian</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<h6>Detail Pesanan</h6>
					<ul class="list-group list-group-flush">
						<li v-for="(detail, index) in payload.detail_order" :key="index" class="list-group-item">{{detail.keterangan}}</li>
					</ul>
					<div class="form-group mb-3 mt-3">
						<label for="" class="form-label">Jenis Cucian</label>
						<select v-model="detailPayload.jenis_id" class="form-select">
							<option :value="0">Kiloan</option>
							<option v-for="(item, index) in jenisList" :key="index" :value="item.id">{{ item.nama }}</option>
						</select>
						<small class="text-danger">
							{{ errorPayload.jenis_id }}
						</small>
					</div>
					<div class="form-group mb-3" v-if="detailPayload.jenis_id == 0">
						<label for="" class="form-label">Berat Pakaian</label>
						<input v-model.number="detailPayload.berat" type="number" class="form-control" placeholder="--masukan berat--">
					</div>
					<div class="form-group mb-3">
						<label for="" class="form-label">Paket</label>
						<select v-model="detailPayload.paket_id" class="form-select">
							<option value="0" selected disabled>--pilih paket--</option>
							<option v-for="(item, index) in paketList" :key="index" :value="item.id">{{ item.nama }}</option>
						</select>
						<small class="text-danger">
							{{ errorPayload.paket_id }}
						</small>
					</div>
					<div class="form-group mb-3">
						<label for="" class="form-label">Keterangan</label>
						<textarea v-model="detailPayload.keterangan" cols="30" rows="3" placeholder="--beri keterangan--" class="form-control"></textarea>
						<small class="text-danger">
							{{ errorPayload.keterangan }}
						</small>
					</div>
					<div class="form-group mb-3 d-flex">
						<button @click="addToList" class="btn btn-success flex-fill mt-1">Tambah</button>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
					<button @click="sendProcess()" :disabled="payload.detail_order.length >= 1 ? false : true" type="button" class="btn btn-primary">Proses</button>
				</div>
			</div>
		</div>
	</div>
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
import Order from "../../utils/Order";
import Other from "../../utils/Other";
import { onMounted, reactive, ref } from "vue";
import moment from 'moment'
import myModal from 'bootstrap/js/dist/modal'
import Jenis from '../../utils/Jenis'
import Paket from '../../utils/Paket'
import * as Yup from 'yup'

const userId = Other.getDecryptScope()

const orderList = ref([])
const getOrderList = () => {
	Order.getAllList(userId.split(":")[1])
		.then((res) => {
			orderList.value = res.data.data

			console.log(orderList.value);
		})
		.catch((err) => {
			console.log(err);
		})
}

const jenisList = ref([])

const jenisMeta = reactive({
	search: "",
	limit: 100,
	page: 1,
	total: 1,
	total_in_page: 0,
	sort: "desc",
	orderBy: "created_at"
})

const getJenis = () => {
	Jenis.getAllList(jenisMeta)
		.then((res) => {
			let item = res.data
			jenisList.value = item.data
		})
		.catch((err) => {
			console.log(err);
		})
}

const paketList = ref([])
const paketMeta = reactive({
	search: "",
	limit: 100,
	page: 1,
	total: 1,
	total_in_page: 0,
	sort: "desc",
	orderBy: "created_at"
})

const getPaket = () => {
	Paket.getAllList(paketMeta)
		.then((res) => {
			let item = res.data
			paketList.value = item.data
		})
		.catch((err) => {
			console.log(err);
		})
}

const detailPayload = reactive({
	jenis_id: 0,
	paket_id: 0,
	berat: 0,
	status: 0,
	keterangan: ""
})

const payload = reactive({
	client_id    : parseInt(userId.split(":")[2]),
	// pegawai_id   : 1,
	detail_order : []
})

const errorPayload = ref("")

const addToList = async () => {
	try {
		const payloadSchema = Yup.object().shape({
			keterangan: Yup.string()
			.required('Field harus diisi')
			.min(2, 'Field minimal terdiri dari 2 karakter')
			.max(150, 'Field maksimal terdiri dari 150 karakter'),
			jenis_id: Yup.number()
			.typeError('Field harus bertipe nomor')
			.required('Field harus diisi'),
			paket_id: Yup.number()
			.typeError('Field harus bertipe nomor')
			.required('Field harus diisi'),
		});

		await payloadSchema.validate(detailPayload, { abortEarly: false });
		
		payload.detail_order.push({
			jenis_id: detailPayload.jenis_id,
			paket_id: detailPayload.paket_id,
			berat: detailPayload.berat,
			status: detailPayload.status,
			keterangan: detailPayload.keterangan
		})
	} catch (err) {
		const errorMessages = err.inner.reduce((errors, error) => {
      errors[error.path] = error.message;
      return errors;
    }, {});
    errorPayload.value = errorMessages;
	}
}

const sendProcess = () => {
	console.log(payload)
	Order.upsert(payload)
	.then((res) => {
		showHideModal()
		Other.toastSuccess({
			type : "success",
			title: "Berhasil",
			msg  : "Data berhasil diproses!"
		})

		getOrderList()
	})
	.catch((err) => {
		console.log('ini error', err);
		Other.toastSuccess({
			type : "error"                    ,
			title: "Ada kesalahan sistem"     ,
			msg  : "Server sedang maintenance"
		})
	})
}

const modal = ref(null)

const showHideModal = (params) => {
	if (params && params.typeButton == 'new-data') {
		payload.detail_order = []
		for (const key in detailPayload) {
			if (typeof detailPayload[key] == "string") {
				detailPayload[key] = ""
			} else if (typeof detailPayload[key] == "number") {
				detailPayload[key] = 0
			}
		}
	}
	modal.value.show() ? modal.value.show() : modal.value.hide()
}

Pusher.logToConsole = true;

const pusher = new Pusher('35f1b0843bf6b5e60bd9', {
  cluster: 'ap1'
});

const getNotif = () => {
  // Lakukan subscribe ke channel yang diinginkan
  const channel = pusher.subscribe('order-notif');

  // Tangkap event yang diterima dari channel
  channel.bind('send-notif', (data) => {
    // Manipulasi data notifikasi sesuai kebutuhan
    Other.toastSuccess({
      type: "success",
      title: data.message,
      msg: "anda memiliki notifikasi"
    })

    console.log('ini notif', data);
		getOrderList()
  });
}

onMounted(() => {
	modal.value = new myModal('#modalOrder', {
		keyboard: false
	})

	getNotif();
	getJenis()
	getPaket()
	getOrderList()
})
</script>