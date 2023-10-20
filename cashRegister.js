function checkCashRegister(price, cash, cid) {
    const Change = { status: "", change: [] };

    const values = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    const cidInCents = cid.map((item) => [item[0], Math.round(item[1] / values.find(v => v[0] === item[0])[1])]);
    const totalCid = cidInCents.reduce((total, item) => total + item[1], 0);
    let changeNeeded = cash - price;


    if (totalCid * 100 < changeNeeded * 100) {
        Change.status = "INSUFFICIENT_FUNDS";
        return Change;
    }

    if (totalCid === changeNeeded * 100) {
        Change.status = "CLOSED";
        Change.change = cid; // Return the exact cash-in-drawer
        return Change;
    }

    for (let i = values.length - 1; i >= 0; i--) {
        const [coinName, coinValue] = values[i];
        const availableCoins = cidInCents[i][1];
        let coinsToReturn = Math.min(
            Math.floor(changeNeeded / coinValue),
            availableCoins
        );
        const coinAmount = coinsToReturn * coinValue;

        if (coinsToReturn > 0) {
            Change.change.push([coinName, coinAmount]);
            changeNeeded -= coinAmount;
            changeNeeded = Math.round(changeNeeded * 100) / 100;
        }
    }

    if (changeNeeded === 0) {
        Change.status = "OPEN";
    } else {
        Change.status = "INSUFFICIENT_FUNDS";
        Change.change = [];
    }

    return Change;
}

// Example usage:
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])