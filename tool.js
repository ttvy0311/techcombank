const toolDropdownList = document.querySelector('.header-top-left-list');
const toolArrow = document.querySelector('.header-top-left-list>i');
const toolDropdown = document.getElementById('tool-dropdown');
toolDropdownList.addEventListener('click', openToolDropdown)
let isToolDropdownClicked = false;
function openToolDropdown(){
    if (isToolDropdownClicked){
        toolArrow.classList.remove('tool-arrow-rotate')
        toolDropdown.classList.remove('show')
        isToolDropdownClicked=false
}
else{
    toolArrow.classList.add('tool-arrow-rotate')
    toolDropdown.classList.add('show')
    isToolDropdownClicked=true;
}
}

const spreedsheetLeftItems = document.querySelectorAll(".spreadsheet-left-items");

for(let i = 0; i < spreedsheetLeftItems.length; i++ ){
    const item = spreedsheetLeftItems[i];
    let index = i == 0 ? 1 : i == 2 ? 3 : 5;
    item.addEventListener("mouseenter",  (item) => handleHoverSpreedsheetLeftItem(item, index));
    item.addEventListener("mouseleave",  (item) => handleLeaveSpreedsheetLeftItem(item, index));
}


// for(let i = 0; i < spreedsheetLeftItems.length; i++ ){
//     const item = spreedsheetLeftItems[i];
//     item.addEventListener("mouseenter", function(){
//         console.log("mouse enter");
//     });
//     item.addEventListener("mouseleave",  function() {
//         console.log("mouse leave");
//     });
// }

// spreedsheetLeftItems.length = 3
// 1. i = 0; 0 < 3 ; 0 + 1 = 1 -> Thẻ có class spreadsheet-left-items thứ 1 sẽ làm : 
// + add event mousenter -> rê chuột vào sẽ add thêm class active
// + add event mouseleave -> rê chuột ra sẽ remove class active
// 2. i = 1; 1 < 3 ; 1 + 1 = 2 -> Thẻ có class spreadsheet-left-items thứ 2 sẽ làm : 
// + add event mousenter -> rê chuột vào sẽ add thêm class active
// + add event mouseleave -> rê chuột ra sẽ remove class active
// 3. i = 2; 2 < 3 ; 2 + 1 = 3 -> Thẻ có class spreadsheet-left-items thứ 3 sẽ làm : 
// + add event mousenter -> rê chuột vào sẽ add thêm class active
// + add event mouseleave -> rê chuột ra sẽ remove class active
// 4. i = 3; 3 không thể nhỏ 3 nên vòng lặp sẽ dừng.

function handleHoverSpreedsheetLeftItem(item, index){
    const spreedsheetRightItem = document.querySelector(".spreadsheet-right").childNodes[index];

    spreedsheetRightItem.classList.add("active");
    item.target.classList.add("active");
}

function handleLeaveSpreedsheetLeftItem(item, index){
    const spreedsheetRightItem = document.querySelector(".spreadsheet-right").childNodes[index];

    spreedsheetRightItem.classList.remove("active");
    item.target.classList.remove("active");
}



const vyYeuAnh = ["em", "yeu", "anh", "nhieu","lam"];

for(let i = 0; i < vyYeuAnh.length; i++){
    console.log(vyYeuAnh[i])
}

// 1. i = 0 , 0 < 5, 0 + 1 = 1 -> vyYeuAnh[0] = em
// 1. i = 1 , 1 < 5, 1 + 1 = 2 -> vyYeuAnh[1] = yeu
// 1. i = 2 , 2 < 5, 2 + 1 = 3 -> vyYeuAnh[2] = anh
// 1. i = 3 , 3 < 5, 3 + 1 = 4 -> vyYeuAnh[3] = nhieu
// 1. i = 4 , 4 < 5, 4 + 1 = 5 -> vyYeuAnh[3] = lam
// 1. i = 5 , 5 !< 5 -> stop