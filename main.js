function compute_discount() {
     value = document.getElementById('value').value;
    let discount = value * 0.20;
     document.getElementById('output').textContent = 'Your estimated discount is ' + discount;
}
