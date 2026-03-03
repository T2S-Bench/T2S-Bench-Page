function formatScore(value) {
  if (typeof value === 'number' && !isNaN(value)) {
    return value.toFixed(2);
  }
  return value;
}

function generateTable() {
  var data = score_table
    .slice()
    .sort((a, b) => b.Overall_F1 - a.Overall_F1); // Sort by Overall F1 desc

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Family</strong></td>
          <td class="js-sort"><strong>Source</strong></td>
          <td class="js-sort"><strong>Date</strong></td>
          <td class="js-sort-number"><strong>Overall (EM)</strong></td>
          <td class="js-sort-number"><strong>Overall (F1)</strong></td>
          <td class="js-sort-number"><strong>CS. (EM)</strong></td>
          <td class="js-sort-number"><strong>CS. (F1)</strong></td>
          <td class="js-sort-number"><strong>Eco. (EM)</strong></td>
          <td class="js-sort-number"><strong>Eco. (F1)</strong></td>
          <td class="js-sort-number"><strong>Env. (EM)</strong></td>
          <td class="js-sort-number"><strong>Env. (F1)</strong></td>
          <td class="js-sort-number"><strong>Life. (EM)</strong></td>
          <td class="js-sort-number"><strong>Life. (F1)</strong></td>
          <td class="js-sort-number"><strong>Phy. (EM)</strong></td>
          <td class="js-sort-number"><strong>Phy. (F1)</strong></td>
          <td class="js-sort-number"><strong>Soc. (EM)</strong></td>
          <td class="js-sort-number"><strong>Soc. (F1)</strong></td>
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
    table += `<td><b class="${highlight}">${entry.Model}</b></td>`;
    table += `<td>${familyLogo}</td>`;
    table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
    table += `<td>${entry.Date}</td>`;
    table += `<td><b class="${highlight}">${formatScore(entry.Overall_EM)}</b></td>`;
    table += `<td><b class="${highlight}">${formatScore(entry.Overall_F1)}</b></td>`;
    table += `<td>${formatScore(entry.CS_EM)}</td>`;
    table += `<td>${formatScore(entry.CS_F1)}</td>`;
    table += `<td>${formatScore(entry.Eco_EM)}</td>`;
    table += `<td>${formatScore(entry.Eco_F1)}</td>`;
    table += `<td>${formatScore(entry.Environ_EM)}</td>`;
    table += `<td>${formatScore(entry.Environ_F1)}</td>`;
    table += `<td>${formatScore(entry.Life_EM)}</td>`;
    table += `<td>${formatScore(entry.Life_F1)}</td>`;
    table += `<td>${formatScore(entry.Phy_EM)}</td>`;
    table += `<td>${formatScore(entry.Phy_F1)}</td>`;
    table += `<td>${formatScore(entry.Social_EM)}</td>`;
    table += `<td>${formatScore(entry.Social_F1)}</td>`;
    table += '</tr>';
  }

  table += '</table>';
  document.getElementById('testmini_leaderboard').innerHTML = table;
}

// Call the function when the window loads
window.onload = generateTable;
