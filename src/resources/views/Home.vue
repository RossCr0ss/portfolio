<template>
    <div class="home">
        <app-header/>
        <main class="container">
            <app-main-content/>
        </main>
    </div>
</template>

<script>
import Header from '@/resources/components/Header.vue'
import MainContent from '../components/MainContent.vue'

export default {
    name: 'Home',
    components: {
        'app-header': Header,
        'app-main-content': MainContent
    }
}
</script>
