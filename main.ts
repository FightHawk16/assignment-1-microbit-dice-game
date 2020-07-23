let number = 0
let Die1 = 0
let Die2 = 0
let play_time = 0
let point = 0
input.onButtonPressed(Button.A, function () {
    number = randint(0, 2)
    Die1 = randint(1, 6)
    Die2 = randint(1, 6)
    basic.showString("H" + number)
    if (number == 0) {
        if (Die1 == Die2) {
            play_time += 1
            point += 1
            game.setScore(1)
            basic.showString("Dies Same!" + game.score())
        } else if (Die1 > Die2) {
            play_time += 1
            point += 3
            game.setScore(3)
            basic.showString("S1 great S2!" + game.score())
        } else if (Die1 < Die2) {
            play_time += 1
            point += 0
            game.setScore(0)
            basic.showString("S1 less S2!" + game.score())
        }
    } else if (number == 1) {
        if (Die1 == Die2) {
            play_time += 1
            point += 1
            game.setScore(1)
            basic.showString("Dies Same!" + game.score())
        } else if (Die1 > Die2) {
            play_time += 1
            point += 0
            game.setScore(0)
            basic.showString("S1 great S2!" + game.score())
        } else if (Die1 < Die2) {
            play_time += 1
            point += 3
            game.setScore(3)
            basic.showString("S1 less S2!" + game.score())
        }
    } else if (number == 2) {
        if (Die1 == Die2) {
            play_time += 1
            point += 2
            game.setScore(2)
            basic.showString("Dies Same!" + game.score())
        } else if (Die1 > Die2) {
            play_time += 1
            point += 1
            game.setScore(1)
            basic.showString("S1 great S2!" + game.score())
        } else if (Die1 < Die2) {
            play_time += 1
            point += 1
            game.setScore(1)
            basic.showString("S1 less S2!" + game.score())
        }
    }
    if (game.score() >= 2) {
        basic.showString("you can go next round or press B to end the game")
    }
    if (game.score() < 2) {
        basic.showString("Game over" + "Score" + game.score())
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    basic.showString("Game over" + "score" + point + "play" + play_time + "time")
    basic.clearScreen()
})
