const nama = prompt("Masukkan nama kamu:");

if (nama !== null && nama.trim() !== "") {
  const nim = prompt("Masukkan NIM kamu:");

  if (nim !== null && nim.trim() !== "") {
    document.getElementById("nama").textContent = nama.trim();
    document.getElementById("nim").textContent = nim.trim();
  } else {
    alert("NIM belum diisi. Silakan muat ulang halaman.");
  }
} else {
  alert("Nama belum diisi. Silakan muat ulang halaman.");
}
