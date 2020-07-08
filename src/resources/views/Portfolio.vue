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
                    <div class="info">
                        <h4 class="info__title">Name: {{item.name}}</h4>
                        <p class="info__desc">Description: {{item.desc}}</p>
                        <p class="info__desc">Uses: {{item.technologies}}</p>
                        <a
                            class="btn btn-rounded info__btn" 
                            :href="item.url" 
                            role="button"
                            target="_blank"
                        >View Project</a>
                    </div>
                    <carousel>
                        <slide>
                            <div class="image">
                                <img
                                    class="responsive-img"
                                    :src="require(`@/assets/images/${item.img}`)"                         
                                >
                            </div>
                        </slide>
                    </carousel>
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
            projects: [
                {
                    name: 'Ad project',
                    desc: 'An application that resembles an online store (has a shopping cart, edit menu, authorization)',
                    technologies: 'Javascript, Vue.js, Vuetify, Google Firebase',
                    url: 'https://github.com/RossCr0ss/ad-project',
                    img: '1.png'
                },
                {
                    name: 'RickAndMorty',
                    desc: 'Application that is implemented on the API. Pagination is used to display 20 characters. You can view the character card with details.',
                    technologies: 'Javascript, Vue.js',
                    url: 'https://github.com/RossCr0ss/RickAndMorty',
                    img: '2.png'
                },
                {
                    name: 'ContactsApp',
                    desc: '',
                    technologies: 'Javascript, Node.js',
                    url: 'https://github.com/RossCr0ss/ContactsApp',
                    img: '3.png'
                }
            ]
        }
    }
}
</script>

<style>

</style>