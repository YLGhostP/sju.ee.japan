/**
 * 2026 日本關西滑雪之旅 - 核心邏輯模組 v5.0 (高對比優化版)
 * 包含：精細化行程數據、高對比渲染引擎、版本快取控制
 */

// --- 1. 原始行程數據 ---
const INITIAL_ITINERARY = [
    {
        id: 1, date: '2026-01-30', dayOfWeek: '五', title: '出發！抵達大阪', location: '桃園機場 ➔ 大阪路得會飯店', icon: 'plane',
        activities: [
            { time: '15:40', desc: '台灣桃園國際機場起飛' },
            { time: '19:20', desc: '抵達關西機場 (KIX) https://maps.app.goo.gl/588m2MM79fcfGQ6n9' },
            { time: '19:30', desc: '購買Suica/ICOCA 搭乘JR到天王寺轉至谷町四丁目' },
            { time: '21:00', desc: '路得會飯店 Check-in https://maps.app.goo.gl/LtPGXFtWkhgsyR5k7' }
        ],
        note: '飯店：大阪路得會飯店 (Hotel The Lutheran)。地址：大阪市中央区谷町3-1-6。'
    },
    {
        id: 2, date: '2026-01-31', dayOfWeek: '六', title: '京都文化巡禮', location: '下鴨 / 清水寺 / 祇園', icon: 'camera',
        activities: [
            { time: '08:00', desc: '飯店出發 https://maps.app.goo.gl/LtPGXFtWkhgsyR5k7' },
            { time: '09:20', desc: '糺之森 (Tadasu no Mori) https://maps.app.goo.gl/TfcKBcVzLeq7zpAB9' },
            { time: '09:45', desc: '下鴨神社 https://maps.app.goo.gl/Rb3U9qg386oRysbL7' },
            { time: '11:25', desc: '和服租借 (梨花和服 清水寺店) https://maps.app.goo.gl/RAZoYvZFgyEvzNH48' },
            { time: '12:25', desc: '清水寺參拜 13:35 還衣服 https://maps.app.goo.gl/eisz47Pxq2PCbRL1A' },
            { time: '14:30', desc: 'Kyo Unawa Honten (鰻魚飯) https://maps.app.goo.gl/BRAo2EnzERFmDEZj7' },
            { time: '15:33', desc: '鍵善良房 (四條本店) https://maps.app.goo.gl/dDKgdjBrLnzjeCus5' },
            { time: '15:44', desc: '花見小路 https://maps.app.goo.gl/tb4JJA64c4shL6Hh9' },
            { time: '16:00', desc: '建仁寺 (17:00關門) https://maps.app.goo.gl/nv5Wu2WPs2PopDWC8' }
        ],
        note: '今日行程較細，穿好走的鞋。和服預約請準時，預計交通費 1920円。'
    },
    {
        id: 3, date: '2026-02-01', dayOfWeek: '日', title: '神戶異國風情', location: '神戶三宮 / 南京町', icon: 'utensils',
        activities: [
            { time: '10:30', desc: '前往神戶三宮 (約一小時車程) https://maps.app.goo.gl/KdBRGzMRqqSNy2pcA' },
            { time: '10:40', desc: '生田神社 (求戀愛) https://maps.app.goo.gl/gjDnhikMYvxQ9Y216' },
            { time: '12:00', desc: '神戶牛大餐 https://maps.app.goo.gl/tcnWgSVrHMqNjRVJ8' },
            { time: '13:30', desc: '南京町 (中華街) https://maps.app.goo.gl/XpzTSYFDLot7aBKB9' },
            { time: '15:00', desc: '美利堅公園夜景 https://maps.app.goo.gl/RLV3tfj8y5iCsMvA8' },
            { time: '15:00', desc: '大阪城燈光秀 (視情況參與)' }
        ],
        note: '神戶牛沒吃飽沒關係，南京町小食多，今天我們 chill :>。'
    },
    {
        id: 4, date: '2026-02-02', dayOfWeek: '一', title: '嵐山漫遊 & 溫泉', location: '嵐山 / 空庭溫泉', icon: 'mountain',
        activities: [
            { time: '09:30', desc: '抵達嵐山 https://maps.app.goo.gl/RJ1ScD7L7Wdnsymp6' },
            { time: '09:45', desc: '天龍寺 https://maps.app.goo.gl/PvwtESSkVDaZ2MydA' },
            { time: '10:30', desc: '竹林小徑 ➔ 野宮神社 https://maps.app.goo.gl/JRwV3tzNJbehpAEg6' },
            { time: '12:30', desc: '嵐山猴子公園 https://maps.app.goo.gl/qdGhTNcghEZ8BuoYA' },
            { time: '傍晚', desc: '空庭溫泉 (大阪灣塔)' },
            { time: '晚上', desc: '帝王蟹大餐 https://maps.app.goo.gl/wahEQiyooKDPf3D97' }
        ],
        note: '交通費 1100円。溫泉可放鬆滑雪前的肌肉。'
    },
    {
        id: 5, date: '2026-02-03', dayOfWeek: '二', title: '六甲山滑雪日', location: '六甲山滑雪場', icon: 'snowflake',
        activities: [
            { time: '07:10', desc: '飯店準時出發 ➔ 日本橋站' },
            { time: '08:00', desc: '經由日本橋 https://maps.app.goo.gl/vnQ4xytuSfZHhHwcA' },
            { time: '09:00', desc: '抵達六甲山滑雪場 https://maps.app.goo.gl/AMTmaDMKCiVRJ2zL7' },
            { time: '18:00', desc: '滑雪結束，預計 19:00 回到日本橋' }
        ],
        note: '早餐自行處理。必帶：防水手套、毛帽、替換襪子。'
    },
    {
        id: 6, date: '2026-02-04', dayOfWeek: '三', title: '大阪歷史名勝', location: '大阪城 / 通天閣', icon: 'map-pin',
        activities: [
            { time: '09:00', desc: '大阪城天守閣 https://maps.app.goo.gl/2ZHeZoegUnQzgb8Q6' },
            { time: '10:00', desc: '玉造稻荷神社 https://maps.app.goo.gl/CKq449UztZZncP7r7' },
            { time: '10:20', desc: '豐國神社 https://maps.app.goo.gl/yiZtMt7xjGCtat3T9' },
            { time: '10:40', desc: '新世界商店街 https://maps.app.goo.gl/VaR8txuQnhifEwwt6' },
            { time: '13:00', desc: '通天閣 https://maps.app.goo.gl/qBWTPRBBAYnChkTM9' },
            { time: '15:30', desc: '木津市場 https://bobbyfun.tw/kizu-ichiba/' },
            { time: '16:20', desc: '天神橋筋商店街 https://maps.app.goo.gl/ggapJFbfifi9bMjv8' }
        ],
        note: '大家加油！腳力大考驗。'
    },
    {
        id: 7, date: '2026-02-05', dayOfWeek: '四', title: '天王寺 & 道頓堀', location: '天王寺 / 心齋橋', icon: 'shopping-cart',
        activities: [
            { time: '10:00', desc: '飯店出發' },
            { time: '10:30', desc: '四天王寺 https://maps.app.goo.gl/i1pJmLdh5Q7FK4d56' },
            { time: '11:30', desc: '一心寺 https://maps.app.goo.gl/FFR1GunfamoDQBXe8' },
            { time: '13:50', desc: '大阪市立美術館 https://maps.app.goo.gl/U9wwM3GcxVdBuaNVA' },
            { time: '14:50', desc: '天王寺動物園 https://maps.app.goo.gl/MPJfx81iv2x168ix6' },
            { time: '17:30', desc: '道頓堀水上觀光船 https://maps.app.goo.gl/T5qjSJBLqeu4PeNx5' },
            { time: '18:00', desc: '心齋橋自由行 / 跑跑人 https://maps.app.goo.gl/c1b8xPgAybVAjK3MA' }
        ],
        note: '水上觀光船若持大阪周遊卡可換票。'
    },
    {
        id: 8, date: '2026-02-06', dayOfWeek: '五', title: '最後購物 & 返台', location: '梅田 / 關西機場', icon: 'plane-takeoff',
        activities: [
            { time: '10:00', desc: '飯店退房、梅田購物' },
            { time: '11:30', desc: 'HEP FIVE 摩天輪' },
            { time: '15:30', desc: '友都八喜梅田店' },
            { time: '18:00', desc: '抵達關西機場報到' },
            { time: '20:45', desc: '啟航返台' }
        ],
        note: '整理行李注意重量，提早抵達機場，往返板橋(1962)往新店(1968)國光1819往返台北。'
    }
];

