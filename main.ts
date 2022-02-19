radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("ultrazvuk cm")
    basic.pause(500)
    basic.showNumber(receivedNumber)
})
WSJoyStick.onKey(KEY.A, function () {
    let náklon = 0
    basic.showNumber(náklon)
    basic.pause(1000)
    basic.showString("")
})
WSJoyStick.JoyStickInit()
radio.setGroup(1)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    if (WSJoyStick.Listen_Key(KEY.P)) {
        radio.sendString("XP")
    } else if (WSJoyStick.Listen_Key(KEY.A)) {
        radio.sendString("XA")
        basic.pause(2000)
    } else if (WSJoyStick.Listen_Key(KEY.B)) {
        radio.sendString("XB")
    } else if (WSJoyStick.Listen_Key(KEY.C)) {
        radio.sendString("XC")
    } else if (WSJoyStick.Listen_Key(KEY.D)) {
        radio.sendString("XD")
    } else if (WSJoyStick.Listen_Key(KEY.E)) {
        radio.sendString("XE")
    } else if (WSJoyStick.Listen_Key(KEY.F)) {
        radio.sendString("XF")
    }
    if (WSJoyStick.Listen_Dir(DIR.NONE)) {
        radio.sendString("NONE")
        basic.pause(100)
    } else if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendString("U")
        basic.pause(500)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendString("D")
        basic.pause(500)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendString("L")
        basic.pause(400)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendString("R")
        basic.pause(400)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        radio.sendString("UL")
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        radio.sendString("UR")
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        radio.sendString("DL")
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        radio.sendString("DR")
    }
})
