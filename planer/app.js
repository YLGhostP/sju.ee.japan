// --- 初始資料 (行程表) - 更新版 v3 ---
const INITIAL_ITINERARY = [
    {
        id: 1,
        date: '2026-01-30',
        dayOfWeek: '五',
        title: '出發！抵達大阪',
        location: '桃園機場 ➔ 關西機場 ➔ 飯店',
        mapLocation: 'Hotel The Lutheran Osaka',
        icon: 'plane',
        activities: [
            { time: '15:40', desc: '台灣桃園國際機場起飛' },
            { time: '19:20', desc: '抵達關西機場 (KIX)' },
            { time: '21:00', desc: '路得會飯店 Check-in' }
        ],
        note: '飯店：大阪路得會飯店 (Hotel The Lutheran)。地址：大阪市中央区谷町3-1-6。'
    },
    {
        id: 2,
        date: '2026-01-31',
        dayOfWeek: '六',
        title: '京都文化巡禮 (負責：宜先)',
        location: '京都 (下鴨 / 清水寺 / 祇園)',
        mapLocation: '清水寺',
        icon: 'camera',
        activities: [
            { time: '08:00', desc: '飯店出發' },
            { time: '09:18', desc: '糺之森 (Tadasu no Mori)' },
            { time: '09:45', desc: '下鴨神社' },
            { time: '11:29', desc: '和服租借 (梨花和服 清水寺店)' },
            { time: '12:37', desc: '清水寺參拜' },
            { time: '14:18', desc: 'Kyo Unawa Honten (鰻魚飯)' },
            { time: '15:33', desc: '鍵善良房 (四條本店) 吃甜點' },
            { time: '15:44', desc: '花見小路（南側）' },
            { time: '17:59', desc: '建仁寺' },
            { time: '18:32', desc: '京都祇園彌榮會館' }
        ],
        note: '今日時間點安排較細，請留意交通銜接。'
    },
    {
        id: 3,
        date: '2026-02-01',
        dayOfWeek: '日',
        title: '神戶異國風情 (負責：又霖)',
        location: '神戶三宮 / 南京町',
        mapLocation: '神戶南京町',
        icon: 'utensils',
        activities: [
            { time: '上午', desc: '飯店出發' },
            { time: '11:00', desc: '神戶三宮' },
            { time: '12:00', desc: '南京町 (中華街) 吃午餐' },
            { time: '14:00', desc: '生田神社' },
            { time: '17:00', desc: '神戶牛大餐' }
        ],
        note: '南京町小吃多，建議留點胃口給晚上的神戶牛。'
    },
    {
        id: 4,
        date: '2026-02-02',
        dayOfWeek: '一',
        title: '嵐山漫遊 & 溫泉美食 (負責：偉進/竟豪)',
        location: '嵐山 / 大阪市區',
        mapLocation: '嵐山竹林小徑',
        icon: 'mountain',
        activities: [
            { time: '08:00', desc: '大阪出發' },
            { time: '09:30', desc: '抵達嵐山' },
            { time: '09:45', desc: '天龍寺參觀' },
            { time: '10:30', desc: '竹林小徑 ➔ 野宮神社' },
            { time: '11:30', desc: '午餐 (嵐山よしむら蕎麥麵 或 鯛匠HANANA)' },
            { time: '12:30', desc: '嵐山猴子公園' },
            { time: '13:00', desc: '準備返回大阪' },
            { time: '下午', desc: '空庭溫泉 (大阪灣塔)' },
            { time: '晚上', desc: '帝王蟹大餐 (北堀江)' }
        ],
        note: '溫泉地址：港區弁天1-2-3。帝王蟹地址：西區北堀江1-3-7。注意嵐山回程時間。'
    },
    {
        id: 5,
        date: '2026-02-03',
        dayOfWeek: '二',
        title: '六甲山滑雪',
        location: '六甲山滑雪場',
        mapLocation: '六甲山滑雪場',
        icon: 'snowflake',
        activities: [
            { time: '10:00', desc: '飯店出發' },
            { time: '10:30', desc: '經由日本橋' },
            { time: '12:00', desc: '抵達六甲山滑雪場' },
            { time: '16:00', desc: '滑雪體驗結束' }
        ],
        note: '記得帶防水手套、替換衣物。注意山區保暖。'
    },
    {
        id: 6,
        date: '2026-02-04',
        dayOfWeek: '三',
        title: '大阪歷史名勝 (負責：劉毅安)',
        location: '大阪城 / 通天閣 / 天神橋',
        mapLocation: '大阪城天守閣',
        icon: 'map-pin',
        activities: [
            { time: '09:00', desc: '大阪城 ➔ 玉造稻荷神社 ➔ 豐國神社' },
            { time: '12:00', desc: '新世界本通商店街 ➔ 通天閣' },
            { time: '14:00', desc: '大阪木津市場' },
            { time: '16:00', desc: '天神橋筋商店街' }
        ],
        note: '木津市場部分店家下午可能休息，建議確認時間。'
    },
    {
        id: 7,
        date: '2026-02-05',
        dayOfWeek: '四',
        title: '天王寺文藝 & 道頓堀 (負責：少綸)',
        location: '天王寺 / 道頓堀',
        mapLocation: '天王寺動物園',
        icon: 'footprints',
        activities: [
            { time: '10:00', desc: '飯店出發' },
            { time: '10:30', desc: '四天王寺' },
            { time: '11:30', desc: '一心寺' },
            { time: '12:30', desc: '午餐時間' },
            { time: '13:50', desc: '大阪市立美術館' },
            { time: '14:50', desc: '天王寺動物園' },
            { time: '17:30', desc: '道頓堀水上觀光船' },
            { time: '18:00', desc: '自由行 (心齋橋/跑跑人)' }
        ],
        note: '水上觀光船約20分鐘。美術館與動物園行程較緊湊，注意時間。'
    },
    {
        id: 8,
        date: '2026-02-06',
        dayOfWeek: '五',
        title: '梅田最後購物 (負責：陳奕安)',
        location: '梅田 / 關西機場',
        mapLocation: 'HEP FIVE摩天輪',
        icon: 'shopping-bag',
        activities: [
            { time: '上午', desc: '飯店退房 (寄放行李或帶著走)' },
            { time: '10:00', desc: '阪急三番街' },
            { time: '11:30', desc: '購物中心 HEP FIVE (摩天輪)' },
            { time: '13:30', desc: '阪急百貨梅田總店' },
            { time: '15:30', desc: '友都八喜 (Yodobashi) 梅田' },
            { time: '18:00', desc: '前往關西機場報到' },
            { time: '20:45', desc: '啟航返台' }
        ],
        note: '最後一天購物請注意行李重量與機場交通時間。'
    }
];

