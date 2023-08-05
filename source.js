var activenumber;
var lastactive = -1;
var lastlastactive = -1;
var infoactive = false;
var testa;

for (let i = 8; i < 20; i++) {
    testa = document.getElementsByTagName("a")[i];
    //alert(testa.innerHTML);
    testa.ondblclick = function () { doOpen3() };
}
for (let i = 20; i < 32; i++) {
    testa = document.getElementsByTagName("a")[i];
    //alert(testa.innerHTML);
    testa.ondblclick = function () { doOpen4() };
}

var itk = {
    "min": 0,
    "max": 0,
    "R": [
        0, 255, 0, 0, 255, 0, 255, 255, 0, 205, 210, 102, 0, 0, 46, 255, 106, 221,
        233, 165, 255, 147, 218, 75, 255, 60, 255, 255, 218, 0, 188, 255, 255, 222,
        127, 139, 124, 255, 70, 0, 238, 238, 240, 245, 184, 32, 255, 25, 112, 34,
        248, 245, 255, 144, 173, 65, 255, 250, 128, 50, 244, 255, 123, 255, 173,
        255, 127, 255, 143, 220, 253, 255, 0, 0, 128, 255, 250, 148, 178, 255, 135,
        100, 240, 250, 255, 107, 135, 0, 139, 245, 186, 255, 255, 0, 210, 255, 47,
        72, 175, 128, 176, 255, 139, 240, 255, 216, 119, 219, 72, 255, 199, 154,
        189, 240, 230, 0, 85, 64, 153, 205, 250, 95, 0, 255, 224, 176, 138, 30, 240,
        152, 160
    ],
    "G": [
        0, 0, 255, 0, 255, 255, 0, 239, 0, 133, 180, 205, 0, 139, 139, 228, 90, 160,
        150, 42, 250, 112, 112, 0, 182, 179, 235, 228, 165, 128, 143, 105, 218, 184,
        255, 69, 252, 255, 130, 100, 130, 232, 255, 222, 134, 178, 20, 25, 128, 139,
        248, 255, 160, 238, 255, 105, 99, 240, 0, 205, 164, 255, 104, 165, 216, 192,
        255, 140, 188, 20, 245, 250, 206, 255, 0, 250, 128, 0, 34, 127, 206, 149,
        230, 235, 245, 142, 206, 0, 0, 245, 85, 228, 222, 191, 105, 248, 79, 61,
        238, 128, 224, 240, 0, 255, 215, 191, 136, 112, 209, 0, 21, 205, 183, 248,
        230, 250, 107, 224, 50, 92, 250, 158, 128, 69, 255, 196, 43, 144, 128, 251,
        82
    ],
    "B": [
        0, 0, 0, 255, 0, 255, 255, 213, 205, 63, 140, 170, 128, 139, 87, 225, 205,
        221, 122, 42, 250, 219, 214, 130, 193, 113, 205, 196, 32, 128, 143, 180,
        185, 135, 0, 19, 0, 224, 180, 0, 238, 170, 240, 179, 11, 170, 147, 112, 144,
        34, 255, 250, 122, 144, 47, 225, 71, 230, 0, 50, 96, 240, 238, 0, 230, 203,
        212, 0, 143, 60, 230, 240, 209, 127, 128, 205, 114, 211, 34, 80, 235, 237,
        140, 215, 238, 35, 250, 139, 139, 220, 211, 181, 173, 255, 30, 220, 79, 139,
        238, 0, 230, 245, 0, 255, 0, 216, 153, 147, 204, 255, 133, 50, 107, 255,
        250, 154, 47, 208, 204, 92, 210, 160, 0, 0, 255, 222, 226, 255, 128, 152, 45
    ],
    "A": [
        0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
    ],
    "I": [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
        59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
        97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
        113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
        128, 129, 130
    ]
}

var nv1 = new niivue.Niivue({
    backColor: [1, 1, 1, 1],
    onLocationChange: handleIntensityChange,
    isResizeCanvas: true,
});
//isResizeCanvas: false的话可以自己调canvas大小，但是画面很糊，而且你不能拖拽了

