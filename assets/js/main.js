const navlink = document.querySelectorAll('.nav__link')

function activeLink(){
	navlink.forEach((item) => item.classList.remove('active-link'))
	this.classList.add('active-link')
	}

navlink.forEach((item) => item.addEventListener('click', activeLink))




function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("leagueTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.getElementsByClassName("team-row");

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[9];
      y = rows[i + 1].getElementsByTagName("TD")[9];

      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  let teamRows = table.getElementsByClassName("team-row");
  for (let j = 0; j < teamRows.length; j++) {
    teamRows[j].getElementsByTagName("TD")[0].textContent = j + 1; 
  }
}



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".stats-row").forEach(row => {
        row.style.display = "none";
    });
});

function toggleStats(row) {
    const nextRow = row.nextElementSibling;
    const arrow = row.querySelector('.mobile-arrow');

    if (nextRow && nextRow.classList.contains('stats-row')) {
        if (nextRow.style.display === 'table-row') {
            nextRow.style.display = 'none';
            arrow.textContent = '\u00a0 ˅'; 
        } else {
            nextRow.style.display = 'table-row';
            arrow.textContent = '\u00a0 ˄';
        }
    }
}
