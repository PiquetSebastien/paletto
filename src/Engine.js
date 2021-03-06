'use strict';

function FirstPlayex() {
    this.name = "Premier coup dans un coin";
}

var Engine = function () {

// private attributes and methods
    var plateau, nbPions = 36;
    var i, j;
    var joueurActuel = 1, winner;
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

    var setPionsJoueurs = function (player, couleur) {

        if (player === 1) {
            joueur1[couleur] += 1;
        } else {
            joueur2[couleur] += 1;
        }
    };

    var deletePiece = function (coup) {
        var moove = getCoup(coup);
        plateau[moove.l][moove.c] = 0;
    };

    var checkBordTop = function (c) {
        if (c !== 0) {
            return true;
        }
        return false;
    };

    var checkBordBot = function (c) {
        if (c !== 5) {
            return true;
        }
        return false;
    };

    var checkBordRight = function (l) {
        if (l !== 5) {
            return true;
        }
        return false;
    };

    var checkBordLeft = function (l) {
        if (l !== 0) {
            return true;
        }
        return false;
    };

    var checkPlay = function (l, c) {

        var cpt = 0;

        if (checkBordTop(c)) {
            if (plateau[l][c - 1] !== 0) {
                cpt += 1;
            }
        }

        if (checkBordBot(c)) {
            if (plateau[l][c + 1] !== 0) {
                cpt += 1;
            }
        }

        if (checkBordRight(l)) {
            if (plateau[l + 1][c] !== 0) {
                cpt += 1;
            }
        }

        if (checkBordLeft(l)) {
            if (plateau[l - 1][c] !== 0) {
                cpt += 1;
            }
        }

        if (cpt <= 2) {
            return true;
        }
        return false;
    };

    this.checkwinner = function () {
        if (this.getPionsJoueurs(joueurActuel, "Black") === 6 || this.getPionsJoueurs(joueurActuel, "Green") === 6 ||
            this.getPionsJoueurs(joueurActuel, "White") === 6 || this.getPionsJoueurs(joueurActuel, "Blue") === 6 ||
            this.getPionsJoueurs(joueurActuel, "red") === 6 || this.getPionsJoueurs(joueurActuel, "Yellow") === 6) {

            winner = joueurActuel;
        }
        if (nbPions === 0) {
            winner = joueurActuel;
        }
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
            }
            throw new FirstPlayex();
        }
    };

    this.jouerCoup = function (coup) {

        var moove = getCoup(coup);
        if (nbPions === 36) {
            this.verifPremiercoup(moove.l, moove.c);
        }
        nbPions -= 1;
        if (checkPlay(moove.l, moove.c)) {
            var color = this.getValuePos(moove.l, moove.c);
            setPionsJoueurs(joueurActuel, color);
            deletePiece(coup);
            this.checkwinner();
        }
    };

    this.getPionsJoueurs = function (player, couleur) {

        if (player === 1) {
            return joueur1[couleur];
        }
        return joueur2[couleur];
    };

    this.nextPlayer = function () {
        joueurActuel = (joueurActuel === 1) ? 2 : 1;
    };

    this.getwinner = function () {
        return winner;
    };


    createPlateau();

};
