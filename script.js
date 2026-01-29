let queue = [];
let maxSize = 5;

function displayQueue() {
    let q = document.getElementById("queue");
    q.innerHTML = "";

    queue.forEach(value => {
        let box = document.createElement("div");
        box.className = "box";
        box.innerText = value;
        q.appendChild(box);
    });
}

function enqueue() {
    let val = document.getElementById("value").value;

    if (val === "") return;

    if (queue.length == maxSize) {
        document.getElementById("status").innerText = "⚠ Queue Overflow";
        return;
    }

    queue.push(val);
    document.getElementById("status").innerText = "Inserted " + val;
    document.getElementById("value").value = "";
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
