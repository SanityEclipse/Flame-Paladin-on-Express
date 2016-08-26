Game.Preloader = function(game) {

    this.preloadBar = null
};

Game.Preloader.prototype = {
    preload: function() {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);


        //Loads all assets
        this.load.tilemap('map', 'maps/L1.csv');
        this.load.tilemap('map2', 'maps/L2.csv');
        this.load.tilemap('map3', 'maps/L3.csv');
        this.load.image('tileset', 'maps/MapTemplate.png');

        this.load.image('background1', 'images/background.jpg');
        this.load.image('background2', 'images/background_image_Menu.jpg');
        this.load.image('button', 'images/Hero-front.png');


        this.load.spritesheet('player', 'images/player1.png', 26, 26);
        // this.load.spritesheet('buttons', 'assets/buttons.png', 193, 71);
        this.load.spritesheet('bat', 'images/bat.png', 32, 32, 4);
        this.load.spritesheet('fireball', 'images/fireball.png', 32, 32, 4);
        this.load.spritesheet('zombie', 'images/Fire Zombie Paladin.png', 26, 26, 4);
        this.load.spritesheet('flamewheel', 'images/Flame Wheel.png', 32, 32, 3);
        this.load.spritesheet('wheel', 'images/Flame Wheel1.png', 32, 32, 3);

        this.load.audio('ignite', 'sounds/FireIgnite.mp3');
        this.load.audio('fire', 'sounds/FireLoop2.mp3');
        this.load.audio('scream', 'sounds/Scream+3.mp3');
        this.load.audio('gold', 'sounds/Pickup_Gold_00.mp3');
        this.load.audio('Menu', 'bgmusic/Menu.mp3')
        this.load.audio('L1', 'bgmusic/L1.mp3');
        this.load.audio('L2', 'bgmusic/L2.mp3');
        this.load.audio('L3', 'bgmusic/L3.mp3');

    },

    create: function() {
        this.state.start('MainMenu', true, false);
    }
};
