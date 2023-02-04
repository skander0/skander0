let Couleur = 0
input.onGesture(Gesture.Shake, function () {
    Couleur = randint(0, 10)
    if (Couleur == 1) {
        basic.showLeds(`
            . . # . .
            . # # . #
            . . . # .
            . . . . .
            . # # # .
            `)
    }
    if (true) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # #
            . # . . #
            . # # # .
            `)
    }
    if (Couleur == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (Couleur == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (Couleur == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (Couleur == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
