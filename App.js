const messages = document.getElementById("messages");
const textbox = document.getElementById("textbox");
const button = document.getElementById("button");


button.addEventListener("click", function(){
    const newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
})