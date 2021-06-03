var gameCards = Vue.component('gameCards', {
    template: `
    
    <div class="template">
    <h1 class="pageTitle">Liste des jeux</h1>
        <div class="superGrid">
            <div class="gameCards" v-for="gameCard in listGameCard" v-bind:item="gameCard" :key="gameCard.game_name">
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
        axios.get(backend.gameCards).then((response) => {
            this.listGameCard = response.data;
            console.log("Game Cards", this.listGameCard)
        })
            .catch(function (error){
                console.log(error)
            });
    },
    methods: {

    }
})