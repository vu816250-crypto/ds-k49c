const adminList = document.getElementById("adminList")

students.forEach(s=>{

let div = document.createElement("div")

div.className="student"

div.innerHTML = `
<b>${s.stt} - ${s.id} - ${s.name}</b>

<br>

Số ngày vắng:
<input type="number" onchange="saveAbsent('${s.id}',this.value)">

<br>

Điểm rèn luyện BCS:
<input type="number" onchange="saveScore('${s.id}',this.value)">

<br><br>

Upload ảnh:
<input type="file" onchange="uploadImage(event,'${s.id}')">

<hr>
`

adminList.appendChild(div)

})
function saveAbsent(id,value){

let data = JSON.parse(localStorage.getItem("absent") || "{}")

data[id] = value

localStorage.setItem("absent",JSON.stringify(data))

}
function saveScore(id,value){

let data = JSON.parse(localStorage.getItem("bcsScore") || "{}")

data[id] = value

localStorage.setItem("bcsScore",JSON.stringify(data))

}