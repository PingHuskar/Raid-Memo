const searchParam = new URLSearchParams(location.search)
for (var shipNum = 1; shipNum <= 4; shipNum++) {
    document.getElementsByClassName('container')[0].innerHTML += `<div class="ship" id="ship${shipNum}" contenteditable oninput="main();" onkeyup="animateShip(this.id)"></div>`
    document.getElementById(`ship${shipNum}`).innerText = searchParam.get(`ship${shipNum}`)
}
TweenMax.staggerFrom('.ship',1,{
    x: 2500,autoAlpha:0,ease:Linear.easeNone
},0.1)

const animateShip = (shipId) => {
    console.log(`#${shipId}`)
    TweenMax.fromTo(`#${shipId}`,1,{
        x: 0,ease:Linear.easeNone
    },{
        x: -1500,ease:Linear.easeNone
    })
    TweenMax.fromTo(`#${shipId}`,1,{
        x: 1500,ease:Linear.easeNone,delay:1.5
    },{
        x: 0,ease:Linear.easeNone,delay:1.5
    })
}

const main = () => {
    const url = new URL(location)
    var sum = []
    for (var shipNum = 1; shipNum <= 4; shipNum++) {
        var shipVal = document.getElementById(`ship${shipNum}`).innerText
        sum.push(parseInt(shipVal) || 0)
        url.searchParams.set(`ship${shipNum}`, shipVal)
    }
    const cal = sum.join(" + ")
    console.log(`${cal} = ${eval(cal)}`)
    url.searchParams.set(`res`, eval(cal))
    history.pushState({}, '', url);
}