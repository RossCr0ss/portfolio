<template>
    <div class="portfolio">
        <h2 class="portfolio__title">Portfolio</h2>
        <div class="portfolio__container">
            <div class="projects">
                <div 
                    class="item"
                    v-for="item of projects"
                    :key="item.id"
                > 
                    <carousel 
                        :perPageCustom="[[768, 1], [1440, 2]]"
                        :scrollPerPage="true"
                        navigationEnabled
                        :paginationEnabled="false"
                        autoplay
                    >
                        <slide 
                            v-for="image in item.images" 
                            :key="image.id"
                        >
                            <div class="image">
                                <img
                                    class="responsive-img"
                                    :src="require(`@/assets/images/${image.url}`)"                         
                                >
                            </div>
                        </slide>
                    </carousel>
                    <div class="info">
                        <h4 class="info__title">{{item.name}}</h4>
                        <p class="info__desc">Description: {{item.desc}}</p>
                        <p class="info__desc">Uses: {{item.technologies}}</p>
                        <a
                            class="btn btn-rounded info__btn" 
                            :href="item.url" 
                            role="button"
                            target="_blank"
                        >View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide
    },
    data () {
        return {
            projects: []
        }
    },
    created () {
        this.projects = this.$store.getters.getProjects
    },
}
</script>

<style>

</style>