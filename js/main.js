function check(button) {
  const exercise = button.parentElement;
  const inputs = exercise.querySelectorAll("input");
  const result = exercise.querySelector(".result");

  const xCorrect = Number(exercise.dataset.x);
  const yCorrect = Number(exercise.dataset.y);

  const xUser = Number(inputs[0].value);
  const yUser = Number(inputs[1].value);

  if (xUser === xCorrect && yUser === yCorrect) {
    result.textContent = "✅ Correcto";
    result.className = "result ok";
    console.log("✅ Correcto");
    console.log("result ok");
  } else {
    result.textContent = "❌ Revisa la solución";
    result.className = "result error";
    console.log("❌ Revisa la solución");
    console.log("result error");
  }
}
