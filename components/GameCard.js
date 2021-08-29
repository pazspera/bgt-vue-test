app.component('game-card', {
    template: 
    /* html */
    `<div class="game-card">
        <div class="game-card__header">
            <h3 class="game-card__title">{{ game }}</h3>
            <p class="game-card__date">{{ date }}</p>
        </div>
        <div class="game-card__body">
            <game-card-players :players="players"></game-card-players>
        </div>
    </div>`,
    data(){
        return {
            game: 'Dominion',
            date: '28/08/2021',
            players: [
                { id: 1, player_name: 'Zeuchi', winner: true},
                { id: 2, player_name: 'Marea', winner: false}
            ]
        }
    }
    // Added comment
});