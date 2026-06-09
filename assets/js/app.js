const App = {
  state: {
    theme: 'light',
    page: 'dashboard',
    query: '',
    activeClientId: null,
    clients: [
      {
        id: 'c1',
        name: 'Diah Litasari',
        nik: '3578066806740004',
        birthPlace: 'Surabaya',
        birthDate: '28-06-1974',
        address: 'Jl. Pakis Wetan VII No. 14, Surabaya',
        rtRw: '0014/003',
        postalCode: '60256',
        phone: '081343194567',
        businessName: 'Litasari Catering',
        businessType: 'Catering, Makanan',
        permits: {
          selfDeclare: {
            status: 'not_started',
            nib: '',
            steps: [
              { id: 'sd-s1', label: 'Siapkan Dokumen', desc: 'KTP, KK, NPWP, domisili', done: false, date: '', notes: '' },
              { id: 'sd-s2', label: 'Daftar Akun OSS', desc: 'Buat akun di oss.go.id', done: false, date: '', notes: '' },
              { id: 'sd-s3', label: 'Isi Data Diri & Usaha', desc: 'Lengkapi profil di OSS', done: false, date: '', notes: '' },
              { id: 'sd-s4', label: 'Submit Pernyataan Mandiri', desc: 'Klik pernyataan mandiri di OSS', done: false, date: '', notes: '' },
              { id: 'sd-s5', label: 'Cetak NIB', desc: 'Unduh dan cetak NIB', done: false, date: '', notes: '' },
            ],
            documents: [
              { id: 'sd-d1', name: 'KTP', collected: true, notes: '' },
              { id: 'sd-d2', name: 'Kartu Keluarga', collected: true, notes: '' },
              { id: 'sd-d3', name: 'NPWP', collected: false, notes: '' },
              { id: 'sd-d4', name: 'Pas Foto 3x4', collected: false, notes: '' },
              { id: 'sd-d5', name: 'Surat Domisili Usaha', collected: false, notes: '' },
            ],
            notes: '',
          },
          reguler: {
            status: 'not_started',
            nib: '',
            steps: [
              { id: 'rg-s1', label: 'Daftar Akun SIHALAL', desc: 'Buat akun di ptsp.halal.go.id', done: false, date: '', notes: '' },
              { id: 'rg-s2', label: 'Upload Dokumen', desc: 'Scan KTP, NPWP, NIB, dll', done: false, date: '', notes: '' },
              { id: 'rg-s3', label: 'Pilih LPH', desc: 'Pilih LPH terafiliasi MUI', done: false, date: '', notes: '' },
              { id: 'rg-s4', label: 'Jadwal Audit', desc: 'Tunggu jadwal dari LPH', done: false, date: '', notes: '' },
              { id: 'rg-s5', label: 'Audit LPH', desc: 'Audit langsung ke tempat usaha', done: false, date: '', notes: '' },
              { id: 'rg-s6', label: 'Sidang Fatwa MUI', desc: 'Komisi Fatwa MUI menetapkan', done: false, date: '', notes: '' },
              { id: 'rg-s7', label: 'Terbit Sertifikat Halal', desc: 'Unduh sertifikat dari SIHALAL', done: false, date: '', notes: '' },
            ],
            documents: [
              { id: 'rg-d1', name: 'Fotokopi KTP', collected: false, notes: '' },
              { id: 'rg-d2', name: 'Fotokopi NPWP', collected: false, notes: '' },
              { id: 'rg-d3', name: 'NIB', collected: false, notes: '' },
              { id: 'rg-d4', name: 'Daftar Produk & Bahan', collected: false, notes: '' },
              { id: 'rg-d5', name: 'Surat Pernyataan', collected: false, notes: '' },
            ],
            monitoring: [
              { tahap: 'Pendaftaran', status: 'Belum', tgl: '-', catatan: '' },
              { tahap: 'Verifikasi', status: 'Belum', tgl: '-', catatan: '' },
              { tahap: 'Audit', status: 'Belum', tgl: '-', catatan: '' },
              { tahap: 'Fatwa', status: 'Belum', tgl: '-', catatan: '' },
            ],
            notes: '',
          },
          fasilitasi: {
            status: 'not_started',
            steps: [
              { id: 'fs-s1', label: 'Cari Program', desc: 'Cek program di OSS/disnaker', done: false, date: '', notes: '' },
              { id: 'fs-s2', label: 'Siapkan Berkas', desc: 'Siapkan syarat administrasi', done: false, date: '', notes: '' },
              { id: 'fs-s3', label: 'Daftar Program', desc: 'Submit pendaftaran online/offline', done: false, date: '', notes: '' },
              { id: 'fs-s4', label: 'Follow Up', desc: 'Pantau status pendaftaran', done: false, date: '', notes: '' },
            ],
            registrations: [
              { id: 'fs-r1', program: 'SEHATI (Sertifikasi Halal Gratis)', tglDaftar: '', status: 'Belum daftar', notes: '' },
              { id: 'fs-r2', program: 'BPUM (BLT UMKM)', tglDaftar: '', status: 'Belum daftar', notes: '' },
              { id: 'fs-r3', program: 'KUR (Kredit Usaha Rakyat)', tglDaftar: '', status: 'Belum daftar', notes: '' },
            ],
            notes: '',
          },
          p3h: {
            status: 'not_started',
            steps: [
              { id: 'p3-s1', label: 'Daftar Bimtek', desc: 'Cari info bimtek P3H terdekat', done: false, date: '', notes: '' },
              { id: 'p3-s2', label: 'Ikuti Bimtek', desc: 'Pelatihan pendamping halal', done: false, date: '', notes: '' },
              { id: 'p3-s3', label: 'Ujian Kompetensi', desc: 'Ikuti ujian sertifikasi P3H', done: false, date: '', notes: '' },
              { id: 'p3-s4', label: 'Terbit SK P3H', desc: 'SK dari BPJPH', done: false, date: '', notes: '' },
              { id: 'p3-s5', label: 'Mulai Pendampingan', desc: 'Pendampingan ke pelaku UMKM', done: false, date: '', notes: '' },
            ],
            documents: [
              { id: 'p3-d1', name: 'Ijazah Pendidikan', collected: false, notes: '' },
              { id: 'p3-d2', name: 'KTP', collected: false, notes: '' },
              { id: 'p3-d3', name: 'Pas Foto', collected: false, notes: '' },
              { id: 'p3-d4', name: 'CV', collected: false, notes: '' },
            ],
            notes: '',
          },
        },
      },
    ],
  },
}

