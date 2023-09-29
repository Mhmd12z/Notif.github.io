let notification = document.querySelectorAll(".dash .notify");
let notiNum = document.querySelector(".dash .num");
function countNotification() {
    let count = 0;
    for (let i = 0; i < notification.length; i++) {
        if (notification[i].classList.contains("unread")) {
            count++;
        }
    }
    var index = 0;
    let interval = setInterval(() => {
        if (index > count - 1) {
            clearInterval(interval);
        }
        notiNum.innerHTML = index;
        index++;
    }, 50);
}
countNotification();
notification.forEach(n => {
    n.addEventListener("click", function () {
        n.classList.add("read");
        n.classList.remove("unread");
        countNotification();
    })
})
function markAllAsRead() {
    for (let i = 0; i < notification.length; i++) {
        notification[i].classList.remove("unread");
        notification[i].classList.add("read");
    }
}
let markBtn = document.querySelector(".dash .mark");
markBtn.addEventListener("click", function () {
    markAllAsRead();
    countNotification();
})