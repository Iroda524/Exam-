// 2. Satrdagi so'zlar sonini hisoblash uchun JavaScript dasturini yozing.
// Eslatma :
// - Bosh va oxirgi joydan bo'sh joyni olib tashlang.
// - 2 yoki undan ortiq bo'shliqni 1 ga aylantiring.
// - Boshlanish oralig'i bilan yangi qatorni chiqarib tashlang.
// ==============================================================================================

const title = document.querySelector('.title'),
      text = document.querySelector('.text');
      
const word = title.innerHTML.match(/(\w+)/g). length;


var i = 1

console.log(i + "-Satrda " + word +" ta so'z bor.")
i++