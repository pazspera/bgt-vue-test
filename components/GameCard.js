app.component('game-card', {
    template: 
    /* html */
    `<div class="game-card" v-for="game_card in game_cards">
        <div class="game-card__header">
            <h3 class="game-card__title">{{ game_card.game }}</h3>
            <p class="game-card__date">{{ game_card.date }}</p>
        </div>
        <div class="game-card__body">
            <game-card-players :players="players"></game-card-players>
        </div>
    </div>`,
    data(){
        return {
            game_cards: [
                {
                    id: 1,
                    game: 'Dominion',
                    date: '28/08/2021',
                    players: [
                        { id: 1, player_name: 'Zeuchi', winner: true },
                        { id: 2, player_name: 'Marea', winner: false}
                    ]
                },
                {
                    id: 2,
                    game: 'Star Realms',
                    date: '15/07/2021',
                    players: [
                        { id: 1, player_name: 'Zeuchi', winner: false },
                        { id: 2, player_name: 'Marea', winner: true}
                    ]
                }
            ],
            /* card_title: 'Dominion',
            card_date: '28/08/2021',
            card_players: [
                { id: 1, player_name: 'Zeuchi', winner: true },
                { id: 2, player_name: 'Marea', winner: false}
            ] */
        }
    }
});