function postMessage() {
    var nicknameInput = document.getElementById("nickname");
    var messageInput = document.getElementById("message");
    var messagesDiv = document.getElementById("messages");

    var nickname = nicknameInput.value.trim();
    var message = messageInput.value.trim();

    if (nickname === '') {
        nickname = "　さんの投稿";
    } else {
        nickname += "さんの投稿";
    }

    if (message === '') {
        alert("投稿内容を入力してください。");
        return;
    }

    var currentDate = new Date();
    var dateString = currentDate.toLocaleString();

    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = nickname + "\n" + message + "\n" + dateString ;
    messagesDiv.insertBefore(messageElement, messagesDiv.firstChild);

    nicknameInput.value = "";
    messageInput.value = "";
}