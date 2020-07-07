<template>
    <div id="app">
        <app-header/>
        <main class="container">
            <router-view/>
        </main>
    </div>
</template>

<script>
import Header from '@/resources/components/Header.vue'
export default {
    components: {
        'app-header': Header
    }
}
</script>

<style>

</style>
