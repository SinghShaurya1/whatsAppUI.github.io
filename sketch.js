const newChatInput = document.getElementsByClassName("chating")[0];
const messages = document.getElementsByClassName("chats")[0];

newChatInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const msgText = newChatInput.value;
        const msgItem = document.createElement("li");
        msgItem.classList.add("msg");
        msgItem.innerHTML = `
        <span class="msg-text">${msgText}</span>
        `;
        messages.appendChild(msgItem);
        newChatInput.value = "";
        console.log('abc')
    }
});