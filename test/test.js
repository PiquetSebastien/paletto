'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {

    var e = new Engine();
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            assertTrue(e.getValuePos(i, j) !== undefined);
        }
    }
    assertTrue(e.verifJuxtaposition());
};

PalettoTestCase.prototype.testStory2 = function () {

    var e = new Engine();
    assertTrue(e.verifPremiercoup(0,5));
    assertTrue(e.getValuePos(0,5) === "Yellow");
};


PalettoTestCase.prototype.testStory3 = function () {

    var e = new Engine();
    e.jouerCoup("A6");
    assertTrue(e.getNbPions() === 35);
    assertTrue(e.getPionsJoueurs(1,"Yellow") === 1);
    assertTrue(e.getValuePos(0,5) === 0);
};

PalettoTestCase.prototype.testStory6 = function () {

    var e = new Engine();
    e.jouerCoup("A1");e.jouerCoup("F6");e.nextPlayer();
    e.jouerCoup("B1");e.jouerCoup("E6");e.jouerCoup("F5");e.nextPlayer();
    e.jouerCoup("A2");e.jouerCoup("A6");e.nextPlayer();
    e.jouerCoup("A3");e.nextPlayer();
    e.jouerCoup("A5");e.jouerCoup("F4");e.jouerCoup("F1");e.jouerCoup("C1");e.nextPlayer();
    e.jouerCoup("E1");e.jouerCoup("F3");e.jouerCoup("D6");e.jouerCoup("A4");e.nextPlayer();
    e.jouerCoup("F2");e.jouerCoup("B6");e.nextPlayer();
    e.jouerCoup("E5");e.jouerCoup("E2");e.nextPlayer();
    e.jouerCoup("C6");e.jouerCoup("D5");e.jouerCoup("E3");e.nextPlayer();
    e.jouerCoup("B5");e.nextPlayer();
    e.jouerCoup("B4");e.nextPlayer();
    assertTrue(e.getwinner() === 1);
};