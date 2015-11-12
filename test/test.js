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
};