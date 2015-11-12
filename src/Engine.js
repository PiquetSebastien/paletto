'use strict';

var Engine = function () {

// private attributes and methods
    var plateau;
    var i, j;

    var initPlateau = function () {

        plateau[0][0] = plateau[2][4] = plateau[3][1] = plateau[4][3] = plateau[5][2] = plateau[5][5] = "Black";
        plateau[0][1] = plateau[1][2] = plateau[3][3] = plateau[4][1] = plateau[4][5] = plateau[5][4] = "Green";
        plateau[0][2] = plateau[0][5] = plateau[1][1] = plateau[2][3] = plateau[3][5] = plateau[4][0] = "White";
        plateau[0][3] = plateau[1][5] = plateau[2][0] = plateau[2][2] = plateau[3][4] = plateau[5][1] = "Blue";
        plateau[0][4] = plateau[1][3] = plateau[2][5] = plateau[3][0] = plateau[3][2] = plateau[5][3] = "Red";
        plateau[1][0] = plateau[1][4] = plateau[2][1] = plateau[4][2] = plateau[4][4] = plateau[5][0] = "Yellow";

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

    createPlateau();
};
