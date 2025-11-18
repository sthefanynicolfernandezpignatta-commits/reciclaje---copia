radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showString("METALES")
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    }
})
radio.setGroup(2)
