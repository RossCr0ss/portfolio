<template>
    <div class="home">
        <app-main-content/>
    </div>
</template>

<script>

import MainContent from '../components/MainContent.vue'

export default {
    name: 'Home',
    components: {
        'app-main-content': MainContent
    }
}
</script>
