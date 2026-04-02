let total = parseFloat(localStorage.getItem('taxi_total')) || 0;
let orders = parseInt(localStorage.getItem('taxi_orders')) || 0;
UpdateDisplay();

function AddToTotal(value) {
    total += value;
    orders++;
    SaveData();
    UpdateDisplay();
}

function AddCustomValue() {
    const input = document.getElementById('customValue');
    const val = parseFloat(input.value);

    if (!isNaN(val)) {
        total += val;
        orders++;
        SaveData();
        UpdateDisplay();
        input.value = '';
    }
}

function SaveData() {
    localStorage.setItem('taxi_total', total);
    localStorage.setItem('taxi_orders', orders);
}

function UpdateDisplay() {
    document.getElementById('totalDisplay').innerText = total;
    document.getElementById('totalOrderDisplay').innerText = orders;
}

function ResetTotal() {
    total = 0;
    orders = 0;
    SaveData();
    UpdateDisplay();
}
