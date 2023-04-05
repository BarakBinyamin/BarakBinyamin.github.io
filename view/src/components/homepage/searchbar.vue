<template>
    <input @blur="handleBlur" @focus="handleFocus" id="searchbar" v-model="searchValue" 
            @keyup="event=>handleKeyPress(event)"
            type="text" 
            class="searchbar"
            placeholder="Search anything..."
            autocomplete="off"
    />
    <div class="shortcut">/</div>
</template>

<script>
export default{
    props: ['results'],
    emits: ['update:results'],
    data(){
        return {
            eventListener : "",
            searchValue: "",
            results: []
        }
    },
    mounted(){
        const storedValue = localStorage.getItem("searchbar")
        this.searchValue  = storedValue ? storedValue : ""
        this.addListener()
        this.fuseSearch()
    },
    methods:{
        fuseSearch(){
            const results = this.$fuse.value.search(this.searchValue || " ")
            this.set(results)
        },
        set(results){
            this.results = results
            this.$emit("update:results", results)
            localStorage.setItem("searchbar", this.searchValue)
        },
        handleKeyPress(event){
            if (event.key === "Enter"){
                window.searchbar.blur()
            }
            if (this.searchValue.length==0){
                window.searchbar.blur()
            }
            this.fuseSearch()
        },
        handleWindowKey(event){
            window.searchbar.focus()
            if (/^[A-z0-9#]$/.test(event.key)){
                this.searchValue += event.key
            }else if (event.key === "Backspace"){
                this.searchValue = this.searchValue.slice(0,-1)
            }
            this.fuseSearch()
        },
        handleBlur(event){
            this.addListener()
        },
        handleFocus(){
            window.removeEventListener("keyup", this.handleWindowKey, {once:true, capture: true})
        },
        addListener(){
            window.addEventListener("keyup", this.handleWindowKey, {once:true, capture: true})
        }
    }
}
</script>

<style scoped>
.searchbar{
    background   : inherit;
    border       : none;
    border-bottom: 1px solid var(--second-font-color);
    color        : var(--main-font-color);
    height       : 2em;
    padding      : 10px;
    width        : 225px;
    font-size    : 1em;

    /* border-radius: 5px; */
    border-radius: 0px;
}
.searchbar:hover{
    border-bottom: 1px solid var(--main-font-color);
}
.shortcut{
    background   : var(--third-bg-color);
    top          : 0px;
    right        : 0px;
    max-width    : fit-content;
    padding      : 0px 8px 0px 8px;
    margin-top   : -30px;
    margin-left  : 195px;
    border-radius: 5px;
    font-size    : 1em;
    font-weight  : bold;
    opacity      : 0.5;
}

/* Remove keyboard hint on mobile */
@media (any-pointer: coarse)  {
    .shortcut{
        display: none;
    }
    .searchbar{
        font-size: 1em;
        padding  : 5px;
        width    : 250px;
    } 
}
.searchbar:focus{
    border-bottom: 1px solid var(--main-font-color);
    outline      : none;
}
</style>