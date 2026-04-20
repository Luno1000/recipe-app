function calc(){
  const base = document.getElementById("base").value;
  const target = document.getElementById("target").value;
  const amount = document.getElementById("amount").value;

  const ratio = target / base;
  const result = amount * ratio;

  document.getElementById("result").textContent =
    result + " g";
}
