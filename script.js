function calculateAge() {
    const name = document.getElementById('dogName').value;
    const birth = document.getElementById('birthDate').value;

    if (!birth) {
        alert('請輸入狗狗的生日！');
        return;
    }

    const birthDate = new Date(birth);
    const today = new Date();

    let dogAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        dogAge--;
    }

    let humanAge = 0;
    if (dogAge === 1) humanAge = 15;
    else if (dogAge === 2) humanAge = 24;
    else if (dogAge > 2) humanAge = 24 + (dogAge - 2) * 5;

    document.getElementById('resultText').innerText =
        `${name ? name + '的' : ''}狗齡：${dogAge} 歲\n相當於人類的約 ${humanAge} 歲 🐶`;

    document.getElementById('resultModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}
