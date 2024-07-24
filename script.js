function calculatePositionSize() {
    let activeCapital = parseFloat(document.getElementById('activeCapital').value);
    let entryPrice = parseFloat(document.getElementById('entryPrice').value);
    let stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    let riskPercentage = parseFloat(document.getElementById('riskPercentage').value);

    if (isNaN(activeCapital) || isNaN(entryPrice) || isNaN(stopLossPrice) || isNaN(riskPercentage)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    let riskPerShare = entryPrice - stopLossPrice;
    let riskAmount = (riskPercentage / 100) * activeCapital;
    let positionSize = riskAmount / riskPerShare;

    document.getElementById('positionSize').innerText = `Position Size: ${positionSize.toFixed(2)} shares`;
    document.getElementById('riskedAmount').innerText = `Risked Amount: ₹${riskAmount.toFixed(2)}`;
}
