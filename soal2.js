
$(document).ready(function () {

    // Tombol Ungu
    $("#tombolUngu").click(function () {
        $("#kotakWarna").css("background-color", "#7c3aed");
    });

    // Tombol Biru
    $("#tombolBiru").click(function () {
        $("#kotakWarna").css("background-color", "#2563eb");
    });

    // Tombol Hijau
    $("#tombolHijau").click(function () {
        $("#kotakWarna").css("background-color", "#15803d");
    });

    // Sembunyikan kotak
    $("#sembunyikanKotak").click(function () {
        $("#kotakWarna").hide();
    });

    // Tampilkan kotak
    $("#tampilkanKotak").click(function () {
        $("#kotakWarna").show();
    });

});
