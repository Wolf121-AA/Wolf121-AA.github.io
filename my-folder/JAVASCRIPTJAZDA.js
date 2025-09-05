function liczenie() {
      const x = parseFloat(document.getElementById("x").value) || 0;
      const y = parseFloat(document.getElementById("y").value) || 0;
      const z = x + y;
      document.getElementById("wynik").textContent = z;
}




function displayDate() {
  document.getElementById("demo").innerHTML = Date();
  
}