var lastPos = null;
document.getElementById("gl1").ondblclick = async function () {
    //   if (!isCustomDraw) return;
    if (!lastPos) return;
    if (!lastPos.hasOwnProperty("values")) return;
    if (!nv1.drawBitmap) nv1.createEmptyDrawing();
    if (!isFinite(lastPos.axCorSag)) return;
    if (lastPos.axCorSag < 0 || lastPos.axCorSag > 2) return;
    let penValue = 2; //green
    let threshold_tolerance = 4500;
    let intensity = lastPos.values[0].value;
    let mn = intensity - threshold_tolerance;
    let mx = intensity + threshold_tolerance;
    let min_threshold_tolerance = 300;
    if (mn < min_threshold_tolerance) {
        console.log("Hounsfield Intensity too dark to be plaque");
        if (mx < min_threshold_tolerance) return;
        mn = Math.max(mn, min_threshold_tolerance);
    }
    nv1.drawPt(...lastPos.vox, penValue);
    await nv1.drawFloodFill(lastPos.vox, 0, 1, mn, mx);
    nv1.refreshDrawing(true);
};

function handleIntensityChange(data) {
    document.getElementById("intensity").innerHTML =
        "&nbsp;&nbsp;" + data.string;
    lastPos = data;
}

nv1.opts.dragMode = nv1.dragModes.pan;
// nv1.opts.dragMode = nv1.dragModes.measurement;

var flag_flood = false;
var currentcolor = 1;
var lastcolor = currentcolor;
document.getElementById("colorinput").addEventListener("keyup", function (event) {
    event.preventDefault()
    if (event.keyCode === 13) {
        var a = 1;
        a = document.getElementById("colorinput").value;
        if (a >= 0 && a <= 130) {
            nv1.setDrawingEnabled(a >= 0);
            nv1.setPenValue(a);
            currentcolor = a;
            lastcolor = currentcolor;
            document.getElementById("nowcolor").style = `background-color:rgb(${itk.R[a]},${itk.G[a]},${itk.B[a]})`;
        }
        else {
            alert("请输入0~130之间的数字");
        }
    }
})

var hextodec = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15, }
document.getElementById("colorstraw").onchange = function () {
    var straw = document.getElementById("colorstraw").value;
    let r = 16 * (hextodec[straw[1]]) + hextodec[straw[2]];
    let g = 16 * (hextodec[straw[3]]) + hextodec[straw[4]];
    let b = 16 * (hextodec[straw[5]]) + hextodec[straw[6]];
    nv1.setDrawingEnabled(true);
    itk.R[131] = r;
    itk.G[131] = g;
    itk.B[131] = b;
    nv1.setDrawColormap(itk);
    nv1.setPenValue(131, flag_flood);
    currentcolor = 131;
    lastcolor = currentcolor;
    document.getElementById("nowcolor").style = `background-color:${straw}`;
    document.getElementById("colorinput").value = currentcolor;
}

document.getElementById("flood").onclick = function () { doCheckFlood() };
function doCheckFlood() {
    if (!flag_flood) {
        //document.getElementById("checkforflood").innerHTML = "&nbsp;&nbsp;•连通性：";
        flag_flood = true;
    }
    else {
        //document.getElementById("checkforflood").innerHTML = "&nbsp;&nbsp;连通性：";
        flag_flood = false;
    }
    nv1.setDrawingEnabled(currentcolor >= 0);
    nv1.setPenValue(currentcolor, flag_flood);
}

var colorboardactive = false;
document.getElementById("nowcolor").onclick = function () { showcolorboard() };
function showcolorboard() {
    if (!colorboardactive) {
        document.getElementsByClassName("colorboard")[0].style = "display:block";
        colorboardactive = true;
    }
    else {
        document.getElementsByClassName("colorboard")[0].style = "display:none";
        colorboardactive = false;
    }
}

// document.getElementById("nowcolor").onmouseout = function () { hidecolorboard() };

var eraseractive = false;
document.getElementById("eraser").onclick = function () { doeraser() };
function doeraser() {
    if (!eraseractive) {
        currentcolor = 0;
        nv1.setDrawingEnabled(currentcolor >= 0);
        nv1.setPenValue(currentcolor, flag_flood);
        //document.getElementById("checkforeraser").innerHTML = "&nbsp;&nbsp;•橡皮擦：";
        eraseractive = true;
    }
    else {
        currentcolor = lastcolor;
        nv1.setDrawingEnabled(currentcolor >= 0);
        nv1.setPenValue(currentcolor, flag_flood);
        //document.getElementById("checkforeraser").innerHTML = "&nbsp;&nbsp;橡皮擦：";
        eraseractive = false;
    }
    document.getElementById("colorinput").value = currentcolor;
}

