document.getElementById("gradeForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const mathGrade = parseFloat(document.getElementById("mathGrade").value);
    const engGrade = parseFloat(document.getElementById("engGrade").value);
    const avgGrade = ((mathGrade + engGrade) / 2).toFixed(2);//取到小數點後2位
    const rowCount = document.querySelectorAll("#tableBody tr").length + 1;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${rowCount}</td><td>${mathGrade}</td><td>${engGrade}</td><td>${avgGrade}</td>`;
    document.getElementById("tableBody").appendChild(newRow);

    updateAvg();
});

function updateAvg() {
    const rows = document.querySelectorAll("#tableBody tr");
    let mathSum = 0, engSum = 0, avgSum = 0;

    rows.forEach(row => {
        const cells = row.children;
        mathSum += parseFloat(cells[1].textContent);
        engSum += parseFloat(cells[2].textContent);
        avgSum += parseFloat(cells[3].textContent);
    });

    const rowCount = rows.length;
    document.getElementById("mathAvg").textContent = (mathSum / rowCount).toFixed(2);
    document.getElementById("engAvg").textContent = (engSum / rowCount).toFixed(2);
    document.getElementById("totalAvg").textContent = (avgSum / rowCount).toFixed(2);
}

