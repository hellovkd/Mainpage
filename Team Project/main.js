function addToCart() {
    var number = document.getElementById('number').value;
    var flavor = document.getElementById('flavor').value;
    var priceText = document.getElementById('total-price').textContent; // 텍스트 콘텐츠 가져오기
    var price = parseInt(priceText.replace(/[^\d]/g, '')); // 텍스트에서 숫자만 추출하여 가격으로 변환

    // 장바구니에 추가하는 로직 추가하기 (예: localStorage에 저장)
    localStorage.setItem('selectedNumber', number);
    localStorage.setItem('selectedFlavor', flavor);
    localStorage.setItem('selectedPrice', price);

    console.log('장바구니에 추가됨 - 갯수:', number, '맛:', flavor, '가격:', price);
    alert('장바구니에 상품이 추가되었습니다.');
}


function updatePrice_sizer() {
    // 갯수 선택 옵션 가져오기
    var number = parseInt(document.getElementById('number').value);
    var price = 1900; // 기본 가격

    if (number === 5) {
        price = 9215; 
    } else if (number === 10) {
        price = 18430; 
    } else if (number === 15) {
        price = 27645; 
    } else if (number === 20) {
        price = 36860; 
    }

    document.getElementById('total-price').textContent = price.toLocaleString() + '원';
}

document.addEventListener('DOMContentLoaded', function() {
    var snackNumber = localStorage.getItem('selectedNumber');
    var snackFlavor = localStorage.getItem('selectedFlavor');
    var snackPrice = localStorage.getItem('selectedPrice');

    if (snackNumber && snackFlavor && snackPrice) {
        var formattedPrice = parseInt(snackPrice).toLocaleString(); // 가격을 세 자리마다 쉼표(,)로 구분하여 포맷
        document.getElementById('cart-details-1').innerHTML = `
            <strong>갯수:</strong> ${snackNumber}개<br>
            <strong>맛:</strong> ${snackFlavor}<br>
            <strong>가격:</strong> ${formattedPrice}원`;
    }
});