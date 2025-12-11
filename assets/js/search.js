// assets/js/search.js
// Minimal search UI wiring. Ensure you have an input with id="searchbox" and a div id="searchresults" in your layout or a search page.


async function initSearch() {
try {
const res = await fetch('/search.json');
const docs = await res.json();


// build lunr index
window.searchIndex = lunr(function () {
this.ref('id');
this.field('title');
this.field('content');


docs.forEach(function (doc) {
this.add(doc);
}, this);
});


window.searchDocs = {};
docs.forEach(d => { window.searchDocs[d.id] = d; });
} catch (err) {
console.error('Search init error', err);
}
}


function doSearch(query) {
if (!window.searchIndex) return [];
const results = window.searchIndex.search(query);
return results.map(r => window.searchDocs[r.ref]);
}


// attach to DOM if exists
document.addEventListener('DOMContentLoaded', function () {
initSearch();
const input = document.getElementById('searchbox');
if (!input) return;
const out = document.getElementById('searchresults');


input.addEventListener('input', function (e) {
const q = e.target.value.trim();
if (!q) { out.innerHTML = ''; return; }
const hits = doSearch(q);
out.innerHTML = hits.map(h => `\n <div class=\"hit\">\n <a href=\"${h.url}\">${h.title}</a>\n <p>${h.content.slice(0, 200)}...</p>\n </div>`).join('');
});
});
