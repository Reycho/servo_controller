def on_received_value(name, value):
    led.toggle(0, 0)
    pins.servo_write_pin(AnalogPin.P0, value)
    serial.write_value("x", value)
radio.on_received_value(on_received_value)

radio.set_group(42)

def on_forever():
    pass
basic.forever(on_forever)

