<template>
    <div class="main-content">
        <div class="profile">
            <div class="image">
                <img 
                    src="https://avatars2.githubusercontent.com/u/41146956?s=460&u=34785274d725926de83c1fcefa3c5d6acaa0c5fe&v=4" 
                    class="responisve_img"
                    alt="avatar"
                >
            </div>
            <div class="info">
                <div class="name">
                {{name}}
                </div>
                <div class="bio">
                    <p>Front-end developer</p>
                </div>
                <div class="socials">
                    <div>
                        <a href="https://github.com/RossCr0ss" target="_blank">
                            <img src="@/assets/icons/github-image.svg" alt="github" title="github">
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/rostyslav-sobechko/" target="_blank">
                            <img src="@/assets/icons/linkedin.svg" alt="linkedin" title="linkedin">
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/ross_cr0ss/" target="_blank">
                            <img src="@/assets/icons/instagram-sketched.svg" alt="instagram" title="instagram">
                        </a>
                    </div>
                </div>
                <div class="contact">
                    <div title="Contact me" class="email">{{ email }}</div>
                </div>
                <div>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1MzS8NqEotF7DwQb6bDPwNeOchvzoUZVf/view?usp=sharing"
                        title="Download my CV in PDF"
                    >
                        <font size="2em" color=""><b>[CV]</b></font>
                    </a>
                </div>
            </div>
        </div>

        <h2 id="about-me">About Me</h2>
        <p>
            Courteous and enthusiastic, I am interested in IT and everything in its orbit. I recently began to be fascinated by
            web programming, e.g. developing apps and building websites.
        </p>
        <p>
            As this area interesting for me, I am keen to gain more experience in the field. For this reason, I am looking for a
            company willing to offer me a placement among their developers. In return, I would offer my full commitment, and
            be a pleasant and friendly addition to your team.
        </p>
        <p>
            I am therefore currently looking for a job or an internship as a front-end developer.
        </p>
        
        <h2 id="education-experiences">Education &amp; Experiences</h2>
        <ul class="education_list">
            <li><strong>Lviv Polytechnic National University</strong> <br>Sept 2014 - Jan 2020</li>
            <li><strong>Okten Web University</strong> <br>Feb 2019 - July 2019</li>
            <li><strong>Incora Coding Camp</strong> <br>Aug 2019 - Oct 2019</li>
        </ul>

        <h2 id="projects">Projects</h2>
        <p>
            <a href="/portfolio/" class="">→ Full list</a>
        </p>

        <div class="project">
            
            <carousel 
                :perPageCustom="[[768, 1], [1440, 2]]"
                :scrollPerPage="true"
                navigationEnabled
                paginationColor="#6ebbc0"
                paginationActiveColor="#000"
                autoplay
            >
                <slide 
                    v-for="image in randomProject.images" 
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

            <h2>{{randomProject.name}}</h2>
            <p>Description: {{randomProject.desc}}</p>
            <p>Uses: {{randomProject.technologies}}</p>
            
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
            name: 'Rostyslav Sobechko',
            email: 'sobechko.r@gmail.com',
            projects: [],
            randomProject: ''
        }
    },
    created () {
        this.projects = this.$store.getters.getProjects
        this.getRandomProject ()
    },
    methods: {
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },
        getRandomProject () {
            this.randomProject = this.projects[this.getRandomInt(this.projects.length)]
            console.log(this.randomProject);
        }
    }
}
</script>

<style>

</style>