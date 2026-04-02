let total = 0;
let countOrder = 0;

function AddToTotal(value) {
    total += value;
    countOrder++;
    UpdateDisplay();
}

function AddCustomValue() {
    const input = document.getElementById('customValue');
    const val = parseFloat(input.value);

    if (!isNaN(val)) {
        total += val;
        countOrder++;
        UpdateDisplay();
        input.value = '';
    }
}

function UpdateDisplay() {
    document.getElementById('totalDisplay').innerText = total;
    document.getElementById('totalOrderDisplay').innerText = countOrder;
}

function ResetTotal(){
    total = 0;
    countOrder = 0;
    UpdateDisplay();
}
