function matchConfig() {


    var zmotor = document.getElementById("z_motor");
    var s1 = parseInt(zmotor.selectedIndex);

    var psupply = document.getElementById("p_supply");
    var s2 = parseInt(psupply.selectedIndex);

    var endstop = document.getElementById("z_stop");
    var s3 = parseInt(endstop.selectedIndex);

    var hotend = document.getElementById("hotend");
    var s4 = parseInt(hotend.selectedIndex);

    var lcd = document.getElementById("lcd");
    var s5 = parseInt(lcd.selectedIndex);

    var userConfig = [s1, s2, s3, s4, s5];