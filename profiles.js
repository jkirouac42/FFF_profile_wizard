function addEventListener(){
    document.getElementById('match').addEventListener("click", matchConfig, false);
}

function matchConfig() {

    var printer = document.getElementById("series");
    var s1 = parseInt(printer.selectedIndex);

    var filament = document.getElementById("filament");
    var s2 = parseInt(filament.selectedIndex);

    var nozzle = document.getElementById("nozzle");
    var s3 = parseInt(nozzle.selectedIndex);

    var tool = document.getElementById("tool");
    var s4 = parseInt(tool.selectedIndex);


    var userConfig = [s1, s2, s3, s4];

}