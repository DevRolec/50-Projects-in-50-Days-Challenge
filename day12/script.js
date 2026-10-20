
const form = document.getElementById("transactionForm");

const descriptionInput =
    document.getElementById("description");

const amountInput =
    document.getElementById("amount");

const typeInput =
    document.getElementById("type");

const categoryInput =
    document.getElementById("category");

const filterInput =
    document.getElementById("filter");

const transactionList =
    document.getElementById("transactionList");

const emptyMessage =
    document.getElementById("emptyMessage");

// Load saved transactions
let transactions = [];

try {
    const saved = JSON.parse(
        localStorage.getItem("jengaTransactions") || "[]"
    );

    if (Array.isArray(saved)) {
        transactions = saved;
    }
} catch (error) {
    console.error("Unable to load transactions:", error);
}

// Format amounts in Nigerian Naira
function formatMoney(amount) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN"
    }).format(amount);
}

// Save to browser storage
function saveTransactions() {
    localStorage.setItem(
        "jengaTransactions",
        JSON.stringify(transactions)
    );
}

// Calculate financial summary
function updateSummary() {
    let income = 0;
    let expenses = 0;

    transactions.forEach(transaction => {
        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expenses += transaction.amount;
        }
    });

    const balance = income - expenses;

    document.getElementById("balance").textContent =
        formatMoney(balance);

    document.getElementById("totalIncome").textContent =
        formatMoney(income);

    document.getElementById("totalExpenses").textContent =
        formatMoney(expenses);
}

// Display transactions
function renderTransactions() {
    transactionList.innerHTML = "";

    const selectedFilter = filterInput.value;

    const filteredTransactions = transactions.filter(
        transaction => {
            return selectedFilter === "all" ||
                   transaction.type === selectedFilter;
        }
    );

    emptyMessage.style.display =
        filteredTransactions.length === 0
            ? "block"
            : "none";

    filteredTransactions.forEach(transaction => {
        const row = document.createElement("div");
        row.className = "transaction";

        const info = document.createElement("div");
        info.className = "transaction-info";

        const title = document.createElement("h4");
        title.textContent = transaction.description;

        const details = document.createElement("p");
        details.textContent =
            `${transaction.category} • ${transaction.date}`;

        info.append(title, details);

        const right = document.createElement("div");
        right.className = "transaction-right";

        const amount = document.createElement("span");

        amount.className =
            "transaction-amount " +
            (transaction.type === "income"
                ? "positive"
                : "negative");

        amount.textContent =
            (transaction.type === "income" ? "+" : "-") +
            formatMoney(transaction.amount);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute(
            "aria-label",
            `Delete ${transaction.description}`
        );

        deleteButton.addEventListener("click", () => {
            deleteTransaction(transaction.id);
        });

        right.append(amount, deleteButton);
        row.append(info, right);
        transactionList.appendChild(row);
    });
}

// Add a transaction
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);
    const type = typeInput.value;
    const category = categoryInput.value;

    if (
        !description ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        alert("Enter a description and a valid amount.");
        return;
    }

    const transaction = {
        id: crypto.randomUUID(),
        description: description,
        amount: amount,
        type: type,
        category: category,
        date: new Date().toLocaleDateString("en-NG")
    };

    transactions.unshift(transaction);

    saveTransactions();
    updateSummary();
    renderTransactions();

    form.reset();
    descriptionInput.focus();
});

// Delete transaction
function deleteTransaction(id) {
    const confirmed = confirm(
        "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    transactions = transactions.filter(
        transaction => transaction.id !== id
    );

    saveTransactions();
    updateSummary();
    renderTransactions();
}

// Filter transactions
filterInput.addEventListener(
    "change",
    renderTransactions
);

// Load the application
updateSummary();
renderTransactions();
