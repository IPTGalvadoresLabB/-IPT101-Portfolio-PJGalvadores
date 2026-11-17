const personalInfo = {
  studentName: "Galvadores, Prince Joseph I.",
  Number: 6710,
  Program: "Bachelor of Science in Information Technology",
  yearLevel: "2",

  enrolledSubjects: {
    subject1: { subjectTitle: "IPT", units: 3, finalGrade: 80 },
    subject2: { subjectTitle: "App Dev", units: 3, finalGrade: 88 },
    subject3: { subjectTitle: "Pathfit 4", units: 2, finalGrade: 87 },
    subject4: { subjectTitle: "Networking 1", units: 3, finalGrade: 89 },
    subject5: {
      subjectTitle: "Event Driven Programming",
      units: 3,
      finalGrade: 92,
    },
    subject6: { subjectTitle: "Arts Appreciation", units: 3, finalGrade: 80 },
    subject7: { subjectTitle: "STS", units: 3, finalGrade: 85 },
    subject8: { subjectTitle: "Work Education", units: 0, finalGrade: 93 },
    subject9: { subjectTitle: "Colloquium", units: 0, finalGrade: 90 },
  },
};

const s1 = personalInfo.enrolledSubjects.subject1;
const s2 = personalInfo.enrolledSubjects.subject2;
const s3 = personalInfo.enrolledSubjects.subject3;
const s4 = personalInfo.enrolledSubjects.subject4;
const s5 = personalInfo.enrolledSubjects.subject5;
const s6 = personalInfo.enrolledSubjects.subject6;
const s7 = personalInfo.enrolledSubjects.subject7;
const s8 = personalInfo.enrolledSubjects.subject8;
const s9 = personalInfo.enrolledSubjects.subject9;

const totalUnits =
  s1.units +
  s2.units +
  s3.units +
  s4.units +
  s5.units +
  s6.units +
  s7.units +
  s8.units +
  s9.units;

const totalWeightedGrade =
  s1.finalGrade * s1.units +
  s2.finalGrade * s2.units +
  s3.finalGrade * s3.units +
  s4.finalGrade * s4.units +
  s5.finalGrade * s5.units +
  s6.finalGrade * s6.units +
  s7.finalGrade * s7.units +
  s8.finalGrade * s8.units +
  s9.finalGrade * s9.units;

const computedGWA = (totalWeightedGrade / totalUnits).toFixed(2);

let computedLetterGrade = "F (Failed)";

if (computedGWA >= 98 && computedGWA <= 100) {
  computedLetterGrade = "A";
} else if (computedGWA >= 94 && computedGWA < 98) {
  computedLetterGrade = "A-";
} else if (computedGWA >= 90 && computedGWA < 94) {
  computedLetterGrade = "B+";
} else if (computedGWA >= 87 && computedGWA < 90) {
  computedLetterGrade = "B";
} else if (computedGWA >= 83 && computedGWA < 87) {
  computedLetterGrade = "B-";
} else if (computedGWA >= 80 && computedGWA < 83) {
  computedLetterGrade = "C+";
} else if (computedGWA >= 77 && computedGWA < 80) {
  computedLetterGrade = "C";
} else if (computedGWA >= 75 && computedGWA < 77) {
  computedLetterGrade = "D";
}

personalInfo.gwa = computedGWA;
personalInfo.letterGrade = computedLetterGrade;

console.log(`Name: ${personalInfo.studentName}`);
console.log(`General Weighted Average: ${personalInfo.gwa}`);
console.log(`Letter Grade: ${personalInfo.letterGrade}`);