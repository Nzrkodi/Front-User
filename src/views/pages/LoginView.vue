<template>
    <body class="cs-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card border-0 shadow rounded-3 my-5" style="margin-top: 100px !important;">
                        <div class="card-body p-4 p-sm-5">
                            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                            <div>
                                <h6 v-show="errMessage" class="text-danger mb-3">Username atau password salah</h6>
                                <div class="form-floating mb-5">
                                    <input v-model="userPayload.username" type="email" class="form-control" id="floatingInput"
                                        placeholder="name@example.com">
                                        <small class="text-danger">
                                            {{ errorPayload.username }}
                                        </small>
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-5">
                                    <input v-model="userPayload.password" type="password" class="form-control" id="floatingPassword"
                                        placeholder="Password">
                                        <small class="text-danger">
                                          {{ errorPayload.password }}
                                        </small>
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div class="d-grid">
                                    <button @click="getScope()" class="btn btn-primary btn-login text-uppercase fw-bold" type="button">Sign
                                        in</button>
                                </div>
                                <hr class="my-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>
<style scoped>
.cs-bg {
    background: #007bff;
    background: linear-gradient(to right, #0062E6, #33AEFF);
    height: 100vh;
    width: auto;
}

.btn-login {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
}

.btn-google {
    color: white !important;
    background-color: #ea4335;
}

.btn-facebook {
    color: white !important;
    background-color: #3b5998;
}
</style>
<script setup>
import { useRouter } from 'vue-router';
import Auth from '../../utils/Auth'
import Other from '../../utils/Other'
import { onMounted, reactive, ref } from 'vue';
import * as Yup from 'yup'

const userPayload = reactive({
  grant_type   : import.meta.env.VITE_GRANT_TYPE,
  client_id    : import.meta.env.VITE_CLIENT_ID,
  client_secret: import.meta.env.VITE_AUTH_KEY,
  username     : "",
  password     : "",
  scope        : ""
})

const errMessage = ref(false)
const errorPayload = ref('')
const router = useRouter()

const getScope = async () => {
  try {
    const payloadSchema = Yup.object().shape({
      username: Yup.string()
      .required('Field harus diisi')
      .min(2, 'Field minimal terdiri dari 2 karakter')
      .max(150, 'Field maksimal terdiri dari 150 karakter'),
      password: Yup.string()
      .required('Field harus diisi')
      .min(2, 'Field minimal terdiri dari 2 karakter')
      .max(150, 'Field maksimal terdiri dari 150 karakter'),
    });

    await payloadSchema.validate(userPayload, { abortEarly: false });

    Auth.getScope(userPayload)
    .then((res) => {
      let data = res.data.data
      userPayload.scope = data.scope

      if (data.scope == "order-only") {
        Other.encryptScope(data.scope, data.id, res.data.client.id)
        getToken()
      } else {
        errMessage.value = true
      }
    })
    .catch((err) => {
      console.log(err);
      errMessage.value = true
    })
  } catch (err) {
    const errorMessages = err.inner.reduce((errors, error) => {
      errors[error.path] = error.message;
      return errors;
    }, {});
    errorPayload.value = errorMessages;
  }
}

const getToken = () => {
  Auth.getToken(userPayload)
  .then((res) => {
    console.log(res);
    localStorage.setItem('token', res.data.access_token)

    router.push('/')
  })
  .catch((err) => {
    console.log(err);
    errMessage.value = true
  })
}

onMounted(() => {
  if (localStorage.getItem("token")) {
    router.push('/')
  }
})
</script>