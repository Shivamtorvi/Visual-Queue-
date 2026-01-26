let queue = [];
let maxSize = 5;

function displayQueue() {
    let q = document.getElementById("queue");
    q.innerHTML = "";

    queue.forEach(value => {
        let box = document.createElement("div");
        box.className = "box";
        box.setAttribute("data-value", value);
        q.appendChild(box);
    });
}

function enqueue() {
    let val = document.getElementById("value").value;

    if (queue.length == maxSize) {
        document.getElementById("status").innerText = "Queue Overflow";
        return;
    }

    if (val === "") return;

    queue.push(val);
    document.getElementById("status").innerText = "Inserted " + val;
    displayQueue();
}

function dequeue() {
    if (queue.length == 0) {
        document.getElementById("status").innerText = "⚠ Queue Underflow";
        return;
    }

    let removed = queue.shift();
    document.getElementById("status").innerText = "Removed " + removed;
    displayQueue();
}
