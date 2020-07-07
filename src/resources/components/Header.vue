<template>
    <div class="header">
        <nav class="navbar">                
            <ul class="navbar__list">
                <router-link
                    tag="li"
                    class="navbar__list__item"
                    to="/"
                >
                    <a href="#about">Home</a>
                </router-link>
                <router-link
                    tag="li"
                    class="navbar__list__item"
                    to="/about"
                >
                    <a href="#about">About</a>
                </router-link>
                <router-link
                    tag="li" 
                    class="navbar__list__item"
                    to="/portfolio"
                >
                    <a href="#portfolio">Portfolio</a>
                </router-link>
                <li
                    class="navbar__list__item"
                >
                    <a
                        target="_blank"
                        href="https://github.com/RossCr0ss"
                    >Github</a>
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