
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
	  td = tr[i].getElementsByTagName("td")[3];
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


function dfs_injuryFilter(obj) {
    var table, tr, td, td_hot, td_cold;
    table = document.getElementById("tbl");
    tr = table.getElementsByTagName("tr");

    if ((document.getElementById('filterHot').checked) && (obj.checked)) {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
            td_hot = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if ((td.innerHTML.indexOf("GTD")  > -1) || (td.innerHTML.indexOf("O")  > -1)) {
                    tr[i].style.display = "none";
                } else if (td_hot.innerHTML.indexOf("🔥")  > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } else if ((document.getElementById('filterCold').checked) && (obj.checked)) {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
            td_cold = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if ((td.innerHTML.indexOf("GTD")  > -1) || (td.innerHTML.indexOf("O")  > -1)) {
                    tr[i].style.display = "none";
                } else if (td_cold.innerHTML.indexOf("️❄️")  > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } else if (obj.checked){
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
            if (td) {
                if (td.innerHTML.indexOf("GTD")  > -1){
                    tr[i].style.display = "none";

                } else if (td.innerHTML.indexOf("O")  > -1){
                    tr[i].style.display = "none";
                } else {
                    tr[i].style.display = "";
                }
            }
        }
    } else if (document.getElementById('filterHot').checked){
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.indexOf("🔥")  > -1){
                    tr[i].style.display = "";
                } else {
                     tr[i].style.display = "none";
                }
            }
        }
    } else if (document.getElementById('filterCold').checked){
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.indexOf("️❄️")  > -1){
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
             }
         }
    } else {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
            if (td) {
                tr[i].style.display = "";
            }
        }
    }

}

function filterHot(obj) {
    var table, tr, td, td_inj;
    table = document.getElementById("tbl");
    tr = table.getElementsByTagName("tr");
    if ((document.getElementById('dfs_injured').checked) && (obj.checked)) {
        document.getElementById('filterCold').checked = false
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            td_inj = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
            if (td) {
                if ((td_inj.innerHTML.indexOf("GTD")  > -1) || (td_inj.innerHTML.indexOf("O")  > -1)) {
                    tr[i].style.display = "none";
                } else if (td.innerHTML.indexOf("🔥")  > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } else if (obj.checked){
        document.getElementById('filterCold').checked = false
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.indexOf("🔥")  > -1){
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } else if (document.getElementById('dfs_injured').checked){
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
            if (td) {
                if (td.innerHTML.indexOf("GTD")  > -1){
                    tr[i].style.display = "none";
                } else if (td.innerHTML.indexOf("O")  > -1){
                    tr[i].style.display = "none";
                } else {
                    tr[i].style.display = "";
                }
            }
        }
    } else {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
            if (td) {
                tr[i].style.display = "";

            }
        }
    }
}

function filterCold(obj) {
    var table, tr, td, td_inj;
        table = document.getElementById("tbl");
        tr = table.getElementsByTagName("tr");
        if ((document.getElementById('dfs_injured').checked) && (obj.checked)) {
            document.getElementById('filterHot').checked = false
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                td_inj = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
                if (td) {
                    if ((td_inj.innerHTML.indexOf("GTD")  > -1) || (td_inj.innerHTML.indexOf("O")  > -1)) {
                        tr[i].style.display = "none";
                    } else if (td.innerHTML.indexOf("️❄️")  > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        } else if (obj.checked){
            document.getElementById('filterHot').checked = false
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    if (td.innerHTML.indexOf("️❄️")  > -1){
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        } else if (document.getElementById('dfs_injured').checked){
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
                if (td) {
                    if (td.innerHTML.indexOf("GTD")  > -1){
                        tr[i].style.display = "none";
                    } else if (td.innerHTML.indexOf("O")  > -1){
                        tr[i].style.display = "none";
                    } else {
                        tr[i].style.display = "";
                    }
                }
            }
        } else {
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
                if (td) {
                    tr[i].style.display = "";

                }
            }
        }
    }

function non_dfs_injuryFilter(obj){
    var table, tr, td, t
    table = document.getElementById("tbl");
    tr = table.getElementsByTagName("tr");

    if (obj.checked){
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
            if (td) {
                if (td.innerHTML.indexOf("GTD")  > -1){
                    tr[i].style.display = "none";
                } else if (td.innerHTML.indexOf("O")  > -1){
                    tr[i].style.display = "none";
                } else {
                    tr[i].style.display = "";
                }
            }
        }
    } else {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[table.rows[1].cells.length - 3];
            if (td) {
                tr[i].style.display = "";
            }
        }
    }
}