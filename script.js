
function calculateChange(orderAmount, paidAmount) {
    const denominations = [5000, 2000, 1000, 500, 200, 100, 50, 10, 5, 2, 1];
    let change = paidAmount - orderAmount;
    let changeDenominations = {};

    denominations.forEach(denomination => {
        const count = Math.floor(change / denomination);
        if (count > 0) {
            changeDenominations[denomination] = count;
            change -= count * denomination;
        }
    });

    return changeDenominations;
}

    function calculate() {
    const orderAmount = parseInt(document.getElementById('orderAmount').value);
    const paidAmount = parseInt(document.getElementById('paidAmount').value);
    const changeDenominations = calculateChange(orderAmount, paidAmount);
    let changeHtml = '';

    for (const denomination in changeDenominations) {
        changeHtml += `${denomination} руб: ${changeDenominations[denomination]}шт., `;
    }

        if (changeHtml === '') {
            changeHtml = 'Введите сумму равную или больше суммы заказа';
          } else {
            changeHtml = ' ' + changeHtml.slice(0, -2);
          }
      
          document.getElementById('change').innerHTML = changeHtml;
        }
