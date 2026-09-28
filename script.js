/* =========================================
   STUDENT REGISTRATION & RESULT PORTAL
========================================= */


/* =========================================
   GET HTML ELEMENTS
========================================= */

const studentForm = document.getElementById("studentForm");

const studentName = document.getElementById("studentName");
const registerNumber = document.getElementById("registerNumber");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const course = document.getElementById("course");

const python = document.getElementById("python");
const java = document.getElementById("java");
const mathematics = document.getElementById("mathematics");
const networks = document.getElementById("networks");
const webTechnology = document.getElementById("webTechnology");

const resultContent = document.getElementById("resultContent");
const emptyResult = document.getElementById("emptyResult");

const alertBox = document.getElementById("alertBox");

const resetButton = document.getElementById("resetButton");


/* =========================================
   RESULT ELEMENTS
========================================= */

const resultName = document.getElementById("resultName");
const resultRegister = document.getElementById("resultRegister");
const resultEmail = document.getElementById("resultEmail");
const resultPhone = document.getElementById("resultPhone");
const resultCourse = document.getElementById("resultCourse");

const resultPython = document.getElementById("resultPython");
const resultJava = document.getElementById("resultJava");
const resultMathematics = document.getElementById("resultMathematics");
const resultNetworks = document.getElementById("resultNetworks");
const resultWebTechnology =
    document.getElementById("resultWebTechnology");

const totalMarks = document.getElementById("totalMarks");
const percentage = document.getElementById("percentage");

const resultStatus = document.getElementById("resultStatus");
const statusBox = document.getElementById("statusBox");
const statusIcon = document.getElementById("statusIcon");

const resultGrade = document.getElementById("resultGrade");


/* =========================================
   SHOW ALERT
========================================= */

