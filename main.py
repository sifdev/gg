def doSomething():
    basic.show_icon(IconNames.HEART)
def doSomethin():
    basic.show_icon(IconNames.YES)

def on_forever():
    if input.button_is_pressed(Button.B):
        doSomething()
    elif input.button_is_pressed(Button.A):
        doSomethin()
basic.forever(on_forever)