//create element color div
for (let i = 1; i <= 130; i++) {
    let newdiv = document.createElement("div");
    newdiv.style = `width: 16.9vw;height: 2vw;background-color: rgb(${itk.R[i]},${itk.G[i]},${itk.B[i]});`;
    newdiv.className = "strangecolor";
    newdiv.id = `color${i}`;
    newdiv.innerHTML = `&nbsp;` + i;
    document.getElementsByClassName("colorboard")[0].appendChild(newdiv);
    newdiv.onclick = function () {
        currentcolor = i;
        nv1.setDrawingEnabled(currentcolor >= 0);
        nv1.setPenValue(currentcolor, flag_flood);
        document.getElementById("nowcolor").style = `background-color:rgb(${itk.R[i]},${itk.G[i]},${itk.B[i]})`;
        document.getElementsByClassName("colorboard")[0].style = "display:none";
        colorboardactive = false;
        document.getElementById("colorinput").value = currentcolor;
    }
}

document.getElementById("changelabelbutton").onclick = function () {
    let ind = (document.getElementById("changelabelcolor").value);
    let r = (document.getElementById("R").value);
    let g = (document.getElementById("G").value);
    let b = (document.getElementById("B").value);
    itk.R[ind] = r;
    itk.G[ind] = g;
    itk.B[ind] = b;
    nv1.setDrawColormap(itk);
    document.getElementById(`color${ind}`).style = `width: 16.9vw;height: 2vw;background-color:rgb(${itk.R[ind]},${itk.G[ind]},${itk.B[ind]})`;
    document.getElementById(`tablecolor${ind}`).style = `width: 16.9vw;height: 2vw;background-color:rgb(${itk.R[ind]},${itk.G[ind]},${itk.B[ind]})`;
    if (ind == currentcolor) {
        document.getElementById("nowcolor").style = `width: 16.9vw;height: 2vw;background-color:rgb(${itk.R[ind]},${itk.G[ind]},${itk.B[ind]})`;
    }
}

function createcolortable() {
    for (let i = 1; i < itk.I.length; i++) {
        let newdiv = document.createElement("div");
        newdiv.style = `width: 16.9vw;height: 2vw;background-color: rgb(${itk.R[i]},${itk.G[i]},${itk.B[i]});`;
        newdiv.id = `tablecolor${i}`;
        newdiv.innerHTML = `&nbsp;` + i;
        document.getElementById("colortable").appendChild(newdiv);
    }
}

var lengthmeasureactive = false;
document.getElementById("lengthmeasure").onclick = function () {
    if (!lengthmeasureactive) {
        nv1.opts.dragMode = nv1.dragModes.measurement;
        lengthmeasureactive = true;
    }
    else {
        nv1.opts.dragMode = nv1.dragModes.pan;
        lengthmeasureactive = false;
    }
}

document.getElementById("left").onclick = function () { doLeft() };
function doLeft() {
    nv1.moveCrosshairInVox(-1, 0, 0);
}
document.getElementById("left").onmousedown = function () { doLeftlong() };
time1 = "";
function doLeftlong() {
    time1 = setInterval(doLeft, 100);
}
document.getElementById("left").onmouseup = function () { clearInterval(time1); };
document.getElementById("left").onmouseout = function () { clearInterval(time1); };


document.getElementById("right").onclick = function () { doRight() };
function doRight() {
    nv1.moveCrosshairInVox(1, 0, 0);
}
document.getElementById("right").onmousedown = function () { doRightlong() };
time2 = "";
function doRightlong() {
    time2 = setInterval(doRight, 100);
}
document.getElementById("right").onmouseup = function () { clearInterval(time2); };
document.getElementById("right").onmouseout = function () { clearInterval(time2); };


document.getElementById("posterior").onclick = function () { doPosterior() };
function doPosterior() {
    nv1.moveCrosshairInVox(0, -1, 0);
}
document.getElementById("posterior").onmousedown = function () { doPosteriorlong() };
time3 = "";
function doPosteriorlong() {
    time3 = setInterval(doPosterior, 100);
}
document.getElementById("posterior").onmouseup = function () { clearInterval(time3); };
document.getElementById("posterior").onmouseout = function () { clearInterval(time3); };


