let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let img = new Image()
img.src = 'sakura-Photoroom.png'
let c = canvas.getContext('2d')

let allSakura = []

function Circle(x, y, dx, dy, rgb, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.rgb = rgb
    this.radius = radius
    this.draw = () => {

        c.drawImage(img, this.x, this.y, this.radius, this.radius);

    }
    this.update = () => {
        if (this.x - this.radius > innerWidth) {
            let newArray = allSakura.filter((item) => item.x != this.x)
            allSakura = [...newArray]
            console.log(allSakura);
            getSakura(allSakura.length)
        }
        if (this.y - this.radius > innerHeight) {
            let newArray = allSakura.filter((item) => item.y != this.y)
            allSakura = [...newArray]
            console.log(allSakura);
            getSakura(allSakura.length)
        }
        this.x = this.x + this.dx
        this.y = this.y + this.dy
        this.draw()
    }
}
function getSakura(i) {
    for (i; i < 50; i++) {
        let radius = Math.random() * 20
        let x = Math.random() * innerWidth
        let y = -(Math.random() * innerHeight)
        let dx = 0.39
        let dy = 1
        let rgb = `rgb(${Math.floor(Math.random() * (255 - 128) + 128)},${Math.floor(Math.random() * (255 - 128) + 128)},${Math.floor(Math.random() * (255 - 128) + 128)})`;
        allSakura.push(new Circle(x, y, dx, dy, rgb, radius))
    }
}
getSakura(0)

function animate() {
    requestAnimationFrame(animate)

    c.clearRect(0, 0, canvas.width, canvas.height)
    allSakura.forEach((item, i) => {
        item.update()
    })
}
animate()
