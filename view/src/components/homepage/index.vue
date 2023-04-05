<template>
    <div class="homepage">
        <div class="title">Project Explorer</div>
        <div class="search-container">
            <searchbar v-model:results="results"/>
        </div>
        <div class="results">
            <div v-for="result,index in results" 
            class="result"
            @click="$router.push(`/blog/${result.item.id}`)">
            <img class="preview" :src="result.item.image"/>
            <div class="info">
                <div class="name">{{result.item.title }}</div> 
                <div class="description">{{result.item.description}}</div> 
            </div>
                <!-- {{ index }} -->
                <!-- https://fusejs.io/api/query.html -->
            </div>
        </div>
    </div>
</template>

<script>
import searchbar from './searchbar.vue'

export default{
    components: {searchbar},
    data(){
        return {
            results: []
        }
    },
}
</script>

<style scoped>
.title{
    font-size: 2em;
    text-align: center;
}
.search-container{
    width          : 100%;
    display        : grid;
    align-items    : center;
    align-content  : center;
    justify-content: center;
    justify-items  : center;
    padding        : 5px;
}

.results{
    padding: 5px;
    display: grid;
    width: 100%;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 350px);
    grid-gap: 8px;
}

.result{
    padding: 5px;
    display: grid;
    grid-template-columns: 100px auto;
    width: 350px;
    background: white;
    border-radius: 5px;
    height: 100px;
    box-shadow: 0px 0px 1px 0px var(--shaddow-bg-color);
}
.preview{
    height: 100%;
    width: 100%;
    object-fit: stretch;
    box-shadow: 0px 0px 1px 0px var(--shaddow-bg-color);
    text-overflow: ellipsis;
    overflow-y: hidden;
}

.info{
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: max-content;
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
}
@media (any-pointer: coarse)  {
    .info{
        padding: .2em .2em .2em .4em;
    }
}
.result:hover{
    box-shadow: 0px 0px 5px 0px var(--shaddow-bg-color);
}
.name{
    font-weight: bold;
    font-size: 1.1em;
    overflow: hidden;
}
.description{
    font-size: 1em;
    overflow: hidden;
    color: var(--second-font-color)
}
</style>