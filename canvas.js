let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let img = new Image()
img.src = 'sakura-Photoroom.png'
let c = canvas.getContext('2d')

let allSakura = []

function Circle(x, y, dx, dy, rgb, radius, direction, angle) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.rgb = rgb
    this.radius = radius
    this.direction = direction
    this.angle = angle
    this.draw = () => {
        c.save()
        c.shadowColor = 'pink'
        c.shadowOffsetX = 1
        c.shadowOffsety = 1
        c.shadowBlur=10;
        
        c.translate(this.x + this.radius / 2, this.y + this.radius / 2);
        c.rotate(this.angle);
        c.drawImage(img, -this.radius / 2, -this.radius / 2, this.radius, this.radius);
        c.restore()
    }
    this.update = () => {
        if (this.x - this.radius > innerWidth || this.x - this.radius < 0) {
            let newArray = allSakura.filter((item) => item.x != this.x)
            allSakura = [...newArray]
            getSakura(allSakura.length)
        }
        if (this.y - this.radius > innerHeight) {
            let newArray = allSakura.filter((item) => item.y != this.y)
            allSakura = [...newArray]
            console.log(allSakura);
            getSakura(allSakura.length)
        }
        if (this.direction < 65) {
            this.x = this.x + this.dx
        }
        else if (65 < this.direction < 70) {

        }
        else {
            this.x = this.x - this.dx
        }

        this.y = this.y + this.dy
        this.angle = this.angle + 0.02
        this.draw()
    }
}
function getSakura(i) {
    for (i; i < 25; i++) {
        let radius = Math.random() * (15 - 10) + 10
        let x = Math.random() * innerWidth
        let y = -(Math.random() * innerHeight)
        let dx = 0.9
        let dy = Math.random() * (3 - 1) + 1
        let angle = 0
        let direction = Math.floor(Math.random() * 100)
        let rgb = `rgb(${Math.floor(Math.random() * (255 - 128) + 128)},${Math.floor(Math.random() * (255 - 128) + 128)},${Math.floor(Math.random() * (255 - 128) + 128)})`;
        allSakura.push(new Circle(x, y, dx, dy, rgb, radius, direction, angle))
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
