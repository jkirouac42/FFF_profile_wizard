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
    
    var none = [0,0,0,0];
    

}

/*
breakdown of var profile names:
series = s for SE i for ID

The next two letters are filament
pl for PLA
ab for ABS
ps for polysupport
bv for bvoh

The number is the first in the nozzle size
The tool is l or r for left and right
*/

SE profiles
 var spl2l = [1,1,1,1];
 var spl3l = [1,1,2,1];
 var spl5l = [1,1,3,1];
 var spl7l = [1,1,4,1];
 
 var spl2r = [1,1,1,2];
 var spl3r = [1,1,2,2];
 var spl5r = [1,1,3,2];
 var spl7r = [1,1,4,2];
 
 var sab2l = [1,2,1,1];
 var sab3l = [1,2,2,1];
 var sab5l = [1,2,3,1];
 var sab7l = [1,2,4,1];
 
 var sab2r = [1,2,1,2];
 var sab3r = [1,2,2,2];
 var sab5r = [1,2,3,2];
 var sab7r = [1,2,4,2];
 
 var sps2l = [1,3,1,1];
 var sps3l = [1,3,2,1];
 var sps5l = [1,3,3,1];
 var sps7l = [1,3,4,1];
 
 var sps2r = [1,3,1,2];
 var sps3r = [1,3,2,2];
 var sps5r = [1,3,3,2];
 var sps7r = [1,3,4,2];
 
 var sbv2l = [1,4,1,1];
 var sbv3l = [1,4,2,1];
 var sbv5l = [1,4,3,1];
 var sbv7l = [1,4,4,1];
 
 var sbv2r = [1,4,1,2];
 var sbv3r = [1,4,2,2];
 var sbv5r = [1,4,3,2];
 var sbv7r = [1,4,4,2];
 
 ID profiles
 var ipl2l = [2,1,1,1];
 var ipl3l = [2,1,2,1];
 var ipl5l = [2,1,3,1];
 var ipl7l = [2,1,4,1];
 
 var ipl2r = [2,1,1,2];
 var ipl3r = [2,1,2,2];
 var ipl5r = [2,1,3,2];
 var ipl7r = [2,1,4,2];
 
 var iab2l = [2,2,1,1];
 var iab3l = [2,2,2,1];
 var iab5l = [2,2,3,1];
 var iab7l = [2,2,4,1];
 
 var iab2r = [2,2,1,2];
 var iab3r = [2,2,2,2];
 var iab5r = [2,2,3,2];
 var iab7r = [2,2,4,2];
 
 var ips2l = [2,3,1,1];
 var ips3l = [2,3,2,1];
 var ips5l = [2,3,3,1];
 var ips7l = [2,3,4,1];
 
 var ips2r = [2,3,1,2];
 var ips3r = [2,3,2,2];
 var ips5r = [2,3,3,2];
 var ips7r = [2,3,4,2];
 
 var ibv2l = [2,4,1,1];
 var ibv3l = [2,4,2,1];
 var ibv5l = [2,4,3,1];
 var ibv7l = [2,4,4,1];
 
 var ibv2r = [2,4,1,2];
 var ibv3r = [2,4,2,2];
 var ibv5r = [2,4,3,2];
 var ibv7r = [2,4,4,2];
 