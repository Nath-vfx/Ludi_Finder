var Accueil = Vue.component('Accueil', {
    template: `
    
    <div class="accueil">
       <main>
            <section>
                <div id="search">
                    <H1>"Chercher, <span>trouver,</span><span> jouer !</span>"</H1>
                    <h3>Plateforme destinée aux jeux de société avec un système de fiches
                        de jeux, amusez-vous bien !</h3>
                    <div>
                        <input id="finder" type="text" placeholder="Rechercher...">
                    </div>
                </div>
            </section>
       </main>
    
        <section id="decouvrir">
            <div id="caroussel-container">
                <h2>Découvrir</h2>
                <button class="slide-caroussel gauche">
                    <img src="elements/img/SVG/Bouton%20Slide%201-1.svg" alt="Bouton">
                </button>
                <ul class="caroussel">
                    <li class="caroussel-card">
                        <div>
                            <div class="img-container">
                                <img src="#" alt="#">
                            </div>
                            <h4 class="gameName">Dixit</h4>
                        </div>
                    </li>
                    <li class="caroussel-card">
                        <div>
                            <div class="img-container">
                                <img src="#" alt="#">
                            </div>
                            <h4 class="gameName">Dixit</h4>
                        </div>
                    </li>
                    <li class="caroussel-card">
                        <div>
                            <div class="img-container">
                                <img src="#" alt="#">
                            </div>
                            <h4 class="gameName">Dixit</h4>
                        </div>
                    </li>
                    <li class="caroussel-card">
                        <div>
                            <div class="img-container">
                                <img src="#" alt="#">
                            </div>
                            <h4 class="gameName">Dixit</h4>
                        </div>
                    </li>
                </ul>
                <button class="slide-caroussel droite">
                    <img src="elements/img/SVG/Bouton%20Slide%201-2.svg" alt="Bouton">
                </button>
            </div>
        
        </section>

        <section class="presentation">
            <div id="ajoutJeu">
                <div>
                    <h1>Ajouter un jeu</h1>
                    <p>
                        Un formulaire est à votre disposition sur le site. Remplissez un maximum de champs pour nous aider à
                        retrouver votre jeu et pour que la fiche de jeu ait votre touche. Et voilà ! Vous avez contribué au
                        catalogue et à la base de données de Ludi’Finder. <br>
                        Si c’est votre première contribution, votre profil ne sera jamais plus comme avant !
                    </p>
                    <button>Créer une fiche de jeu</button>
                </div>
                <img src="elements/img/decoration/ajouter-un-jeu.png" alt="Ajouter un jeu">
            </div>
        
          
        
            <h2>Catégories</h2>
            <div id="category">
        
                <div class="lineOne">
                    <ul>
                        <li class="cardCategory" v-for="category in categories_line1" :key="category.category_id">         
                        <a href="#">{{category.category_name}}</a>
                        <div class="category-icon" v-html="category.category_icon"></div>
                        </li>
                    </ul>
                    <ul>
                        <li class="cardCategory" v-for="category in categories_line2" :key="category.category_id">
                        <a href="#">{{category.category_name}}</a>
                        <div class="category-icon" v-html="category.category_icon"></div>
                        </li>
                    </ul>
                </div>
        
            </div>
        
        </section>
        <section id="previewForum">
            <img id="blueShape" src="elements/img/backgounds/blue-shape.svg" alt="Forme bleu">
            <img id="imgForum" src="elements/img/SVG/imgForum.svg" alt="Présentation du forum">
            <div>
                <h1>Les forums</h1>
                <p>Ludi’Finder est fier de vous offrir un système de forum complet ! Grâce à ces forums vous pourrez échanger
                    avec les autres membres inscrits sur le site. Parlez des jeux que vous aimez, demandez des conseils et
                    conseillez les autres membres en retour afin qu’eux aussi trouvent leur nouveau jeu préféré.
        
                </p>
                <button>Accéder au forum</button>
            </div>
        </section>
        <section id="developpez-la-communaute">
            <h2>Développez la communauté !</h2>
            <img src="elements/img/SVG/happyness.svg" alt="Personnes heureuses">
            <button>Rejoignez nous !</button>
        </section>

    </div>
    
    `,
    data() {
        return {
            categories_line1: null,
            categories_line2: null,
        }
    },
    mounted (){
        axios.get(backend.gameCategories).then((response) => {
            this.categories_line1 = response.data.filter((category, index, self) => index < Math.ceil(self.length / 2));
            this.categories_line2 = response.data.filter((category, index, self) => index >= Math.ceil(self.length / 2));
        });
    },
    methods: {}
});