document.getElementById("anterior").onclick = function () { doAnterior() };
function doAnterior() {
    nv1.moveCrosshairInVox(0, 1, 0);
}
document.getElementById("anterior").onmousedown = function () { doAnteriorlong() };
time4 = "";
function doAnteriorlong() {
    time4 = setInterval(doAnterior, 100);
}
document.getElementById("anterior").onmouseup = function () { clearInterval(time4); };
document.getElementById("anterior").onmouseout = function () { clearInterval(time4); };


document.getElementById("inferior").onclick = function () { doInferior() };
function doInferior() {
    nv1.moveCrosshairInVox(0, 0, -1);
}
document.getElementById("inferior").onmousedown = function () { doInferiorlong() };
time5 = "";
function doInferiorlong() {
    time5 = setInterval(doInferior, 100);
}
document.getElementById("inferior").onmouseup = function () { clearInterval(time5); };
document.getElementById("inferior").onmouseout = function () { clearInterval(time5); };


document.getElementById("superior").onclick = function () { doSuperior() };
function doSuperior() {
    nv1.moveCrosshairInVox(0, 0, 1);
}
document.getElementById("superior").onmousedown = function () { doSuperiorlong() };
time6 = "";
function doSuperiorlong() {
    time6 = setInterval(doSuperior, 100);
}
document.getElementById("superior").onmouseup = function () { clearInterval(time6); };
document.getElementById("superior").onmouseout = function () { clearInterval(time6); };


document.getElementById("info").onclick = function () { doInfo() };
function doInfo() {
    let obj = nv1.getDescriptives(0);
    let str = JSON.stringify(obj, null, 2);
    //alert(str);

    var txt = document.getElementById("forviewtxt");

    var i;
    var information = `<br />`;

    for (i = 0; i < str.split(",").length; i++) {
        information = information + str.split(",")[i];
        information = information + `<br /><br />`;
    }
    if (infoactive) {
        txt.innerHTML = information;
        document.getElementById("isfile").className = "dropdtn active";
        document.getElementById("isview").className = "dropdtn";
        document.getElementById("forfile").style = "display:block";
        document.getElementById("forview").style = "display:none";
        infoactive = false;
    }
    else {
        txt.innerHTML = information;
        document.getElementById("isfile").className = "dropdtn";
        document.getElementById("isview").className = "dropdtn active";
        document.getElementById("forfile").style = "display:none";
        document.getElementById("forview").style = "display:block";
        infoactive = true;
    }
    document.getElementById("istool").className = "dropdtn";
    document.getElementById("ismodel").className = "dropdtn";
    document.getElementById("formodel").style = "display:none";
    document.getElementById("formodify").style = "display:none";
    document.getElementById("formeasurecount").style = "display:none";
}
document.getElementById("undo").onclick = function () { doUndo() };
function doUndo() {
    nv1.drawUndo();
}
// document.getElementById("open").onclick = function () { doOpen() };
// function doOpen() {
//     var a;
//     a = document.getElementById("fileInput").value;
//     var b = a.slice(12);
//     //var c = '../data/imagesTr/' + b;
//     var c = '../data/labelsTr/' + b;
//     var volumeList1 = [{ url: c }];
//     nv1.setRadiologicalConvention(true);
//     nv1.opts.multiplanarForceRender = true;
//     nv1.attachTo("gl1");
//     nv1.loadVolumes(volumeList1);
//     nv1.setSliceType(nv1.sliceTypeMultiplanar);
//     nv1.loadDrawingFromUrl(c);
//     document.getElementById("loading").style = "display:none";
//    document.getElementById("loading2").style = "display:none";
// }
// document.getElementById("open2").onclick = function () { doOpen2() };
// function doOpen2() {
//     var a;
//     a = document.getElementById("fileInput2").value;
//     var b = a.slice(12);
//     var c = '../data/labelsTr/' + b;
//     nv1.addVolumeFromUrl({ c });
// }

