function calculateDER() {
    var debt = parseFloat(document.getElementById('debt').value);
    var equity = parseFloat(document.getElementById('equity').value);
  
    if (isNaN(debt) || isNaN(equity)) {
      document.getElementById('result').innerHTML = 'Mohon masukkan angka yang valid.';
    } else {
      var der = debt / equity;
      document.getElementById('result').innerHTML = 'DER: ' + der.toFixed(2);
    }
  }
  
  function calculateEPS() {
    var netIncome = parseFloat(document.getElementById('net-income').value);
    var shares = parseFloat(document.getElementById('shares').value);
  
    if (isNaN(netIncome) || isNaN(shares)) {
      document.getElementById('result').innerHTML = 'Mohon masukkan angka yang valid.';
    } else {
      var eps = netIncome / shares;
      document.getElementById('result').innerHTML = 'EPS: ' + eps.toFixed(2);
    }
  }
  
  