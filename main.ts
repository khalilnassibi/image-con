input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Score = Score - 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    Score = Score + 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    
    ScoreSet = 1
})
let index2 = 0
let G = 0
let E = 0
let p = 0
let Score = 0
let ScoreSet = 0
let J = 0
let I = 0
let Players : string[] = []
let max2 = 0
let WinnerIndex = 0
let list2 : number[] = []
function ReturnWinner(list3: any[]) {
    let value: number;
    
    max2 = 0
    WinnerIndex = 0
    let index = 0
    while (index <= list3.length - 1) {
        if (list3[index] > max2) {
            value = 0
            max2 = value
            WinnerIndex = index
        }
        
        index += 1
    }
    basic.showString("max")
    basic.showNumber(max2)
    basic.showString("win in")
    basic.showNumber(WinnerIndex)
    basic.showString("" + Players[WinnerIndex])
}

Players = ["Anne", "jane", "Mark", "Sam", "Danny"]
let Scores = [0, 0, 0, 0, 0]
let Ap1 = images.iconImage(IconNames.Giraffe)
let Ap2 = images.iconImage(IconNames.Duck)
let Ap3 = images.iconImage(IconNames.Butterfly)
let Ap4 = images.iconImage(IconNames.Cow)
let Animalpicks = [Ap1, Ap2, Ap3, Ap4]
let Ep2 = images.iconImage(IconNames.Meh)
let Ep3 = images.iconImage(IconNames.Happy)
let Ep4 = images.iconImage(IconNames.Sad)
let Ep5 = images.iconImage(IconNames.Angry)
let EmotionPicks = [Ep2, Ep3, Ep4, Ep5]
let EmotPickBool = [0, 1, 1, 1, 1]
let Gp1 = images.iconImage(IconNames.Diamond)
let Gp3 = images.iconImage(IconNames.Square)
let Gp4 = images.iconImage(IconNames.LeftTriangle)
let Gp5 = images.iconImage(IconNames.Triangle)
let GeometricPicks = [Gp1, Gp3, Gp4, Gp5]
let GeoPickBool = [1, 0, 1, 1, 1]
basic.showString("Animal")
basic.pause(1000)
while (I < Players.length && J < Animalpicks.length) {
    ScoreSet = 0
    Score = 0
    basic.showString("" + Players[I])
    Animalpicks[J].showImage(0)
    basic.pause(2000)
    basic.showNumber(Score)
    while (ScoreSet == 0) {
        basic.showNumber(Score)
        Scores[I] = Score
    }
    I = I + 1
    J = J + 1
}
ReturnWinner(Scores)
basic.pause(1000)
basic.showString("Emotions")
basic.pause(1000)
while (p < Players.length && E < EmotionPicks.length) {
    ScoreSet = 0
    Score = 0
    if (EmotPickBool[p] != 0) {
        basic.showString("" + Players[p])
        EmotionPicks[E].showImage(0)
        basic.pause(2000)
        basic.showNumber(Score)
        while (ScoreSet == 0) {
            basic.showNumber(Score)
        }
        Scores[p] = Score + Scores[p]
        p = p + 1
        E = E + 1
    } else {
        p = p + 1
    }
    
}
basic.pause(1000)
basic.showString("Geometric")
basic.pause(1000)
p = 0
while (p < Players.length && G < GeometricPicks.length) {
    ScoreSet = 0
    Score = 0
    if (GeoPickBool[p] != 0) {
        basic.showString("" + Players[p])
        GeometricPicks[G].showImage(0)
        basic.pause(2000)
        basic.showNumber(Score)
        while (ScoreSet == 0) {
            basic.showNumber(Score)
        }
        Scores[p] = Score + Scores[p]
        p = p + 1
        G = G + 1
    } else {
        p = p + 1
    }
    
}
basic.pause(1000)
basic.showString("End of contest")
while (index2 <= Scores.length - 1) {
    basic.showNumber(Scores[index2])
    index2 += 1
}
ReturnWinner(Scores)
basic.forever(function on_forever() {
    
})
