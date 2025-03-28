function showTab(index) {
  const tabs = document.querySelectorAll('.form-section');
  const buttons = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));
  tabs[index].classList.add('active');
  buttons[index].classList.add('active');
}


// form script end


// chatbot script start

document.getElementById("queryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const keyword = document.getElementById("queryInput").value.trim();

    if (keyword !== "") {
      // Show keyword in result box
      document.getElementById("displayKeyword").innerText = `"${keyword}"`;

      // Display result box
      document.getElementById("resultBox").classList.remove("d-none");

      // Sample table data
      const data = [
        { id: 1, category: "Budgeting", details: "Helps you manage your expenses." },
        { id: 2, category: "Investments", details: "Find better opportunities to invest." },
        { id: 3, category: "Tax Planning", details: "Maximize deductions and benefits." }
      ];

      let tableBody = "";
      data.forEach(item => {
        tableBody += `
          <tr>
            <td>${item.id}</td>
            <td>${item.category}</td>
            <td>${item.details}</td>
          </tr>
        `;
      });

      document.getElementById("resultTable").innerHTML = tableBody;
    }
  });