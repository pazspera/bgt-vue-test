const app = Vue.createApp({
    data(){
        return {
            name: 'Board Game Tracker',
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
                        { id: 1, player_name: 'Zeuchi', winner: true },
                        { id: 2, player_name: 'Marea', winner: false}
                    ]
                }
            ],
            /* card_title: 'Dominion',
            card_date: '28/08/2021',
            card_players: [
                { id: 1, player_name: 'Zeuchi', winner: true },
                { id: 2, player_name: 'Marea', winner: false}
            ] */
            methods: {
                loopArray(array){
                    for(element of array){
                        return element.player_name;
                    }
                }
            }
        }
    }
});
