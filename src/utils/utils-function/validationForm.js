function validationForm(form) {
  const values = Object.values(form);
  if (values.includes("")) return false;
  return true;
}
export default validationForm;