// --- 初始資料 (待辦清單) ---
const INITIAL_CHECKLIST = [
    { id: 1, text: '護照 (有效期6個月以上)', checked: false },
    { id: 2, text: 'Visit Japan Web 填寫', checked: false },
    { id: 3, text: '日幣現金 / 信用卡', checked: false },
    { id: 4, text: 'SIM 卡 / 漫遊開通', checked: false },
    { id: 5, text: '滑雪防水手套', checked: false },
    { id: 6, text: '個人常備藥品', checked: false }
];

// --- 狀態管理 (使用 LocalStorage) ---
let state = {
    currentTab: 'itinerary',
    selectedDayId: 1,
    itinerary: JSON.parse(localStorage.getItem('trip_itinerary')) || INITIAL_ITINERARY,
    checklist: JSON.parse(localStorage.getItem('trip_checklist')) || INITIAL_CHECKLIST
};

let editingDayId = null;

// --- 主程式邏輯 ---

function init() {
    // 強制更新 LocalStorage：如果版本號不符，載入新的 INITIAL_ITINERARY
    if(localStorage.getItem('version_key') !== '2026_v3') {
        state.itinerary = INITIAL_ITINERARY;
        localStorage.setItem('trip_itinerary', JSON.stringify(INITIAL_ITINERARY));
        localStorage.setItem('version_key', '2026_v3');
    }
    
    renderContent();
    updateTabStyles();
    updateChecklistBadge();
    lucide.createIcons();
}

