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
                    <div class="image">
                        <img
                            class="responsive-img"
                            :src="require(`@/assets/images/${item.id}.png`)"                         
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            projects: [
                {
                    name: 'Ad project',
                    desc: 'An application that resembles an online store (has a shopping cart, edit menu, authorization)',
                    technologies: 'Javascript, Vue.js, Vuetify, Google Firebase',
                    url: 'https://github.com/RossCr0ss/ad-project',
                    id: '1'
                },
                {
                    name: 'RickAndMorty',
                    desc: 'Application that is implemented on the API. Pagination is used to display 20 characters. You can view the character card with details.',
                    technologies: 'Javascript, Vue.js',
                    url: 'https://github.com/RossCr0ss/RickAndMorty',
                    id: '2'
                },
                {
                    name: 'ContactsApp',
                    desc: '',
                    technologies: 'Javascript, Node.js',
                    url: 'https://github.com/RossCr0ss/ContactsApp',
                    id: '3'
                }
            ]
        }
    }
}
</script>

<style>

</style>