function nameSearch() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("name");
	filter = input.value.toUpperCase();
	table = document.getElementById("tbl");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[0];
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
	   tr[i].style.display = "";
	   } else {
	   tr[i].style.display = "none";
			}
		}
	}
}
function teamSearch() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("team");
	filter = input.value.toUpperCase();
	table = document.getElementById("tbl");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[4];
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
	   tr[i].style.display = "";
	   } else {
	   tr[i].style.display = "none";
			}
		}
	}
}
function posSearch() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("pos");
  filter = input.value.toUpperCase();
  table = document.getElementById("tbl");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}