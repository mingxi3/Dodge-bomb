input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let sprite: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
basic.forever(function () {
    sprite = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (sprite.isTouching(player)) {
        game.gameOver()
    } else {
        game.addScore(1)
    }
    sprite.delete()
    basic.pause(500)
})
