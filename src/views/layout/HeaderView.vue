<template>
    <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo" style="margin-left: 10px;"> LaundryQ App</a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#home" class="nav__link active-link">
                            <i class='bx bx-home-alt nav__icon'></i>
                            <span class="nav__name">Home</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="order.html" class="nav__link">
                            <i class='bx bx-cart-add nav__icon'></i>
                            <span class="nav__name">Order</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="riwayat.html" class="nav__link">
                            <i class='bx bx-notepad nav__icon'></i>
                            <span class="nav__name">Riwayat</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="about.html" class="nav__link">
                            <i class='bx bx-id-card nav__icon'></i>
                            <span class="nav__name">About</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="#logout" class="nav__link" data-toggle="modal" data-target="#exampleModal">
                            <i class='bx bx-log-out nav__icon'></i>
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