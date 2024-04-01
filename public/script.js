const socket = io();

const inputtedname = window.prompt("What is your name?", "") || "Guest";
const namearea = document.getElementById("name");
namearea.innerHTML = `Username: ${inputtedname}`;

socket.on("updateMessage", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  document.getElementById("messages").appendChild(li);
});

const sendMessage = () => {
  const message = document.getElementById("message").value;
  socket.emit("sendMessage", `${inputtedname}: "${message}"`);
  document.getElementById("message").value = "";
};
