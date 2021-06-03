var Connexion = Vue.component('Connexion', {
    template: `
    
    <div class="template">
    <div id="subscribe">

    <h1 class="pageTitle">Connexion</h1>

    <form action="">

        <div class="form">

            <div id="mail">
                <label for="mail">Adresse Mail</label>
                <br>
                <input class="textField"  type="text" id="mail" name="user_mail">
            </div>

            <div id="password">
                <label for="password">Mot de passe</label>
                <br>
                <input class="textField"  type="text" id="password" name="user_password">
            </div>

            <div class="button">
                <button type="submit">Connexion</button>
            </div>

        </div>

</div>
</div>
    
    `,
    data() {
        return {}
    },
    methods: {}
});