// Complete the function using object destructuring.

function getStudentDetails(student) {
    const { name, age, grade } = student;

    return {
        name,
        age,
        grade
    };
}

module.exports = getStudentDetails;
