function bmiCalculator() {

  let size = document.getElementById("size").value;
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;

  let sizemeter = size / 100
  let bmi = weight / (sizemeter * sizemeter)

  let resultarea = document.getElementById("result");

  console.log(bmi);

  if (age >= 19 && age <= 24) {
    if (bmi  >= 19 && bmi <= 24) {
      resultarea.innerHTML = "Sie haben ein Normalgewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi < 19) {
      resultarea.innerHTML = "Sie haben ein Untergewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi > 24) {
      resultarea.innerHTML = "Sie haben ein Übergewicht mit einem BMI von " + Math.round(bmi)
    }
  }

  if (age >= 25 && age <= 34) {
    if (bmi  >= 20 && bmi <= 25) {
      resultarea.innerHTML = "Sie haben ein Normalgewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi < 20) {
      resultarea.innerHTML = "Sie haben ein Untergewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi > 25) {
      resultarea.innerHTML = "Sie haben ein Übergewicht mit einem BMI von " + Math.round(bmi)
    }
  }

  if (age >= 35 && age <= 44) {
    if (bmi  >= 21 && bmi <= 26) {
      resultarea.innerHTML = "Sie haben ein Normalgewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi < 21) {
      resultarea.innerHTML = "Sie haben ein Untergewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi > 26) {
      resultarea.innerHTML = "Sie haben ein Übergewicht mit einem BMI von " + Math.round(bmi)
    }
  }

  if (age >= 45 && age <= 54) {
    if (bmi  >= 22 && bmi <= 27) {
      resultarea.innerHTML = "Sie haben ein Normalgewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi < 22) {
      resultarea.innerHTML = "Sie haben ein Untergewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi > 27) {
      resultarea.innerHTML = "Sie haben ein Übergewicht mit einem BMI von " + Math.round(bmi)
    }
  }

  if (age >= 55 && age <= 65) {
    if (bmi  >= 23 && bmi <= 28) {
      resultarea.innerHTML = "Sie haben ein Normalgewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi < 23) {
      resultarea.innerHTML = "Sie haben ein Untergewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi > 28) {
      resultarea.innerHTML = "Sie haben ein Übergewicht mit einem BMI von " + Math.round(bmi)
    }
  }

  if (age > 65) {
    if (bmi  >= 24 && bmi <= 29) {
      resultarea.innerHTML = "Sie haben ein Normalgewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi < 24) {
      resultarea.innerHTML = "Sie haben ein Untergewicht mit einem BMI von " + Math.round(bmi)
    } else if (bmi > 29) {
      resultarea.innerHTML = "Sie haben ein Übergewicht mit einem BMI von " + Math.round(bmi)
    }
  }


}
