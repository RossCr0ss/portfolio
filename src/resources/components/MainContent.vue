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
                Harry Potter
                </div>
                <div class="bio">
                    <p>Student at Hogwarts School</p>
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
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Harry_Potter" title="Download my CV in PDF">
                        <font size="2em" color=""><b>[CV]</b></font>
                    </a>
                </div>
            </div>
        </div>

        <h2 id="about-me">About Me</h2>
        <p>I attended
            <a href="https://en.wikipedia.org/wiki/Hogwarts" target="_blank" rel="noopener noreferrer">Hogwarts School of Witchcraft and Wizardry
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
                    <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                    <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                </svg>
            </a> to study witchcraft, supervised by <strong>Dumbledore</strong> and other professors.</p>
        <p>I'm trying my best to battle with Lord Voldemort, the evil Wizard that we all fear. My research area includes Defence Against the Dark Arts and other magic. 💫</p>
        
        <h2 id="news">News</h2>
        <ul>
            <li>[Sept 1991] Attended Hogwarts</li>
            <li>[July 1980] Born in Godric's Hollow, West Country, England, Great Britain</li>
        </ul>

        <h2 id="education-experiences">Education &amp; Experiences</h2>
        <ul>
            <li><strong>Hogwarts School of Witchcraft and Wizardry</strong> <br>Sept 1991 - 1997</li>
        </ul>

        <h2 id="projects">Projects</h2>
        <p>
            <a href="/projects/" class="">→ Full list</a>
        </p>
        <div class="md-card">
            <div class="card-image">
                <img src="/projects/1.png" alt="">
            </div>
            <div class="card-content">
                <p><strong>The Making of Harry Potter's Wand</strong></p>
                <p>Harry P., Hermione G., <em>et al</em></p>
                <p>Harry's wand was broken in 1997, but was repaired by him after the 1998 Battle of Hogwarts. Usually the repair of a wand is impossible, but with the use of the Elder Wand it was achievable.</p>
                <p>[
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">PDF
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
                            <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> 
                            <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                        </svg>
                    </a>] [
                    <a href="https://arxiv.org" target="_blank" rel="noopener noreferrer">arXiv
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
                            <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                            <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                        </svg>
                    </a>]
                </p>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data () {
        return {
            email: 'sobechko.r@gmail.com'
        }
    }
}
</script>

<style>

</style>