function showAlert(message, type = "danger") {

    alertBox.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <i class="bi bi-${type === "success"
                ? "check-circle-fill"
                : "exclamation-triangle-fill"}"></i>
            ${message}

            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert">
            </button>
        </div>
    `;
}


/* =========================================
   VALIDATE MARK
========================================= */

function validateMark(input) {

    const value = input.value.trim();

    if (value === "") {
        input.classList.add("is-invalid");
        return false;
    }

    const mark = Number(value);

    if (Number.isNaN(mark) || mark < 0 || mark > 100) {
        input.classList.add("is-invalid");
        return false;
    }

    input.classList.remove("is-invalid");
    input.classList.add("is-valid");

    return true;
}


/* =========================================
   VALIDATE PHONE
========================================= */

function validatePhone() {

    const phoneValue = phone.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneValue)) {

        phone.classList.add("is-invalid");
        return false;

    }

    phone.classList.remove("is-invalid");
    phone.classList.add("is-valid");

    return true;
}


/* =========================================
   VALIDATE FORM
========================================= */

function validateForm() {

    let isValid = true;


    /* Student Name */

    if (studentName.value.trim() === "") {

        studentName.classList.add("is-invalid");

        isValid = false;

    } else {

        studentName.classList.remove("is-invalid");
        studentName.classList.add("is-valid");

    }


    /* Register Number */

    if (registerNumber.value.trim() === "") {

        registerNumber.classList.add("is-invalid");

        isValid = false;

    } else {

        registerNumber.classList.remove("is-invalid");
        registerNumber.classList.add("is-valid");

    }


    /* Email */

    if (
        email.value.trim() === "" ||
        !email.checkValidity()
    ) {

        email.classList.add("is-invalid");

        isValid = false;

    } else {

        email.classList.remove("is-invalid");
        email.classList.add("is-valid");

    }


    /* Phone */

    if (!validatePhone()) {
        isValid = false;
    }


    /* Course */

    if (course.value === "") {

        course.classList.add("is-invalid");

        isValid = false;

    } else {

        course.classList.remove("is-invalid");
        course.classList.add("is-valid");

    }


    /* Marks */

    const marks = [
        python,
        java,
        mathematics,
        networks,
        webTechnology
    ];

    marks.forEach(mark => {

        if (!validateMark(mark)) {
            isValid = false;
        }

    });


    return isValid;
}


/* =========================================
   GET GRADE
========================================= */

function getGrade(percentageValue) {

    if (percentageValue >= 90) {
        return "A+";
    }

    if (percentageValue >= 80) {
        return "A";
    }

    if (percentageValue >= 70) {
        return "B";
    }

    if (percentageValue >= 60) {
        return "C";
    }

    if (percentageValue >= 50) {
        return "D";
    }

    if (percentageValue >= 40) {
        return "E";
    }

    return "F";
}


/* =========================================
   CALCULATE RESULT
========================================= */

function calculateResult() {

    /* Convert marks into numbers */

    const pythonMark = Number(python.value);
    const javaMark = Number(java.value);
    const mathematicsMark = Number(mathematics.value);
    const networksMark = Number(networks.value);
    const webTechnologyMark = Number(webTechnology.value);


    /* Calculate total */

    const total =
        pythonMark +
        javaMark +
        mathematicsMark +
        networksMark +
        webTechnologyMark;


    /* Calculate percentage */

    const percentageValue = (total / 500) * 100;


    /* Pass / Fail */

    /*
       A student must score at least 40
       in every subject to pass.
    */

    const passedAllSubjects =
        pythonMark >= 40 &&
        javaMark >= 40 &&
        mathematicsMark >= 40 &&
        networksMark >= 40 &&
        webTechnologyMark >= 40;


    const passed = passedAllSubjects;


    /* Grade */

    const grade = passed
        ? getGrade(percentageValue)
        : "F";


    /* =====================================
       DISPLAY STUDENT DETAILS
    ===================================== */

    resultName.textContent =
        studentName.value.trim();

    resultRegister.textContent =
        "Register No: " + registerNumber.value.trim();

    resultEmail.textContent =
        email.value.trim();

    resultPhone.textContent =
        phone.value.trim();

    resultCourse.textContent =
        course.value;


    /* =====================================
       DISPLAY MARKS
    ===================================== */

    resultPython.textContent =
        pythonMark;

    resultJava.textContent =
        javaMark;

    resultMathematics.textContent =
        mathematicsMark;

    resultNetworks.textContent =
        networksMark;

    resultWebTechnology.textContent =
        webTechnologyMark;


    /* =====================================
       DISPLAY TOTAL & PERCENTAGE
    ===================================== */

    totalMarks.textContent =
        total;

    percentage.textContent =
        percentageValue.toFixed(2) + "%";


    /* =====================================
       DISPLAY STATUS
    ===================================== */

    if (passed) {

        resultStatus.textContent = "PASS";

        statusBox.classList.remove("status-fail");

        statusIcon.className =
            "bi bi-check-circle-fill";

    } else {

        resultStatus.textContent = "FAIL";

        statusBox.classList.add("status-fail");

        statusIcon.className =
            "bi bi-x-circle-fill";

    }


    /* =====================================
       DISPLAY GRADE
    ===================================== */

    resultGrade.textContent = grade;


    /* =====================================
       SHOW RESULT
    ===================================== */

    emptyResult.classList.add("d-none");

    resultContent.classList.remove("d-none");


    /* Success message */

    if (passed) {

        showAlert(
            "Result calculated successfully. The student has passed.",
            "success"
        );

    } else {

        showAlert(
            "Result calculated. The student has not passed all subjects.",
            "warning"
        );

    }


    /* Scroll to result on small screens */

    if (window.innerWidth < 992) {

        setTimeout(() => {

            resultContent.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 200);

    }

}


/* =========================================
   FORM SUBMIT EVENT
========================================= */

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();


    /* Validate form */

    const valid = validateForm();


    if (!valid) {

        showAlert(
            "Please correct the highlighted fields before calculating the result.",
            "danger"
        );

        return;

    }


    /* Calculate result */

    calculateResult();

});


/* =========================================
   RESET FORM
========================================= */

resetButton.addEventListener("click", function() {

    /* Remove validation classes */

    const inputs = studentForm.querySelectorAll(
        ".form-control, .form-select"
    );

    inputs.forEach(input => {

        input.classList.remove("is-valid");
        input.classList.remove("is-invalid");

    });


    /* Hide result */

    resultContent.classList.add("d-none");

    emptyResult.classList.remove("d-none");


    /* Clear alerts */

    alertBox.innerHTML = "";

});


/* =========================================
   REAL-TIME MARK VALIDATION
========================================= */

const markInputs = document.querySelectorAll(".mark-input");

markInputs.forEach(input => {

    input.addEventListener("input", function() {

        if (this.value === "") {

            this.classList.remove("is-valid");
            this.classList.remove("is-invalid");

            return;

        }

        validateMark(this);

    });

});


/* =========================================
   PHONE INPUT
========================================= */

phone.addEventListener("input", function() {

    /* Allow only numbers */

    this.value = this.value.replace(/\D/g, "");

    if (this.value.length === 10) {

        this.classList.remove("is-invalid");
        this.classList.add("is-valid");

    } else {

        this.classList.remove("is-valid");

    }

});


/* =========================================
   NAME INPUT
========================================= */

studentName.addEventListener("input", function() {

    if (this.value.trim() !== "") {

        this.classList.remove("is-invalid");
        this.classList.add("is-valid");

    } else {

        this.classList.remove("is-valid");

    }

});


/* =========================================
   REGISTER NUMBER INPUT
========================================= */

registerNumber.addEventListener("input", function() {

    if (this.value.trim() !== "") {

        this.classList.remove("is-invalid");
        this.classList.add("is-valid");

    } else {

        this.classList.remove("is-valid");

    }

});


/* =========================================
   EMAIL INPUT
========================================= */

email.addEventListener("input", function() {

    if (this.checkValidity() && this.value.trim() !== "") {

        this.classList.remove("is-invalid");
        this.classList.add("is-valid");

    } else {

        this.classList.remove("is-valid");

    }

});


/* =========================================
   COURSE CHANGE
========================================= */

course.addEventListener("change", function() {

    if (this.value !== "") {

        this.classList.remove("is-invalid");
        this.classList.add("is-valid");

    } else {

        this.classList.remove("is-valid");

    }

});