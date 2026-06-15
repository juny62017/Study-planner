const subjectForm = document.querySelector("form");
const subjectInput = document.getElementById("subject");
const examDateInput = document.getElementById("exam-date");

const subjectsSection = document.querySelector(".subjects-section");

subjectForm.addEventListener("submit", function(e){
    e.preventDefault();

    const subjectName = subjectInput.value.trim();
    const examDate = examDateInput.value;

    if(subjectName === ""){
        alert("Please enter a subject name.");
        return;
    }

    const emptyState = document.querySelector(".empty-state");

    if(emptyState){
        emptyState.remove();
    }

    const subjectCard = document.createElement("div");
    subjectCard.classList.add("subject-card");

    subjectCard.innerHTML = `
        <h3>${subjectName}</h3>
        <p>Exam Date: ${examDate || "Not Set"}</p>
        <button class="delete-btn">Remove</button>
    `;

    const deleteButton = subjectCard.querySelector(".delete-btn");

    deleteButton.addEventListener("click", function(){
        subjectCard.remove();

        const cards = document.querySelectorAll(".subject-card");

        if(cards.length === 0){
            const emptyMessage = document.createElement("div");
            emptyMessage.classList.add("empty-state");
            emptyMessage.innerHTML = "<p>No subjects added yet.</p>";

            subjectsSection.appendChild(emptyMessage);
        }
    });

    subjectsSection.appendChild(subjectCard);

    subjectInput.value = "";
    examDateInput.value = "";
});