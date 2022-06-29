def on_button_pressed_a():
    global turn
    turn += 20
    pins.servo_write_pin(AnalogPin.P0, turn)
    if turn > 180:
        turn = 180
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global turn
    turn += -20
    pins.servo_write_pin(AnalogPin.P0, turn)
    if turn < 0:
        turn = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

turn = 0
turn = 0

def on_forever():
    serial.write_value("x", turn)
basic.forever(on_forever)
