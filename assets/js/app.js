const App = {
  state: {
    theme: 'light',
    page: 'dashboard',
    query: '',
    selfDeclare: {
      checklist: [
        { id: 'sd1', text: 'KTP (Kartu Tanda Penduduk)', checked: false },
        { id: 'sd2', text: 'KK (Kartu Keluarga)', checked: false },
        { id: 'sd3', text: 'NPWP (jika ada)', checked: false },
        { id: 'sd4', text: 'Akta Pendirian Usaha (jika ada)', checked: false },
        { id: 'sd5', text: 'Surat Keterangan Domisili Usaha', checked: false },
        { id: 'sd6', text: 'Pas Foto 3x4 (2 lembar)', checked: false },
      ],
      simulation: { omzet: '', karyawan: '', modal: '' },
      notes: '',
    },
    reguler: {
      checklist: [
        { id: 'rg1', text: 'Daftar ke LPH terafiliasi MUI', checked: false },
        { id: 'rg2', text: 'Audit halal oleh auditor LPH', checked: false },
        { id: 'rg3', text: 'Sidang fatwa oleh Komisi Fatwa MUI', checked: false },
        { id: 'rg4', text: 'Terbit Sertifikat Halal', checked: false },
      ],
      alur: [
        { label: 'Pendaftaran', desc: 'Daftar via SIHALAL', status: 'done' },
        { label: 'Dokumen', desc: 'Upload persyaratan', status: 'done' },
        { label: 'Audit LPH', desc: 'Audit langsung oleh LPH', status: 'active' },
        { label: 'Fatwa MUI', desc: 'Sidang komisi fatwa', status: 'pending' },
        { label: 'Terbit SH', desc: 'Sertifikat Halal terbit', status: 'pending' },
      ],
      monitoring: [
        { tahap: 'Pendaftaran', status: 'Selesai', tgl: '01-06-2026', catatan: 'Berkas lengkap' },
        { tahap: 'Verifikasi', status: 'Selesai', tgl: '05-06-2026', catatan: 'Data valid' },
        { tahap: 'Audit', status: 'Proses', tgl: '-', catatan: 'Menunggu jadwal audit' },
      ],
      notes: '',
    },
    fasilitasi: {
      checklist: [
        { id: 'fs1', text: 'Cek informasi program di OSS', checked: false },
        { id: 'fs2', text: 'Siapkan proposal sederhana', checked: false },
        { id: 'fs3', text: 'Daftar melalui dinas terkait', checked: false },
      ],
      programs: [
        { nama: 'BPUM (BLT UMKM)', sumber: 'Kemenkop UKM', status: 'Tutup' },
        { nama: 'KUR (Kredit Usaha Rakyat)', sumber: 'Perbankan', status: 'Dibuka' },
        { nama: 'Sertifikasi Halal Gratis (SEHATI)', sumber: 'BPJPH', status: 'Dibuka' },
        { nama: 'Pelatihan UMKM Naik Kelas', sumber: 'Dinas Koperasi', status: 'Pendaftaran' },
      ],
      trackings: [
        { program: 'SEHATI', tglDaftar: '10-05-2026', status: 'Proses Verifikasi' },
      ],
      notes: '',
    },
    p3h: {
      checklist: [
        { id: 'p1', text: 'Mengikuti Bimtek P3H', checked: false },
        { id: 'p2', text: 'Lulus Ujian Kompetensi P3H', checked: false },
        { id: 'p3', text: 'Terdaftar di BPJPH sebagai P3H', checked: false },
      ],
      alur: [
        { label: 'Bimtek', desc: 'Pelatihan pendamping halal', status: 'done' },
        { label: 'Ujian', desc: 'Ujian kompetensi P3H', status: 'active' },
        { label: 'SK P3H', desc: 'Terbit SK pendamping', status: 'pending' },
        { label: 'Pendampingan', desc: 'Pendampingan ke pelaku usaha', status: 'pending' },
      ],
      regulasi: [
        { peraturan: 'UU No. 33/2014', tentang: 'Jaminan Produk Halal' },
        { peraturan: 'PP No. 39/2021', tentang: 'Penyelenggaraan JPH' },
        { peraturan: 'PMA No. 26/2019', tentang: 'Sertifikasi Halal' },
      ],
      notes: '',
    },
  },
}

function saveState() {
  try {
    localStorage.setItem('appState', JSON.stringify(App.state))
  } catch (e) { /* quota exceeded */ }
}

