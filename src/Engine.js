'use strict';

function FirstPlayex() {
    this.name = "Premier coup dans un coin";
}

var Engine = function () {

// private attributes and methods
    var plateau;
    var i, j;

    var initPlateau = function () {

        plateau[0][0] = plateau[4][2] = plateau[1][3] = plateau[3][4] = plateau[2][5] = plateau[5][5] = "Black";
        plateau[1][0] = plateau[2][1] = plateau[3][3] = plateau[1][4] = plateau[5][4] = plateau[4][5] = "Green";
        plateau[2][0] = plateau[5][0] = plateau[1][1] = plateau[3][2] = plateau[5][3] = plateau[0][4] = "White";
        plateau[3][0] = plateau[5][1] = plateau[0][2] = plateau[2][2] = plateau[4][3] = plateau[1][5] = "Blue";
        plateau[4][0] = plateau[3][1] = plateau[5][2] = plateau[0][3] = plateau[2][3] = plateau[3][5] = "Red";
        plateau[0][1] = plateau[4][1] = plateau[1][2] = plateau[2][4] = plateau[4][4] = plateau[0][5] = "Yellow";

    };

    var createPlateau = function () {

        plateau = new Array(6);
        for (i = 0; i < 6; i++) {
            plateau[i] = new Array(6);
        }
        initPlateau();
    };

// public methods

    this.getValuePos = function (i, j) {

        return plateau[i][j];
    };

    this.verifJuxtaposition = function () {

        for (i = 0; i < 5; i++) {
            for (j = 0; j < 5; j++) {
                if (plateau[i][j] === plateau[i + 1][j] || plateau[i][j] === plateau[i][j + 1]) {
                    return false;
                }
            }
        }
        return true;
    };

    this.jouerCoup = function (i, j) {

        if (i === 0 && j === 0 || i === 0 && j === 5 || i === 5 && j === 0 || i === 5 && j === 5){
            return true;
        } else { throw new FirstPlayex(); }
    };
    createPlateau();
};
