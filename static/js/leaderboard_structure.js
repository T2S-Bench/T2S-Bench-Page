function formatStructureScore(value) {
  if (typeof value === 'number' && !isNaN(value)) {
    return value.toFixed(2);
  }
  return value;
}

function generateStructureTable() {
  var data = score_table_structure
    .slice()
    .sort((a, b) => b.Overall_Link - a.Overall_Link); // Sort by Overall Link desc

  var table = '<table class="js-sort-table" id="results_structure">';
  table += `<tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Family</strong></td>
          <td class="js-sort"><strong>Source</strong></td>
          <td class="js-sort"><strong>Date</strong></td>
          <td class="js-sort-number"><strong>Overall (Node)</strong></td>
          <td class="js-sort-number"><strong>Overall (Link)</strong></td>
          <td class="js-sort-number"><strong>CS. (Node)</strong></td>
          <td class="js-sort-number"><strong>CS. (Link)</strong></td>
          <td class="js-sort-number"><strong>Eco. (Node)</strong></td>
          <td class="js-sort-number"><strong>Eco. (Link)</strong></td>
          <td class="js-sort-number"><strong>Env. (Node)</strong></td>
          <td class="js-sort-number"><strong>Env. (Link)</strong></td>
          <td class="js-sort-number"><strong>Life. (Node)</strong></td>
          <td class="js-sort-number"><strong>Life. (Link)</strong></td>
          <td class="js-sort-number"><strong>Phy. (Node)</strong></td>
          <td class="js-sort-number"><strong>Phy. (Link)</strong></td>
          <td class="js-sort-number"><strong>Soc. (Node)</strong></td>
          <td class="js-sort-number"><strong>Soc. (Link)</strong></td>
      </tr>`;

  var topRanks = new Set([1, 2, 3]);

  for (var i = 0; i < data.length; i++) {
    var entry = data[i];
    var rank = i + 1;
    var highlight = topRanks.has(rank) ? 'best-score-text' : '';
    var familyLogo = entry.FamilyLogo
      ? `<img src="static/images/logo/${entry.FamilyLogo}" alt="${entry.Family} logo" title="${entry.Family}" style="height: 18px; vertical-align: middle;">`
      : `<span>${entry.Family || '-'}</span>`;

    table += '<tr>';
    table += `<td>${rank}</td>`;
    var medal = rank === 1 ? ' 🥇' : rank === 2 ? ' 🥈' : rank === 3 ? ' 🥉' : '';
    table += `<td><b class="${highlight}">${entry.Model}${medal}</b></td>`;
    table += `<td>${familyLogo}</td>`;
    table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
    table += `<td>${entry.Date}</td>`;
    table += `<td><b class="${highlight}">${formatStructureScore(entry.Overall_Node)}</b></td>`;
    table += `<td><b class="${highlight}">${formatStructureScore(entry.Overall_Link)}</b></td>`;
    table += `<td>${formatStructureScore(entry.CS_Node)}</td>`;
    table += `<td>${formatStructureScore(entry.CS_Link)}</td>`;
    table += `<td>${formatStructureScore(entry.Eco_Node)}</td>`;
    table += `<td>${formatStructureScore(entry.Eco_Link)}</td>`;
    table += `<td>${formatStructureScore(entry.Environ_Node)}</td>`;
    table += `<td>${formatStructureScore(entry.Environ_Link)}</td>`;
    table += `<td>${formatStructureScore(entry.Life_Node)}</td>`;
    table += `<td>${formatStructureScore(entry.Life_Link)}</td>`;
    table += `<td>${formatStructureScore(entry.Phy_Node)}</td>`;
    table += `<td>${formatStructureScore(entry.Phy_Link)}</td>`;
    table += `<td>${formatStructureScore(entry.Social_Node)}</td>`;
    table += `<td>${formatStructureScore(entry.Social_Link)}</td>`;
    table += '</tr>';
  }

  table += '</table>';
  document.getElementById('structure_leaderboard').innerHTML = table;
}

window.addEventListener('load', generateStructureTable);

