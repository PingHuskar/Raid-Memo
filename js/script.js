
for (var shipNum = 1; shipNum <= 4; shipNum++) {
    document.getElementsByClassName('container')[0].innerHTML += `<div class="ship" id="ship${shipNum}" contenteditable onblur="animateShip(this)">${localStorage.getItem("ship"+shipNum) || 0}</div>`
}
TweenMax.staggerFrom('.ship',1,{
    x: screen.width,autoAlpha:0,ease:Linear.easeNone
},0.1)

const animateShip = (ship) => {
    // console.log(`#${shipId}`)
    localStorage.setItem(`${ship.id}`,ship.innerText)
    TweenMax.fromTo(`#${ship.id}`,1,{
        x: 0,ease:Linear.easeNone
    },{
        x: -screen.width*2,ease:Linear.easeNone
    })
    TweenMax.fromTo(`#${ship.id}`,1,{
        x: screen.width*2,ease:Linear.easeNone,delay:0.3
    },{
        x: 0,ease:Linear.easeNone,delay:0.3
    })
}