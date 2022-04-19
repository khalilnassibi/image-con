def on_button_pressed_a():
    global Score
    Score = Score - 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Score
    Score = Score + 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global ScoreSet
    ScoreSet = 1
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

index2 = 0
G = 0
E = 0
p = 0
Score = 0
ScoreSet = 0
J = 0
I = 0
Players: List[str] = []
max2 = 0
WinnerIndex = 0
list2: List[number] = []
def ReturnWinner(list3: List[any]):
    global max2, WinnerIndex
    max2 = 0
    WinnerIndex = 0
    index = 0
    while index <= len(list3) - 1:
        if list3[index] > max2:
            value = 0
            max2 = value
            WinnerIndex = index
        index += 1
    basic.show_string("max")
    basic.show_number(max2)
    basic.show_string("win in")
    basic.show_number(WinnerIndex)
    basic.show_string("" + Players[WinnerIndex])
Players = ["Anne", "jane", "Mark", "Sam", "Danny"]
Scores = [0, 0, 0, 0, 0]
Ap1 = images.icon_image(IconNames.GIRAFFE)
Ap2 = images.icon_image(IconNames.DUCK)
Ap3 = images.icon_image(IconNames.BUTTERFLY)
Ap4 = images.icon_image(IconNames.COW)
Animalpicks = [Ap1, Ap2, Ap3, Ap4]
Ep2 = images.icon_image(IconNames.MEH)
Ep3 = images.icon_image(IconNames.HAPPY)
Ep4 = images.icon_image(IconNames.SAD)
Ep5 = images.icon_image(IconNames.ANGRY)
EmotionPicks = [Ep2, Ep3, Ep4, Ep5]
EmotPickBool = [0, 1, 1, 1, 1]
Gp1 = images.icon_image(IconNames.DIAMOND)
Gp3 = images.icon_image(IconNames.SQUARE)
Gp4 = images.icon_image(IconNames.LEFT_TRIANGLE)
Gp5 = images.icon_image(IconNames.TRIANGLE)
GeometricPicks = [Gp1, Gp3, Gp4, Gp5]
GeoPickBool = [1, 0, 1, 1, 1]
basic.show_string("Animal")
basic.pause(1000)
while I < len(Players) and J < len(Animalpicks):
    ScoreSet = 0
    Score = 0
    basic.show_string("" + (Players[I]))
    Animalpicks[J].show_image(0)
    basic.pause(2000)
    basic.show_number(Score)
    while ScoreSet == 0:
        basic.show_number(Score)
        Scores[I] = Score
    I = I + 1
    J = J + 1
ReturnWinner(Scores)
basic.pause(1000)
basic.show_string("Emotions")
basic.pause(1000)
while p < len(Players) and E < len(EmotionPicks):
    ScoreSet = 0
    Score = 0
    if EmotPickBool[p] != 0:
        basic.show_string("" + (Players[p]))
        EmotionPicks[E].show_image(0)
        basic.pause(2000)
        basic.show_number(Score)
        while ScoreSet == 0:
            basic.show_number(Score)
        Scores[p] = Score + Scores[p]
        p = p + 1
        E = E + 1
    else:
        p = p + 1
basic.pause(1000)
basic.show_string("Geometric")
basic.pause(1000)
p = 0
while p < len(Players) and G < len(GeometricPicks):
    ScoreSet = 0
    Score = 0
    if GeoPickBool[p] != 0:
        basic.show_string("" + (Players[p]))
        GeometricPicks[G].show_image(0)
        basic.pause(2000)
        basic.show_number(Score)
        while ScoreSet == 0:
            basic.show_number(Score)
        Scores[p] = Score + Scores[p]
        p = p + 1
        G = G + 1
    else:
        p = p + 1
basic.pause(1000)
basic.show_string("End of contest")
while index2 <= len(Scores) - 1:
    basic.show_number(Scores[index2])
    index2 += 1
ReturnWinner(Scores)

def on_forever():
    pass
basic.forever(on_forever)
