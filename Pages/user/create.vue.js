var createUser = Vue.component('createUser', {
    template: `
<div class="template">
    <div id="subscribe">
    <h1 class="pageTitle">Inscription</h1>
    
    <form id="form" @submit.prevent="submit()">

        <div class="form">
            <div id="name">
                <label for="name">Nom</label>
                <br>
                <input 
                    class="textField"
                    maxlength="32" 
                    type="text" 
                    id="name" 
                    v-model="user.name"
                    name="name" 
                    required>
            </div>

            <div id="surname">
                <label for="surname">Prénom</label>
                <br>
                <input 
                    class="textField" 
                    maxlength="32" 
                    type="text" 
                    id="surname" 
                    v-model="user.surname"
                    name="surname" 
                    required>
            </div>

            <div id="pseudo">
                <label for="pseudo">Pseudo</label>
                <br>
                <input 
                    class="textField" 
                    maxlength="16" 
                    type="text" 
                    id="pseudo" 
                    v-model="user.pseudo"
                    name="pseudo" 
                    required>
            </div>

            <div id="mail">
                <label for="mail">E-mail</label>
                <br>
                <input 
                    class="textField" 
                    maxlength="255" 
                    type="email" 
                    id="mail"
                    v-model="user.mail" 
                    name="mail" 
                    required>
            </div>
        </div>

        <div class="form">
            <div id="password">
                <label for="password">Mot de passe</label>
                <br>
                <input 
                    class="textField" 
                    maxlength="48" 
                    type="password" 
                    id="password"
                    v-model="user.password" 
                    name="password" 
                    required>
            </div>

            <div id="confirm_password">
                <label for="confirm_password">Confirmer le mot de passe</label>
                <br>
                <input 
                    class="textField"
                    maxlength="48" 
                    type="password" 
                    id="confirm_password" 
                    name="confirm_password" 
                    required>
                    <span id="message"></span>
            </div>

            <div class="valid">
                <input class="textField"  type="checkbox" id="valid">
                <label for="valid"><router-link class="router-link" to="/RGPD">Je confirme avoir pris
                        connaissance des conditions générale <br> d'utilisation et des mentions légales</router-link></label>
            </div>

            <div class="button">
                <button type="submit">Créer votre compte</button>
            </div>
        </div>
    </form>
</div>


</div>
    `,
    data() {
        return {
            user:{
                mail:null,
                name:null,
                surname:null,
                pseudo:null,
                password:null,
            }
        }
    },
    mounted() {
    },
    methods: {

        submit:function (){

            // Objet form data pour passage de paramètre
            let params = new FormData();

            params.append("mail", this.user.mail);
            params.append("name", this.user.name);
            params.append("surname", this.user.surname);
            params.append("pseudo", this.user.pseudo);
            params.append("password", this.user.password);

            axios.post(backend.create_user, params)
                .then(response => {

                    console.log("Liste des utilisateurs : ",this.user);
                    this.$router.push('/user')
                })

                .catch(error =>{
                    console.log("Erreur : ", error);
                })

        }


    }
});