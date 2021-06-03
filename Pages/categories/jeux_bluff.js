var jeux_bluff = Vue.component('jeux_bluff', {
    template: `
    
    <div class="template">
    <h1 class="pageTitle">Jeux de bluff</h1>
        <div class="superGrid">
            <div v-for="gameCard in listGameCard" v-bind:item="gameCard" :key="gameCard.game_name" class="gameCards">
                <a href="" >{{gameCard.game_name}}</a>
                <div>
                    <img v-bind:src="gameCard.game_img" alt="">
                </div>
                
            </div>
            
        </div>
    
    
</div>
    
    `,
    data() {
        return {
            listGameCard: []
        }
    },
    mounted() {
        axios.get(backend.getJeuxBluff).then((response) => {
            this.listGameCard = response.data;
            console.log("Game Cards", this.listGameCard)
        })
            .catch(function (error){
                console.log(error)
            });
    },
    methods: {}
})