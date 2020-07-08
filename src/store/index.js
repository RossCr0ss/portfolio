import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        info: {
            name: 'Rostyslav',
            surname: 'Sobechko',
            position: 'Front-end developer',
            about: 'Courteous and enthusiastic, I am interested in IT and everything in its orbit. I recently began to be fascinated by web programming, e.g. developing apps and building websites. As this area interesting for me, I am keen to gain more experience in the field. For this reason, I am looking for a company willing to offer me a placement among their developers. In return, I would offer my full commitment, and be a pleasant and friendly addition to your team. I am therefore currently looking for a job or an internship as a front-end developer.',
            avatarUrl: 'https://avatars2.githubusercontent.com/u/41146956?s=460&u=34785274d725926de83c1fcefa3c5d6acaa0c5fe&v=4',
            technologies: [
                {
                    name: 'HTML5',
                    level: 10
                },
                {
                    name: 'CSS3',
                    level: 10
                },
                {
                    name: 'Javascript',
                    level: 7
                },
                {
                    name: 'TypeScript',
                    level: 5
                },
                {
                    name: 'Bootstrap',
                    level: 4
                },
                {
                    name: 'Webpack',
                    level: 5
                },
                {
                    name: 'Sass',
                    level: 8
                },
                {
                    name: 'Git',
                    level: 5
                },
                {
                    name: 'Vue.js',
                    level: 6
                },
                {
                    name: 'Angular 2+',
                    level: 6
                },
                {
                    name: 'Node.js',
                    level: 2
                },
            ],
            interests: [
                {
                    name: 'Films',
                    imageUrl: 'film.svg'
                },
                {
                    name: 'Music',
                    imageUrl: 'music.svg'
                },
                {
                    name: 'Football',
                    imageUrl: 'soccer.svg'
                },
                {
                    name: 'Travel',
                    imageUrl: 'plane.svg'
                },
                {
                    name: 'Space',
                    imageUrl: 'start-button.svg'
                },
                {
                    name: 'Books',
                    imageUrl: 'book.svg'
                },
                {
                    name: 'History',
                    imageUrl: 'history.svg'
                },
                {
                    name: 'Technologies',
                    imageUrl: 'atom.svg'
                },
            ]
        },
        projects: [
            {
                name: 'Ad project',
                desc: 'An application that resembles an online store (has a shopping cart, edit menu, authorization)',
                technologies: 'Javascript, Vue.js, Vuetify, Google Firebase',
                url: 'https://github.com/RossCr0ss/ad-project',
                images: [
                    {
                        url: 'ad-project/image1.png' 
                    },
                    {
                        url: 'ad-project/image2.png' 
                    },
                    {
                        url: 'ad-project/image3.png' 
                    },
                    {
                        url: 'ad-project/image4.png' 
                    },
                    {
                        url: 'ad-project/image5.png' 
                    },
                    {
                        url: 'ad-project/image6.png' 
                    },
                    {
                        url: 'ad-project/image7.png' 
                    },
                    {
                        url: 'ad-project/image8.png' 
                    },
                    {
                        url: 'ad-project/image9.png' 
                    },
                    {
                        url: 'ad-project/image10.png' 
                    },
                    {
                        url: 'ad-project/image11.png' 
                    }
                ]
            }
        ]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getInfo ( state ) {
            return state.info
        },
        getFullName (state) {
            return state.info.name + ' ' + state.info.surname
        },
        getProjects (state) {
            return state.projects
        }
    }
})
