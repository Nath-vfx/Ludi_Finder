var pageIntrouvable = Vue.component('pageIntrouvable', {
    template: `
    <div class="template">
        
            <h1 class="pageTitle">Erreur 404</h1>
            <div id="pageIntrouvable">
                
                    <div>
                        <h1>Oups...</h1>
                            <p>Cette page est introuvable...</p>
                            <p>Type : ERREUR 404</p>
                                <router-link :to="{name: 'Accueil'}">
                                    <button>Revenir à l'accueil</button>
                                </router-link>
                    </div>
                    <div>
                    <img src="elements/img/decoration/page404.svg" alt="Oups...">
                    
                    </div>
                
            
        </div>
            
    </div>
    
    
    
    `,
    data() {
        return {}
    },
    methods: {

    }
})