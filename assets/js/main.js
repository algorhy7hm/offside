const navlink = document.querySelectorAll('.nav__link')

function activeLink(){
	navlink.forEach((item) => item.classList.remove('active-link'))
	this.classList.add('active-link')
	}

navlink.forEach((item) => item.addEventListener('click', activeLink))

function sortTable() {
    var table, rows, switching, i, shouldSwitch;
    table = document.getElementById("leagueTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = Array.from(table.getElementsByClassName("team-row")); 

        for (i = 0; i < rows.length - 1; i++) {
            shouldSwitch = false;
            let teamRow1 = rows[i];
            let teamRow2 = rows[i + 1];

            let statsRow1 = teamRow1.nextElementSibling.classList.contains('stats-row') ? teamRow1.nextElementSibling : null;
            let statsRow2 = teamRow2.nextElementSibling.classList.contains('stats-row') ? teamRow2.nextElementSibling : null;

            let x = Number(teamRow1.getElementsByTagName("TD")[9].innerHTML);
            let y = Number(teamRow2.getElementsByTagName("TD")[9].innerHTML);

            if (x < y) {
                shouldSwitch = true;
            } else if (x === y) {
                x = Number(teamRow1.getElementsByTagName("TD")[8].innerHTML);
                y = Number(teamRow2.getElementsByTagName("TD")[8].innerHTML);

                if (x < y) {
                    shouldSwitch = true;
                } else if (x === y) {
                    x = Number(teamRow1.getElementsByTagName("TD")[6].innerHTML);
                    y = Number(teamRow2.getElementsByTagName("TD")[6].innerHTML);

                    if (x < y) {
                        shouldSwitch = true;
                    }
                }
            }

            if (shouldSwitch) {
                let parent = teamRow1.parentNode;

               
                parent.insertBefore(teamRow2, teamRow1);
                if (statsRow2) {
                    parent.insertBefore(statsRow2, teamRow1);
                }

               
                if (statsRow1) {
                    parent.insertBefore(teamRow1, statsRow2 ? statsRow2.nextSibling : teamRow2.nextSibling);
                    parent.insertBefore(statsRow1, teamRow1.nextSibling);
                } else {
                    parent.insertBefore(teamRow1, statsRow2 ? statsRow2.nextSibling : teamRow2.nextSibling);
                }

                switching = true;
                break;
            }
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
    sortTable();
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
