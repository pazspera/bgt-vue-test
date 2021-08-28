const app = Vue.createApp({
    data(){
        return {
            name: 'Board Game Tracker',
            /* game_cards: [
                {
                    id: 1,
                    card_title: 'Dominion',
                    card_date: '28/08/2021'
                },
                {
                    id: 2,
                    card_title: 'Star Realms',
                    card_date: '15/07/2021',
                }
            ], */
            card_title: 'Dominion',
            card_date: '28/08/2021',
            card_players: [
                { id: 1, player_name: 'Zeuchi', winner: true },
                { id: 2, player_name: 'Marea', winner: false}
            ]
        }
    }
});
