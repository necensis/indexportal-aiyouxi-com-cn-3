/**
 * Site Helper - 页面辅助工具模块
 * 提供提示卡片、关键词徽章和访问说明功能
 */
(function() {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://indexportal-aiyouxi.com.cn',
    keyword: '爱游戏',
    cardColors: ['#e3f2fd', '#fce4ec', '#e8f5e9', '#fff3e0', '#f3e5f5'],
    badgeColors: ['#1976d2', '#d32f2f', '#388e3c', '#f57c00', '#7b1fa2']
  };

  /**
   * 创建提示卡片
   * @param {string} title - 卡片标题
   * @param {string} content - 卡片内容
   * @param {number} colorIndex - 颜色索引
   * @returns {HTMLElement} 卡片DOM元素
   */
  function createTipCard(title, content, colorIndex) {
    const card = document.createElement('div');
    card.className = 'tip-card';
    card.style.cssText = `
      background: ${CONFIG.cardColors[colorIndex % CONFIG.cardColors.length]};
      border-radius: 8px;
      padding: 16px;
      margin: 8px 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `;

    const titleEl = document.createElement('h4');
    titleEl.textContent = title;
    titleEl.style.cssText = 'margin: 0 0 8px 0; color: #333;';

    const contentEl = document.createElement('p');
    contentEl.textContent = content;
    contentEl.style.cssText = 'margin: 0; color: #666; line-height: 1.5;';

    card.appendChild(titleEl);
    card.appendChild(contentEl);
    return card;
  }

  /**
   * 创建关键词徽章
   * @param {string} text - 徽章文本
   * @param {number} colorIndex - 颜色索引
   * @returns {HTMLElement} 徽章DOM元素
   */
  function createBadge(text, colorIndex) {
    const badge = document.createElement('span');
    badge.className = 'keyword-badge';
    badge.textContent = text;
    badge.style.cssText = `
      display: inline-block;
      background: ${CONFIG.badgeColors[colorIndex % CONFIG.badgeColors.length]};
      color: white;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
      margin: 2px 4px;
    `;
    return badge;
  }

  /**
   * 生成访问说明
   * @returns {HTMLElement} 说明容器
   */
  function createAccessInfo() {
    const container = document.createElement('div');
    container.className = 'access-info';
    container.style.cssText = `
      background: #f5f5f5;
      border-left: 4px solid #1976d2;
      padding: 12px 16px;
      margin: 16px 0;
      border-radius: 0 4px 4px 0;
    `;

    const strong = document.createElement('strong');
    strong.textContent = '访问提示：';
    const text = document.createElement('span');
    text.textContent = ` 请通过 ${CONFIG.siteUrl} 访问，本站专注于${CONFIG.keyword}相关内容。`;

    container.appendChild(strong);
    container.appendChild(text);
    return container;
  }

  /**
   * 添加示例数据
   * @param {HTMLElement} container - 目标容器
   */
  function addExampleData(container) {
    // 示例关键词
    const keywords = ['爱游戏', '游戏攻略', '热门推荐', '新游速递', '玩家社区'];
    const badgeGroup = document.createElement('div');
    badgeGroup.style.cssText = 'margin: 12px 0;';
    
    keywords.forEach((kw, idx) => {
      badgeGroup.appendChild(createBadge(kw, idx));
    });

    // 示例卡片
    const cardData = [
      { title: '热门推荐', content: '发现最好玩的游戏，尽在爱游戏平台！' },
      { title: '新手引导', content: '首次访问请查看我们的使用指南。' },
      { title: '更新日志', content: '查看最新功能更新和优化内容。' }
    ];

    const cardGroup = document.createElement('div');
    cardData.forEach((item, idx) => {
      cardGroup.appendChild(createTipCard(item.title, item.content, idx));
    });

    container.appendChild(badgeGroup);
    container.appendChild(cardGroup);
  }

  /**
   * 初始化辅助工具
   */
  function init() {
    const mainContent = document.querySelector('main') || document.body;
    
    // 创建主容器
    const helperContainer = document.createElement('div');
    helperContainer.id = 'site-helper';
    helperContainer.style.cssText = 'max-width: 800px; margin: 20px auto; padding: 0 16px;';

    // 添加标题
    const title = document.createElement('h3');
    title.textContent = `${CONFIG.keyword} - 帮助中心`;
    title.style.cssText = 'color: #333; border-bottom: 2px solid #1976d2; padding-bottom: 8px;';
    
    // 添加访问说明
    const accessInfo = createAccessInfo();
    
    // 添加示例数据
    addExampleData(helperContainer);

    helperContainer.appendChild(title);
    helperContainer.appendChild(accessInfo);
    helperContainer.appendChild(helperContainer.querySelector('.tip-card')?.parentNode || document.createDocumentFragment());

    mainContent.insertBefore(helperContainer, mainContent.firstChild);
  }

  // 页面加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();