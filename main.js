// Thay đổi nội dung búc thư ở đây
var letterContent =" Hehehe lại là tôi hay làm trò cho em xem đây thấy tôi thế nào có cte kh hả😏 vô chủ đề chính là anh có vài lời muốn nói với em là Em chính là cô gái tuyệt vời nhất mà anh được gặp, em đã làm cho anh cảm thấy mình đã được chữa lành. Anh cảm ơn em, cảm ơn vì đã cho anh cơ hội được bên em cảm ơn vì chúng ta đã yêu nhau, cảm ơn vì chúng ta đã vì thương mà ở lại sau bao nhiêu khó khăn và thử thách. Anh muốn chúc cho cả 2 chúng ta đều được hạnh phúc bên nhau đều được vui vẻ và kh còn buồn hay suy nghĩ gì nữa chúc cho cả 2 chúng ta mãi bên nhau. Anh cũng mong cho chúng ta kh phải vì những cảm giác nhất thời mà rời xa nhau,sau cùng anh chỉ muốn nói là anh yeuuu emmmmm>< hihi  💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})// FUNCTION MỚI: Chỉ áp dụng style khi là màn hình điện thoại
function applyMobileStyle() {
    // Kiểm tra chiều rộng màn hình (nếu nhỏ hơn hoặc bằng 600px là điện thoại)
    if (window.innerWidth <= 600) { 
        var letterContent = document.querySelector(".letterContent");
        
        // **Giảm kích thước chữ trong thiệp trực tiếp bằng JS**
        // Đặt font-size nhỏ hơn (16px) và line-height
        letterContent.style.fontSize = "16px"; 
        letterContent.style.lineHeight = "1.5";
    }
}

// Gọi hàm này khi trang đã tải xong
applyMobileStyle(); 
// Gọi hàm này sau khi mở thiệp (để chắc chắn style được áp dụng)
document.addEventListener("DOMContentLoaded", applyMobileStyle); 

} final fix chữ to trong thiệp bằng JS 
