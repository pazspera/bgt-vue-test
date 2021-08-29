app.component('game-card-players', {
    props: {
        players: {
            type: Object,
            required: true
        }
    },
    template: 
    /* html */
    `
    <ul>
        <li v-for="player in players">{{ player.player_name }}</li>
    </ul>`,
});