function loadState() {
  try {
    const saved = localStorage.getItem('appState')
    if (saved) {
      const parsed = JSON.parse(saved)
      Object.assign(App.state, parsed)
    }
  } catch (e) { /* ignore */ }
}

function getProgress(list) {
  if (!list || list.length === 0) return 0
  return Math.round((list.filter(i => i.checked).length / list.length) * 100)
}

/* ===== View Renderers ===== */

function renderDashboard() {
  const sd = App.state.selfDeclare
  const rg = App.state.reguler
  const fs = App.state.fasilitasi
  const p3 = App.state.p3h

  const sdProg = getProgress(sd.checklist)
  const rgProg = getProgress(rg.checklist)
  const fsProg = getProgress(fs.checklist)
  const p3Prog = getProgress(p3.checklist)
  const totalProg = Math.round(([sdProg, rgProg, fsProg, p3Prog].reduce((a,b)=>a+b,0))/4)

  return `
    <div class="view active" id="view-dashboard">
      <div class="view-header">
        <h1>Dashboard</h1>
        <p>Progress pengajuan perizinan UMKM & badan usaha</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">${totalProg}%</div>
          <div class="stat-label">Progress Keseluruhan</div>
          <div class="progress-bar"><div class="fill" style="width:${totalProg}%"></div></div>
        </div>
        <div class="stat-card success">
          <div class="stat-number">${sdProg}%</div>
          <div class="stat-label">Self Declare</div>
        </div>
        <div class="stat-card warning">
          <div class="stat-number">${rgProg}%</div>
          <div class="stat-label">Reguler (Halal)</div>
        </div>
        <div class="stat-card ${fsProg > 50 ? 'success' : 'danger'}">
          <div class="stat-number">${fsProg}%</div>
          <div class="stat-label">Fasilitasi</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${p3Prog}%</div>
          <div class="stat-label">Pendamping Halal</div>
        </div>
      </div>

      <div class="card">
        <h3>Checklist Dokumen Per Modul</h3>
        <div style="margin-top:0.5rem;">
          ${[
            { label: 'Self Declare', prog: sdProg, items: sd.checklist.filter(i=>i.checked).length, total: sd.checklist.length },
            { label: 'Reguler', prog: rgProg, items: rg.checklist.filter(i=>i.checked).length, total: rg.checklist.length },
            { label: 'Fasilitasi', prog: fsProg, items: fs.checklist.filter(i=>i.checked).length, total: fs.checklist.length },
            { label: 'Pendamping Halal', prog: p3Prog, items: p3.checklist.filter(i=>i.checked).length, total: p3.checklist.length },
          ].map(m => `
            <div style="margin-bottom:0.75rem;">
              <div style="display:flex;justify-content:space-between;font-size:0.85rem;">
                <span>${m.label}</span>
                <span>${m.items}/${m.total}</span>
              </div>
              <div class="progress-bar"><div class="fill" style="width:${m.prog}%"></div></div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="card">
        <h3>Deadline Pengurusan</h3>
        <ul class="deadline-list">
          <li>
            <span>Audit LPH (Reguler)</span>
            <span class="deadline-date deadline-urgent">15-06-2026</span>
          </li>
          <li>
            <span>Pendaftaran SEHATI gel. 2</span>
            <span class="deadline-date deadline-soon">30-06-2026</span>
          </li>
          <li>
            <span>Pendampingan P3H</span>
            <span class="deadline-date deadline-safe">20-07-2026</span>
          </li>
        </ul>
      </div>
    </div>`
}

function renderSelfDeclare() {
  const data = App.state.selfDeclare
  const prog = getProgress(data.checklist)
  return `
    <div class="view active" id="view-self-declare">
      <div class="view-header">
        <h1>Self Declare</h1>
        <p>Perizinan berbasis pernyataan mandiri pelaku usaha</p>
      </div>

      <div class="card">
        <h3>Progress</h3>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
        <div style="text-align:right;font-size:0.85rem;color:var(--text-secondary);">${prog}%</div>
      </div>

      <div class="card">
        <h3>Persyaratan</h3>
        <ul class="checklist" data-module="selfDeclare">
          ${data.checklist.map(item => `
            <li class="${item.checked ? 'checked' : ''}" data-id="${item.id}">
              <input type="checkbox" ${item.checked ? 'checked' : ''}>
              <span class="checklist-text">${item.text}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Simulasi Pengisian</h3>
        <label>Omzet per bulan (Rp)</label>
        <input type="text" id="sdOmzet" value="${data.simulation.omzet}" placeholder="Contoh: 50.000.000">
        <label>Jumlah karyawan</label>
        <input type="text" id="sdKaryawan" value="${data.simulation.karyawan}" placeholder="Contoh: 5">
        <label>Modal usaha (Rp)</label>
        <input type="text" id="sdModal" value="${data.simulation.modal}" placeholder="Contoh: 20.000.000">
      </div>

      <div class="card">
        <h3>Catatan Kendala</h3>
        <textarea id="sdNotes" rows="4">${data.notes}</textarea>
      </div>
    </div>`
}

function renderReguler() {
  const data = App.state.reguler
  const prog = getProgress(data.checklist)
  return `
    <div class="view active" id="view-reguler">
      <div class="view-header">
        <h1>Reguler (Sertifikasi Halal)</h1>
        <p>Alur sertifikasi halal reguler melalui LPH dan MUI</p>
      </div>

      <div class="card">
        <h3>Progress Checklist</h3>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
        <div style="text-align:right;font-size:0.85rem;color:var(--text-secondary);">${prog}%</div>
      </div>

      <div class="card">
        <h3>Checklist Reguler</h3>
        <ul class="checklist" data-module="reguler">
          ${data.checklist.map(item => `
            <li class="${item.checked ? 'checked' : ''}" data-id="${item.id}">
              <input type="checkbox" ${item.checked ? 'checked' : ''}>
              <span class="checklist-text">${item.text}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Alur LPH & Sertifikasi Halal</h3>
        <div class="timeline">
          ${data.alur.map(step => `
            <div class="timeline-item ${step.status}">
              <div class="step-label">${step.label}</div>
              <div class="step-desc">${step.desc}</div>
              <div class="step-status">${step.status === 'done' ? '&#10003; Selesai' : step.status === 'active' ? '&#9679; Proses' : '&#9672; Menunggu'}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="card">
        <h3>Monitoring Status</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Tahap</th><th>Status</th><th>Tanggal</th><th>Catatan</th></tr></thead>
            <tbody>
              ${data.monitoring.map(m => `
                <tr>
                  <td>${m.tahap}</td>
                  <td><span class="tag ${m.status === 'Selesai' ? 'tag-success' : 'tag-warning'}">${m.status}</span></td>
                  <td>${m.tgl}</td>
                  <td>${m.catatan}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="rgNotes" rows="4">${data.notes}</textarea>
      </div>
    </div>`
}

function renderFasilitasi() {
  const data = App.state.fasilitasi
  const prog = getProgress(data.checklist)
  return `
    <div class="view active" id="view-fasilitasi">
      <div class="view-header">
        <h1>Fasilitasi</h1>
        <p>Program bantuan dan fasilitasi pemerintah untuk UMKM</p>
      </div>

      <div class="card">
        <h3>Progress Checklist</h3>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
        <div style="text-align:right;font-size:0.85rem;color:var(--text-secondary);">${prog}%</div>
      </div>

      <div class="card">
        <h3>Checklist Fasilitasi</h3>
        <ul class="checklist" data-module="fasilitasi">
          ${data.checklist.map(item => `
            <li class="${item.checked ? 'checked' : ''}" data-id="${item.id}">
              <input type="checkbox" ${item.checked ? 'checked' : ''}>
              <span class="checklist-text">${item.text}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Daftar Program Bantuan</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Program</th><th>Sumber</th><th>Status</th></tr></thead>
            <tbody>
              ${data.programs.map(p => `
                <tr>
                  <td>${p.nama}</td>
                  <td>${p.sumber}</td>
                  <td><span class="tag ${p.status === 'Dibuka' ? 'tag-success' : p.status === 'Pendaftaran' ? 'tag-warning' : 'tag-danger'}">${p.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Tracking Pendaftaran</h3>
        ${data.trackings.length === 0 ? '<p style="color:var(--text-secondary);">Belum ada pendaftaran.</p>' : `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Program</th><th>Tgl Daftar</th><th>Status</th></tr></thead>
            <tbody>
              ${data.trackings.map(t => `
                <tr>
                  <td>${t.program}</td>
                  <td>${t.tglDaftar}</td>
                  <td><span class="tag tag-warning">${t.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>`}
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="fsNotes" rows="4">${data.notes}</textarea>
      </div>
    </div>`
}

function renderP3H() {
  const data = App.state.p3h
  const prog = getProgress(data.checklist)
  return `
    <div class="view active" id="view-p3h">
      <div class="view-header">
        <h1>Pendamping Halal (P3H)</h1>
        <p>Pendamping Proses Produk Halal</p>
      </div>

      <div class="card">
        <h3>Progress Checklist</h3>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
        <div style="text-align:right;font-size:0.85rem;color:var(--text-secondary);">${prog}%</div>
      </div>

      <div class="card">
        <h3>Persyaratan P3H</h3>
        <ul class="checklist" data-module="p3h">
          ${data.checklist.map(item => `
            <li class="${item.checked ? 'checked' : ''}" data-id="${item.id}">
              <input type="checkbox" ${item.checked ? 'checked' : ''}>
              <span class="checklist-text">${item.text}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Alur Sertifikasi Pendamping</h3>
        <div class="timeline">
          ${data.alur.map(step => `
            <div class="timeline-item ${step.status}">
              <div class="step-label">${step.label}</div>
              <div class="step-desc">${step.desc}</div>
              <div class="step-status">${step.status === 'done' ? '&#10003; Selesai' : step.status === 'active' ? '&#9679; Proses' : '&#9672; Menunggu'}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="card">
        <h3>Referensi Regulasi</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Peraturan</th><th>Tentang</th></tr></thead>
            <tbody>
              ${data.regulasi.map(r => `
                <tr><td>${r.peraturan}</td><td>${r.tentang}</td></tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="p3Notes" rows="4">${data.notes}</textarea>
      </div>
    </div>`
}

/* ===== Navigation ===== */

const routes = {
  dashboard: { title: 'Dashboard', render: renderDashboard },
  'self-declare': { title: 'Self Declare', render: renderSelfDeclare },
  reguler: { title: 'Reguler', render: renderReguler },
  fasilitasi: { title: 'Fasilitasi', render: renderFasilitasi },
  p3h: { title: 'Pendamping Halal', render: renderP3H },
}

function navigate(page) {
  App.state.page = page
  saveState()
  const route = routes[page] || routes.dashboard
  document.getElementById('viewContainer').innerHTML = route.render()
  document.title = route.title + ' - Perizinan UMKM'

  document.querySelectorAll('#sidebarNav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page)
  })

  bindEvents(page)
}

function bindEvents(page) {
  document.querySelectorAll('.checklist').forEach(ul => {
    ul.querySelectorAll('li').forEach(li => {
      const cb = li.querySelector('input[type="checkbox"]')
      cb.addEventListener('change', () => {
        const moduleName = ul.dataset.module
        const id = li.dataset.id
        const items = App.state[moduleName].checklist
        const item = items.find(i => i.id === id)
        if (item) {
          item.checked = cb.checked
          li.classList.toggle('checked', cb.checked)
          if (moduleName === 'selfDeclare') {
            document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = getProgress(items) + '%'
          }
          saveState()
        }
      })
    })
  })

  const sdOmzet = document.getElementById('sdOmzet')
  if (sdOmzet) sdOmzet.addEventListener('input', e => { App.state.selfDeclare.simulation.omzet = e.target.value; saveState() })
  const sdKaryawan = document.getElementById('sdKaryawan')
  if (sdKaryawan) sdKaryawan.addEventListener('input', e => { App.state.selfDeclare.simulation.karyawan = e.target.value; saveState() })
  const sdModal = document.getElementById('sdModal')
  if (sdModal) sdModal.addEventListener('input', e => { App.state.selfDeclare.simulation.modal = e.target.value; saveState() })

  const sdNotes = document.getElementById('sdNotes')
  if (sdNotes) sdNotes.addEventListener('input', e => { App.state.selfDeclare.notes = e.target.value; saveState() })
  const rgNotes = document.getElementById('rgNotes')
  if (rgNotes) rgNotes.addEventListener('input', e => { App.state.reguler.notes = e.target.value; saveState() })
  const fsNotes = document.getElementById('fsNotes')
  if (fsNotes) fsNotes.addEventListener('input', e => { App.state.fasilitasi.notes = e.target.value; saveState() })
  const p3Notes = document.getElementById('p3Notes')
  if (p3Notes) p3Notes.addEventListener('input', e => { App.state.p3h.notes = e.target.value; saveState() })
}

/* ===== Search ===== */

function buildSearchIndex() {
  const idx = []
  const s = App.state
  idx.push({ title: 'Dashboard', text: 'Progress pengajuan, checklist dokumen, deadline pengurusan', page: 'dashboard' })
  idx.push({ title: 'Self Declare', text: 'Perizinan mandiri, KTP, KK, NPWP, domisili, pas foto, simulasi omzet', page: 'self-declare' })
  idx.push({ title: 'Reguler Sertifikasi Halal', text: 'LPH, audit halal, fatwa MUI, SIHALAL, monitoring sertifikat halal', page: 'reguler' })
  idx.push({ title: 'Fasilitasi UMKM', text: 'BPUM, KUR, SEHATI, bantuan pemerintah, pelatihan UMKM, tracking pendaftaran', page: 'fasilitasi' })
  idx.push({ title: 'Pendamping Halal P3H', text: 'Bimtek, ujian kompetensi, BPJPH, SK pendamping, regulasi JPH', page: 'p3h' })

  s.selfDeclare.checklist.forEach(i => {
    idx.push({ title: 'Self Declare: ' + i.text, text: 'Checklist persyaratan', page: 'self-declare' })
  })
  s.reguler.checklist.forEach(i => {
    idx.push({ title: 'Reguler: ' + i.text, text: 'Checklist reguler', page: 'reguler' })
  })
  s.fasilitasi.programs.forEach(i => {
    idx.push({ title: 'Fasilitasi: ' + i.nama, text: i.sumber + ' - ' + i.status, page: 'fasilitasi' })
  })
  s.p3h.checklist.forEach(i => {
    idx.push({ title: 'P3H: ' + i.text, text: 'Checklist pendamping halal', page: 'p3h' })
  })
  s.p3h.regulasi.forEach(i => {
    idx.push({ title: 'Regulasi: ' + i.peraturan, text: i.tentang, page: 'p3h' })
  })
  return idx
}

function performSearch(query) {
  if (!query.trim()) return ''
  const q = query.toLowerCase()
  const results = buildSearchIndex().filter(item =>
    item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q)
  )
  if (results.length === 0) {
    return '<p style="color:var(--text-secondary);padding:1rem;">Tidak ditemukan hasil.</p>'
  }
  return results.map(r => `
    <div class="search-result" data-page="${r.page}">
      <h4>${highlight(r.title, query)}</h4>
      <p>${highlight(r.text, query)}</p>
    </div>
  `).join('')
}

function highlight(text, query) {
  const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi')
  return text.replace(re, '<span class="search-highlight">$1</span>')
}

/* ===== Theme ===== */

function toggleTheme() {
  App.state.theme = App.state.theme === 'light' ? 'dark' : 'light'
  applyTheme()
  saveState()
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', App.state.theme)
  document.getElementById('themeToggle').innerHTML = App.state.theme === 'light' ? '&#9790;' : '&#9728;'
}

/* ===== Export PDF ===== */

function exportPDF() {
  window.print()
}

/* ===== Init ===== */

function init() {
  loadState()
  applyTheme()

  document.getElementById('themeToggle').addEventListener('click', toggleTheme)
  document.getElementById('exportBtn').addEventListener('click', exportPDF)

  const searchInput = document.getElementById('searchInput')
  searchInput.addEventListener('input', (e) => {
    App.state.query = e.target.value
    const results = performSearch(e.target.value)
    if (e.target.value.trim()) {
      document.getElementById('viewContainer').innerHTML = `
        <div class="view active">
          <div class="view-header">
            <h1>Pencarian: "${e.target.value}"</h1>
          </div>
          ${results}
        </div>`
      document.querySelectorAll('.search-result').forEach(el => {
        el.addEventListener('click', () => {
          searchInput.value = ''
          navigate(el.dataset.page)
        })
      })
    } else {
      navigate(App.state.page)
    }
  })

  document.querySelectorAll('#sidebarNav a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault()
      searchInput.value = ''
      const page = a.dataset.page
      navigate(page)
      window.location.hash = '#' + page
    })
  })

  function hashChange() {
    const hash = window.location.hash.replace('#', '') || 'dashboard'
    searchInput.value = ''
    if (routes[hash]) {
      navigate(hash)
    }
  }

  window.addEventListener('hashchange', hashChange)

  const initialPage = window.location.hash.replace('#', '') || 'dashboard'
  if (routes[initialPage]) {
    navigate(initialPage)
  } else {
    navigate('dashboard')
  }
}

document.addEventListener('DOMContentLoaded', init)
