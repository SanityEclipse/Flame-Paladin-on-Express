var Game = {};
Game.Boot = function(game) {};
Game.Boot.prototype = {
    init: function() {
        this.input.maxpointers = 1;
        this.stage.disableVisibityChange = true;
    },

    preload: function() {
        this.load.image('preloaderBar', 'images/part21.png')
    },
    create: function() {
        this.state.start('Preloader')

    }
}
