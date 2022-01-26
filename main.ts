function doSomething () {
    basic.showIcon(IconNames.Heart)
}
function doSomethin () {
    basic.showIcon(IconNames.Yes)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        doSomething()
    } else if (input.buttonIsPressed(Button.A)) {
        doSomethin()
    }
})
