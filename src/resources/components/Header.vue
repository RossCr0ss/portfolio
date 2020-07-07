<template>
    <div class="header">
        <nav class="navbar">                
            <ul class="navbar__list">
                <li class="navbar__list__item">
                    <a href="#about">About</a>
                </li>
                <li class="navbar__list__item">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li class="navbar__list__item">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div
                class="navbar__toggle"
                :class="{ change: showMobileMenu }"
                @click="showMobileMenu = !showMobileMenu"
            >
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showMobileMenu: false
        }
    }
}
</script>