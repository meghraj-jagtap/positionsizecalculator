let previousActiveCapital = null;

function calculatePositionSize() {
    let activeCapital = parseFloat(document.getElementById('activeCapital').value);
    let entryPrice = parseFloat(document.getElementById('entryPrice').value);
    let stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    let riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
    let riskRewardRatio = parseFloat(document.getElementById('riskRewardRatio').value);

    if (isNaN(activeCapital) || isNaN(entryPrice) || isNaN(stopLossPrice) || isNaN(riskPercentage) || isNaN(riskRewardRatio) ||
        activeCapital <= 0 || entryPrice <= 0 || stopLossPrice <= 0 || riskPercentage <= 0 || riskRewardRatio <= 0) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    if (previousActiveCapital === null) {
        previousActiveCapital = activeCapital;
    }

    let riskPerShare = entryPrice - stopLossPrice;
    let riskAmount = (riskPercentage / 100) * previousActiveCapital;
    let positionSize = riskAmount / riskPerShare;
    let takeProfitPrice = entryPrice + (riskPerShare * riskRewardRatio);

    document.getElementById('positionSize').innerText = `${positionSize.toFixed(2)} shares`;
    document.getElementById('riskedAmount').innerText = `₹${riskAmount.toFixed(2)}`;
    document.getElementById('takeProfit').innerText = `₹${takeProfitPrice.toFixed(2)}`;

    previousActiveCapital = activeCapital;
}

function resetValues() {
    document.getElementById('activeCapital').value = '';
    document.getElementById('entryPrice').value = '';
    document.getElementById('stopLossPrice').value = '';
    document.getElementById('riskPercentage').value = '';
    document.getElementById('riskRewardRatio').value = '';
    document.getElementById('positionSize').innerText = '-';
    document.getElementById('riskedAmount').innerText = '-';
    document.getElementById('takeProfit').innerText = '-';
    previousActiveCapital = null;
}