const PERMIT_INFO = {
  selfDeclare: {
    title: 'Self Declare',
    desc: 'Perizinan berbasis pernyataan mandiri untuk usaha mikro (omzet < Rp300jt/thn). Gratis via OSS.',
    icon: '&#9679;',
  },
  reguler: {
    title: 'Reguler (Sertifikasi Halal)',
    desc: 'Sertifikasi halal reguler melalui LPH dan MUI untuk usaha kecil-menengah.',
    icon: '&#9679;',
  },
  fasilitasi: {
    title: 'Fasilitasi',
    desc: 'Program bantuan pemerintah untuk UMKM (BPUM, KUR, SEHATI, dll).',
    icon: '&#9679;',
  },
  p3h: {
    title: 'Pendamping Halal (P3H)',
    desc: 'Menjadi pendamping proses produk halal bersertifikat BPJPH.',
    icon: '&#9679;',
  },
}

/* ===== Helpers ===== */

function saveState() {
  try { localStorage.setItem('appState', JSON.stringify(App.state)) } catch (e) {}
}

function loadState() {
  try {
    const saved = localStorage.getItem('appState')
    if (saved) {
      const parsed = JSON.parse(saved)
      parsed.clients.forEach((c, i) => {
        if (!c.permits.fasilitasi.registrations) {
          c.permits.fasilitasi.registrations = [
            { id: 'fs-r1', program: 'SEHATI', tglDaftar: '', status: 'Belum daftar', notes: '' },
            { id: 'fs-r2', program: 'BPUM', tglDaftar: '', status: 'Belum daftar', notes: '' },
            { id: 'fs-r3', program: 'KUR', tglDaftar: '', status: 'Belum daftar', notes: '' },
          ]
        }
        if (!c.permits.reguler.monitoring) {
          c.permits.reguler.monitoring = [
            { tahap: 'Pendaftaran', status: 'Belum', tgl: '-', catatan: '' },
            { tahap: 'Verifikasi', status: 'Belum', tgl: '-', catatan: '' },
            { tahap: 'Audit', status: 'Belum', tgl: '-', catatan: '' },
            { tahap: 'Fatwa', status: 'Belum', tgl: '-', catatan: '' },
          ]
        }
      })
      Object.assign(App.state, parsed)
    }
  } catch (e) {}
}

function getProgress(steps) {
  if (!steps || steps.length === 0) return 0
  return Math.round((steps.filter(s => s.done).length / steps.length) * 100)
}

