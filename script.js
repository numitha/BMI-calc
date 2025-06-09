function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid values.";
    document.getElementById("result").className = "";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiFixed = bmi.toFixed(8);

  let category = "";
  let colorClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    colorClass = "orange";
  } else if (bmi < 25) {
    category = "Normal";
    colorClass = "green";
  } else if (bmi < 30) {
    category = "Overweight";
    colorClass = "red";
  } else {
    category = "Obese";
    colorClass = "orange";
  }

  document.getElementById("result").innerHTML = `BMI: ${bmiFixed}<br>Category: ${category}`;
  document.getElementById("result").className = colorClass;
}
