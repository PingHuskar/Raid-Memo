const searchParam = new URLSearchParams(location.search)
for (var shipNum = 1; shipNum <= 4; shipNum++) {
    document.getElementsByClassName('container')[0].innerHTML += `<div class="ship" id="ship${shipNum}" contenteditable oninput="main();" onkeyup="animateShip(this.id)"></div>`
    document.getElementById(`ship${shipNum}`).innerText = atob(searchParam.get(`ship${shipNum}`))
}
TweenMax.staggerFrom('.ship',1,{
    x: screen.width,autoAlpha:0,ease:Linear.easeNone
},0.1)

const animateShip = (shipId) => {
    // console.log(`#${shipId}`)
    TweenMax.fromTo(`#${shipId}`,1,{
        x: 0,ease:Linear.easeNone
    },{
        x: -screen.width*2,ease:Linear.easeNone
    })
    TweenMax.fromTo(`#${shipId}`,1,{
        x: screen.width*2,ease:Linear.easeNone,delay:0.3
    },{
        x: 0,ease:Linear.easeNone,delay:0.3
    })
}

const main = () => {
    const url = new URL(location)
    var sum = []
    for (var shipNum = 1; shipNum <= 4; shipNum++) {
        var shipVal = document.getElementById(`ship${shipNum}`).innerText
        sum.push(parseInt(shipVal) || 0)
        url.searchParams.set(`ship${shipNum}`, btoa(shipVal))
    }
    const cal = sum.join(" + ")
    console.log(`${cal} = ${eval(cal)}`)
    url.searchParams.set(`res`, btoa(eval(cal)))
    history.pushState({}, '', url);
}