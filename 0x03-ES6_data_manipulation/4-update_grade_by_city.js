export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const studs = listStudents.filter((student) => student.location === city);
  for (const student of studs) {
    student.grade = 'N/A';
  }
  const newStuds = studs.map((student) => {
    const one = student;
    for (const grade of newGrades) {
      if (one.id === grade.studentId) {
        one.grade = grade.grade;
      }
    }
    return one;
  });
  return newStuds;
}
