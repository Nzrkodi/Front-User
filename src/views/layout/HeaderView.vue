<template>
    <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo" style="margin-left: 10px;"> LaundryQ App</a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="" class="nav__link active-link">
                            <router-link role="button" :to="{ name: 'home' }" class="nav__link active-link">
                                <i class="nav__icon"><font-awesome-icon :icon="['fas', 'house']" /></i>
                                <span class="nav__name">Home</span>
                            </router-link>
                        </a>
                    </li>

                    <li class="nav__item">
                        <router-link :to="{ name: 'order' }" class="nav__link">
                            <i class="nav__icon"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></i>
                            <span class="nav__name">Order</span>
                        </router-link>
                    </li>

                    <li class="nav__item">
                        <a href="riwayat.html" class="nav__link">
                            <i class="nav__icon"><font-awesome-icon :icon="['fas', 'clipboard']" /></i>
                            <span class="nav__name">Riwayat</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="about.html" class="nav__link">
                            <i class="nav__icon"><font-awesome-icon :icon="['fas', 'house']" /></i>
                            <span class="nav__name">About</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="#logout" class="nav__link" data-toggle="modal" data-target="#exampleModal">
                            <i class="nav__icon"><font-awesome-icon :icon="['fas', 'right-from-bracket']" /></i>
                            <span class="nav__name">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>

            <img data-name="Wandi" id="initial" alt="" class="profile nav__img" data-toggle="dropdown">
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#"> <i class="text-info fa-solid fa-gear"></i> Settings</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal"><i
                        class="text-danger fa-solid fa-door-closed"></i> Logout</a>
            </div>
        </nav>
    </header>
</template>
<script setup>
</script>