<template>
  <div class="about">
    <div class="about__card">
        <div class="avatar">
            <img 
                src="https://avatars2.githubusercontent.com/u/41146956?s=460&u=34785274d725926de83c1fcefa3c5d6acaa0c5fe&v=4"
                alt="avatar"
                class="responsive-img"
            />
        </div>
        <div class="card">
            <div class="bio">
                <div class="head">
                    <span>{{ fullName }}</span>
                </div>
                <div class="info">
                    <span>{{ info.position }}</span>
                </div>
                <div class="description">
                    <p>{{ info.about }}</p>
                </div>
                <div class="tools">
                    <p class="text-center">Here's a few of the tools I use</p>
                    
                    <ul class="list">
                        <li
                            v-for="item in info.technologies"
                            :key="item.name"
                            class="list__item"
                        >
                            <div>
                                <img
                                    :src="require(`@/assets/icons/${item.imageUrl}`)"   
                                    :alt="item.name"
                                    :title="item.name"
                                    class="responsive-img"
                                >
                            </div>
                            <span >{{item.name}}</span>
                        </li>
                    </ul>               
                </div>
                
            </div>
            <div class="interests">
                <span>Interests: </span>
                <ul class="list">
                    <li
                        v-for="item in info.interests"
                        :key="item.name"
                        class="list__item"
                    >
                        <div>
                            <img 
                                :src="require(`@/assets/icons/${item.imageUrl}`)"      
                                :alt="item.name"
                                :title="item.name"
                                class="responsive-img"
                            >
                        </div>
                        <span>
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="socials">
                <div>
                    <a href="https://github.com/RossCr0ss" target="_blank">
                        <img src="@/assets/icons/github-image.svg" alt="github" title="github" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/rostyslav-sobechko/" target="_blank">
                        <img src="@/assets/icons/linkedin.svg" alt="linkedin" title="linkedin" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/ross_cr0ss/" target="_blank">
                        <img src="@/assets/icons/instagram-sketched.svg" alt="instagram" title="instagram" />
                    </a>
                </div>
                <div>
                    <a href="https://https://www.web.telegram.org@Ross_Cross" target="_blank">
                        <img src="@/assets/icons/telegram.svg" alt="telegram" title="telegram" />
                    </a>
                </div>
                <div>
                    <a href="mailto:harry[at]gmail.com" target="_blank">
                        <img src="@/assets/icons/email.svg" alt="email" title="email" />
                    </a>
                </div>
            </div>
            <div class="actions">
                <div>
                    <a
                        href="/portfolio/"
                        target="_blank"
                        class="button"
                    >Portfolio</a>
                </div>
                <div>
                    <a
                        href="https://drive.google.com/file/d/1MzS8NqEotF7DwQb6bDPwNeOchvzoUZVf/view?usp=sharing"
                        target="_blank"
                        class="button"
                    >CV</a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
            info: '',
            fullName: ''
        }
    },
    created () {
        this.fullName = this.$store.getters.getFullName
        this.info = this.$store.getters.getInfo
    },
    computed: {
        ...mapState({
            name: 'name'
        }),
        getImgUrl(img) {
            var images = require.context('@/assets/', false, /\.svg$/)
            return images('./' + img + ".svg")
        }
    }
}
</script>