function getDocProgress(docs) {
  if (!docs || docs.length === 0) return 0
  return Math.round((docs.filter(d => d.collected).length / docs.length) * 100)
}

function getStatusBadge(status) {
  const map = {
    not_started: '<span class="tag tag-danger">Belum dimulai</span>',
    in_progress: '<span class="tag tag-warning">Proses</span>',
    submitted: '<span class="tag tag-warning">Sudah diajukan</span>',
    completed: '<span class="tag tag-success">Selesai</span>',
  }
  return map[status] || '<span class="tag tag-danger">Belum</span>'
}

function client() {
  return App.state.clients.find(c => c.id === App.state.activeClientId)
}

function getStepStatusClass(step, steps) {
  const idx = steps.indexOf(step)
  const allPrevDone = steps.slice(0, idx).every(s => s.done)
  if (step.done) return 'done'
  if (allPrevDone) return 'active'
  return 'pending'
}

/* ===== Client Selector ===== */

function renderClientSelector() {
  const c = client()
  return `
    <div class="client-bar">
      <select id="clientSelect" class="client-select">
        <option value="">-- Pilih klien --</option>
        ${App.state.clients.map(cl => `
          <option value="${cl.id}" ${cl.id === App.state.activeClientId ? 'selected' : ''}>
            ${cl.businessName || cl.name}
          </option>
        `).join('')}
      </select>
      <button id="addClientBtn" class="btn btn-sm" title="Tambah klien">+ Klien Baru</button>
      ${c ? `<button id="editClientBtn" class="btn btn-sm btn-outline" title="Edit data klien">&#9998;</button>` : ''}
    </div>
  `
}

function renderClientDetail(c) {
  if (!c) return '<p style="color:var(--text-secondary);">Pilih klien terlebih dahulu.</p>'
  return `
    <div class="card client-info-card">
      <div style="display:flex;justify-content:space-between;align-items:start;">
        <div>
          <h3 style="margin-bottom:0.25rem;">${c.businessName}</h3>
          <p style="color:var(--text-secondary);font-size:0.85rem;">${c.name} &middot; ${c.nik}</p>
          <p style="color:var(--text-secondary);font-size:0.85rem;">${c.address}</p>
        </div>
        <div style="text-align:right;font-size:0.85rem;">
          <div>NIB: <strong>${c.permits.selfDeclare.nib || '-'}</strong></div>
          <div style="color:var(--text-secondary);">${c.phone}</div>
        </div>
      </div>
    </div>
  `
}

/* ===== View Renderers ===== */

function renderDashboard() {
  const activeClient = client()
  return `
    <div class="view active" id="view-dashboard">
      <div class="view-header">
        <h1>Dashboard</h1>
        <p>Kelola klien dan pantau progress perizinan UMKM</p>
      </div>
      ${renderClientSelector()}

      ${!activeClient ? renderNoClient() : ''}

      ${activeClient ? renderClientDetail(activeClient) : ''}

      ${activeClient ? `
        <div class="stats-grid">
          ${['selfDeclare','reguler','fasilitasi','p3h'].map(key => {
            const info = PERMIT_INFO[key]
            const p = activeClient.permits[key]
            const prog = getProgress(p.steps)
            return `
              <div class="stat-card ${prog === 100 ? 'success' : prog > 0 ? 'warning' : 'danger'}" style="cursor:pointer;" onclick="navigate('${key}')">
                <div class="stat-number">${prog}%</div>
                <div class="stat-label">${info.title}</div>
                <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
                <div style="margin-top:0.5rem;">${getStatusBadge(p.status)}</div>
              </div>
            `
          }).join('')}
        </div>
      ` : ''}

      ${activeClient ? `
        <div class="card">
          <h3>Semua Klien</h3>
          ${renderClientTable()}
        </div>
      ` : ''}
    </div>`
}

function renderClientTable() {
  if (App.state.clients.length === 0) return '<p style="color:var(--text-secondary);">Belum ada klien. Tambahkan klien baru untuk mulai.</p>'
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Nama</th><th>Usaha</th><th>Self Declare</th><th>Reguler</th><th>Fasilitasi</th><th>P3H</th></tr></thead>
        <tbody>
          ${App.state.clients.map(c => `
            <tr style="cursor:pointer;" onclick="selectClient('${c.id}');navigate('dashboard')">
              <td><strong>${c.name}</strong></td>
              <td>${c.businessName}</td>
              <td>${getStatusBadge(c.permits.selfDeclare.status)}</td>
              <td>${getStatusBadge(c.permits.reguler.status)}</td>
              <td>${getStatusBadge(c.permits.fasilitasi.status)}</td>
              <td>${getStatusBadge(c.permits.p3h.status)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `
}

function renderNoClient() {
  return `
    <div class="card" style="text-align:center;padding:2rem;">
      <p style="color:var(--text-secondary);margin-bottom:1rem;">Pilih klien yang sudah ada atau tambah klien baru</p>
      ${App.state.clients.length > 0 ? `
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
          ${App.state.clients.map(c => `
            <button class="btn" onclick="selectClient('${c.id}');navigate('dashboard')">${c.businessName || c.name}</button>
          `).join('')}
        </div>
      ` : '<p style="color:var(--text-secondary);">Belum ada klien.</p>'}
    </div>
  `
}

/* ===== Self Declare ===== */

function renderSelfDeclare() {
  if (!client()) return renderNoClientPage('self-declare')
  const c = client()
  const p = c.permits.selfDeclare
  const prog = getProgress(p.steps)
  const docProg = getDocProgress(p.documents)
  return `
    <div class="view active" id="view-self-declare">
      <div class="view-header">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h1>Self Declare</h1>
            <p>${c.businessName} &middot; ${PERMIT_INFO.selfDeclare.desc}</p>
          </div>
          <div style="text-align:right;font-size:0.85rem;">
            ${getStatusBadge(p.status)}
          </div>
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Progress Tahapan</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.steps.filter(s=>s.done).length}/${p.steps.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
      </div>

      <div class="card">
        <h3>NIB (Nomor Induk Berusaha)</h3>
        <div style="display:flex;gap:0.5rem;">
          <input type="text" id="sdNib" value="${p.nib}" placeholder="Masukkan NIB..." style="flex:1;">
        </div>
      </div>

      <div class="card">
        <h3>Langkah-langkah</h3>
        <div class="timeline">
          ${p.steps.map((step, i, arr) => {
            const cls = getStepStatusClass(step, arr)
            return `
              <div class="timeline-item ${cls}">
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.25rem;">
                  <div class="step-status">
                    ${cls === 'done' ? '&#10003; Selesai' : cls === 'active' ? '&#9679; Proses' : '&#9672; Tunggu'}
                  </div>
                  <div style="display:flex;gap:0.5rem;align-items:center;">
                    <input type="checkbox" id="sd-step-${step.id}" ${step.done ? 'checked' : ''} data-step="${step.id}" data-module="selfDeclare" style="accent-color:var(--success);">
                    <input type="date" id="sd-date-${step.id}" value="${step.date}" data-step="${step.id}" data-module="selfDeclare" style="width:140px;font-size:0.8rem;padding:0.2rem 0.4rem;">
                  </div>
                </div>
                <textarea id="sd-note-${step.id}" rows="2" placeholder="Catatan..." data-step="${step.id}" data-module="selfDeclare" style="font-size:0.8rem;margin-top:0.25rem;">${step.notes}</textarea>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Dokumen</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.documents.filter(d=>d.collected).length}/${p.documents.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${docProg}%"></div></div>
        <ul class="checklist" style="margin-top:0.75rem;">
          ${p.documents.map(doc => `
            <li class="${doc.collected ? 'checked' : ''}" data-doc="${doc.id}" data-module="selfDeclare">
              <input type="checkbox" ${doc.collected ? 'checked' : ''}>
              <span class="checklist-text">${doc.name}</span>
              <input type="text" value="${doc.notes}" placeholder="Ket." style="margin-left:auto;width:200px;font-size:0.8rem;padding:0.2rem 0.4rem;">
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="sdNotes" rows="4">${p.notes}</textarea>
      </div>
    </div>`
}

/* ===== Reguler ===== */

function renderReguler() {
  if (!client()) return renderNoClientPage('reguler')
  const c = client()
  const p = c.permits.reguler
  const prog = getProgress(p.steps)
  const docProg = getDocProgress(p.documents)
  return `
    <div class="view active" id="view-reguler">
      <div class="view-header">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h1>Reguler (Sertifikasi Halal)</h1>
            <p>${c.businessName} &middot; ${PERMIT_INFO.reguler.desc}</p>
          </div>
          <div>${getStatusBadge(p.status)}</div>
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Progress Tahapan</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.steps.filter(s=>s.done).length}/${p.steps.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
      </div>

      <div class="card">
        <h3>Alur Sertifikasi Halal</h3>
        <div class="timeline">
          ${p.steps.map((step, i, arr) => {
            const cls = getStepStatusClass(step, arr)
            return `
              <div class="timeline-item ${cls}">
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.25rem;">
                  <div class="step-status">
                    ${cls === 'done' ? '&#10003; Selesai' : cls === 'active' ? '&#9679; Proses' : '&#9672; Tunggu'}
                  </div>
                  <div style="display:flex;gap:0.5rem;align-items:center;">
                    <input type="checkbox" id="rg-step-${step.id}" ${step.done ? 'checked' : ''} data-step="${step.id}" data-module="reguler">
                    <input type="date" id="rg-date-${step.id}" value="${step.date}" data-step="${step.id}" data-module="reguler" style="width:140px;font-size:0.8rem;padding:0.2rem 0.4rem;">
                  </div>
                </div>
                <textarea id="rg-note-${step.id}" rows="2" placeholder="Catatan..." data-step="${step.id}" data-module="reguler" style="font-size:0.8rem;margin-top:0.25rem;">${step.notes}</textarea>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Dokumen</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.documents.filter(d=>d.collected).length}/${p.documents.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${docProg}%"></div></div>
        <ul class="checklist" style="margin-top:0.75rem;">
          ${p.documents.map(doc => `
            <li class="${doc.collected ? 'checked' : ''}" data-doc="${doc.id}" data-module="reguler">
              <input type="checkbox" ${doc.collected ? 'checked' : ''}>
              <span class="checklist-text">${doc.name}</span>
              <input type="text" value="${doc.notes}" placeholder="Ket." style="margin-left:auto;width:200px;font-size:0.8rem;padding:0.2rem 0.4rem;">
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Monitoring Status</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Tahap</th><th>Status</th><th>Tanggal</th><th>Catatan</th></tr></thead>
            <tbody>
              ${p.monitoring.map((m, i) => `
                <tr>
                  <td>${m.tahap}</td>
                  <td>
                    <select data-mon-idx="${i}" data-module="reguler" class="mon-status" style="width:100%;">
                      <option value="Belum" ${m.status === 'Belum' ? 'selected' : ''}>Belum</option>
                      <option value="Proses" ${m.status === 'Proses' ? 'selected' : ''}>Proses</option>
                      <option value="Selesai" ${m.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
                    </select>
                  </td>
                  <td><input type="date" value="${m.tgl !== '-' ? m.tgl : ''}" data-mon-idx="${i}" data-module="reguler" class="mon-date" style="width:100%;font-size:0.8rem;"></td>
                  <td><input type="text" value="${m.catatan}" data-mon-idx="${i}" data-module="reguler" class="mon-notes" style="width:100%;font-size:0.8rem;"></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="rgNotes" rows="4">${p.notes}</textarea>
      </div>
    </div>`
}

/* ===== Fasilitasi ===== */

function renderFasilitasi() {
  if (!client()) return renderNoClientPage('fasilitasi')
  const c = client()
  const p = c.permits.fasilitasi
  const prog = getProgress(p.steps)
  return `
    <div class="view active" id="view-fasilitasi">
      <div class="view-header">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h1>Fasilitasi</h1>
            <p>${c.businessName} &middot; ${PERMIT_INFO.fasilitasi.desc}</p>
          </div>
          <div>${getStatusBadge(p.status)}</div>
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Progress Tahapan</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.steps.filter(s=>s.done).length}/${p.steps.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
      </div>

      <div class="card">
        <h3>Langkah-langkah</h3>
        <div class="timeline">
          ${p.steps.map((step, i, arr) => {
            const cls = getStepStatusClass(step, arr)
            return `
              <div class="timeline-item ${cls}">
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.25rem;">
                  <div class="step-status">${cls === 'done' ? '&#10003; Selesai' : cls === 'active' ? '&#9679; Proses' : '&#9672; Tunggu'}</div>
                  <div style="display:flex;gap:0.5rem;align-items:center;">
                    <input type="checkbox" id="fs-step-${step.id}" ${step.done ? 'checked' : ''} data-step="${step.id}" data-module="fasilitasi">
                    <input type="date" id="fs-date-${step.id}" value="${step.date}" data-step="${step.id}" data-module="fasilitasi" style="width:140px;font-size:0.8rem;padding:0.2rem 0.4rem;">
                  </div>
                </div>
                <textarea id="fs-note-${step.id}" rows="2" placeholder="Catatan..." data-step="${step.id}" data-module="fasilitasi" style="font-size:0.8rem;margin-top:0.25rem;">${step.notes}</textarea>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <div class="card">
        <h3>Tracking Program</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Program</th><th>Tgl Daftar</th><th>Status</th><th>Catatan</th></tr></thead>
            <tbody>
              ${p.registrations.map((reg, i) => `
                <tr>
                  <td>${reg.program}</td>
                  <td><input type="date" value="${reg.tglDaftar}" data-reg="${i}" class="fs-reg-date" style="width:100%;font-size:0.8rem;"></td>
                  <td>
                    <select data-reg="${i}" class="fs-reg-status" style="width:100%;">
                      <option value="Belum daftar" ${reg.status === 'Belum daftar' ? 'selected' : ''}>Belum daftar</option>
                      <option value="Proses daftar" ${reg.status === 'Proses daftar' ? 'selected' : ''}>Proses daftar</option>
                      <option value="Sudah daftar" ${reg.status === 'Sudah daftar' ? 'selected' : ''}>Sudah daftar</option>
                      <option value="Diterima" ${reg.status === 'Diterima' ? 'selected' : ''}>Diterima</option>
                      <option value="Ditolak" ${reg.status === 'Ditolak' ? 'selected' : ''}>Ditolak</option>
                    </select>
                  </td>
                  <td><input type="text" value="${reg.notes}" data-reg="${i}" class="fs-reg-notes" style="width:100%;font-size:0.8rem;"></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Program Bantuan Tersedia</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Program</th><th>Sumber</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>BPUM (BLT UMKM)</td><td>Kemenkop UKM</td><td><span class="tag tag-warning">Cek berkala</span></td></tr>
              <tr><td>KUR (Kredit Usaha Rakyat)</td><td>Perbankan</td><td><span class="tag tag-success">Tersedia</span></td></tr>
              <tr><td>SEHATI (Sertifikasi Halal Gratis)</td><td>BPJPH</td><td><span class="tag tag-success">Tersedia</span></td></tr>
              <tr><td>Pelatihan UMKM</td><td>Dinas Koperasi</td><td><span class="tag tag-warning">Pendaftaran</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="fsNotes" rows="4">${p.notes}</textarea>
      </div>
    </div>`
}

/* ===== P3H ===== */

function renderP3H() {
  if (!client()) return renderNoClientPage('p3h')
  const c = client()
  const p = c.permits.p3h
  const prog = getProgress(p.steps)
  const docProg = getDocProgress(p.documents)
  return `
    <div class="view active" id="view-p3h">
      <div class="view-header">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h1>Pendamping Halal (P3H)</h1>
            <p>${c.businessName} &middot; ${PERMIT_INFO.p3h.desc}</p>
          </div>
          <div>${getStatusBadge(p.status)}</div>
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Progress Tahapan</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.steps.filter(s=>s.done).length}/${p.steps.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
      </div>

      <div class="card">
        <h3>Alur Sertifikasi P3H</h3>
        <div class="timeline">
          ${p.steps.map((step, i, arr) => {
            const cls = getStepStatusClass(step, arr)
            return `
              <div class="timeline-item ${cls}">
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.25rem;">
                  <div class="step-status">${cls === 'done' ? '&#10003; Selesai' : cls === 'active' ? '&#9679; Proses' : '&#9672; Tunggu'}</div>
                  <div style="display:flex;gap:0.5rem;align-items:center;">
                    <input type="checkbox" id="p3-step-${step.id}" ${step.done ? 'checked' : ''} data-step="${step.id}" data-module="p3h">
                    <input type="date" id="p3-date-${step.id}" value="${step.date}" data-step="${step.id}" data-module="p3h" style="width:140px;font-size:0.8rem;padding:0.2rem 0.4rem;">
                  </div>
                </div>
                <textarea id="p3-note-${step.id}" rows="2" placeholder="Catatan..." data-step="${step.id}" data-module="p3h" style="font-size:0.8rem;margin-top:0.25rem;">${step.notes}</textarea>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Dokumen</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.documents.filter(d=>d.collected).length}/${p.documents.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${docProg}%"></div></div>
        <ul class="checklist" style="margin-top:0.75rem;">
          ${p.documents.map(doc => `
            <li class="${doc.collected ? 'checked' : ''}" data-doc="${doc.id}" data-module="p3h">
              <input type="checkbox" ${doc.collected ? 'checked' : ''}>
              <span class="checklist-text">${doc.name}</span>
              <input type="text" value="${doc.notes}" placeholder="Ket." style="margin-left:auto;width:200px;font-size:0.8rem;padding:0.2rem 0.4rem;">
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Referensi Regulasi</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Peraturan</th><th>Tentang</th></tr></thead>
            <tbody>
              <tr><td>UU No. 33/2014</td><td>Jaminan Produk Halal</td></tr>
              <tr><td>PP No. 39/2021</td><td>Penyelenggaraan JPH</td></tr>
              <tr><td>PMA No. 26/2019</td><td>Sertifikasi Halal</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="p3Notes" rows="4">${p.notes}</textarea>
      </div>
    </div>`
}

function renderNoClientPage(returnPage) {
  return `
    <div class="view active">
      <div class="view-header">
        <h1>Pilih Klien</h1>
        <p>Pilih klien terlebih dahulu untuk mengelola perizinan</p>
      </div>
      <div class="card" style="text-align:center;padding:2rem;">
        ${App.state.clients.length > 0 ? `
          <p style="color:var(--text-secondary);margin-bottom:1rem;">Pilih klien:</p>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
            ${App.state.clients.map(c => `
              <button class="btn" onclick="selectClient('${c.id}');navigate('${returnPage}')">${c.businessName || c.name}</button>
            `).join('')}
          </div>
        ` : '<p style="color:var(--text-secondary);">Belum ada klien. Tambahkan dari Dashboard.</p>'}
        <div style="margin-top:1rem;">
          <a href="#dashboard" class="btn btn-outline">&#8592; Kembali ke Dashboard</a>
        </div>
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

function selectClient(id) {
  App.state.activeClientId = id
  saveState()
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

/* ===== Event Binding ===== */

function bindEvents(page) {
  const c = client()

  document.getElementById('clientSelect')?.addEventListener('change', e => {
    selectClient(e.target.value)
    navigate(App.state.page)
  })

  document.getElementById('addClientBtn')?.addEventListener('click', () => {
    const id = 'c' + Date.now()
    const newClient = {
      id,
      name: 'Klien Baru',
      nik: '',
      birthPlace: '',
      birthDate: '',
      address: '',
      rtRw: '',
      postalCode: '',
      phone: '',
      businessName: 'Usaha Baru',
      businessType: '',
      permits: JSON.parse(JSON.stringify(App.state.clients[0]?.permits || {
        selfDeclare: { status: 'not_started', nib: '', steps: [], documents: [], notes: '' },
        reguler: { status: 'not_started', nib: '', steps: [], documents: [], monitoring: [], notes: '' },
        fasilitasi: { status: 'not_started', steps: [], registrations: [], notes: '' },
        p3h: { status: 'not_started', steps: [], documents: [], notes: '' },
      })),
    }
    App.state.clients.push(newClient)
    selectClient(id)
    saveState()
    navigate('dashboard')
  })

  document.getElementById('editClientBtn')?.addEventListener('click', () => {
    if (!c) return
    const name = prompt('Nama:', c.name)
    if (name && name !== c.name) { c.name = name; saveState(); navigate('dashboard') }
  })

  if (c) {
    bindPermitSteps(c, 'selfDeclare', 'sd')
    bindPermitSteps(c, 'reguler', 'rg')
    bindPermitSteps(c, 'fasilitasi', 'fs')
    bindPermitSteps(c, 'p3h', 'p3')

    bindChecklist(c, 'selfDeclare')
    bindChecklist(c, 'reguler')
    bindChecklist(c, 'p3h')

    document.getElementById('sdNib')?.addEventListener('change', e => {
      c.permits.selfDeclare.nib = e.target.value
      saveState()
    })

    document.querySelectorAll('.mon-status')?.forEach(sel => {
      sel.addEventListener('change', e => {
        const i = parseInt(e.target.dataset.monIdx)
        c.permits.reguler.monitoring[i].status = e.target.value
        saveState()
      })
    })
    document.querySelectorAll('.mon-date')?.forEach(inp => {
      inp.addEventListener('change', e => {
        const i = parseInt(e.target.dataset.monIdx)
        c.permits.reguler.monitoring[i].tgl = e.target.value || '-'
        saveState()
      })
    })
    document.querySelectorAll('.mon-notes')?.forEach(inp => {
      inp.addEventListener('input', e => {
        const i = parseInt(e.target.dataset.monIdx)
        c.permits.reguler.monitoring[i].catatan = e.target.value
        saveState()
      })
    })

    document.querySelectorAll('.fs-reg-status')?.forEach(sel => {
      sel.addEventListener('change', e => {
        const i = parseInt(e.target.dataset.reg)
        c.permits.fasilitasi.registrations[i].status = e.target.value
        saveState()
      })
    })
    document.querySelectorAll('.fs-reg-date')?.forEach(inp => {
      inp.addEventListener('change', e => {
        const i = parseInt(e.target.dataset.reg)
        c.permits.fasilitasi.registrations[i].tglDaftar = e.target.value
        saveState()
      })
    })
    document.querySelectorAll('.fs-reg-notes')?.forEach(inp => {
      inp.addEventListener('input', e => {
        const i = parseInt(e.target.dataset.reg)
        c.permits.fasilitasi.registrations[i].notes = e.target.value
        saveState()
      })
    })

    const sdNotes = document.getElementById('sdNotes')
    if (sdNotes) sdNotes.addEventListener('input', e => { c.permits.selfDeclare.notes = e.target.value; saveState() })
    const rgNotes = document.getElementById('rgNotes')
    if (rgNotes) rgNotes.addEventListener('input', e => { c.permits.reguler.notes = e.target.value; saveState() })
    const fsNotes = document.getElementById('fsNotes')
    if (fsNotes) fsNotes.addEventListener('input', e => { c.permits.fasilitasi.notes = e.target.value; saveState() })
    const p3Notes = document.getElementById('p3Notes')
    if (p3Notes) p3Notes.addEventListener('input', e => { c.permits.p3h.notes = e.target.value; saveState() })
  }
}

function bindPermitSteps(c, moduleKey, prefix) {
  const p = c.permits[moduleKey]
  p.steps.forEach((step) => {
    const cb = document.getElementById(`${prefix}-step-${step.id}`)
    const dateInput = document.getElementById(`${prefix}-date-${step.id}`)
    const noteInput = document.getElementById(`${prefix}-note-${step.id}`)
    if (cb) cb.addEventListener('change', e => {
      step.done = e.target.checked
      const allDone = p.steps.every(s => s.done)
      const anyDone = p.steps.some(s => s.done)
      p.status = allDone ? 'completed' : anyDone ? 'in_progress' : 'not_started'
      saveState()
    })
    if (dateInput) dateInput.addEventListener('change', e => { step.date = e.target.value; saveState() })
    if (noteInput) noteInput.addEventListener('input', e => { step.notes = e.target.value; saveState() })
  })
}

function bindChecklist(c, moduleKey) {
  const p = c.permits[moduleKey]
  if (!p.documents) return
  const ul = document.querySelector(`.checklist[data-module="${moduleKey}"]`)
  if (!ul) return
  ul.querySelectorAll('li').forEach(li => {
    const cb = li.querySelector('input[type="checkbox"]')
    const notesInput = li.querySelector('input[type="text"]')
    const docId = li.dataset.doc
    const doc = p.documents.find(d => d.id === docId)
    if (cb) cb.addEventListener('change', e => {
      if (doc) { doc.collected = e.target.checked; li.classList.toggle('checked', e.target.checked); saveState() }
    })
    if (notesInput) notesInput.addEventListener('input', e => {
      if (doc) { doc.notes = e.target.value; saveState() }
    })
  })
}

/* ===== Search ===== */

function buildSearchIndex() {
  const idx = []
  idx.push({ title: 'Dashboard', text: 'Kelola klien, progress perizinan UMKM', page: 'dashboard' })
  idx.push({ title: 'Self Declare', text: 'NIB, pernyataan mandiri, OSS, KTP, KK, NPWP', page: 'self-declare' })
  idx.push({ title: 'Reguler Sertifikasi Halal', text: 'SIHALAL, LPH, audit halal, fatwa MUI, sertifikat halal', page: 'reguler' })
  idx.push({ title: 'Fasilitasi', text: 'BPUM, KUR, SEHATI, program pemerintah, bantuan UMKM', page: 'fasilitasi' })
  idx.push({ title: 'Pendamping Halal P3H', text: 'Bimtek, ujian kompetensi, BPJPH, SK pendamping', page: 'p3h' })
  App.state.clients.forEach(c => {
    idx.push({ title: 'Klien: ' + c.name, text: c.businessName + ' - ' + c.nik, page: 'dashboard' })
  })
  return idx
}

function performSearch(query) {
  if (!query.trim()) return ''
  const q = query.toLowerCase()
  const results = buildSearchIndex().filter(item =>
    item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q)
  )
  if (results.length === 0) return '<p style="color:var(--text-secondary);padding:1rem;">Tidak ditemukan hasil.</p>'
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

/* ===== Export ===== */

function exportPDF() { window.print() }

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
    if (routes[hash]) navigate(hash)
  }

  window.addEventListener('hashchange', hashChange)

  const initialPage = window.location.hash.replace('#', '') || 'dashboard'
  navigate(routes[initialPage] ? initialPage : 'dashboard')
}

document.addEventListener('DOMContentLoaded', init)
