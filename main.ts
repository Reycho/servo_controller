radio.onReceivedValue(function (name, value) {
    led.toggle(0, 0)
    pins.servoWritePin(AnalogPin.P0, value)
    serial.writeValue("x", value)
})
radio.setGroup(42)
