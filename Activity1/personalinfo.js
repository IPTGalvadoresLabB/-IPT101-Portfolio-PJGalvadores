const bsit_student = [
  {
    studentName: "Galvadores, Prince Joseph I.",
    number: 6710,
    Program: "Bachelor of Science in Information Technology",
    yearLevel: "2",

    enrolledSubjects: {
      subject1: { subjectTitle: "IPT", units: 3, finalGrade: 99 },
      subject2: { subjectTitle: "App Dev", units: 3, finalGrade: 98 },
      subject3: { subjectTitle: "Pathfit 4", units: 2, finalGrade: 98 },
      subject4: { subjectTitle: "Networking 1", units: 3, finalGrade: 98 },
      subject5: { subjectTitle: "Event Driven Programming", units: 3,finalGrade: 98,},
      subject6: { subjectTitle: "Arts Appreciation", units: 3, finalGrade: 99 },
      subject7: { subjectTitle: "STS", units: 3, finalGrade: 97 },
      subject8: { subjectTitle: "Work Education", units: 0, finalGrade: 98 },
      subject9: { subjectTitle: "Colloquium", units: 0, finalGrade: 97 },
    },
  },

  {
    studentName: "Sahur, Triple T.",
    number: 6767,
    Program: "Bachelor of Science in Information Technology",
    yearLevel: "2",
    enrolledSubjects: {
      subject1: { subjectTitle: "IPT", units: 3, finalGrade: 90 },
      subject2: { subjectTitle: "App Dev", units: 3, finalGrade: 88 },
      subject3: { subjectTitle: "Pathfit 4", units: 2, finalGrade: 81 },
      subject4: { subjectTitle: "Networking 1", units: 3, finalGrade: 85 },
      subject5: { subjectTitle: "Event Driven Programming", units: 3, finalGrade: 91,},
      subject6: { subjectTitle: "Arts Appreciation", units: 3, finalGrade: 87 },
    },
  },

  {
    studentName: "Fukico, Kattie F.",
    number: 6790,
    Program: "Bachelor of Science in Information Technology",
    yearLevel: "2",
    enrolledSubjects: {
      subject5: { subjectTitle: "Event Driven Programming", units: 3,finalGrade: 89,},
      subject6: { subjectTitle: "Arts Appreciation", units: 3, finalGrade: 86 },
      subject7: { subjectTitle: "STS", units: 3, finalGrade: 83 },
      subject8: { subjectTitle: "Work Education", units: 0, finalGrade: 93 },
      subject9: { subjectTitle: "Colloquium", units: 0, finalGrade: 84 },
    } 
  }
]

function computedLetterGrade(student) {
  const subjects = Object.values(student.enrolledSubjects);
  const totalUnits = subjects.reduce((total, subject) => total + subject.units, 0);
  const weightedGrade = subjects.reduce(
    (total, subject) => total + subject.finalGrade * subject.units,
    0,
  );

  const gwa = totalUnits === 0 ? 0 : weightedGrade / totalUnits;

  let letterGrade = "F (Failed)";
  if (gwa >= 98) letterGrade = "A";
  else if (gwa >= 94) letterGrade = "A-";
  else if (gwa >= 90) letterGrade = "B+";
  else if (gwa >= 87) letterGrade = "B";
  else if (gwa >= 83) letterGrade = "B-";
  else if (gwa >= 80) letterGrade = "C+";
  else if (gwa >= 77) letterGrade = "C";
  else if (gwa >= 75) letterGrade = "D";

  student.gwa = gwa.toFixed(2);
  student.letterGrade = letterGrade;
}

bsit_student.forEach((student, index) => {
  computedLetterGrade(student);
  console.log(`Student ${index + 1}: ${student.studentName}`);
  console.log(`General Weighted Average: ${student.gwa}`);
  console.log(`Letter Grade: ${student.letterGrade}`);
  console.log("==========================");
});
