var cube = {
    classUp : [[6,15,4.8],[2,3.5,2],[0.6,1.4,0.5]],   //[goal][red black addi]
    img : ["red","black","addi"],
    color : ["red","black","#7fff00"],
    cubeName : ["레드","블랙","에디"],
    currentCube : 1,
    goalPotential : 2
};

function getRadioIndex(nameValue) { //name is cube or potential (string)
    for (var i=0; i<document.getElementsByName(nameValue).length; i++) {
        if (document.getElementsByName(nameValue)[i].checked) {
            return i;
        }
    }
}
function changeCube() {
    cube.currentCube = getRadioIndex("cube");
    document.getElementById("cube_kind").innerHTML = cube.cubeName[cube.currentCube] + " 큐브";
    document.getElementById("cube_img").src = "./img/" + cube.img[cube.currentCube] + ".png";
    document.getElementsByClassName('info_item')[0].style.borderColor = cube.color[cube.currentCube];
    for (var i=0;i<3;i++) {
        document.getElementsByClassName('cubePercent')[i].value = cube.classUp[i][cube.currentCube];
    }
}

function changeGoal() {
    cube.goalPotential = getRadioIndex("potential");
    if (cube.goalPotential != 2) {
        if (cube.goalPotential == 0) {
            document.getElementById('nag').innerHTML = "선생님... 혹시 에픽 잠재능력 주문서라고 들어보셨습니까?"
        } else {
            document.getElementById('nag').innerHTML = "선생님, 곧 유니크 잠재능력 주문서가 풀립니다. 알고계십니까?"
        }
    } else {
        document.getElementById('nag').innerHTML = "";
    }
}

function calculation() {
    var customClassUp = document.getElementsByClassName('cubePercent')[cube.goalPotential].value;
    if (document.getElementById('miracle').checked) {
        customClassUp = customClassUp * 2;
    }
    var fail = (100 - customClassUp) / 100;
    var amount = Number(document.getElementById('amount').value);
    var failPer = fail ** amount;
    document.getElementById('succesUp').innerHTML = ((1 - failPer)*100).toFixed(3);
}