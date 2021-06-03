var createGameCard = Vue.component('CreateGameCard', {
    template: `

    <div class="template" id="formGameCard">
        <h1 class="pageTitle">Ajoutez un jeu</h1>
        
        <div class="form" id="formGame">
        
            <form id="form" @submit.prevent="submit()">
                <div>
                    <label for="name">Quel est le nom du jeu que vous voulez présentez ?</label>
                    <br>
                    <input 
                        class="textField" 
                        type="text" 
                        placeholder="Uno par exemple..."
                        maxlength="32"
                        v-model="gameCard.game_name"
                        >
                        
                </div>
                <div>
                    <label for="author">Quel est l'auteur du jeu ?</label>
                    <br>
                    <input 
                        name="author"
                        class="textField" 
                        type="text"
                        v-model="gameCard.game_author"
                        >
                        
                </div>
                <div>
                    <label for="editor">Qui est l'éditeur du jeu ?</label>
                    <br>
                    <input 
                        class="textField" 
                        type="text"
                        v-model="gameCard.game_editor"
                        >
                </div>
                <div>
                    <label for="date">Quelle est la date de sortie du jeu ?</label>
                    <br>
                    <input 
                        type="date"
                        v-model="gameCard.game_date"
                        >
                </div>
                <div>
                    <label for="goal">Quel est le but du jeu ?</label>
                    <br>
                    <textarea 
                        name="goal"  
                        class="textField" 
                        placeholder="Dites nous tout !"
                        v-model="gameCard.game_goal"
                        >
                        
                        </textarea>
                </div>
                <div>
                    <label for="">À quelle catégorie appartient ce jeu ?</label>
                    <br>
                    <select 
                        name="categories" 
                        class="textField"
                        v-model="gameCard.category_id"
                        >
                    <option value="">--Choisissez une option--</option>
                    <option value="1">Jeux de cartes</option>
                    <option value="2">Jeux de réflexions</option>
                    <option value="3">Classiques</option>
                    <option value="4">Jeux de plateau</option>
                    <option value="5">Culture générale</option>
                    <option value="6">Jeux éducatifs</option>
                    <option value="7">Jeux de dés</option>
                    <option value="8">Jeux d'adresse</option>
                    <option value="9">Jeux de mémoire</option>
                    <option value="10">Jeux de logique</option>
                    <option value="11">Jeux de bluff</option>
                    <option value="12">Jeux de hasard</option>
                </div>
                <div>
                    <label for="rules">Connaissez vous les règles du jeux ? Pouvez vous nous les décrires ?</label>
                    <br>
                    <textarea name="rules" 
                        v-model="gameCard.game_rules"
                        class="textField"></textarea>
                </div>
                <div>
                    <label for="time">Quelle est la durée moyenne d'une partie ?</label>
                    <br>
                    <input 
                        name="time"
                        type="number" 
                        placeholder="En minutes ;)"
                        v-model="gameCard.game_time"
                        >
                </div>
                <div>
                    <label for="purchase_link">Un bon plan pour le jeux ? Glisser le lien d'achat ici !</label>
                    <br>
                    <input 
                        name="purchase_link"
                        class="textField" 
                        type="text"
                        v-model="gameCard.purchase_link"
                        >
                </div>
                <div class="button">
                <button type="submit">Soumettre</button>
            </div>
            </form>
        </div>
       
    
   </div>`,
    data() {
        return {
            gameCard:{
                category_id: null,
                game_name: null,
                game_author: null,
                game_editor: null,
                game_date: 0,
                game_rules: null,
                game_time: 0,
                game_goal: null,
                game_infos: null,
                purchase_link: null
            }
        }
    },
    methods: {

        submit:function () {

            let params = new FormData();

            params.append("category_id", this.gameCard.category_id);
            params.append("game_name", this.gameCard.game_name);
            params.append("game_author", this.gameCard.game_author);
            params.append("game_editor", this.gameCard.game_editor);
            params.append("game_date", this.gameCard.game_date);
            params.append("game_rules", this.gameCard.game_rules);
            params.append("game_time", this.gameCard.game_time);
            params.append("game_goal", this.gameCard.game_goal);
            params.append("game_infos", this.gameCard.game_infos);
            params.append("purchase_link", this.gameCard.purchase_link);

            axios.post(backend.create_gameCard, params)
                .then(response =>{
                    console.log("Liste des jeux", response);
                    this.$router.push('/');
                })

                .catch(error =>{
                    console.log("Erreur : ", error);
                })
        }


    }
});