function switchTab(tab) {
    state.currentTab = tab;
    renderContent();
    updateTabStyles();
    updateChecklistBadge();
}

function updateTabStyles() {
    const tabItinerary = document.getElementById('tab-itinerary');
    const tabChecklist = document.getElementById('tab-checklist');
    const activeClass = ['bg-slate-800', 'text-white', 'shadow-sm'];
    const inactiveClass = ['text-gray-500', 'hover:bg-gray-50'];

    if (state.currentTab === 'itinerary') {
        tabItinerary.classList.add(...activeClass);
        tabItinerary.classList.remove(...inactiveClass);
        tabChecklist.classList.remove(...activeClass);
        tabChecklist.classList.add(...inactiveClass);
    } else {
        tabChecklist.classList.add(...activeClass);
        tabChecklist.classList.remove(...inactiveClass);
        tabItinerary.classList.remove(...activeClass);
        tabItinerary.classList.add(...inactiveClass);
    }
}

function selectDay(id) {
    state.selectedDayId = id;
    renderItinerary();
    
    // 優化滑動體驗
    setTimeout(() => {
        const btn = document.getElementById(`day-btn-${id}`);
        if(btn) {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, 50);
}

function getMapQuery(day) {
    if (day.mapLocation) return day.mapLocation;
    return day.location;
}

function renderContent() {
    const container = document.getElementById('app-content');
    container.innerHTML = '';

    if (state.currentTab === 'itinerary') {
        renderItinerary();
    } else {
        renderChecklist();
    }
    lucide.createIcons();
}

function renderItinerary() {
    const container = document.getElementById('app-content');
    const day = state.itinerary.find(d => d.id === state.selectedDayId);
    const mapQuery = getMapQuery(day);

    // 1. 日期選擇器
    let daysHtml = `
        <div class="sticky-container bg-gray-100/95 backdrop-blur-sm pt-4 pb-4 -mt-2 mb-2">
            <div class="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide -mx-2 px-2 snap-x scroll-smooth" style="scrollbar-width: none;">
                ${state.itinerary.map(d => `
                    <button id="day-btn-${d.id}" onclick="selectDay(${d.id})"
                        class="snap-center flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-xl border transition-all duration-300 ${state.selectedDayId === d.id ? 'bg-slate-800 border-slate-800 text-white shadow-lg transform scale-105' : 'bg-white border-gray-200 text-gray-400 hover:border-slate-300'}">
                        <span class="text-[10px] font-bold uppercase mb-1 opacity-80">Day ${d.id}</span>
                        <span class="text-lg font-bold ${state.selectedDayId === d.id ? 'text-sky-400' : 'text-gray-800'}">${d.date.split('-')[2]}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    // 2. 行程卡片
    let activitiesHtml = day.activities.map(act => `
        <div class="relative pl-6 pb-6 last:pb-0 border-l-2 border-slate-200 last:border-transparent ml-2 group">
            <div class="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-800 border-2 border-white shadow-sm z-10 group-hover:scale-125 transition-transform"></div>
            <div class="flex flex-col sm:flex-row sm:items-baseline">
                <span class="font-mono text-sm font-bold text-slate-800 w-16 mb-1 sm:mb-0 flex-shrink-0">${act.time}</span>
                <p class="text-gray-700 text-sm leading-relaxed">${act.desc}</p>
            </div>
        </div>
    `).join('');

    let cardHtml = `
        <div class="animate-fadeIn">
            <div class="bg-white rounded-2xl shadow-sm overflow-hidden mb-6 border border-gray-100">
                <div class="p-6 pb-4 bg-gradient-to-r from-white to-gray-50 border-b border-gray-100">
                    <div class="flex justify-between items-start">
                        <div class="flex items-center space-x-4">
                            <div class="p-3 rounded-xl bg-slate-100 text-slate-700 shadow-inner">
                                <i data-lucide="${day.icon}" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 tracking-tight leading-tight mb-1">${day.date} (${day.dayOfWeek})</h3>
                                <p class="text-sm text-gray-500 font-medium">${day.title} • ${day.location}</p>
                            </div>
                        </div>
                        <div class="text-xs font-bold px-2 py-1 bg-slate-800 text-white rounded-full uppercase tracking-wider">Day ${day.id}</div>
                    </div>
                </div>

                <div class="p-6 pt-6">
                    <div class="mb-6">
                        ${activitiesHtml}
                    </div>

                    <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm relative group">
                        <div class="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold rounded text-gray-500 z-10 pointer-events-none shadow-sm flex items-center">
                            <i data-lucide="map" class="w-3 h-3 mr-1"></i> ${day.location}
                        </div>
                        <iframe width="100%" height="180" frameborder="0" style="border:0; filter: grayscale(20%) contrast(1.1);"
                            src="https://maps.google.com/maps?q=$${encodeURIComponent(mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div>

                <div class="bg-slate-50 p-4 border-t border-gray-100 flex items-start gap-3">
                    <i data-lucide="info" class="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0"></i>
                    <div class="flex-1">
                        <span class="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1">備註 Note</span>
                        <p class="text-sm text-slate-700">${day.note || "暫無備註"}</p>
                    </div>
                    <button onclick="openModal(${day.id})" class="p-2 text-slate-400 hover:text-sky-600 hover:bg-white rounded-full transition-all">
                        <i data-lucide="edit-3" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>

            <div class="flex justify-between items-center px-2 pb-8">
                <button onclick="selectDay(${Math.max(1, day.id - 1)})" ${day.id === 1 ? 'disabled class="opacity-30 cursor-not-allowed px-4 py-2"' : 'class="group flex items-center text-sm font-bold text-slate-600 hover:text-slate-800 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"'} >
                    <i data-lucide="arrow-left" class="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"></i> Prev
                </button>
                <button onclick="selectDay(${Math.min(state.itinerary.length, day.id + 1)})" ${day.id === state.itinerary.length ? 'disabled class="opacity-30 cursor-not-allowed px-4 py-2"' : 'class="group flex items-center text-sm font-bold text-slate-600 hover:text-slate-800 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"'} >
                    Next <i data-lucide="arrow-right" class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"></i>
                </button>
            </div>
        </div>
    `;

    container.innerHTML = daysHtml + cardHtml;
    lucide.createIcons();
}

// --- 待辦清單邏輯 ---

function renderChecklist() {
    const container = document.getElementById('app-content');
    
    const total = state.checklist.length;
    const checked = state.checklist.filter(i => i.checked).length;
    const progress = total === 0 ? 0 : Math.round((checked / total) * 100);

    let listHtml = `
        <div class="animate-fadeIn pb-10">
            <div class="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
                <div class="absolute right-0 top-0 opacity-10">
                    <i data-lucide="clipboard-list" width="120" height="120"></i>
                </div>
                <div class="relative z-10">
                    <div class="flex justify-between items-end mb-2">
                        <h3 class="font-bold text-lg tracking-wide">行前準備進度</h3>
                        <span class="font-mono text-2xl font-bold text-sky-400">${progress}%</span>
                    </div>
                    <div class="w-full bg-slate-600 rounded-full h-2.5 mb-1 overflow-hidden">
                        <div class="bg-sky-400 h-2.5 rounded-full transition-all duration-500 ease-out" style="width: ${progress}%"></div>
                    </div>
                    <p class="text-xs text-slate-400 text-right mt-1">已完成 ${checked} / ${total} 項</p>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-[300px]">
                 <div class="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
                    <h4 class="font-bold text-gray-700 flex items-center">
                        <i data-lucide="check-circle-2" class="w-4 h-4 mr-2 text-slate-500"></i>
                        待辦項目
                    </h4>
                 </div>

                 <div id="checklist-container" class="divide-y divide-gray-100 flex-1">
                    ${state.checklist.length === 0 ? `
                        <div class="p-10 text-center text-gray-400 flex flex-col items-center justify-center h-full">
                            <div class="bg-gray-100 p-4 rounded-full mb-3">
                                <i data-lucide="clipboard" class="w-8 h-8 opacity-40"></i>
                            </div>
                            <p class="text-sm">目前沒有待辦事項</p>
                            <p class="text-xs mt-1 opacity-60">下方新增您的第一個任務！</p>
                        </div>
                    ` : state.checklist.map(item => `
                        <div class="group flex items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer select-none" onclick="toggleChecklistItem(${item.id})">
                            <div class="relative flex items-center justify-center w-6 h-6 mr-4 flex-shrink-0">
                                <input type="checkbox" ${item.checked ? 'checked' : ''} class="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-lg checked:bg-sky-500 checked:border-sky-500 transition-all cursor-pointer">
                                <i data-lucide="check" class="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></i>
                            </div>
                            <span class="flex-1 text-sm font-medium check-transition ${item.checked ? 'text-gray-400 line-through decoration-gray-300' : 'text-gray-700'}">
                                ${item.text}
                            </span>
                            <button onclick="deleteChecklistItem(event, ${item.id})" class="p-2 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                    `).join('')}
                 </div>

                 <form onsubmit="addChecklistItem(event)" class="p-4 bg-gray-50 border-t border-gray-100 mt-auto">
                    <div class="flex gap-2 relative">
                        <input id="checklist-input" type="text" placeholder="新增事項 (例如: 帶行動電源)..." 
                            class="flex-1 pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-sm shadow-sm transition-all placeholder-gray-400">
                        <button type="submit" class="absolute right-2 top-2 p-1.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors shadow-sm">
                            <i data-lucide="plus" class="w-4 h-4"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    container.innerHTML = listHtml;
    lucide.createIcons();
    updateChecklistBadge();
}

function toggleChecklistItem(id) {
    const item = state.checklist.find(i => i.id === id);
    if (item) {
        item.checked = !item.checked;
        saveChecklist();
        renderChecklist();
    }
}

function addChecklistItem(e) {
    e.preventDefault();
    const input = document.getElementById('checklist-input');
    const text = input.value.trim();
    if (!text) return;

    const newItem = {
        id: Date.now(),
        text: text,
        checked: false
    };

    state.checklist.push(newItem);
    saveChecklist();
    
    input.value = '';
    renderChecklist();
}

function deleteChecklistItem(e, id) {
    e.stopPropagation();
    if(confirm('確定要刪除這個項目嗎？')) {
        state.checklist = state.checklist.filter(i => i.id !== id);
        saveChecklist();
        renderChecklist();
    }
}

function saveChecklist() {
    localStorage.setItem('trip_checklist', JSON.stringify(state.checklist));
    updateChecklistBadge();
}

function updateChecklistBadge() {
    const incompleteCount = state.checklist.filter(i => !i.checked).length;
    const badge = document.getElementById('checklist-badge');
    if (badge) {
        if (incompleteCount > 0) {
            badge.innerText = incompleteCount;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

// --- 共用邏輯 ---

function openModal(dayId) {
    editingDayId = dayId;
    const day = state.itinerary.find(d => d.id === dayId);
    document.getElementById('modal-date').innerText = day.date;
    document.getElementById('modal-textarea').value = day.note || "";
    document.getElementById('edit-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('edit-modal').classList.add('hidden');
    editingDayId = null;
}

function saveNote() {
    if (!editingDayId) return;
    const newNote = document.getElementById('modal-textarea').value;
    const dayIndex = state.itinerary.findIndex(d => d.id === editingDayId);
    
    state.itinerary[dayIndex].note = newNote;
    localStorage.setItem('trip_itinerary', JSON.stringify(state.itinerary));

    closeModal();
    renderContent();
}

// --- 啟動 ---
init();