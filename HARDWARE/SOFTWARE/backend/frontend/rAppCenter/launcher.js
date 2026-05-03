/**
 * @license RFOF-FUCKUP PRIVATE LICENSE
 * @copyright 2026 @RFOF-NETWORK & @Satoramy
 * @warning PRIVATE PROPERTY: Unauthorized copying or commercial 
 * extraction of this structure is strictly prohibited.
 * Only for use within the RFOF-Ecosystem.
 * 
 * =============================================================================
 * |      PROPERTY OF @RFOF-NETWORK & @Satoramy - ALL RIGHTS RESERVED           |
 * |-----------------------------------------------------------------------------|
 * | LICENSE: RFOF-FUCKUP PRIVATE & ECO-LICENSE (V 1.0)                          |
 * | PROJECT: RFOF-OS (PZQQET / GUICI-Core Architecture)                         |
 * |                                                                             |
 * | WARNING: UNAUTHORIZED COMMERCIAL EXTRACTION, COPYING, OR DISTRIBUTION       |
 * | OUTSIDE THE RFOF-ECOSYSTEM IS STRICTLY PROHIBITED. THIS CODE IS PART OF     |
 * | A PROTECTED HARDWARE-SOFTWARE-SYNERGY (EST. 1940/2026).                      |
 * =============================================================================
 */

export async function bootOS(targetSelector) {
    const root = document.querySelector(targetSelector);
    
    // Apple-Style Header & Desktop Container
    root.innerHTML = `
        <div class="desktop-environment">
            <header class="top-bar">
                <span class="system-time">RFOF-OS | 2026</span>
                <div class="system-icons">📡 CMDX | 👁️ GUICI</div>
            </header>
            
            <main class="tile-grid" id="app-launcher">
                <!-- Kacheln werden hier geladen -->
            </main>
            
            <nav class="dock">
                <div class="dock-item" title="Home">🏠</div>
                <div class="dock-item" title="Store">🏬</div>
                <div class="dock-item" title="Settings">⚙️</div>
            </nav>
        </div>
    `;

    renderTiles();
}

function renderTiles() {
    const grid = document.getElementById('app-launcher');
    // Beispiel für die 68 Module / rApps
    const apps = [
        { name: 'Wallet', icon: '💰', path: '../blockchain/wallet.html' },
        { name: 'PZQQET', icon: '⚛️', path: '../pzqqet/math.html' },
        { name: 'Store', icon: '🛒', path: '../smart-contract-interfaces/registry.html' }
    ];

    grid.innerHTML = apps.map(app => `
        <div class="app-tile" onclick="window.location.href='${app.path}'">
            <div class="icon">${app.icon}</div>
            <div class="label">${app.name}</div>
        </div>
    `).join('');
}
