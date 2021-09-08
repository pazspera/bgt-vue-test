app.component('game-card-players', {
    props: {
        players: {
            type: Array,
            required: true
        }
    },
    template: 
    /* html */
    `
    <ul>
        <li v-for="player in players" class="game-card__players">{{ player.player_name }} <img v-if="player.winner" src="img/crown-solid.svg" class="winner-img"></li>
    </ul>`,
});