nv1.opts.multiplanarForceRender = true;
//nv1.attachTo("gl1");
nv1.setSliceType(nv1.sliceTypeMultiplanar);
var imagepath;                                          //image路径
var labelpath;                                          //label路径
var overlayon = false;                                  //是否处于叠加态
var onlyimage;                                          //画画时是否提供已有颜色
function doOpen3() {
    var a;
    a = document.getElementsByTagName("a")[activenumber];
    var b = a.innerHTML;
    var ipath = 'data/imagesTr/' + b;
    var lpath = 'data/labelsTr/' + b;
    var volumeList1 = [{ url: ipath }];
    var volumeList2 = [{ url: lpath }];
    imagepath = ipath;
    document.getElementById("loading").style = "display:none";
    document.getElementById("loading2").style = "display:none";
    if (lastactive != -1) {
        d = document.getElementsByTagName("a")[lastactive];
        if (!overlayon) {                                   //未处于叠加态
            if (b == d.innerHTML) {                         //名称相同
                if (activenumber == lastactive) {           //说明是打开又关闭
                    document.getElementById("loading").style = "display:blcok";
                    document.getElementById("loading2").style = "display:block";
                    document.getElementsByTagName("a")[activenumber].className = "";
                    activenumber = -1;
                }
                else {                                       //说明要叠加
                    nv1.loadVolumes(volumeList1);            //此时必然已有label，故只需要加image
                    document.getElementsByTagName("a")[lastactive].className = "active";
                    lastlastactive = lastactive;
                    overlayon = true;
                    onlyimage = false;
                }
            }
            else {                                           //名称不同，说明只能是新的一个image
                // location.reload();
                // nv1.updateGLVolume();
                nv1.attachTo("gl1");
                nv1.loadVolumes(volumeList1);
                // nv1.updateGLVolume();
                // nv1.refreshDrawing();
                onlyimage = true;
            }
        }
        else {                                               //现在处于叠加态
            onlyimage = false;                               //处于叠加态，所以初始就不是只有image
            overlayon = false;                               //处于叠加态后不管点哪都不再是叠加态
            document.getElementsByTagName("a")[lastlastactive].className = "";
            if (b == d.innerHTML) {                          //名称相同
                nv1.attachTo("gl1");                         //叠加态名称相同且点的是image，必然image不显示，label显示
                nv1.loadVolumes(volumeList2);
                nv1.loadDrawingFromUrl(lpath);
                if (activenumber == lastactive) {            //两次双击同一个，说明先点label，再点两次image
                    document.getElementsByTagName("a")[lastlastactive].className = "active";
                    activenumber = lastlastactive;
                }
                else {                                       //双击不同一个，说明上一次点了label后变成叠加态，这次又点了image，
                    document.getElementsByTagName("a")[lastactive].className = "active";
                    activenumber = lastactive;
                }
            }
            else {                                           //名称不同，说明只能是新的一个image
                nv1.attachTo("gl1");
                nv1.loadVolumes(volumeList1);
                onlyimage = true;
            }
        }
    }
    else {                                                           //第一次打开文件
        nv1.attachTo("gl1");
        nv1.loadVolumes(volumeList1);
        onlyimage = true;
    }
    lastactive = activenumber;
    nv1.setHighResolutionCapable(false);
}
function doOpen4() {
    var a;
    a = document.getElementsByTagName("a")[activenumber];
    var b = a.innerHTML;
    var ipath = 'data/imagesTr/' + b;
    var lpath = 'data/labelsTr/' + b;
    var volumeList1 = [{ url: ipath }];
    var volumeList2 = [{ url: lpath }];
    labelpath = lpath;
    document.getElementById("loading").style = "display:none";
    document.getElementById("loading2").style = "display:none";
    if (lastactive != -1) {
        d = document.getElementsByTagName("a")[lastactive];
        if (!overlayon) {                                   //未处于叠加态
            if (b == d.innerHTML) {                         //名称相同
                if (activenumber == lastactive) {           //说明是打开又关闭
                    document.getElementById("loading").style = "display:blcok";
                    document.getElementById("loading2").style = "display:block";
                    document.getElementsByTagName("a")[activenumber].className = "";
                    activenumber = -1;
                }
                else {                                      //说明要叠加
                    nv1.attachTo("gl1");                    //此时必然已有image，故需先label再addvolume image
                    nv1.addVolumeFromUrl(volumeList2);
                    nv1.loadDrawingFromUrl(lpath);
                    nv1.loadVolumes(volumeList1);
                    document.getElementsByTagName("a")[lastactive].className = "active";
                    lastlastactive = lastactive;
                    overlayon = true;
                    onlyimage = false;
                }
            }
            else {                                           //名称不同，说明只能是新的一个label
                nv1.attachTo("gl1");
                nv1.loadVolumes(volumeList2);
                nv1.loadDrawingFromUrl(lpath);
                onlyimage = false;
            }
        }
        else {                                               //现在处于叠加态
            onlyimage = false;                               //处于叠加态，所以初始就不是只有image
            overlayon = false;                               //处于叠加态后不管点哪都不再是叠加态
            document.getElementsByTagName("a")[lastlastactive].className = "";
            if (b == d.innerHTML) {                          //名称相同
                nv1.attachTo("gl1");                         //叠加态名称相同且点的是label，必然label不显示，image显示
                nv1.loadVolumes(volumeList1);
                onlyimage = true;
                if (activenumber == lastactive) {            //两次双击同一个，说明先点image，再点两次label
                    document.getElementsByTagName("a")[lastlastactive].className = "active";
                    activenumber = lastlastactive;
                }
                else {                                       //双击不同一个，说明上一次点了image后变成叠加态，这次又点了label，
                    document.getElementsByTagName("a")[lastactive].className = "active";
                    activenumber = lastactive;
                }
            }
            else {                                           //名称不同，说明只能是新的一个label
                nv1.attachTo("gl1");
                nv1.loadVolumes(volumeList2);
                nv1.loadDrawingFromUrl(lpath);
                onlyimage = false;
            }
        }
    }
    else {                                                           //第一次打开文件
        nv1.attachTo("gl1");
        nv1.loadVolumes(volumeList2);
        nv1.loadDrawingFromUrl(lpath);
        onlyimage = false;
    }
    lastactive = activenumber;
    nv1.setHighResolutionCapable(false);
}
document.getElementById("save").onclick = function () { doSave() };
function doSave() {
    nv1.saveImage("test.nii", true);
}
nv1.setInterpolation(true);
document.getElementById("check9").addEventListener("change", doCheck9Click);
function doCheck9Click() {
    nv1.setInterpolation(!this.checked);
    if (this.checked) {
        document.getElementById("checkfor9").innerHTML = "•平滑";
    }
    else {
        document.getElementById("checkfor9").innerHTML = "平滑";
    }
}
document.getElementById("check10").addEventListener("change", doCheck10Click);
function doCheck10Click() {
    nv1.setHighResolutionCapable(!this.checked);
    if (this.checked) {
        document.getElementById("checkfor10").innerHTML = "高DPI";
    }
    else {
        document.getElementById("checkfor10").innerHTML = "•高DPI";
    }
}
// document.getElementById("gl1").ondblclick = function () { doCheckfor3d(event) };
var showall = true;
function doCheckfor3d(event) {
    // alert(event.clientY);
    // alert((0.5 * window.innerHeight));
    if (showall) {
        if (event.clientX < (0.5 * window.innerWidth)) {
            if (event.clientY < (0.5 * window.innerHeight)) {
                nv1.setSliceType(nv1.sliceTypeCoronal);
            }
            else {
                nv1.setSliceType(nv1.sliceTypeAxial);
            }
        }
        else {
            if (event.clientY < (0.5 * window.innerHeight)) {
                nv1.setSliceType(nv1.sliceTypeSagittal);
            }
            else {
                nv1.setSliceType(nv1.sliceTypeRender);
            }
        }
        showall = false;
    }
    else {
        nv1.setSliceType(nv1.sliceTypeMultiplanar);
        showall = true;
    }
}
var filedropdowncontentactive = false;
document.getElementById("isfile").onclick = function () { fileactive() };
function fileactive() {
    document.getElementById("isfile").className = "dropdtn active";
    document.getElementById("isview").className = "dropdtn";
    document.getElementById("istool").className = "dropdtn";
    document.getElementById("ismodel").className = "dropdtn";
    document.getElementById("forfile").style = "display:block";
    document.getElementById("forview").style = "display:none";
    document.getElementById("formodify").style = "display:none";
    document.getElementById("formeasurecount").style = "display:none";
    document.getElementById("formodel").style = "display:none";
    if (!filedropdowncontentactive) {
        document.getElementById("filedropdowncontent").style = "display:block";
        filedropdowncontentactive = true;
    }
    else {
        document.getElementById("filedropdowncontent").style = "display:none";
        filedropdowncontentactive = false;
    }
    nv1.setDrawingEnabled(false);
    document.getElementById("viewdropdowncontent").style = "display:none";
    document.getElementById("tooldropdowncontent").style = "display:none";
}

