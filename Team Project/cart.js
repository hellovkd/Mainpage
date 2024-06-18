document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const number = params.get('number');
    const flavor = params.get('flavor');

    const pricePerUnit = 1900;
    let totalPrice;

    if (number >= 20) {
        totalPrice = pricePerUnit * number * 0.97;
    } else if (number >= 15) {
        totalPrice = pricePerUnit * number * 0.97;
    } else if (number >= 10) {
        totalPrice = pricePerUnit * number * 0.97;
    } else if (number >= 5) {
        totalPrice = pricePerUnit * number * 0.97;
    } else {
        totalPrice = pricePerUnit * number;
    }

    const totalPriceFormatted = `${totalPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`;
    
    const flavorText = flavor === 'none' ? '선택 안함' : flavor;

    document.getElementById('cart-details').innerHTML = `
        <strong>갯수:</strong> ${number}개<br>
        <strong>맛:</strong> ${flavorText}<br>
        <strong>총 금액:</strong> ${totalPriceFormatted}
    `;
});
