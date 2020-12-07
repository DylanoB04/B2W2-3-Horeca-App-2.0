const PRICE = {FRIS:1.20, BIER:2.30, WIJN:4.10, BITTERBALLEN1:2.30, BITTERBALLEN2:3.50};
var order, quantity, bitterbal = true;
var orderQty = {qtyFris:0, qtyBier:0, qtyWijn:0, qtyBitterballen8:0, qtyBitterballen16:0};
var stop = false;

function customerOrder() {
    while(!stop) {
        order = prompt("Geef een bestelling op, fris, bier, wijn of snack.");
        order = order.toLowerCase();
        if(order === 'stop') {
            alert("Je bent gestopt.");
            stop = true;
            receipt();
        } else if(order == 'snack') {
            bitterballen();
        } else if(order !== 'fris' && order !== 'bier' && order !== 'wijn' && order !== 'snack') {
            alert("Ongeldige bestelling, kies uit: fris, bier, wijn of bitterballen.");
            order = false;
        } else {
            customerQuantity();
        } 
    }
}

function bitterballen() {
    var bitterbal = true;
    while(!stop) {
        bitterbal = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
        bitterbal = Number(bitterbal);
        if(bitterbal == Number(8)) {
            orderQty['qtyBitterballen8'] = Number(orderQty['qtyBitterballen8']);
            orderQty['qtyBitterballen8'] = prompt("Hoeveel bitterbalschalen van " + bitterbal + " stuks wilt u bestellen?");
            alert("Je hebt " + orderQty['qtyBitterballen8'] + " bitterbalschalen van " + bitterbal + " bitterballen besteld.");
            customerOrder();
        } else if(bitterbal == Number(16)) {
            orderQty['qtyBitterballen16'] = Number(orderQty['qtyBitterballen16']);
            orderQty['qtyBitterballen16'] = prompt("Hoeveel bitterbalschalen van " + bitterbal + " stuks wilt u bestellen?");
            alert("Je hebt " + orderQty['qtyBitterballen16'] + " bitterbalschalen van " + bitterbal + " bitterballen besteld.");
            customerOrder();
        } else {
            alert("U kunt alleen een keuze maken tussen 8 en 16, de snacks zijn niet toegevoegd aan de bestelling.");
            bitterbal = false; 
        }
    }
} 

function customerQuantity() {
    quantity = true;
    while(!stop) {
        quantity = prompt("Hoeveel " + order + " wilt u bestellen?");
        quantity = quantity.toLowerCase();
        if(quantity === 'stop') {
            alert("Je bent gestopt.");
            stop = true;
            receipt();
        } else if(!quantity.match(/^\d+$/)) {
            alert("Incorrect number.");
            quantity = false;
        } else {
            quantity = Number(quantity);
            if(order == 'fris') {
                orderQty['qtyFris'] = orderQty['qtyFris'] + quantity;
            } else if(order == 'bier') {
                orderQty['qtyBier'] = orderQty['qtyBier'] + quantity;
            } else if (order == 'wijn') {
                orderQty['qtyWijn'] = orderQty['qtyWijn'] + quantity;
            }
            alert("Je hebt " + quantity + "x " + order + " besteld.");
            break;
        } 
    }
}

function receipt() {
    document.write("Hier is uw bon <br>");
    var totalPriceFris = Math.round((orderQty['qtyFris'] * PRICE['FRIS']) * 100) / 100;
    var totalPriceBier = Math.round((orderQty['qtyBier'] * PRICE['BIER']) * 100) / 100;
    var totalPriceWijn = Math.round((orderQty['qtyWijn'] * PRICE['WIJN']) * 100) / 100;
    var totalPriceBitterballen8 = Math.round((orderQty['qtyBitterballen8'] * PRICE['BITTERBALLEN1']) * 100) / 100;
    var totalPriceBitterballen16 = Math.round((orderQty['qtyBitterballen16'] * PRICE['BITTERBALLEN2']) * 100) / 100;

    document.write("fris " + orderQty['qtyFris'] + " x " + PRICE['FRIS'] + " = " + totalPriceFris + "<br>");
    document.write("bier " + orderQty['qtyBier'] + " x " + PRICE['BIER'] + " = " + totalPriceBier + "<br>");
    document.write("wijn " + orderQty['qtyWijn'] + " x " + PRICE['WIJN'] + " = " + totalPriceWijn + "<br>");
    document.write("bitterbalschaal 8 bitterballen " + orderQty['qtyBitterballen8'] + " x " + PRICE['BITTERBALLEN1'] + " = " + totalPriceBitterballen8 + "<br>");
    document.write("bitterbalschaal 16 bitterballen " + orderQty['qtyBitterballen16'] + " x " + PRICE['BITTERBALLEN2'] + " = " + totalPriceBitterballen16 + "<br>");

    document.write("totaal = " + (totalPriceFris + totalPriceBier + totalPriceWijn + totalPriceBitterballen8 + totalPriceBitterballen16));
    }

customerOrder();