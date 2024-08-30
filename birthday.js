document.getElementById('accept-button').addEventListener('click', function() {
    showPopup('https://cdn.discordapp.com/attachments/1274930656199311406/1278727509055115274/image0.gif?ex=66d1db4b&is=66d089cb&hm=5b00d717223ea9092e16947ad6e6fe0431f95cd835717404bafb091477b43741&'); // ใส่ลิ้งค์ภาพ GIF สำหรับปุ่ม "รับ" ที่นี่
});

document.getElementById('decline-button').addEventListener('click', function() {
    showPopup('https://cdn.discordapp.com/attachments/1274930656199311406/1278731116424990730/image0.gif?ex=66d1dea7&is=66d08d27&hm=f42babcd160cf67d09969ca44fe749191ba861ff95228aac642398a463c3c7bd&'); // ใส่ลิ้งค์ภาพ GIF สำหรับปุ่ม "ไม่รับ" ที่นี่
});

function showPopup(imageUrl) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    
    popupImg.src = imageUrl;
    popup.style.display = "block";

    // ปิดป็อบอัพเมื่อคลิกปุ่ม "ย้อนกลับ"
    document.querySelector('.close').onclick = function() {
        popup.style.display = "none";
    };

    // ปิดป็อบอัพเมื่อคลิกนอกป็อบอัพ
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    };
}
