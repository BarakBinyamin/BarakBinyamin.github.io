<template>
    <div class="info">For items not direclty available through the site, like tutoring, please reach me via <a class="link" target="_blank" href="https://ig.me/m/barak_binyamin">instagram</a> for the quickest response</div>
    <div class="grid">
        <div class="card">
            <img class="hero" src="/tutoring.jpg"/>
            <div class="title">Tutoring</div>
            <div class="price-container">Price: <pre class="price">Free</pre></div>
            <div class="description">Statistics, Computer Science, Software Engineering, Computer Engineering, Web Design</div>
        </div>
        <div class="card">
            <img class="hero" style="padding-top:10px;padding-bottom:5px" src="/portfoliodevad.png"/>
            <div class="title">Portfolio Devleopment</div>
            <div class="price-container">Price: <pre class="price">Free</pre></div>
            <div class="description">Showcase your talent at little to no cost, check out <a class="link" href="https://cameron-cronin.github.io/" target="_blank">this example</a></div>
        </div>
        <div class="card">
            <img class="hero" src="/consulting.jpg"/>
            <div class="title">Consulting</div>
            <div class="price-container">Price: <pre class="price">Negotiable</pre></div>
            <div class="description">Gain insight and quotes for solutions to real world challanges</div>
        </div>
    </div>
    <!-- Tutoring -->
    <!-- Learn to Code -->
    <!-- Portfolio Development -->
    <!-- Custom Websites -->
    <!-- Custom websites -->
</template>

<style scoped>
.info{
    text-align: center;
    padding: 20px 10px 10px 10px;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: .3px;
}
.grid{
    width: 100%;
    padding: 10px;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 170px);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: .3px;
}
.card{
    width: 170px;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,.2);
    padding: 10px;
}
.hero{
    width: 100%;
    border-radius: 5px;
}
.title{
    color: black;
    font-weight: 900px;
    font-size: 18px;
}
.price-container{
    font-size: 13px;
    padding-top: 3px;
}
.price{
    color: rgba(0,0,0,.6);
    display: inline;
}
.description{
    padding-top: 5px;
    color: rgba(0,0,0,.6);
    font-size: 12px;
}
</style>
