document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const validName = 'เค้ก'; // ใส่ชื่อเจ้าของวันเกิดที่ต้องการตรงนี้

    if (name === validName) {
        window.location.href = 'birthday.html';
    } else {
        alert('ใส่ชื่อเล่นตัวเองสิ!!');
    }
});
