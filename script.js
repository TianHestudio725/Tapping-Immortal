// 游戏数据
const gameData = {
    cultivation: 0,
    realmIndex: 0,
    realms: [
        { name: "凡人", nextLevel: 100 },
        { name: "练气期", nextLevel: 200 },
        { name: "筑基期", nextLevel: 500 },
        { name: "金丹期", nextLevel: 1000 },
        { name: "元婴期", nextLevel: 5000 },
        { name: "化神期", nextLevel: 10000 },
        { name: "大乘期", nextLevel: Infinity }
    ]
};

// DOM元素
const cultivateBtn = document.getElementById('cultivate-btn');
const breakthroughBtn = document.getElementById('breakthrough-btn');
const cultivationDisplay = document.getElementById('cultivation');
const nextLevelDisplay = document.getElementById('next-level');
const realmDisplay = document.getElementById('realm');

// 初始化游戏
function initGame() {
    updateDisplay();
}

// 更新显示
function updateDisplay() {
    cultivationDisplay.textContent = gameData.cultivation;
    nextLevelDisplay.textContent = gameData.realms[gameData.realmIndex].nextLevel;
    realmDisplay.textContent = gameData.realms[gameData.realmIndex].name;
    
    // 检查是否可以突破
    if (gameData.cultivation >= gameData.realms[gameData.realmIndex].nextLevel && 
        gameData.realmIndex < gameData.realms.length - 1) {
        breakthroughBtn.classList.remove('hidden');
    } else {
        breakthroughBtn.classList.add('hidden');
    }
}

// 修炼按钮点击事件
cultivateBtn.addEventListener('click', function() {
    gameData.cultivation += 10; // 每次点击增加10点修为
    updateDisplay();
});

// 突破按钮点击事件
breakthroughBtn.addEventListener('click', function() {
    if (gameData.realmIndex < gameData.realms.length - 1) {
        gameData.realmIndex++;
        gameData.cultivation = 0; // 突破后修为归零
        alert(`恭喜突破到${gameData.realms[gameData.realmIndex].name}！`);
        updateDisplay();
    }
});

// 初始化游戏
initGame();
