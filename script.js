const students = [

{stt:1, id:"25T6110007", name:"Huỳnh Ngọc Diệu Anh"},
{stt:2, id:"25T6110017", name:"Nguyễn Thị Ngọc Bích"},
{stt:3, id:"25T6110022", name:"Nguyễn Thị Hồng Cúc"},
{stt:4, id:"25T6110029", name:"Cao Thị Diệu"},
{stt:5, id:"25T6110031", name:"Nguyễn Thị Kim Doanh"},
{stt:6, id:"25T6110036", name:"Nguyễn Quốc Dũng"},
{stt:7, id:"25T6110037", name:"Ngô Thị Quý Dương"},
{stt:8, id:"25T6110025", name:"Hoàng Hải Đăng"},
{stt:9, id:"25T6110046", name:"Nguyễn Lê Khánh Hà"},
{stt:10, id:"25T6110052", name:"Trần Phước Hải"},
{stt:11, id:"25T6110059", name:"Nguyễn Nguyên Hạnh"},
{stt:12, id:"25T6110058", name:"Phan Lê Thanh Hằng"},
{stt:13, id:"25T6110062", name:"Đỗ Thị Diệu Hiền"},
{stt:14, id:"25T6110068", name:"Trần Văn Nhật Hiếu"},
{stt:15, id:"25T6110075", name:"Vũ Văn Hoàng"},
{stt:16, id:"25T6110085", name:"Lê Văn Huy"},
{stt:17, id:"25T6110090", name:"Lê Thị Khánh Huyền"},
{stt:18, id:"25T6110097", name:"Nguyễn Trọng Quốc Khánh"},
{stt:19, id:"25T6110101", name:"Võ Thị Thanh Liên"},
{stt:20, id:"25T6110105", name:"Lê Hoàng Trúc Linh"},
{stt:21, id:"25T6110118", name:"Nguyễn Phi Long"},
{stt:22, id:"25T6110128", name:"Nguyễn Hà Minh"},
{stt:23, id:"25T6110135", name:"Nguyễn Mỹ Na"},
{stt:24, id:"25T6110144", name:"Trần Văn Nghĩa"},
{stt:25, id:"25T6110156", name:"Phạm Thị Thu Nhàn"},
{stt:26, id:"25T6110162", name:"Lê Thị Thảo Nhi"},
{stt:27, id:"25T6110167", name:"Nguyễn Thị Yến Nhi"},
{stt:28, id:"25T6110180", name:"Trần Thị Thùy Nhung"},
{stt:29, id:"25T6110175", name:"Tôn Nữ Quỳnh Như"},
{stt:30, id:"25T6110186", name:"Lê Hồng Phong"},
{stt:31, id:"25T6110189", name:"Trần Văn Phúc"},
{stt:32, id:"25T6110196", name:"Trương Thị Phượng"},
{stt:33, id:"25T6110202", name:"Nguyễn Ngọc Khánh Quỳnh"},
{stt:34, id:"25T6110210", name:"Nguyễn Thị Linh Tâm"},
{stt:35, id:"25T6110218", name:"Lê Nguyễn Diệu Thảo"},
{stt:36, id:"25T6110222", name:"Phan Thị Thảo"},
{stt:37, id:"25T6110233", name:"Hoàng Anh Thơ"},
{stt:38, id:"25T6110244", name:"Nguyễn Thị Xuân Thúy"},
{stt:39, id:"25T6110236", name:"Phạm Thị Minh Thư"},
{stt:40, id:"25T6110249", name:"Lê Tống Khánh Tiên"},
{stt:41, id:"25T6110266", name:"Huỳnh Thùy Trang"},
{stt:42, id:"25T6110274", name:"Trần Ngọc Đoan Trang"},
{stt:43, id:"25T6110255", name:"Lê Trần Bảo Trâm"},
{stt:44, id:"25T6110257", name:"Nguyễn Thị Quỳnh Trâm"},
{stt:45, id:"25T6110282", name:"Nguyễn Minh Tú"},
{stt:46, id:"25T6110290", name:"Lê Thị Diệu Uyên"},
{stt:47, id:"25T6110294", name:"Trương Phương Uyên"},
{stt:48, id:"25T6110295", name:"Trương Thục Uyên"},
{stt:49, id:"25T6110298", name:"Nguyễn Lê Tường Văn"},
{stt:50, id:"25T6110302", name:"Lê Công Vinh"},
{stt:51, id:"25T6110307", name:"Nguyễn Hoàng Quốc Vũ"},
{stt:52, id:"25T6110310", name:"Đỗ Lê Yến Vy"},
{stt:53, id:"25T6110316", name:"Nguyễn Trần Hạ Vy"},
{stt:54, id:"25T6110318", name:"Võ Tường Vy"},
{stt:55, id:"25T6110324", name:"Đặng Nguyễn Phương Yến"},
{stt:56, id:"25T6110321", name:"Hồ Thị Như Ý"}

];
const list = document.getElementById("studentList");

students.forEach(s => {

let div = document.createElement("div");

div.className = "student";

div.innerHTML = `
<span>${s.stt} - ${s.id} - ${s.name}</span>

<button onclick="openStudent('${s.id}')">
Vào
</button>
`;

list.appendChild(div);

});

function openStudent(id){

// lưu MSSV
localStorage.setItem("mssv", id);

// chuyển trang
window.location.href = "student.html";

}