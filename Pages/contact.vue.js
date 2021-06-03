var Contact = Vue.component('Contact', {
    template: `
    
<div class="template">
                <h1 class="pageTitle">Contactez-nous</h1>

        <div id="pageInColumn">
            <div id="subscribe">
                
                <form id="contact-form" @submit.prevent="sendEmail">
                

                <div class="form">
                <input type="hidden" name="contact_number">
                <h3>Votre message</h3>
                    <div>
                        <label>Prénom / Nom</label>
                        <br>
                        <input class="textField" type="text" name="from_name">
                    </div>
                    
                    <div>
                        <label>E-mail</label>
                        <br>
                        <input class="textField" type="email" name="email">
                    </div>
                    
                    <div>
                        <label>Message</label>
                        <br>
                        <textarea name="message" id="message" class="textField" placeholder="Max 480 caractères"></textarea>
                    </div>
                    <div class="button">
                        <button type="submit" value="Send">
                        <img src="elements/img/decoration/icon-send.svg" alt="Icône d'envoie">
                        </button>
                    </div>
                    
                    </div>
                   
                </form>
           
            </div>
            
                <div class="team">
                        <div class="card">
                        <h3 class="center" style="margin-top: 2rem">Notre équipe</h3>
                        
                            <div class="teamMate">
                                <p style="padding-left: 2rem">En cas de bug, d'idées d'innovations pour le site ou même des commentaires sur le webdesign, notre équipe est là pour répondre à vos questions</p>
                            </div>
                            
                            <div class="teamMate">
                                <img src="elements/img/decoration/profile.svg" alt="Icône masculin">
                                <p>Nathan Van Bignoot Vincler, 19 ans,<br>Étudiant en DUT MMI à Montbéliard.</p>
                            </div>
                            
                            <div class="teamMate">
                                <img src="elements/img/decoration/profile.svg" alt="Icône masculin">
                                <p>Matéo Rivaud, 19 ans,<br>Étudiant en DUT MMI à Montbéliard.</p>
                            </div>
                            
                            <div class="teamMate">
                                <img src="elements/img/decoration/profile-1.svg" alt="Icône féminin">
                                <p>Élora Perrin, 18 ans,<br>Étudiante en DUT MMI à Montbéliard.</p>
                            </div>
                            
                            
                            </div>
                            
                        </div>
                    
            </div>
    </div>
</div>
    
    `,
    data() {

        return {

        }
    },
    methods: {
        sendEmail: (e) => {
            emailjs.sendForm('service_l0f0dur', 'template_wg3cziv', e.target, 'user_YBH8eaO9gC7pCO7FvCEJ3')
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                    console.log('FAILED...', error);
                });
        }
    }
});