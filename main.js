var random = Math.floor(Math.random() * 22)
var randomGift = Math.floor(Math.random() * 11)

console.log(Math.random())
var gift = [
    'Lu Bo Tiec Bai Bien',
    'Dieu Thuyen Tiec Bai Bien',
    'Arum Vu Khuc Long Ho',
    'Trieu Van Quy Cong Tu',
    'Capheny Hau Gai',
    'Vanhein Hoang Tu Qua',
    'Nakr Badboy Cong Nghe',
    'Dextra Quy Co Tuoi Dan',
    'Violet Thu Nguyen Ve Than',
    '500 QH',
]
if (random < 10) {
    console.log(gift[randomGift])
} else {
    console.log('Chuc ban may man lan sau')
}
