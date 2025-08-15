// 游戏数据
const gameData = {
    cultivation: 0,
    realmIndex: 0,
    clickValue: 10, // 基础点击值
    realms: [
        { name: "凡人", nextLevel: 100, clickMultiplier: 1 },
        { name: "练气期", nextLevel: 200, clickMultiplier: 1.5 },
        { name: "筑基期", nextLevel: 500, clickMultiplier: 2 },
        { name: "金丹期", nextLevel: 1000, clickMultiplier: 3 },
        { name: "元婴期", nextLevel: 5000, clickMultiplier: 5 },
        { name: "化神期", nextLevel: 10000, clickMultiplier: 8 },
        { name: "大乘期", nextLevel: Infinity, clickMultiplier: 10 }
    ]
};

// DOM元素
const cultivateBtn = document.getElementById('cultivate-btn');
const breakthroughBtn = document.getElementById('breakthrough-btn');
const cultivationDisplay = document.getElementById('cultivation');
const nextLevelDisplay = document.getElementById('next-level');
const realmDisplay = document.getElementById('realm');
const clickValueDisplay = document.getElementById('click-value'); // 新增显示点击值的元素

// 初始化游戏
function initGame() {
    updateDisplay();
}

// 更新显示
function updateDisplay() {
    cultivationDisplay.textContent = gameData.cultivation;
    nextLevelDisplay.textContent = gameData.realms[gameData.realmIndex].nextLevel;
    realmDisplay.textContent = gameData.realms[gameData.realmIndex].name;
    clickValueDisplay.textContent = Math.floor(gameData.clickValue * gameData.realms[gameData.realmIndex].clickMultiplier); // 显示当前点击值
    
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
    const currentClickValue = gameData.clickValue * gameData.realms[gameData.realmIndex].clickMultiplier;
    gameData.cultivation += Math.floor(currentClickValue); // 根据当前境界计算点击值
    updateDisplay();
});

// 突破按钮点击事件
breakthroughBtn.addEventListener('click', function() {
    if (gameData.realmIndex < gameData.realms.length - 1) {
        gameData.realmIndex++;
        gameData.cultivation = 0; // 突破后修为归零
        alert(`恭喜突破到${gameData.realms[gameData.realmIndex].name}！每次点击现在可获得 ${Math.floor(gameData.clickValue * gameData.realms[gameData.realmIndex].clickMultiplier)} 点修为`);
        updateDisplay();
    }
});

// 初始化游戏
initGame();
