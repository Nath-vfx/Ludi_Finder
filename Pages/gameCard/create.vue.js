var createGameCard = Vue.component('CreateGameCard', {
    template: `

    <div class="template" id="formGameCard">
        <h1 class="pageTitle">Ajoutez un jeu</h1>
        
        <div class="form" id="formGame">
        
            <form action="">
                <div>
                    <label for="">Quel est le nom du jeu que vous voulez présentez ?</label>
                    <br>
                    <input class="textField" type="text" placeholder="Uno par exemple...">
                </div>
                <div>
                    <label for="">Quel est l'auteur du jeu ?</label>
                    <br>
                    <input class="textField" type="text">
                </div>
                <div>
                    <label for="">Qui est l'éditeur du jeu ?</label>
                    <br>
                    <input class="textField" type="text">
                </div>
                <div>
                    <label for="">Quelle est la date de sortie du jeu ?</label>
                    <br>
                    <input type="date">
                </div>
                <div>
                    <label for="">Quel est le but du jeu ?</label>
                    <br>
                    <textarea name="" id="" class="textField" placeholder="Dites nous tout !"></textarea>
                </div>
                <div>
                    <label for="">À quelle catégorie appartient ce jeu ?</label>
                    <br>
                    <select name="categories" class="textField">
                    <option value="">--Choisissez une option--</option>
                    <option value="">Jeux de cartes</option>
                    <option value="">Jeux de réflexions</option>
                    <option value="">Classiques</option>
                    <option value="">Jeux de plateau</option>
                    <option value="">Culture générale</option>
                    <option value="">Jeux éducatifs</option>
                    <option value="">Jeux de dés</option>
                    <option value="">Jeux d'adresse</option>
                    <option value="">Jeux de mémoire</option>
                    <option value="">Jeux de logique</option>
                    <option value="">Jeux de bluff</option>
                    <option value="">Jeux de hasard</option>
                </div>
                <div>
                    <label for="">Connaissez vous les règles du jeux ? Pouvez vous nous les décrires ?</label>
                    <br>
                    <textarea name="" id="" class="textField"></textarea>
                </div>
                <div>
                    <label for="">Quelle est la durée moyenne d'une partie ?</label>
                    <br>
                    <input type="number" placeholder="En minutes ;)">
                </div>
                <div>
                    <label for="">Un bon plan pour le jeux ? Glisser le lien d'achat ici !</label>
                    <br>
                    <input class="textField" type="text">
                </div>
                <div class="button">
                <button type="submit">Soumettre</button>
            </div>
            </form>
        </div>
       
    
   </div>`,
    data() {
        return {}
    },
    methods: {}
});