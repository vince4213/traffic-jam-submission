info.onLifeZero(function () {
    game.over(false, effects.melt)
    music.wawawawaa.play()
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    pause(500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    pause(500)
})
let Skateboard = sprites.create(img`
    .............5555555.........
    .............5555555.........
    .............55555d5.........
    .............555dddd.........
    .............deddded.........
    .............ddddddd.........
    .............d3ddd3d.........
    ........888888d333d888888....
    .......88888888ddd88888888...
    ......8888.88888d88888.8888..
    .....8888..88888888888..8888.
    ....8888...88888888888...8888
    ....8888...88888888888...8888
    ....8888...88888888888...8888
    ....8888...88888888888...8888
    ....8888...88888888888...8888
    ....8888...88888888888...8888
    .....dd....88888888888....dd.
    .....dd....88888888888....dd.
    ....dddd...88888888888...dddd
    ....dddddd.eeeeeeeeeee.dddddd
    ....dddd..eeeeeeeeeeee...dddd
    .........eeeeee..eeeeee......
    .........eeeee....eeeee......
    .........eeeee....eeeee......
    .........eeee......eeee......
    .........eeee......eeee......
    .........eeee......eeee......
    .........eeee......eeee......
    .........eeee......eeee......
    .........eeee......eeee......
    .........eeee......eeee......
    .........eeee......eeee......
    .........eeee......eeee......
    .........eeee......eeee......
    ........ffffff....ffffff.....
    ...22222222222222222222222222
    ......2222222222222222222222.
    .......e11e..........e11e....
    ........ee............ee.....
    `, SpriteKind.Player)
Skateboard.setPosition(16, 60)
controller.moveSprite(Skateboard, 0, 100)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.vehicle.roadHorizontal], TileScale.Sixteen))
info.setLife(3)
info.setScore(0)
Skateboard.setFlag(SpriteFlag.StayInScreen, true)
let Car1 = sprites.create(img`
    . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . . . . . 2 9 9 9 9 2 9 9 9 9 2 . . . . 
    . . . . . 2 9 9 9 9 9 2 9 9 9 9 9 2 . . . 
    . . . . 2 9 9 9 9 9 9 2 9 9 9 9 9 9 2 . . 
    . . . . 2 9 9 9 9 9 9 2 9 9 9 9 9 9 2 . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    5 2 2 f f f 2 2 2 2 2 2 2 2 2 f f f 2 2 5 
    e e e f e f e e e e e e e e e f e f e e e 
    . . . f f f . . . . . . . . . f f f . . . 
    `, SpriteKind.Enemy)
let Car2 = sprites.create(img`
    . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . . . . . 8 9 9 9 9 8 9 9 9 9 8 . . . . 
    . . . . . 8 9 9 9 9 9 8 9 9 9 9 9 8 . . . 
    . . . . 8 9 9 9 9 9 9 8 9 9 9 9 9 9 8 . . 
    . . . . 8 9 9 9 9 9 9 8 9 9 9 9 9 9 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 8 8 f f f 8 8 8 8 8 8 8 8 8 f f f 8 8 5 
    e e e f e f e e e e e e e e e f e f e e e 
    . . . f f f . . . . . . . . . f f f . . . 
    `, SpriteKind.Enemy)
let Car3 = sprites.create(img`
    . . . . . . . a a a a a a a a a . . . . . 
    . . . . . . a 9 9 9 9 a 9 9 9 9 a . . . . 
    . . . . . a 9 9 9 9 9 a 9 9 9 9 9 a . . . 
    . . . . a 9 9 9 9 9 9 a 9 9 9 9 9 9 a . . 
    . . . . a 9 9 9 9 9 9 a 9 9 9 9 9 9 a . . 
    . . . . a a a a a a a a a a a a a a a . . 
    . a a a a a a a a a a a a a a a a a a a . 
    a a a a a a a a a a a a a a a a a a a a a 
    5 a a f f f a a a a a a a a a f f f a a 5 
    e e e f e f e e e e e e e e e f e f e e e 
    . . . f f f . . . . . . . . . f f f . . . 
    `, SpriteKind.Enemy)
let Cherry = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    . . . . 7 . . . . . . . . . . . 
    . . . . 7 7 . . . . . . . . . . 
    . . . . 7 7 . . . . . . . . . . 
    . . . . 7 7 . . . . . . . . . . 
    . . . . 7 7 . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    2 2 2 2 2 . 2 2 2 2 2 . . . . . 
    2 1 2 2 2 . 2 1 2 2 2 . . . . . 
    2 2 1 2 2 . 2 2 1 2 2 . . . . . 
    2 2 2 2 2 . 2 2 2 2 2 . . . . . 
    2 2 2 2 2 . 2 2 2 2 2 . . . . . 
    2 2 2 2 2 . 2 2 2 2 2 . . . . . 
    `, SpriteKind.Food)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(10)
})
forever(function () {
    Car1.setPosition(160, randint(0, 120))
    Car1.setVelocity(-75, 0)
    pause(2000)
})
forever(function () {
    Car2.setPosition(160, randint(0, 120))
    Car2.setVelocity(-75, 0)
    pause(2000)
})
forever(function () {
    Cherry.setPosition(160, randint(0, 120))
    Cherry.setVelocity(-100, 0)
    pause(2000)
})
forever(function () {
    Car3.setPosition(160, randint(0, 120))
    Car3.setVelocity(-75, 0)
    pause(2000)
})
