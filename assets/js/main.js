
function fmtSize(bytes) {
  if (!bytes) return '';
  const units = ['B','KB','MB','GB'];
  let n = bytes, i = 0;
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++; }
  return `${n.toFixed(n >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}
function lectureCard(lec) {
  const topics = lec.topics.map(t => `<li>${t}</li>`).join('');
  const links = [
    lec.pdf ? `<a href="${lec.pdf}" download>Download PDF</a>` : '',
    lec.tex ? `<a href="${lec.tex}" download>Download TeX Source</a>` : ''
  ].filter(Boolean).join('');
  return `<article class="lecture-card" id="${lec.id}">
    <div class="lecture-no"><span>Class</span><strong>${lec.no}</strong></div>
    <div>
      <div class="kicker">Lecture ${String(lec.no).padStart(2,'0')}</div>
      <h3>${lec.title}</h3>
      <p>${lec.focus}</p>
      <ul class="clean">${topics}</ul>
      <p><strong>Lab focus:</strong> ${lec.lab}</p>
      <div class="downloads">${links}</div>
    </div>
  </article>`;
}
function codeCard(pkg) {
  const tags = (pkg.tags || []).map(t => `<span class="pill">${t}</span>`).join('');
  return `<article class="card">
    <div class="kicker">Class ${pkg.classNo}</div>
    <h3>${pkg.title}</h3>
    <p>${pkg.description}</p>
    <div class="pill-row">${tags}</div>
    <div class="downloads"><a href="${pkg.file}" download>Download ZIP ${pkg.size ? '(' + fmtSize(pkg.size) + ')' : ''}</a></div>
  </article>`;
}
function taskRow(task) {
  return `<tr>
    <td><strong>Class ${task.classNo}</strong></td>
    <td><strong>${task.title}</strong></td>
    <td>${task.deliverable}</td>
    <td>${task.emphasis}</td>
  </tr>`;
}
function setActiveNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) a.classList.add('active');
  });
}
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  if (document.querySelector('[data-lectures]')) document.querySelector('[data-lectures]').innerHTML = COURSE_DATA.lectures.map(lectureCard).join('');
  if (document.querySelector('[data-code]')) document.querySelector('[data-code]').innerHTML = COURSE_DATA.codePackages.map(codeCard).join('');
  if (document.querySelector('[data-tasks]')) document.querySelector('[data-tasks]').innerHTML = COURSE_DATA.tasks.map(taskRow).join('');
  if (document.querySelector('[data-home-lectures]')) document.querySelector('[data-home-lectures]').innerHTML = COURSE_DATA.lectures.slice(0,3).map(lectureCard).join('');
});
