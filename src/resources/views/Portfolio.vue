<template>
    <div class="portfolio">
        <h2 class="portfolio__title">Portfolio</h2>
        <div class="portfolio__container">
            <div class="projects">
                <div 
                    class="item"
                    v-for="item of 5"
                    :key="item.id"
                > 
                    <div class="info">
                        <h4 class="info__title">Name: Earth Quotes</h4>
                        <p class="info__desc">Description: Random quotes shown over google earth images</p>
                        <p class="info__desc">Uses: Javascript, JQuery, Bootstrap</p>
                        <a class="btn btn-rounded info__btn" href="https://sonorangirl.github.io/Earth-Quotes/#" role="button">View Project</a>
                    </div>
                    <div class="image">
                        <img class="responsive-img" src="https://sonorangirl.github.io/img/slice-quotes.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>