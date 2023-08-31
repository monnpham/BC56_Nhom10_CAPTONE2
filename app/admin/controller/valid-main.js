// valid
export let valid_id = (id) => {
  if (id === "") {
    document.getElementById("id").value = "Không để trống";
    return true;
  }
  return false;
};
