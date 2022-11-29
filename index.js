function kt_TongSoNguyenTo(n) {
    var flag = true;
    if (n < 2) {
        flag = false
    }
    else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                flag = false
                break;
            }
        }
    }
    return flag
}

function TongSoNguyenTo() {
    let list = document.getElementById("myList");
    const a = document.getElementById("st1").value;
    const b = document.getElementById("st2").value;
    var sum = 0;
    for (i = a; i < b; i++) {
        var isSNT = kt_TongSoNguyenTo(i);
        if (isSNT == true) {
            sum += i;
        }
    } 
    let li = document.createElement("li");
    li.innerText = sum;
    list.appendChild(li);
}

function numberOneTriangle() {
	const s = document.getElementById("DAL").value
	console.log("Check input: " + s);
    if (s < 1 || s > 10) {
        let node = document.createElement("li")
        let text = document.createTextNode("Invalid input! Refresh this page to proceed!")
        node.appendChild(text)
        document.getElementById("list2").appendChild(node)
    } else {
        for (i = 1; i <= s; i++) {
            let row = ""
            for (let j = 0; j < i ; j++) {
                row += "*"
            }
            console.log(row);
            let node = document.createElement("li")
            let text = document.createTextNode(row)
            node.appendChild(text)
            document.getElementById("list2").appendChild(node)
        }
    }
}
