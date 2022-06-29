radio.onReceivedValue(function (name, value) {
    pins.servoWritePin(AnalogPin.P0, value)
    serial.writeValue("x", value)
    if (value > 26 && value < 50) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (value > 50 && value < 76) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
    }
    if (value > 76 && value < 102) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (value > 102 && value < 128) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (value > 128 && value < 154) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
    if (value < 26) {
        led.toggle(0, 2)
        led.toggle(0, 1)
        led.toggle(0, 2)
    }
    if (value > 154) {
        led.toggle(4, 2)
        led.toggle(4, 1)
        led.toggle(4, 2)
    }
})
radio.setGroup(42)
basic.forever(function () {
	
})