var viewdropdowncontentactive = false;
document.getElementById("isview").onclick = function () { viewactive() };
function viewactive() {
    document.getElementById("isfile").className = "dropdtn";
    document.getElementById("isview").className = "dropdtn active";
    document.getElementById("istool").className = "dropdtn";
    document.getElementById("ismodel").className = "dropdtn";
    if (!viewdropdowncontentactive) {
        document.getElementById("viewdropdowncontent").style = "display:block";
        viewdropdowncontentactive = true;
    }
    else {
        document.getElementById("viewdropdowncontent").style = "display:none";
        viewdropdowncontentactive = false;
    }
    nv1.setDrawingEnabled(false);
    document.getElementById("tooldropdowncontent").style = "display:none";
}

var tooldropdowncontentactive = false;
document.getElementById("istool").onclick = function () { toolactive() };
function toolactive() {
    document.getElementById("isfile").className = "dropdtn";
    document.getElementById("isview").className = "dropdtn";
    document.getElementById("istool").className = "dropdtn active";
    document.getElementById("ismodel").className = "dropdtn";
    if (!tooldropdowncontentactive) {
        document.getElementById("tooldropdowncontent").style = "display:block";
        tooldropdowncontentactive = true;
    }
    else {
        document.getElementById("tooldropdowncontent").style = "display:none";
        tooldropdowncontentactive = false;
    }
    document.getElementById("filedropdowncontent").style = "display:none";
}

