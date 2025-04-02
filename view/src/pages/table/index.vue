<template>
    <div class="page-title"> 💡 The Table 💡 </div>
    <div>
        <div class="title">Half baked ideas that would be fun to discuss</div>
        <div class="items">
            <div v-for="item in items" class="item">{{item}}</div>
        </div>
        <!-- Location by Place -->
            <!-- Albany -->
        <!-- Items     -->
        <!-- Dev Tools -->
        <!-- Movies    -->
        <!-- Nice to haves -->
            <!-- Cheaper High quality food -->
            <!-- Cheaper high quality prepared food -->
            <!-- Knowledge and ease of participation in local politics -->
            <!-- Knowledge navigate different cities and do taxes, and manage wealth -->
    </div>
</template>
<script>
export default{
    data(){
        return {
            items : [
                "Socialized food", "Simple Engineering" , "Midnight Cafe", 
                "Proactive Nostalgia", "Socialized Insurance", "Local politics"   
            ]
        }
    }
}
</script>
<style scoped>
.title{
    font-size: 16px;
    padding: 18px 10px 10px 10px;
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: .3px;
}
.items{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    letter-spacing: .3px;
    padding: 10px;
    text-align: center;
}
.item{
    padding: 5px;
    text-transform: capitalize;
}
</style>