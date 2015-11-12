'use strict';

function FirstPlayex() {
    this.name = "Premier coup dans un coin";
}

var Engine = function () {

// private attributes and methods
    var plateau, nbPions = 36;
    var i, j;
    var joueurActuel = 1;
    var firstcoup = true;
    var joueur1 = {"Black": 0, "Green": 0, "White": 0, "Blue": 0, "Red": 0, "Yellow": 0 };
    var joueur2 = {"Black": 0, "Green": 0, "White": 0, "Blue": 0, "Red": 0, "Yellow": 0 };

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

    var getCoup = function (coup) {
        var colonne = coup.charCodeAt(1) - "1".charCodeAt(0);
        var ligne = coup.charCodeAt(0) - "A".charCodeAt(0);
        return {"l": ligne, "c": colonne};
    };

    var setPionsJoueurs = function(player, couleur) {

        if (player === 1) {
            joueur1[couleur] += 1;
        } else {
            joueur2[couleur] += 1;
        }
    };

    var deletePiece = function (i, j) {


    };

// public methods

    this.getNbPions = function () {

        return nbPions;
    };

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

    this.verifPremiercoup = function (i, j) {

        if (firstcoup) {
            if ((i === 0 && j === 0) || (i === 0 && j === 5) || (i === 5 && j === 0) || (i === 5 && j === 5)) {
                firstcoup = false;
                return true;
            } else {
                throw new FirstPlayex();
            }
        }
    };

    this.jouerCoup = function (coup) {


        //besoin d'ajouter verPremierCoup
        var moove = getCoup(coup);
        nbPions -= 1;
        var color = this.getValuePos(moove.l, moove.c);
        setPionsJoueurs(joueurActuel, color);
        plateau[moove.l][moove.c] = 0;
    };

    this.getPionsJoueurs = function (player, couleur){

        if (player === 1) {
            return joueur1[couleur];
        }
    };
    createPlateau();
};