document.getElementById("modify").onclick = function () { modifyactive() };
function modifyactive() {
    document.getElementById("formodel").style = "display:none";
    document.getElementById("forfile").style = "display:none";
    document.getElementById("forview").style = "display:none";
    document.getElementById("formodify").style = "display:block";
    document.getElementById("formeasurecount").style = "display:none";
    nv1.setDrawingEnabled(true);
    nv1.setPenValue(currentcolor, flag_flood);
    document.getElementById("filedropdowncontent").style = "display:none";
    document.getElementById("nowcolor").style = `background-color:rgb(${itk.R[currentcolor]},${itk.G[currentcolor]},${itk.B[currentcolor]})`;
    document.getElementById("colorinput").value = currentcolor;
    createcolortable();
    //alert(onlyimage);
}

document.getElementById("measurecount").onclick = function () { measurecountactive() };
function measurecountactive() {
    document.getElementById("formodel").style = "display:none";
    document.getElementById("forfile").style = "display:none";
    document.getElementById("forview").style = "display:none";
    document.getElementById("formodify").style = "display:none";
    document.getElementById("formeasurecount").style = "display:block";
    nv1.setDrawingEnabled(false);
    document.getElementById("filedropdowncontent").style = "display:none";
}

document.getElementById("ismodel").onclick = function () { modelactive() };
function modelactive() {
    document.getElementById("isfile").className = "dropdtn";
    document.getElementById("isview").className = "dropdtn";
    document.getElementById("istool").className = "dropdtn";
    document.getElementById("ismodel").className = "dropdtn active";
    document.getElementById("formodel").style = "display:block";
    document.getElementById("forfile").style = "display:none";
    document.getElementById("forview").style = "display:none";
    document.getElementById("formodify").style = "display:none";
    document.getElementById("formeasurecount").style = "display:none";
    nv1.setDrawingEnabled(false);
    document.getElementById("filedropdowncontent").style = "display:none";
}


for (let i = 8; i < 32; i++) {
    document.getElementsByTagName("a")[i].onclick = function () { testsmart(i) };
}

function testsmart(an) {
    activenumber = an;
    document.getElementsByTagName("a")[an].className = "active";
    if (lastactive != -1) {
        document.getElementsByTagName("a")[lastactive].className = "";
    }
    for (i = 8; i < 32; i++) {
        if (i != activenumber) {
            document.getElementsByTagName("a")[i].className = "";
        }
    }
    //lastactive = activenumber;
    // alert(an);
    // alert(activenumber);
}

var file_address;
document.getElementById("lzxlikeit").onclick = function () { lzxclickit() };
function lzxclickit() {
    if (onlyimage) {
        file_address = imagepath;
    }
    else {
        file_address = labelpath;
    }
}
