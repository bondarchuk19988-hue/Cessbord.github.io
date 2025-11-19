let CHEES = () => {
    let q = Math.floor(Math.random() * 8) + 1
    return q
}
let kolvopawn = 4
let zapischisla = 0
let kolvohodov = 0
let xpawn
let ypawn
let text = ""
let x1 = CHEES()
let y1 = CHEES()
let SigKon = false
let matKonMove = []
let matpawn = []
let pawncounter = 4

let pawn = () => {
    for (; kolvopawn > zapischisla;) {
        xpawn = CHEES()
        ypawn = CHEES()
        if (x1 == xpawn || y1 == ypawn) {
            xpawn = CHEES()
            ypawn = CHEES()
        }
        if (!(matpawn.some(a => a[0] == xpawn && a[1] == ypawn))) {
            matpawn.push([xpawn, ypawn])
            zapischisla++
        }
    }
}

let canGo = () => {
    text = ""
    matKonMove = []
    if ((x1 + 2 <= 8 && x1 + 2 >= 1) && (y1 - 1 >= 1 && y1 - 1 <= 8)) {
        text += '<p>' + "может ходить в право и вверх" + '</p>'
        matKonMove.push([x1 + 2, y1 - 1])
    } else {
        text += '<p>' + "НЕ может ходить в право и вверх" + '</p>'
    }

    if ((x1 + 2 <= 8 && x1 + 2 >= 1) && (y1 + 1 >= 1 && y1 + 1 <= 8)) {
        text += '<p>' + "может ходить в право и вниз" + '</p>'
        matKonMove.push([x1 + 2, y1 + 1])
    } else {
        text += '<p>' + "НЕ может ходить в право и вниз" + '</p>'
    }

    if ((x1 - 2 <= 8 && x1 - 2 >= 1) && (y1 - 1 >= 1 && y1 - 1 <= 8)) {
        text += '<p>' + "может ходить в лево  и вверх" + '</p>'
        matKonMove.push([x1 - 2, y1 - 1])
    } else {
        text += '<p>' + "НЕ может ходить в лево  и вверх" + '</p>'
    }

    if ((x1 - 2 <= 8 && x1 - 2 >= 1) && (y1 + 1 >= 1 && y1 + 1 <= 8)) {
        text += '<p>' + "может ходить в лево  и вниз" + '</p>'
        matKonMove.push([x1 - 2, y1 + 1])
    } else {
        text += '<p>' + "НЕ может ходить в лево  и вниз" + '</p>'
    }

    if ((x1 + 1 <= 8 && x1 + 1 >= 1) && (y1 - 2 >= 1 && y1 - 2 <= 8)) {
        text += '<p>' + "может ходить в вверх  и право" + '</p>'
        matKonMove.push([x1 + 1, y1 - 2])
    } else {
        text += '<p>' + "НЕ может ходить в вверх  и право" + '</p>'
    }

    if ((x1 - 1 <= 8 && x1 - 1 >= 1) && (y1 - 2 >= 1 && y1 - 2 <= 8)) {
        text += '<p>' + "может ходить в вверх  и лево" + '</p>'
        matKonMove.push([x1 - 1, y1 - 2])
    } else {
        text += '<p>' + "НЕ может ходить в вверх  и лево" + '</p>'
    }

    if ((x1 + 1 <= 8 && x1 + 1 >= 1) && (y1 + 2 >= 1 && y1 + 2 <= 8)) {
        text += '<p>' + "может ходить в вниз  и право" + '</p>'
        matKonMove.push([x1 + 1, y1 + 2])
    } else {
        text += '<p>' + "НЕ может ходить в вниз  и право" + '</p>'
    }

    if ((x1 - 1 <= 8 && x1 - 1 >= 1) && (y1 + 2 >= 1 && y1 + 2 <= 8)) {
        text += '<p>' + "может ходить в вниз  и лево" + '</p>'
        matKonMove.push([x1 - 1, y1 + 2])
    } else {
        text += '<p>' + "НЕ может ходить в вниз  и лево" + '</p>'
    }

    return text
}
let konMove = (newX, newY) => {
    x1 = newX
    y1 = newY
    SigKon = false
    matpawn = matpawn.filter(a => !(a[0] == newX && a[1] == newY))
    kolvohodov++
    bord()
}

let bord = () => {
    document.body.innerHTML = '';
    canGo()
    pawn()
    for (let i = 1; i <= 8; i++) {
        let cotndiv = document.createElement('div')
        cotndiv.style.display = 'flex'
        for (let j = 1; j <= 8; j++) {
            let div = document.createElement("div")
            div.style.height = "30px"
            div.style.width = "30px"
            div.setAttribute('date-id', j + '' + i)

            let isMK = SigKon && matKonMove.some(move => move[0] === j && move[1] === i);

            if (y1 == i && x1 == j) {
                let kon = document.createElement('div')
                kon.style.height = "30px"
                kon.style.width = "30px"
                kon.innerHTML = "<img src='Chess_nlt45.svg.png' style='max-width: 30px; max-height: 30px; display: block; margin: 0 auto;'> "
                if ((i + j) % 2 == 0) {
                    kon.style.backgroundColor = 'wheat'
                } else if ((i + j) % 2 == 1) {
                    kon.style.backgroundColor = 'black'
                }
                kon.onclick = function () {
                    SigKon = true
                    bord()
                }
                cotndiv.appendChild(kon)
            } else if (isMK) {
                if (matpawn.some(a => a[0] == j && a[1] == i)) {
                    div.innerHTML = "<img src='4390010-200.png' style='max-width: 30px; max-height: 30px; display: block; margin: -5px auto; margin-top: 3px;'> "
                    div.style.backgroundColor = 'lightgreen'
                    div.onclick = function () {
                        kolvopawn--
                        konMove(j, i);
                    }
                } else {
                    div.style.backgroundColor = 'lightgreen'
                    div.onclick = function () {
                        konMove(j, i);
                    }
                }
                cotndiv.appendChild(div)
            } else if ((i + j) % 2 == 0) {
                if (matpawn.some(a => a[0] == j && a[1] == i)) {
                    div.innerHTML = "<img src='4390010-200.png' style='max-width: 30px; max-height: 30px; display: block; margin: -5px auto; margin-top: 3px;'> "
                    div.style.backgroundColor = 'wheat'
                    cotndiv.appendChild(div)
                }
                else {
                    div.style.backgroundColor = 'wheat'
                    cotndiv.appendChild(div)
                }
            }
            else if ((i + j) % 2 == 1) {
                if (matpawn.some(a => a[0] == j && a[1] == i)) {
                    div.innerHTML = "<img src='4390010-200.png' style='max-width: 30px; max-height: 30px; display: block; margin: 0 auto; margin-top: 3px;'> "
                    div.style.backgroundColor = 'black'
                    cotndiv.appendChild(div)
                }
                else {
                    div.style.backgroundColor = 'black'
                    cotndiv.appendChild(div)
                }

            }
        }

        document.body.appendChild(cotndiv)
    }
    if (kolvopawn == 0) {
        document.body.innerHTML = '';
        document.writeln("Поздровляем вы победили за ", kolvohodov," ходов")
    }
}
bord()

// document.write(x1+":"+y1)
// document.write("<br></br>")
// document.write(canGo())