const INITIAL_CHECKLIST = [
    { id: 1, text: '護照 (有效期6個月以上)', checked: false },
    { id: 2, text: 'Visit Japan Web QR Code', checked: false },
    { id: 3, text: '保險證明書 (海外醫療)', checked: false },
    { id: 4, text: '日幣現金 / 信用卡 / 交通卡', checked: false },
    { id: 5, text: 'SIM 卡 / 漫遊開通確認', checked: false },
    { id: 6, text: '滑雪防水手套 & 毛帽', checked: false },
    { id: 7, text: '個人藥品 / 摺疊傘', checked: false }
];

// --- 2. 狀態管理 ---
let state = {
    currentTab: 'itinerary',
    selectedDayId: 1,
    itinerary: [],
    checklist: []
};

// 每次更新 INITIAL_ITINERARY 時請修改此版號
const VERSION_KEY = "2026_SKI_V5_FINAL"; 

// --- 3. 渲染引擎 ---
const RenderEngine = {
    linkify: (text) => {
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlPattern, (url) => {
            return `<a href="${url}" target="_blank" class="inline-flex items-center bg-sky-50 text-sky-600 px-2 py-0.5 rounded-md font-bold text-[10px] ml-1 border border-sky-100 hover:bg-sky-500 hover:text-white transition-all shadow-sm">地圖 <i data-lucide="external-link" class="w-2.5 h-2.5 ml-0.5"></i></a>`;
        });
    },

    itineraryCard: (day) => `
    <div class="animate-fadeIn mt-4">
        <div class="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-7 mb-6">
            <div class="flex items-center space-x-4 mb-8">
                <div class="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200">
                    <i data-lucide="${day.icon}"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-black text-slate-900 tracking-tighter leading-tight">${day.title}</h2>
                    <p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center">
                        <i data-lucide="map-pin" class="w-3 h-3 mr-1"></i> ${day.location}
                    </p>
                </div>
            </div>

            <div class="space-y-1">
                ${day.activities.map(act => `
                    <div class="relative pl-9 pb-8 last:pb-2 border-l-2 border-slate-100 last:border-transparent ml-2 group">
                        <div class="absolute -left-[10px] top-1.5 w-[18px] h-[18px] rounded-full bg-white border-2 border-slate-200 flex items-center justify-center z-10 group-hover:border-slate-900 transition-colors">
                            <div class="w-2 h-2 rounded-full bg-slate-900 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        <div class="flex flex-col bg-slate-50/60 group-hover:bg-slate-50 p-3 rounded-2xl transition-all border border-transparent group-hover:border-slate-100 group-hover:shadow-sm">
                            <div class="flex items-center mb-1.5">
                                <span class="bg-slate-900 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-tighter mr-2 shadow-sm">
                                    ${act.time}
                                </span>
                                <div class="h-[1px] flex-1 bg-slate-200/50 group-hover:bg-slate-300 transition-colors"></div>
                            </div>
                            <p class="text-slate-800 text-[13px] font-bold leading-relaxed antialiased pl-0.5">
                                ${RenderEngine.linkify(act.desc)}
                            </p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="bg-sky-50 rounded-[2rem] p-6 border border-sky-100 flex gap-4 items-start mb-10 shadow-sm shadow-sky-50">
            <div class="bg-sky-500 text-white p-2 rounded-xl shadow-md">
                <i data-lucide="info" class="w-4 h-4"></i>
            </div>
            <div class="flex-1">
                <h4 class="text-[10px] font-black text-sky-900 uppercase tracking-widest mb-1 text-sky-700/60">Travel Note</h4>
                <p class="text-sky-800 text-xs font-bold leading-relaxed">${day.note || "享受旅程！"}</p>
            </div>
            <button onclick="openModal(${day.id})" class="text-sky-300 hover:text-sky-600 p-1 transition-colors">
                <i data-lucide="edit-3" class="w-5 h-5"></i>
            </button>
        </div>
    </div>
    `
};

// --- 4. 核心功能 ---
function init() {
    if (localStorage.getItem('app_version') !== VERSION_KEY) {
        state.itinerary = INITIAL_ITINERARY;
        state.checklist = INITIAL_CHECKLIST;
        localStorage.setItem('trip_itinerary', JSON.stringify(INITIAL_ITINERARY));
        localStorage.setItem('trip_checklist', JSON.stringify(INITIAL_CHECKLIST));
        localStorage.setItem('app_version', VERSION_KEY);
    } else {
        state.itinerary = JSON.parse(localStorage.getItem('trip_itinerary'));
        state.checklist = JSON.parse(localStorage.getItem('trip_checklist'));
    }
    renderContent();
    updateTabStyles();
    updateChecklistBadge();
}

function switchTab(tab) {
    state.currentTab = tab;
    renderContent();
    updateTabStyles();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateTabStyles() {
    const tabs = {
        itinerary: document.getElementById('tab-itinerary'),
        checklist: document.getElementById('tab-checklist')
    };
    if (!tabs.itinerary || !tabs.checklist) return;

    const active = "bg-slate-900 text-white shadow-lg";
    const inactive = "text-slate-400 hover:bg-slate-50";

    Object.keys(tabs).forEach(key => {
        tabs[key].className = `tab-transition flex-1 py-2.5 text-sm font-bold rounded-lg flex items-center justify-center ${key === state.currentTab ? active : inactive}`;
    });
}

function selectDay(id) {
    state.selectedDayId = id;
    renderContent();
    const btn = document.getElementById(`day-btn-${id}`);
    if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function renderContent() {
    const container = document.getElementById('app-content');
    if (!container) return;
    container.innerHTML = '';

    if (state.currentTab === 'itinerary') {
        const day = state.itinerary.find(d => d.id === state.selectedDayId);
        
        // 日期導航 + 滑軌類別
        const daysNav = `
            <div class="sticky-container bg-gray-100/90 backdrop-blur-md pt-2 pb-4 -mx-4 px-4 border-b border-gray-200 shadow-sm">
                <div class="flex overflow-x-auto space-x-3 pt-2 pb-3 custom-scrollbar snap-x">
                    ${state.itinerary.map(d => `
                        <button id="day-btn-${d.id}" onclick="selectDay(${d.id})"
                            class="snap-center flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-2xl border-2 transition-all duration-300 
                            ${state.selectedDayId === d.id ? 'bg-slate-900 border-slate-900 text-white shadow-xl -translate-y-1' : 'bg-white border-slate-100 text-slate-300'}">
                            <span class="text-[10px] font-black uppercase mb-1 ${state.selectedDayId === d.id ? 'text-sky-400' : 'text-slate-200'}">Day ${d.id}</span>
                            <span class="text-xl font-black">${d.date.split('-')[2]}</span>
                            <span class="text-[10px] font-bold">${d.dayOfWeek}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML = daysNav + RenderEngine.itineraryCard(day);
    } else {
        renderChecklist(container);
    }
    lucide.createIcons();
}

function renderChecklist(container) {
    const total = state.checklist.length;
    const checked = state.checklist.filter(i => i.checked).length;
    const progress = Math.round((checked / total) * 100);

    container.innerHTML = `
        <div class="animate-fadeIn">
            <div class="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl mb-6 relative overflow-hidden">
                <div class="relative z-10">
                    <div class="flex justify-between items-end mb-4">
                        <div><h3 class="font-black text-xl tracking-tight">準備進度</h3><p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Packing Checklist</p></div>
                        <span class="text-4xl font-black text-sky-400">${progress}%</span>
                    </div>
                    <div class="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700">
                        <div class="bg-sky-400 h-full transition-all duration-1000" style="width: ${progress}%"></div>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden mb-10">
                ${state.checklist.map(item => `
                    <div class="flex items-center p-6 border-b border-slate-50 last:border-none hover:bg-slate-50 transition-colors cursor-pointer" onclick="toggleCheck(${item.id})">
                        <div class="w-7 h-7 rounded-xl border-2 flex items-center justify-center mr-4 check-transition ${item.checked ? 'bg-sky-500 border-sky-500 text-white shadow-sm' : 'border-slate-200'}">
                            ${item.checked ? '<i data-lucide="check" class="w-4 h-4"></i>' : ''}
                        </div>
                        <span class="flex-1 text-sm font-bold ${item.checked ? 'text-slate-300 line-through' : 'text-slate-700'}">${item.text}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function toggleCheck(id) {
    const item = state.checklist.find(i => i.id === id);
    item.checked = !item.checked;
    localStorage.setItem('trip_checklist', JSON.stringify(state.checklist));
    renderContent();
    updateChecklistBadge();
}

function updateChecklistBadge() {
    const count = state.checklist.filter(i => !i.checked).length;
    const badge = document.getElementById('checklist-badge');
    if (badge) {
        badge.innerText = count;
        badge.classList.toggle('hidden', count === 0);
    }
}

// --- 5. 編輯功能 ---
let editingDayId = null;
function openModal(id) {
    editingDayId = id;
    const day = state.itinerary.find(d => d.id === id);
    document.getElementById('modal-date').innerText = `Day ${id} - ${day.date}`;
    document.getElementById('modal-textarea').value = day.note;
    document.getElementById('edit-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('edit-modal').classList.add('hidden');
}

function saveNote() {
    const newNote = document.getElementById('modal-textarea').value;
    const day = state.itinerary.find(d => d.id === editingDayId);
    day.note = newNote;
    localStorage.setItem('trip_itinerary', JSON.stringify(state.itinerary));
    closeModal();
    renderContent();
}

document.addEventListener('DOMContentLoaded', init);