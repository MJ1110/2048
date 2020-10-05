window.addEventListener('load', function() {
    let divs = document.querySelectorAll('#con div');
    create();

    let arr = [0, 2, 2, 2];
    console.log(_2048(arr));

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
            case 65:
                // console.log('←');
                swap(0, 1, 2, 3);
                swap(4, 5, 6, 7);
                swap(8, 9, 10, 11);
                swap(12, 13, 14, 15);
                create();
                break;
            case 38:
            case 87:
                // console.log('↑');
                swap(0, 4, 8, 12);
                swap(1, 5, 9, 13);
                swap(2, 6, 10, 14);
                swap(3, 7, 11, 15);
                create();
                break;
            case 39:
            case 83:
                // console.log('↓');
                swap(3, 2, 1, 0);
                swap(7, 6, 5, 4);
                swap(11, 10, 9, 8);
                swap(15, 14, 13, 12);
                create();
                break;
            case 40:
            case 68:
                // console.log('→');
                swap(12, 8, 4, 0);
                swap(13, 9, 5, 1);
                swap(14, 10, 6, 2);
                swap(15, 11, 7, 3);
                create();
                break;
        }
    }

    function create() {
        var random = Math.floor(Math.random() * 16);
        if (divs[random].innerHTML == "0") {
            divs[random].innerHTML = "2";
        } else {
            create();
        }
    }

    function swap(a, b, c, d) {
        let newValue = [Number(divs[a].innerHTML), Number(divs[b].innerHTML), Number(divs[c].innerHTML), Number(divs[d].innerHTML)];
        newValue = _2048(newValue);
        divs[a].innerHTML = newValue[0];
        divs[b].innerHTML = newValue[1];
        divs[c].innerHTML = newValue[2];
        divs[d].innerHTML = newValue[3];
        console.log(newValue);
    }

    function _2048(arr) {
        let newArr = [];
        for (let i = 0; i < 4; i++) {
            if (arr[i]) {
                var j = i + 1;
                for (j = i + 1; j < 4; j++) {
                    if (arr[j]) {
                        break;
                    }
                }
                if (arr[i] != arr[j]) {
                    newArr.push(arr[i]);
                } else {
                    newArr.push(arr[i] * 2);
                    i = j;
                }
            }
        }
        for (let i = 0; i < 4; i++) {
            if (!newArr[i])
                newArr[i] = 0;
        }
        return newArr;
    }
})