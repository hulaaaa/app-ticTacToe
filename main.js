

// * Tic Tac Toe
let resultShow = document.querySelector('.resultShow');
let restart = document.querySelector('.restart');
let arr = document.querySelectorAll('.box'), isCross = true,countCross = 0;
function checkWinner(sym) {
    if(
        // line horizontal
    (arr[0].className == sym && arr[1].className == sym && arr[2].className == sym) || 
    (arr[3].className == sym && arr[4].className == sym && arr[5].className == sym) ||
    (arr[6].className == sym && arr[7].className == sym && arr[8].className == sym) || 
        // line vertial
    (arr[0].className == sym && arr[3].className == sym && arr[6].className == sym) ||
    (arr[1].className == sym && arr[4].className == sym && arr[7].className == sym) ||
    (arr[2].className == sym && arr[5].className == sym && arr[8].className == sym) ||
        // diagonal
    (arr[0].className == sym && arr[4].className == sym && arr[8].className == sym) ||
    (arr[2].className == sym && arr[4].className == sym && arr[6].className == sym) ) return true
    return false
}
function winGame(sym,colorFull) {
    resultShow.innerText = `${sym} Winner`;
    resultShow.style.color = colorFull;
    removeEventListener("click",gameEvent(e));
}

restart.addEventListener("click",()=>{
    resultShow.innerHTML = '';
    arr.forEach((el)=> el.className = 'box')
    countCross=0;
    resultShow.style.color = 'black'
})
for(let el of arr) {
    el.addEventListener("click",function gameEvent (e){
        if(e.target.className == 'box') {
            if(isCross){
                countCross++
                e.target.className = 'box-X'
                checkWinner(e.target.className);
                if(checkWinner(e.target.className)) {
                    winGame(e.target.className,'#2091F6');
                }
                if(checkWinner(e.target.className)==false) {
                    if(countCross==9) {
                        resultShow.innerText = `Draw`;
                        resultShow.style.color = "gray"
                    }
                }
            }
            else{
                countCross++
                e.target.className = 'box-O';
                checkWinner(e.target.className)
                if(checkWinner(e.target.className)) {
                    winGame(e.target.className,'#FF4F4F');
                }
                if(checkWinner(e.target.className)==false) {
                    if(countCross==9) {
                        resultShow.innerText = `Draw`;
                        resultShow.style.color = "gray"
                    }
                }
            }
            isCross = !isCross;
        }
    })
}