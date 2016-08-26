Game.MainMenu = function(game) {};


var text20;
var text21;
var text22;
var text23;
var text24;
var button;
var background;

Game.MainMenu.prototype = {

    create: function(game) {




        text20 = game.add.text(game.world.centerX - 45, game.world.centerY - 35, "PLAY", {
            font: "35px Arial",
            fill: "#ff0044",
            align: "center"
        });


        text21 = game.add.text(game.world.centerX, game.world.centerY - 125, "The Last Flame Templar", {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text21.anchor.setTo(0.5, 0.5);
        text22 = game.add.text(game.world.centerX, game.world.centerY + 175, "By Thomas Rizzo", {
            font: "15px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text22.anchor.setTo(0.5, 0.5);
        text23 = game.add.text(game.world.centerX, game.world.centerY + 75, "A,W,D = Move", {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text23.anchor.setTo(0.5, 0.5);
        text24 = game.add.text(game.world.centerX, game.world.centerY + 110, "Space Bar = Pyromancy", {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text24.anchor.setTo(0.5, 0.5);

        game.stage.backgroundColor = "#000000";
        backgroundMusic = game.add.audio('Menu');
        backgroundMusic.loop = true;
        backgroundMusic.play();



        game.add.sprite(200, 170, 'fireball');
        game.add.sprite(310, 170, 'fireball');
        // game.add.sprite(255, 95, 'fireball');
        // game.add.sprite(255, 225, 'fireball');








    },

    update: function(game) {

        if (game.input.activePointer.isDown) {
            backgroundMusic.mute = true;
            this.state.start('Level1');
        }
    },


};
