// ==========================================
// URBANSTYLE - MAIN STORE, CART & WISHLIST ENGINE
// ==========================================

// Product Database (Women, Men, Boys, Girls)
const products = {
    // WOMEN
    "Summer Dress": {
        category: "WOMEN",
        price: 1499,
        originalPrice: "₹1,999",
        displayPrice: "₹1,499",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    },
    "Denim Jacket": {
        category: "WOMEN",
        price: 2499,
        displayPrice: "₹2,499",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80"
    },
    "Wide Leg Pants": {
        category: "WOMEN",
        price: 1799,
        displayPrice: "₹1,799",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    },
    "Silk Floral Blouse": {
        category: "WOMEN",
        price: 2199,
        displayPrice: "₹2,199",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
    },
    "Linen Trench Coat": {
        category: "WOMEN",
        price: 3499,
        displayPrice: "₹3,499",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
    },
    "Evening Satin Gown": {
        category: "WOMEN",
        price: 3499,
        originalPrice: "₹4,299",
        displayPrice: "₹3,499",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    },

    // MEN
    "Casual Shirt": {
        category: "MEN",
        price: 1499,
        displayPrice: "₹1,499",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    },
    "Classic T-Shirt": {
        category: "MEN",
        price: 899,
        displayPrice: "₹899",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    },
    "Executive Blazer": {
        category: "MEN",
        price: 3999,
        displayPrice: "₹3,999",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    },
    "Slim Fit Chinos": {
        category: "MEN",
        price: 1899,
        displayPrice: "₹1,899",
        image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80"
    },
    "Urban Trucker Jacket": {
        category: "MEN",
        price: 2799,
        displayPrice: "₹2,799",
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80"
    },
    "Oversized Hoodie": {
        category: "MEN",
        price: 1699,
        displayPrice: "₹1,699",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
    },

    // BOYS
    "Cool Graphic Tee": {
        category: "BOYS",
        price: 699,
        displayPrice: "₹699",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80"
    },
    "Boys Denim Overalls": {
        category: "BOYS",
        price: 1299,
        displayPrice: "₹1,299",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80"
    },
    "Boys Tracksuit Set": {
        category: "BOYS",
        price: 1499,
        displayPrice: "₹1,499",
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
    },
    "Boys Bomber Jacket": {
        category: "BOYS",
        price: 1899,
        displayPrice: "₹1,899",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80"
    },
    "Checked Flannel Shirt": {
        category: "BOYS",
        price: 999,
        displayPrice: "₹999",
        image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80"
    },
    "Boys Chino Shorts": {
        category: "BOYS",
        price: 799,
        displayPrice: "₹799",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80"
    },

    // GIRLS
    "Floral Twirl Dress": {
        category: "GIRLS",
        price: 899,
        originalPrice: "₹1,199",
        displayPrice: "₹899",
        image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?auto=format&fit=crop&w=800&q=80"
    },
    "Girls Denim Skirt Set": {
        category: "GIRLS",
        price: 1399,
        displayPrice: "₹1,399",
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80"
    },
    "Pastel Knit Cardigan": {
        category: "GIRLS",
        price: 1099,
        displayPrice: "₹1,099",
        image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80"
    },
    "Party Princess Frock": {
        category: "GIRLS",
        price: 1399,
        originalPrice: "₹1,799",
        displayPrice: "₹1,399",
        image: "https://images.unsplash.com/photo-1502980426475-b83966705988?auto=format&fit=crop&w=800&q=80"
    },
    "Girls Printed Hoodie": {
        category: "GIRLS",
        price: 1299,
        displayPrice: "₹1,299",
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80"
    },
    "Girls Cotton Jumpsuit": {
        category: "GIRLS",
        price: 1499,
        displayPrice: "₹1,499",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
    }
};


// Cart Array State
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function getCartCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Wishlist & Collections State
let collections = JSON.parse(localStorage.getItem("wishlistCollections")) || { "All Saved Items": [] };
let oldWishlist = JSON.parse(localStorage.getItem("wishlist"));
if (oldWishlist && Array.isArray(oldWishlist) && oldWishlist.length > 0) {
    collections["All Saved Items"] = [...new Set([...collections["All Saved Items"], ...oldWishlist])];
    localStorage.removeItem("wishlist");
    localStorage.setItem("wishlistCollections", JSON.stringify(collections));
}
let wishlist = [];
function rebuildFlatWishlist() {
    wishlist = [];
    for (let c in collections) {
        collections[c].forEach(p => {
            if (!wishlist.includes(p)) wishlist.push(p);
        });
    }
}
rebuildFlatWishlist();

// Applied Discount Percentage State
let currentDiscountPercent = Number(localStorage.getItem("appliedDiscount")) || 0;

// ==========================================
// UPDATE HEADER COUNTERS
// ==========================================
function updateHeader() {
    let cartElement = document.getElementById("cartCount");
    let wishlistElement = document.getElementById("wishlistCount");

    if (cartElement) {
        cartElement.innerText = getCartCount();
    }

    if (wishlistElement) {
        wishlistElement.innerText = wishlist.length;
    }
}

// ==========================================
// ADD TO CART
// ==========================================
function addToCart(productName, qty = 1) {
    let product = products[productName];
    if (!product) return;

    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({
            name: productName,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: qty
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartCount", getCartCount());
    updateHeader();

    if (document.getElementById("cartItemsColumn")) {
        renderCartPage();
    }

    alert("🛍️ " + productName + " has been added to your shopping bag!");
}

// ==========================================
// SHOW CART & WISHLIST PAGES
// ==========================================
function showCart() {
    window.location.href = "cart.html";
}

function showWishlist() {
    window.location.href = "wishlist.html";
}

// ==========================================
// WISHLIST & COLLECTIONS LOGIC
// ==========================================
let pendingWishlistProduct = null;
let currentCollectionView = null;

function saveCollections() {
    localStorage.setItem("wishlistCollections", JSON.stringify(collections));
    rebuildFlatWishlist();
    updateHeader();
    updateHeartIcons();
    if (document.getElementById("wishlistGrid")) renderWishlistPage();
}

function updateHeartIcons() {
    document.querySelectorAll('.heart').forEach(btn => {
        let onclickAttr = btn.getAttribute('onclick');
        if (!onclickAttr) return;
        let match = onclickAttr.match(/addWishlist\('([^']+)'\)/) || onclickAttr.match(/toggleWishlistAction\('([^']+)'/);
        if (match) {
            let pName = match[1];
            if (wishlist.includes(pName)) {
                btn.innerHTML = '♥';
                btn.classList.add('saved');
            } else {
                btn.innerHTML = '♡';
                btn.classList.remove('saved');
            }
        }
    });
}

function addWishlist(productName) {
    if (wishlist.includes(productName)) {
        removeFromWishlist(productName);
    } else {
        pendingWishlistProduct = productName;
        openSaveToCollectionModal();
    }
}

function removeFromWishlist(productName) {
    for (let c in collections) {
        collections[c] = collections[c].filter(item => item !== productName);
    }
    saveCollections();
}

function removeFromCollection(productName, colName) {
    if (collections[colName]) {
        collections[colName] = collections[colName].filter(item => item !== productName);
        saveCollections();
    }
}

function moveToBag(productName, fromCollection = null) {
    addToCart(productName, 1);
    if (fromCollection) {
        removeFromCollection(productName, fromCollection);
    } else {
        removeFromWishlist(productName);
    }
}

// Modal for Save to Collection
function openSaveToCollectionModal() {
    let modal = document.getElementById('collectionSaveModal');
    if (!modal) {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="wishlist-modal-overlay" id="collectionSaveModal" onclick="closeSaveModal()">
                <div class="wishlist-modal-content" onclick="event.stopPropagation()">
                    <div class="wishlist-modal-header">
                        <h3>Save to Collection</h3>
                        <button class="btn-close-modal" onclick="closeSaveModal()">✕</button>
                    </div>
                    <div class="wishlist-modal-body" id="collectionSaveOptions"></div>
                    <div class="wishlist-modal-footer">
                        <input type="text" id="newColInput" placeholder="New collection name...">
                        <button onclick="createNewCollection()">Create & Save</button>
                    </div>
                </div>
            </div>
        `);
        modal = document.getElementById('collectionSaveModal');
    }
    
    const premiumFolderIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle; color: var(--accent-gold);"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`;
    
    let html = '';
    for (let c in collections) {
        html += `<div class="col-option" onclick="saveToExisting('${c}')">
            <span style="display:flex; align-items:center;">${premiumFolderIcon} ${c}</span>
            <small>${collections[c].length} items</small>
        </div>`;
    }
    document.getElementById('collectionSaveOptions').innerHTML = html;
    modal.classList.add('active');
}

function closeSaveModal() {
    let modal = document.getElementById('collectionSaveModal');
    if (modal) modal.classList.remove('active');
}

function saveToExisting(colName) {
    if (!collections[colName]) collections[colName] = [];
    if (!collections[colName].includes(pendingWishlistProduct)) {
        collections[colName].push(pendingWishlistProduct);
    }
    saveCollections();
    closeSaveModal();
}

function createNewCollection() {
    let input = document.getElementById('newColInput');
    let name = input.value.trim();
    if (name) {
        if (!collections[name]) collections[name] = [];
        saveToExisting(name);
        input.value = "";
    }
}

// Modal for Moving Product
function openMoveProductModal(productName, fromCol) {
    pendingWishlistProduct = productName;
    let modal = document.getElementById('collectionMoveModal');
    if (!modal) {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="wishlist-modal-overlay" id="collectionMoveModal" onclick="closeMoveModal()">
                <div class="wishlist-modal-content" onclick="event.stopPropagation()">
                    <div class="wishlist-modal-header">
                        <h3>Move to Collection</h3>
                        <button class="btn-close-modal" onclick="closeMoveModal()">✕</button>
                    </div>
                    <div class="wishlist-modal-body" id="collectionMoveOptions"></div>
                </div>
            </div>
        `);
        modal = document.getElementById('collectionMoveModal');
    }
    
    const premiumFolderIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle; color: var(--accent-gold);"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`;
    
    let html = '';
    for (let c in collections) {
        if (c !== fromCol) {
            html += `<div class="col-option" onclick="moveToExisting('${c}', '${fromCol}')">
                <span style="display:flex; align-items:center;">${premiumFolderIcon} ${c}</span>
            </div>`;
        }
    }
    document.getElementById('collectionMoveOptions').innerHTML = html;
    modal.classList.add('active');
}

function closeMoveModal() {
    let modal = document.getElementById('collectionMoveModal');
    if (modal) modal.classList.remove('active');
}

function moveToExisting(toCol, fromCol) {
    if (!collections[toCol].includes(pendingWishlistProduct)) {
        collections[toCol].push(pendingWishlistProduct);
    }
    removeFromCollection(pendingWishlistProduct, fromCol);
    closeMoveModal();
}

function customConfirm(message, callback) {
    let modal = document.getElementById('customConfirmModal');
    if (modal) modal.remove();
    
    document.body.insertAdjacentHTML('beforeend', `
        <div class="wishlist-modal-overlay active" id="customConfirmModal" onclick="closeCustomConfirm()" style="z-index: 10000;">
            <div class="wishlist-modal-content" onclick="event.stopPropagation()" style="max-width: 400px; text-align:center;">
                <div style="font-size: 40px; margin-bottom: 15px; color: var(--accent-gold);">⚠️</div>
                <h3 style="font-family: var(--font-serif); font-size: 22px; color: var(--primary); margin-bottom: 10px;">CONFIRM ACTION</h3>
                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 25px;">${message}</p>
                <div style="display: flex; gap: 10px;">
                    <button style="flex: 1; padding: 12px; border: 1px solid var(--border-light); background: transparent; border-radius: 6px; cursor: pointer; color: var(--text-main);" onclick="closeCustomConfirm()">CANCEL</button>
                    <button style="flex: 1; padding: 12px; background: var(--primary); color: white; border: none; border-radius: 6px; cursor: pointer;" id="confirmActionBtn">CONFIRM</button>
                </div>
            </div>
        </div>
    `);
    
    document.getElementById('confirmActionBtn').onclick = () => {
        closeCustomConfirm();
        callback();
    };
}

function closeCustomConfirm() {
    let m = document.getElementById('customConfirmModal');
    if (m) m.remove();
}

function customPrompt(title, defaultValue, callback) {
    let modal = document.getElementById('customPromptModal');
    if (modal) modal.remove();
    
    document.body.insertAdjacentHTML('beforeend', `
        <div class="wishlist-modal-overlay active" id="customPromptModal" onclick="closeCustomPrompt()" style="z-index: 10000;">
            <div class="wishlist-modal-content" onclick="event.stopPropagation()" style="max-width: 400px;">
                <h3 style="font-family: var(--font-serif); font-size: 22px; color: var(--primary); margin-bottom: 15px;">${title}</h3>
                <input type="text" id="customPromptInput" value="${defaultValue || ''}" style="width: 100%; padding: 12px; border: 1px solid var(--border-light); border-radius: 6px; outline: none; margin-bottom: 20px; color: var(--text-main);">
                <div style="display: flex; gap: 10px;">
                    <button style="flex: 1; padding: 12px; border: 1px solid var(--border-light); background: transparent; border-radius: 6px; cursor: pointer; color: var(--text-main);" onclick="closeCustomPrompt()">CANCEL</button>
                    <button style="flex: 1; padding: 12px; background: var(--primary); color: white; border: none; border-radius: 6px; cursor: pointer;" id="promptActionBtn">SAVE</button>
                </div>
            </div>
        </div>
    `);
    
    let input = document.getElementById('customPromptInput');
    input.focus();
    
    document.getElementById('promptActionBtn').onclick = () => {
        let val = input.value;
        closeCustomPrompt();
        callback(val);
    };
}

function closeCustomPrompt() {
    let m = document.getElementById('customPromptModal');
    if (m) m.remove();
}

function deleteCollection(colName) {
    customConfirm("Delete collection '" + colName + "'? Items in this collection will be removed from it.", () => {
        delete collections[colName];
        saveCollections();
        currentCollectionView = null;
        renderWishlistPage();
    });
}

function renameCollection(colName) {
    customPrompt("Rename Collection", colName, (newName) => {
        if (newName && newName.trim() && newName.trim() !== colName) {
            newName = newName.trim();
            collections[newName] = collections[colName];
            delete collections[colName];
            if(currentCollectionView === colName) currentCollectionView = newName;
            saveCollections();
        }
    });
}

// ==========================================
// RENDER WISHLIST PAGE (wishlist.html)
// ==========================================
function renderWishlistPage() {
    let wishlistGrid = document.getElementById("wishlistGrid");
    if (!wishlistGrid) return;
    let subtitle = document.getElementById("wishlistSubtitle");

    if (currentCollectionView && collections[currentCollectionView]) {
        // VIEWING A SINGLE COLLECTION
        if (subtitle) subtitle.innerHTML = `<button onclick="currentCollectionView=null; renderWishlistPage()" class="btn-back-cols">← Back to Collections</button>`;
        
        const premiumFolderIconLg = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 12px; vertical-align: middle; color: var(--accent-gold);"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`;
        
        let colItems = collections[currentCollectionView];
        let html = `<div class="collection-header-row" style="display:flex; align-items:center; gap:20px;">
            <h2 style="display:flex; align-items:center; margin:0;">${premiumFolderIconLg} ${currentCollectionView}</h2>
            <div class="col-actions" style="display:flex; gap:10px;">
                ${currentCollectionView !== "All Saved Items" ? `<button onclick="renameCollection('${currentCollectionView}')">✏️ Rename</button><button onclick="deleteCollection('${currentCollectionView}')">🗑️ Delete</button>` : ""}
            </div>
        </div>`;

        if (colItems.length === 0) {
            html += `<div class="empty-wishlist-card">
                <h3>COLLECTION IS EMPTY</h3>
                <a href="home.html" class="btn-start-shopping" style="display:inline-block; margin-top:20px;">EXPLORE STORE CATALOG →</a>
            </div>`;
        } else {
            html += `<div class="wishlist-grid">`;
            colItems.forEach(itemKey => {
                let item = products[itemKey];
                if (!item) return;
                html += `
                    <div class="wishlist-card 3d-card">
                        <div class="wishlist-img-box">
                            <img src="${item.image}" alt="${itemKey}">
                            <button class="btn-remove-wishlist" title="Remove" onclick="removeFromCollection('${itemKey}', '${currentCollectionView}')">✕</button>
                        </div>
                        <div class="wishlist-card-details">
                            <div>
                                <small>${item.category}</small>
                                <h3>${itemKey}</h3>
                                <div class="wishlist-price">${item.displayPrice}</div>
                            </div>
                            <button class="btn-move-to-bag" onclick="moveToBag('${itemKey}', '${currentCollectionView}')">MOVE TO BAG 🛍️</button>
                            <button class="btn-move-col" onclick="openMoveProductModal('${itemKey}', '${currentCollectionView}')">MOVE TO...</button>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }
        wishlistGrid.innerHTML = html;
    } else {
        // VIEWING ALL COLLECTIONS
        if (subtitle) subtitle.innerText = "Manage your saved items & collections";
        let html = `<div class="collections-grid">`;
        
        for (let c in collections) {
            let thumb = collections[c].length > 0 && products[collections[c][0]] ? products[collections[c][0]].image : 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400';
            html += `
                <div class="collection-folder 3d-card" onclick="currentCollectionView='${c}'; renderWishlistPage()">
                    <div class="col-thumb" style="background-image:url(${thumb})">
                        <div class="col-overlay">
                            <h3>${c}</h3>
                            <p>${collections[c].length} items</p>
                        </div>
                    </div>
                </div>
            `;
        }
        
        html += `
            <div class="collection-folder create-new-col 3d-card" onclick="customPrompt('New Collection Name', '', (n) => { if(n && n.trim()){ collections[n.trim()] = []; saveCollections(); } })">
                <div class="col-thumb" style="background:var(--bg-light); display:flex; align-items:center; justify-content:center;">
                    <div style="text-align:center; color:var(--text-main);">
                        <span style="font-size:42px;">+</span>
                        <h3>Create Collection</h3>
                    </div>
                </div>
            </div>
        `;
        html += `</div>`;
        wishlistGrid.innerHTML = html;
    }
    
    if(typeof init3DTiltEffects === 'function') init3DTiltEffects();
    if(typeof initScrollReveal === 'function') initScrollReveal();
}

// ==========================================
// REMOVE FROM CART
// ==========================================
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartCount", getCartCount());
        updateHeader();
        renderCartPage();
    }
}

// ==========================================
// UPDATE ITEM QUANTITY IN CART
// ==========================================
function updateCartQuantity(index, delta) {
    if (index >= 0 && index < cart.length) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartCount", getCartCount());
        updateHeader();
        renderCartPage();
    }
}

// ==========================================
// RENDER SHOPPING CART PAGE (cart.html)
// ==========================================
function renderCartPage() {
    let cartColumn = document.getElementById("cartItemsColumn");
    if (!cartColumn) return;

    let subtitle = document.getElementById("cartItemsSubtitle");
    let subtotalEl = document.getElementById("cartSubtotal");
    let discountEl = document.getElementById("cartDiscount");
    let discountRow = document.getElementById("discountRow");
    let shippingEl = document.getElementById("cartShipping");
    let totalEl = document.getElementById("cartTotal");

    if (cart.length === 0) {
        cartColumn.innerHTML = `
            <div class="empty-cart-card reveal-from-bottom">
                <div class="empty-cart-icon">🛍️</div>
                <h3>YOUR BAG IS EMPTY</h3>
                <p>Looks like you haven't added any items to your bag yet.</p>
                <a href="home.html" class="btn-start-shopping">EXPLORE STORE NOW →</a>
            </div>
        `;

        if (subtitle) subtitle.innerText = "Your bag is currently empty";
        if (subtotalEl) subtotalEl.innerText = "₹0";
        if (discountEl) discountEl.innerText = "-₹0";
        if (discountRow) discountRow.style.display = "none";
        if (totalEl) totalEl.innerText = "₹0";
        initScrollReveal();
        return;
    }

    if (subtitle) {
        subtitle.innerText = "You have " + getCartCount() + " item(s) in your bag";
    }

    let itemsHtml = "";
    let subtotal = 0;

    cart.forEach((item, idx) => {
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        itemsHtml += `
            <div class="cart-item 3d-card reveal-from-left">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <small>${item.category}</small>
                    <h3>${item.name}</h3>
                    <div class="cart-item-price">₹${item.price.toLocaleString("en-IN")}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="qty-btn-group">
                        <button onclick="updateCartQuantity(${idx}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity(${idx}, 1)">+</button>
                    </div>
                    <button class="btn-remove-item" title="Remove item" onclick="removeFromCart(${idx})">🗑️</button>
                </div>
            </div>
        `;
    });

    cartColumn.innerHTML = itemsHtml;

    let discountAmount = Math.round((subtotal * currentDiscountPercent) / 100);
    let finalTotal = subtotal - discountAmount;

    if (subtotalEl) subtotalEl.innerText = "₹" + subtotal.toLocaleString("en-IN");
    
    if (currentDiscountPercent > 0) {
        if (discountRow) discountRow.style.display = "flex";
        if (discountEl) discountEl.innerText = "-₹" + discountAmount.toLocaleString("en-IN");
    } else {
        if (discountRow) discountRow.style.display = "none";
    }

    if (shippingEl) {
        shippingEl.innerText = subtotal > 999 ? "FREE" : "₹99";
        if (subtotal <= 999 && subtotal > 0) {
            finalTotal += 99;
        }
    }

    if (totalEl) totalEl.innerText = "₹" + finalTotal.toLocaleString("en-IN");
    init3DTiltEffects();
    initScrollReveal();
}

// ==========================================
// APPLY PROMO COUPON
// ==========================================
function applyPromoCoupon() {
    let input = document.getElementById("couponCodeInput");
    let message = document.getElementById("couponMessage");
    if (!input) return;

    let code = input.value.trim().toUpperCase();

    if (code === "URBAN2026" || code === "URBAN20") {
        currentDiscountPercent = 20;
        localStorage.setItem("appliedDiscount", 20);
        if (message) {
            message.className = "coupon-msg success";
            message.innerText = "🎉 Coupon 'URBAN20' applied! 20% discount added.";
        }
        renderCartPage();
    } else if (code === "URBANVIP") {
        currentDiscountPercent = 25;
        localStorage.setItem("appliedDiscount", 25);
        if (message) {
            message.className = "coupon-msg success";
            message.innerText = "🌟 VIP Coupon applied! 25% discount added.";
        }
        renderCartPage();
    } else {
        if (message) {
            message.className = "coupon-msg error";
            message.innerText = "❌ Invalid coupon code. Try 'URBAN2026' or 'URBANVIP'.";
        }
    }
}

// ==========================================
// PROCEED TO CHECKOUT
// ==========================================
function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your shopping bag is empty! Add some items before checkout.");
        return;
    }

    let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discount = Math.round((subtotal * currentDiscountPercent) / 100);
    let total = subtotal - discount;

    alert("✨ ORDER CONFIRMATION ✨\n\nThank you for shopping with UrbanStyle!\n\nTotal Items: " + getCartCount() + "\nFinal Order Total: ₹" + total.toLocaleString("en-IN") + "\n\nShipping Address & Payment processing initiated!");

    cart = [];
    currentDiscountPercent = 0;
    localStorage.removeItem("cart");
    localStorage.removeItem("cartCount");
    localStorage.removeItem("appliedDiscount");
    updateHeader();
    renderCartPage();
}

// ==========================================
// SHOP NOW ACTION
// ==========================================
function shopNow() {
    let productsSec = document.getElementById("products");
    if (productsSec) {
        productsSec.scrollIntoView({ behavior: "smooth" });
    } else {
        window.location.href = "home.html#products";
    }
}

// ==========================================
// FILTER PRODUCTS
// ==========================================
function filterProducts(category) {
    let productElements = document.querySelectorAll(".product");
    let buttons = document.querySelectorAll(".cat-btn");

    if (productElements.length === 0) {
        window.location.href = "home.html#products";
        return;
    }

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
        if (btn.innerText.toUpperCase() === category.toUpperCase() || 
           (category === "All" && btn.innerText.includes("ALL"))) {
            btn.classList.add("active");
        }
    });

    productElements.forEach(function(product) {
        let productCategory = product.dataset.category;
        if (category === "All" || productCategory === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// ==========================================
// OPEN PRODUCT DETAIL PAGE
// ==========================================
function openProduct(productName) {
    window.location.href = "product.html?product=" + encodeURIComponent(productName);
}

// ==========================================
// COPY COUPON CODE
// ==========================================
function copyCouponCode(code) {
    navigator.clipboard.writeText(code).then(function() {
        alert("🎉 Coupon code '" + code + "' copied to clipboard!");
    }).catch(function() {
        alert("Coupon code: " + code);
    });
}

// ==========================================
// LOAD SINGLE PRODUCT DETAILS (FOR PRODUCT.HTML)
// ==========================================
function loadProduct() {
    let params = new URLSearchParams(window.location.search);
    let productName = params.get("product") || "Summer Dress";
    let product = products[productName] || products["Summer Dress"];

    if (!product) return;

    let nameElement = document.getElementById("productName");
    let priceElement = document.getElementById("productPrice");
    let categoryElement = document.getElementById("productCategory");
    let imageElement = document.getElementById("productImage");

    if (nameElement) nameElement.innerText = productName;
    if (priceElement) {
        if (product.originalPrice) {
            priceElement.innerHTML = `<span style="text-decoration: line-through; color: #888; font-size: 0.7em; margin-right: 8px;">${product.originalPrice}</span>${product.displayPrice} <span style="color: #fff; background-color: #e74c3c; font-size: 0.5em; font-weight: bold; margin-left: 10px; padding: 4px 8px; border-radius: 4px; vertical-align: middle;">SALE</span>`;
        } else {
            priceElement.innerText = product.displayPrice;
        }
    }
    if (categoryElement) categoryElement.innerText = product.category;
    if (imageElement) imageElement.src = product.image;

    window.currentProduct = productName;
}

// ==========================================
// PRODUCT DETAIL CONTROLS
// ==========================================
function selectSize(button) {
    let buttons = document.querySelectorAll(".sizes button");
    buttons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
}

let quantity = 1;

function increaseQuantity() {
    quantity++;
    let element = document.getElementById("quantity");
    if (element) element.innerText = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
    }
    let element = document.getElementById("quantity");
    if (element) element.innerText = quantity;
}

function toggleWishlist() {
    let productName = window.currentProduct;
    if (!productName) return;
    addWishlist(productName);
}

function addProductToCart() {
    let productName = window.currentProduct || "Summer Dress";
    let qty = quantity || 1;
    addToCart(productName, qty);
}


function shopNow() {
    let section = document.getElementById("products") || document.getElementById("collections");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        window.location.href = "home.html#products";
    }
}

// ==========================================
// INTERACTIVE LIVE SEARCH OVERLAY MODAL
// ==========================================
function searchProduct() {
    openSearchModal();
}

function openSearchModal() {
    let modal = document.getElementById("searchModal");
    if (!modal) {
        createSearchModalDOM();
        modal = document.getElementById("searchModal");
    }
    modal.classList.add("active");
    let input = document.getElementById("searchInput");
    if (input) {
        input.focus();
        handleLiveSearch(input.value);
    }
}

function closeSearchModal(event) {
    let modal = document.getElementById("searchModal");
    if (modal) {
        modal.classList.remove("active");
    }
}

function clearSearchInput() {
    let input = document.getElementById("searchInput");
    if (input) {
        input.value = "";
        input.focus();
        handleLiveSearch("");
    }
}

function setSearchFilter(query) {
    let input = document.getElementById("searchInput");
    if (input) {
        input.value = query;
        handleLiveSearch(query);
    }
}

function handleLiveSearch(query) {
    let grid = document.getElementById("searchResultsGrid");
    if (!grid) return;

    query = (query || "").trim().toLowerCase();

    let matches = Object.keys(products).filter(name => {
        let p = products[name];
        return name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px 10px; color: var(--text-secondary);">
                <span style="font-size: 32px;">🔍</span>
                <h4 style="margin-top: 10px; font-size: 16px;">No products found for "${query}"</h4>
                <p style="font-size: 13px; color: var(--text-muted);">Try searching for "Women", "Men", "Boys", "Girls", "Dress", or "Jacket"</p>
            </div>
        `;
        return;
    }

    let html = "";
    matches.forEach(name => {
        let p = products[name];
        html += `
            <div class="search-result-card" onclick="openProduct('${name}')">
                <img src="${p.image}" alt="${name}" class="search-result-img">
                <div class="search-result-info">
                    <small>${p.category}</small>
                    <h4>${name}</h4>
                    <strong>${p.displayPrice}</strong>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

function createSearchModalDOM() {
    if (document.getElementById("searchModal")) return;

    let div = document.createElement("div");
    div.id = "searchModal";
    div.className = "search-modal";
    div.setAttribute("onclick", "closeSearchModal(event)");

    div.innerHTML = `
        <div class="search-modal-content" onclick="event.stopPropagation()">
            <div class="search-modal-header">
                <div class="search-input-wrapper">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" id="searchInput" placeholder="Search for dresses, shirts, jackets, pants, suits..." oninput="handleLiveSearch(this.value)">
                    <button class="btn-clear-search" onclick="clearSearchInput()">✕</button>
                </div>
                <button class="btn-close-search" onclick="closeSearchModal()">ESC ✕</button>
            </div>

            <div class="search-tags">
                <span>Quick Search:</span>
                <button onclick="setSearchFilter('Women')">Women</button>
                <button onclick="setSearchFilter('Men')">Men</button>
                <button onclick="setSearchFilter('Boys')">Boys</button>
                <button onclick="setSearchFilter('Girls')">Girls</button>
                <button onclick="setSearchFilter('Jacket')">Jackets</button>
                <button onclick="setSearchFilter('Dress')">Dresses</button>
            </div>

            <div class="search-results-grid" id="searchResultsGrid"></div>
        </div>
    `;

    document.body.appendChild(div);
}

// Add shortcut listener for Ctrl+K and ESC
document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
    }
    if (e.key === "Escape") {
        closeSearchModal();
    }
});

// ==========================================
// NEWSLETTER SUBSCRIBE
// ==========================================
function subscribe() {
    let emailInput = document.getElementById("email");
    if (!emailInput || emailInput.value.trim() === "") {
        alert("Please enter a valid email address.");
        return;
    }

    alert("🎉 Thank you for subscribing! Your ₹500 discount voucher has been sent to " + emailInput.value);
    emailInput.value = "";
}

// ==========================================
// LANDING PAGE COUNTDOWN TIMER
// ==========================================
function initCountdown() {
    let hoursEl = document.getElementById("hours");
    let minutesEl = document.getElementById("minutes");
    let secondsEl = document.getElementById("seconds");

    if (!hoursEl || !minutesEl || !secondsEl) return;

    let totalSeconds = 8 * 3600 + 42 * 60 + 15;

    setInterval(function() {
        if (totalSeconds <= 0) return;
        totalSeconds--;

        let h = Math.floor(totalSeconds / 3600);
        let m = Math.floor((totalSeconds % 3600) / 60);
        let s = totalSeconds % 60;

        hoursEl.innerText = h < 10 ? "0" + h : h;
        minutesEl.innerText = m < 10 ? "0" + m : m;
        secondsEl.innerText = s < 10 ? "0" + s : s;
    }, 1000);
}

// ==========================================
// INTERACTIVE 3D MOUSE TILT EFFECT
// ==========================================
function init3DTiltEffects() {
    let cards = document.querySelectorAll(".collection-card, .product, .preview-card, .wishlist-card, .perk-box, .community-card, .3d-card");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            let rect = card.getBoundingClientRect();
            let x = e.clientX - rect.left - rect.width / 2;
            let y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) translateY(-8px) scale(1.02)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
        });
    });
}

// ==========================================
// INTERSECTION OBSERVER SCROLL REVEAL (LEFT & RIGHT TO CENTER)
// ==========================================
function initScrollReveal() {
    let revealElements = document.querySelectorAll(".reveal-from-left, .reveal-left, .reveal-from-right, .reveal-right, .reveal-from-bottom, .reveal-up, .reveal-scale");
    if (revealElements.length === 0) return;

    document.body.classList.add("js-reveal-enabled");

    function revealInView() {
        let winHeight = window.innerHeight || document.documentElement.clientHeight;
        revealElements.forEach(el => {
            let rect = el.getBoundingClientRect();
            if (rect.top <= winHeight + 100 && rect.bottom >= -100) {
                el.classList.add("reveal-active");
            }
        });
    }

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.classList.add("reveal-active"));
        return;
    }

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
            }
        });
    }, {
        threshold: 0.01,
        rootMargin: "120px 0px 120px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
    
    // Immediate calculation for elements initially visible
    revealInView();
    window.addEventListener("scroll", revealInView, { passive: true });
}

// ==========================================
// INIT ON LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("hasVisitedBefore")) {
        cart = [{
            name: "Summer Dress",
            price: 1999,
            image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
            category: "WOMEN",
            quantity: 1
        }];
        wishlist = ["Denim Jacket", "Wide Leg Pants"];
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        localStorage.setItem("hasVisitedBefore", "true");
    }

    updateHeader();

    if (document.getElementById("productName")) {
        loadProduct();
    }

    if (document.getElementById("cartItemsColumn")) {
        renderCartPage();
    }

    if (document.getElementById("wishlistGrid")) {
        renderWishlistPage();
    }

    initCountdown();
    init3DTiltEffects();
    initScrollReveal();
});


// ==========================================
// INTERACTIVE QUICK-VIEW MODAL ENGINE
// ==========================================
let qvState = {
    productName: "Summer Dress",
    size: "M",
    color: "Midnight Slate",
    quantity: 1
};

function openQuickView(productName) {
    let product = products[productName];
    if (!product) return;

    qvState.productName = productName;
    qvState.size = "M";
    qvState.color = "Midnight Slate";
    qvState.quantity = 1;

    let modal = document.getElementById("quickViewModal");
    if (!modal) {
        createQuickViewModalDOM();
        modal = document.getElementById("quickViewModal");
    }

    let imgEl = document.getElementById("qvImage");
    let catEl = document.getElementById("qvCategory");
    let catSubEl = document.getElementById("qvCategorySub");
    let titleEl = document.getElementById("qvTitle");
    let priceEl = document.getElementById("qvPrice");
    let qtyEl = document.getElementById("qvQty");
    let wishBtn = document.getElementById("qvWishlistBtn");

    if (imgEl) imgEl.src = product.image;
    if (catEl) catEl.innerText = product.category;
    if (catSubEl) catSubEl.innerText = product.category + " COLLECTION";
    if (titleEl) titleEl.innerText = productName;
    if (priceEl) priceEl.innerText = product.displayPrice;
    if (qtyEl) qtyEl.innerText = qvState.quantity;

    if (wishBtn) {
        let isWish = wishlist.includes(productName);
        wishBtn.innerText = isWish ? "❤️ IN WISHLIST" : "♡ WISHLIST";
    }

    let sizes = document.querySelectorAll("#qvSizes button");
    sizes.forEach(b => {
        b.classList.remove("selected");
        if (b.innerText === "M") b.classList.add("selected");
    });

    modal.classList.add("active");
}

function closeQuickViewModal(event) {
    let modal = document.getElementById("quickViewModal");
    if (modal) {
        modal.classList.remove("active");
    }
}

function selectQVSize(button) {
    let buttons = document.querySelectorAll("#qvSizes button");
    buttons.forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
    qvState.size = button.innerText;
}

function selectQVColor(swatch) {
    let swatches = document.querySelectorAll("#qvColors .color-swatch");
    swatches.forEach(s => s.classList.remove("active"));
    swatch.classList.add("active");
    qvState.color = swatch.title;
}

function changeQVQty(delta) {
    qvState.quantity = Math.max(1, qvState.quantity + delta);
    let qtyEl = document.getElementById("qvQty");
    if (qtyEl) qtyEl.innerText = qvState.quantity;
}

function addQVToBag() {
    let productName = qvState.productName;
    let qty = qvState.quantity;
    let size = qvState.size;
    let color = qvState.color;

    addToCart(productName, qty);
    alert(`🛍️ Added ${qty}x ${productName} (Size ${size}, Color: ${color}) to your shopping bag!`);
    closeQuickViewModal();
}

function toggleQVWishlist() {
    let productName = qvState.productName;
    addWishlist(productName);
    let wishBtn = document.getElementById("qvWishlistBtn");
    if (wishBtn) {
        let isWish = wishlist.includes(productName);
        wishBtn.innerText = isWish ? "❤️ IN WISHLIST" : "♡ WISHLIST";
    }
}

function createQuickViewModalDOM() {
    if (document.getElementById("quickViewModal")) return;

    let div = document.createElement("div");
    div.id = "quickViewModal";
    div.className = "quick-view-modal";
    div.setAttribute("onclick", "closeQuickViewModal(event)");

    div.innerHTML = `
        <div class="quick-view-content" onclick="event.stopPropagation()">
            <button class="btn-close-quickview" onclick="closeQuickViewModal()">✕</button>
            <div class="quick-view-body">
                <div class="quick-view-img-box">
                    <img id="qvImage" src="" alt="Product">
                    <span class="qv-badge" id="qvCategory">WOMEN</span>
                </div>
                <div class="quick-view-details">
                    <div class="qv-header">
                        <small id="qvCategorySub">WOMEN COLLECTION</small>
                        <h2 id="qvTitle">Product Title</h2>
                        <div class="qv-rating">★★★★★ <span>4.9 (140+ verified reviews)</span></div>
                        <div class="qv-price" id="qvPrice">₹1,999</div>
                    </div>

                    <p class="qv-desc">
                        Tailored from organic luxury cotton with breathable comfort and modern silhouette detailing. Engineered for effortless style.
                    </p>

                    <div class="qv-option-group">
                        <label>SELECT SIZE:</label>
                        <div class="qv-sizes" id="qvSizes">
                            <button onclick="selectQVSize(this)" class="selected">S</button>
                            <button onclick="selectQVSize(this)">M</button>
                            <button onclick="selectQVSize(this)">L</button>
                            <button onclick="selectQVSize(this)">XL</button>
                        </div>
                    </div>

                    <div class="qv-option-group">
                        <label>COLOR SWATCH:</label>
                        <div class="qv-colors" id="qvColors">
                            <span class="color-swatch active" style="background:#0f172a;" title="Midnight Slate" onclick="selectQVColor(this)"></span>
                            <span class="color-swatch" style="background:#c5a059;" title="Champagne Gold" onclick="selectQVColor(this)"></span>
                            <span class="color-swatch" style="background:#475569;" title="Urban Grey" onclick="selectQVColor(this)"></span>
                            <span class="color-swatch" style="background:#991b1b;" title="Burgundy Red" onclick="selectQVColor(this)"></span>
                        </div>
                    </div>

                    <div class="qv-option-group">
                        <label>QUANTITY:</label>
                        <div class="qv-quantity">
                            <button onclick="changeQVQty(-1)">−</button>
                            <span id="qvQty">1</span>
                            <button onclick="changeQVQty(1)">+</button>
                        </div>
                    </div>

                    <div class="qv-actions">
                        <button class="btn-qv-bag" onclick="addQVToBag()">
                            ADD TO BAG 🛍️
                        </button>
                        <button class="btn-qv-wishlist" id="qvWishlistBtn" onclick="toggleQVWishlist()">
                            ♡ WISHLIST
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(div);
}

// ==========================================================================
// URBANSTYLE AUTHENTICATION & SESSION ENGINE
// ==========================================================================

function handleSignInSubmit(event) {
    if (event) event.preventDefault();
    let emailInput = document.getElementById("loginEmail");
    let email = emailInput ? emailInput.value.trim() : "alex.vip@urbanstyle.com";
    let userName = email.split("@")[0];
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);

    performLogin(userName);
}

function handleSignUpSubmit(event) {
    if (event) event.preventDefault();
    let nameInput = document.getElementById("signupName");
    let userName = nameInput ? nameInput.value.trim() : "New Member VIP";

    performLogin(userName);
}

function quickDemoLogin(customName = "Alex VIP") {
    performLogin(customName);
}

function performLogin(userName) {
    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("userName", userName);
    localStorage.setItem("triggerOfferModal", "true");

    let toast = document.getElementById("authToast");
    if (toast) {
        let titleEl = document.getElementById("toastTitle");
        let subEl = document.getElementById("toastSub");
        if (titleEl) titleEl.innerText = `Welcome Back, ${userName}! 🎉`;
        if (subEl) subEl.innerText = "Login Successful! Opening Home Page & Exclusive Offer...";
        toast.classList.add("show");
    }

    setTimeout(() => {
        window.location.href = "home.html?login=success";
    }, 700);
}

function logoutUser() {
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("userName");
    alert("👋 You have been logged out successfully.");
    updateAuthUI();
    window.location.reload();
}

function updateAuthUI() {
    let isLoggedIn = localStorage.getItem("userLoggedIn") === "true";
    let userName = localStorage.getItem("userName") || "Member";

    let navLoginLinks = document.querySelectorAll(".nav-login-btn, .nav-login-link, #navLoginLink");
    navLoginLinks.forEach(link => {
        if (isLoggedIn) {
            link.innerText = `Hi, ${userName} (Logout)`;
            link.href = "#";
            link.onclick = (e) => {
                e.preventDefault();
                logoutUser();
            };
        } else {
            link.innerText = "Login";
            link.href = "index.html";
            link.onclick = null;
        }
    });

    let authBtns = document.querySelectorAll(".auth-btn");
    authBtns.forEach(btn => {
        let label = btn.querySelector("#navAuthLabel") || btn.querySelector("span");
        if (isLoggedIn) {
            if (label) label.innerText = userName;
            btn.onclick = () => {
                if (confirm(`Logged in as ${userName}. Do you want to logout?`)) {
                    logoutUser();
                }
            };
        } else {
            if (label) label.innerText = "Login";
            btn.onclick = () => { window.location.href = "index.html"; };
        }
    });
}


// ==========================================================================
// OFFER POPUP BANNER WITH LIVE RUNNING TIMER ENGINE
// ==========================================================================

let offerTimerInterval = null;

function getOfferEndTime() {
    let endTime = localStorage.getItem("urbanOfferEndTime");
    if (!endTime) {
        // Default: 15 minutes from now
        endTime = Date.now() + (15 * 60 * 1000);
        localStorage.setItem("urbanOfferEndTime", endTime);
    }
    return parseInt(endTime, 10);
}

function initOfferTimer() {
    if (offerTimerInterval) clearInterval(offerTimerInterval);

    function updateClock() {
        let endTime = getOfferEndTime();
        let remaining = endTime - Date.now();

        if (remaining <= 0) {
            // Reset timer to another 15 minutes when expired
            endTime = Date.now() + (15 * 60 * 1000);
            localStorage.setItem("urbanOfferEndTime", endTime);
            remaining = 15 * 60 * 1000;
        }

        let hours = Math.floor(remaining / (1000 * 60 * 60));
        let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        let millis = Math.floor((remaining % 1000) / 10);

        let strH = String(hours).padStart(2, "0");
        let strM = String(minutes).padStart(2, "0");
        let strS = String(seconds).padStart(2, "0");
        let strMs = String(millis).padStart(2, "0");

        let elH = document.getElementById("timerHours");
        let elM = document.getElementById("timerMinutes");
        let elS = document.getElementById("timerSeconds");
        let elMs = document.getElementById("timerMillis");
        let elFloat = document.getElementById("floatingTimerText");

        if (elH) elH.innerText = strH;
        if (elM) elM.innerText = strM;
        if (elS) elS.innerText = strS;
        if (elMs) elMs.innerText = strMs;
        if (elFloat) elFloat.innerText = `${strM}:${strS}:${strMs}`;
    }

    updateClock();
    offerTimerInterval = setInterval(updateClock, 50);
}

function isAuthPage() {
    return !!(
        document.querySelector(".clean-login-body") || 
        document.getElementById("signInForm") ||
        window.location.pathname.endsWith("index.html") ||
        (window.location.pathname === "/" && (document.getElementById("loginEmail") || document.querySelector(".clean-login-card")))
    );
}

function createOfferModalDOM() {
    if (isAuthPage()) return;
    if (document.getElementById("offerModal")) return;

    // Only render full modal & floating widget if on home.html or store page (never on login page)
    let isHome = (window.location.pathname.includes("home.html") || window.location.pathname === "/") && !isAuthPage();

    let modalDiv = document.createElement("div");
    modalDiv.id = "offerModal";
    modalDiv.className = "offer-modal-overlay";
    modalDiv.setAttribute("onclick", "closeOfferModal(event)");

    modalDiv.innerHTML = `
        <div class="offer-modal-card" onclick="event.stopPropagation()">
            <button class="btn-close-offer" onclick="closeOfferModal()" title="Close Offer Banner">✕</button>

            <div class="offer-top-badge">
                <span>⚡ EXCLUSIVE VIP WELCOME DEAL</span>
            </div>

            <h2 class="offer-title">🎉 CONGRATULATIONS & WELCOME!</h2>
            <p class="offer-subtitle">
                You've unlocked an exclusive <strong>40% OFF VIP Discount</strong> + Free Express Shipping across our luxury spring collection!
            </p>

            <!-- LIVE RUNNING COUNTDOWN TIMER -->
            <div class="offer-timer-box">
                <div class="offer-timer-title">
                    <span>⏱️ HURRY! LIMITED TIME OFFER EXPIRES IN:</span>
                </div>
                <div class="offer-timer-grid">
                    <div class="t-unit">
                        <div class="t-val" id="timerHours">00</div>
                        <div class="t-lbl">HOURS</div>
                    </div>
                    <div class="t-unit">
                        <div class="t-val" id="timerMinutes">14</div>
                        <div class="t-lbl">MINUTES</div>
                    </div>
                    <div class="t-unit">
                        <div class="t-val" id="timerSeconds">59</div>
                        <div class="t-lbl">SECONDS</div>
                    </div>
                    <div class="t-unit">
                        <div class="t-val" id="timerMillis">99</div>
                        <div class="t-lbl">MS</div>
                    </div>
                </div>
            </div>

            <!-- PROMO CODE -->
            <div class="promo-code-card">
                <div class="code-info">
                    <small>PROMO CODE:</small>
                    <strong>WELCOME40</strong>
                </div>
                <button class="btn-copy-code" id="btnCopyCode" onclick="copyOfferCode()">
                    COPY CODE
                </button>
            </div>

            <!-- CTAs -->
            <button class="btn-claim-offer" onclick="claimOfferDiscount()">
                CLAIM 40% DISCOUNT & SHOP NOW 🛍️
            </button>
            <button class="btn-dismiss-offer" onclick="closeOfferModal()">
                Dismiss & Browse Collection
            </button>
        </div>
    `;

    document.body.appendChild(modalDiv);

    if (isHome) {
        // Create Floating Offer Badge on Home Page
        if (!document.getElementById("floatingOfferBadge")) {
            let floatBtn = document.createElement("div");
            floatBtn.id = "floatingOfferBadge";
            floatBtn.className = "floating-offer-badge";
            floatBtn.onclick = openOfferModal;
            floatBtn.innerHTML = `
                <span class="f-icon">🎁</span>
                <span>40% OFF OFFER</span>
                <span class="f-timer" id="floatingTimerText">14:59:99</span>
            `;
            document.body.appendChild(floatBtn);
        }
    }
}

function openOfferModal() {
    createOfferModalDOM();
    initOfferTimer();
    let modal = document.getElementById("offerModal");
    if (modal) {
        modal.classList.add("active");
    }
}

function closeOfferModal(event) {
    let modal = document.getElementById("offerModal");
    if (modal) {
        modal.classList.remove("active");
    }
}

function copyOfferCode() {
    let code = "WELCOME40";
    navigator.clipboard.writeText(code).then(() => {
        let btn = document.getElementById("btnCopyCode");
        if (btn) {
            btn.innerText = "COPIED! 🎉";
            btn.style.background = "#22c55e";
            btn.style.color = "#ffffff";
            setTimeout(() => {
                btn.innerText = "COPY CODE";
                btn.style.background = "";
                btn.style.color = "";
            }, 2500);
        }
    }).catch(err => {
        alert("Coupon code: WELCOME40 (Copied!)");
    });
}

function claimOfferDiscount() {
    localStorage.setItem("appliedDiscount", 40);
    currentDiscountPercent = 40;
    closeOfferModal();
    
    showPremiumAlert("40% Discount Applied! Code WELCOME40 is now active for your shopping bag.", "🎉 OFFER CLAIMED!");

    let productsSection = document.getElementById("products") || document.querySelector(".store-hero");
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
    }
}

function checkAutoOpenOfferModal() {
    if (isAuthPage()) return;
    createOfferModalDOM();
    initOfferTimer();

    let urlParams = new URLSearchParams(window.location.search);
    let isLoginSuccess = urlParams.get("login") === "success";
    let triggerFlag = localStorage.getItem("triggerOfferModal") === "true";

    if (isLoginSuccess || triggerFlag) {
        localStorage.removeItem("triggerOfferModal");
        setTimeout(() => {
            openOfferModal();
        }, 400);
    }
}

// ==========================================================================
// LUXURY PREMIUM CUSTOM POPUP MESSAGE SYSTEM
// ==========================================================================

function showPremiumAlert(message, title = "URBANSTYLE VIP", icon = "✨") {
    let existing = document.getElementById("premiumAlertModal");
    if (existing) existing.remove();

    let displayIcon = icon;
    let cleanMsg = message;

    if (icon === "✨" || !icon) {
        if (message.startsWith("🎉")) { displayIcon = "🎉"; cleanMsg = message.replace(/^🎉\s*/, ""); }
        else if (message.startsWith("🛍️")) { displayIcon = "🛍️"; cleanMsg = message.replace(/^🛍️\s*/, ""); }
        else if (message.startsWith("❤️")) { displayIcon = "❤️"; cleanMsg = message.replace(/^❤️\s*/, ""); }
        else if (message.startsWith("👋")) { displayIcon = "👋"; cleanMsg = message.replace(/^👋\s*/, ""); }
        else if (message.startsWith("⚡")) { displayIcon = "⚡"; cleanMsg = message.replace(/^⚡\s*/, ""); }
    }

    let modalDiv = document.createElement("div");
    modalDiv.id = "premiumAlertModal";
    modalDiv.className = "premium-alert-overlay";

    modalDiv.innerHTML = `
        <div class="premium-alert-card" onclick="event.stopPropagation()">
            <button class="btn-close-premium-alert" onclick="closePremiumAlert()">✕</button>
            <div class="premium-alert-icon-box">
                <span>${displayIcon}</span>
            </div>
            <h3 class="premium-alert-title">${title}</h3>
            <p class="premium-alert-msg">${cleanMsg}</p>
            <button class="btn-premium-alert-ok" onclick="closePremiumAlert()">GOT IT & CONTINUE</button>
        </div>
    `;

    document.body.appendChild(modalDiv);

    setTimeout(() => {
        modalDiv.classList.add("active");
    }, 10);
}

function closePremiumAlert() {
    let modal = document.getElementById("premiumAlertModal");
    if (modal) {
        modal.classList.remove("active");
        setTimeout(() => {
            if (modal) modal.remove();
        }, 350);
    }
}

// Global window.alert override for luxury popup messages across all components
window.alert = function(msg) {
    showPremiumAlert(msg);
};

// ==========================================================================
// RK FASHIONS - CHECKOUT & ORDER PLACEMENT ENGINE
// ==========================================================================
let checkoutItemState = null;

function buyNow(productName, qty = 1) {
    if (!productName) {
        productName = window.currentProduct || "Summer Dress";
        if (typeof quantity !== 'undefined') qty = quantity;
    }
    let product = products[productName];
    if (!product) return;
    checkoutItemState = {
        name: productName,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: qty
    };
    openCheckoutModal();
}

function buyNowQV() {
    if (typeof qvState !== 'undefined') {
        buyNow(qvState.productName, qvState.quantity);
        closeQuickViewModal();
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showPremiumAlert("Your shopping bag is empty! Add items before proceeding to checkout.", "🛒 BAG EMPTY");
        return;
    }
    checkoutItemState = null; // Use full cart
    openCheckoutModal();
}

function openCheckoutModal() {
    let existing = document.getElementById("checkoutModal");
    if (existing) existing.remove();

    let itemsToBuy = checkoutItemState ? [checkoutItemState] : cart;
    if (itemsToBuy.length === 0) {
        showPremiumAlert("No items selected for checkout!", "🛒 BAG EMPTY");
        return;
    }

    let subtotal = itemsToBuy.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discountPercent = currentDiscountPercent || 0;
    let discountAmt = Math.round(subtotal * (discountPercent / 100));
    let totalAmt = Math.max(0, subtotal - discountAmt);

    let savedName = localStorage.getItem("userName") || "";
    let savedEmail = localStorage.getItem("userEmail") || "";

    let modalDiv = document.createElement("div");
    modalDiv.id = "checkoutModal";
    modalDiv.className = "checkout-modal-overlay";
    modalDiv.setAttribute("onclick", "closeCheckoutModal(event)");

    let itemsListSummary = itemsToBuy.map(i => `
        <div class="summary-row">
            <span>${i.quantity}x ${i.name}</span>
            <strong>₹${(i.price * i.quantity).toLocaleString()}</strong>
        </div>
    `).join("");

    modalDiv.innerHTML = `
        <div class="checkout-modal-card" onclick="event.stopPropagation()">
            <button class="btn-close-checkout" onclick="closeCheckoutModal()">✕</button>

            <div class="checkout-header">
                <h2>🛍️ RK FASHIONS CHECKOUT</h2>
                <p style="font-size:12px; color:#94a3b8;">Enter delivery details to place your order</p>
            </div>

            <form id="checkoutForm" onsubmit="placeOrderSubmit(event)">
                <div class="checkout-grid">
                    <div class="checkout-form-col">
                        <div class="checkout-section-title">👤 1. CUSTOMER & DELIVERY ADDRESS</div>
                        
                        <div class="form-group" style="margin-bottom:12px;">
                            <label>Full Name *</label>
                            <input type="text" id="chkName" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff;" placeholder="e.g. Alex Morgan" required value="${savedName || 'Alex VIP'}">
                        </div>

                        <div class="form-group" style="margin-bottom:12px;">
                            <label>Mobile Phone Number *</label>
                            <input type="tel" id="chkPhone" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff;" placeholder="e.g. 9876543210" pattern="[0-9]{10}" required value="9876543210">
                        </div>

                        <div class="form-group" style="margin-bottom:12px;">
                            <label>Email Address</label>
                            <input type="email" id="chkEmail" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff;" placeholder="alex@example.com" value="${savedEmail || 'alex.vip@rkfashions.com'}">
                        </div>

                        <div class="form-group" style="margin-bottom:12px;">
                            <label>Street Address / House No / Colony *</label>
                            <input type="text" id="chkAddress" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff;" placeholder="e.g. Flat 402, Park View Heights, MG Road" required value="Flat 402, Park View Heights, MG Road">
                        </div>

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
                            <div class="form-group">
                                <label>City *</label>
                                <input type="text" id="chkCity" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff;" placeholder="Mumbai" required value="Mumbai">
                            </div>
                            <div class="form-group">
                                <label>Pincode *</label>
                                <input type="text" id="chkPin" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff;" placeholder="400001" required value="400001">
                            </div>
                        </div>

                        <div class="checkout-section-title" style="margin-top:18px;">💳 2. SELECT PAYMENT METHOD</div>
                        <div class="payment-methods-grid">
                            <label class="pay-option selected">
                                <input type="radio" name="payMethod" value="UPI / GPay / PhonePe" checked onchange="handlePaymentMethodChange()">
                                <span>📱 UPI / GPay</span>
                            </label>
                            <label class="pay-option">
                                <input type="radio" name="payMethod" value="Credit / Debit Card" onchange="handlePaymentMethodChange()">
                                <span>💳 Card</span>
                            </label>
                            <label class="pay-option">
                                <input type="radio" name="payMethod" value="Net Banking" onchange="handlePaymentMethodChange()">
                                <span>🏛️ NetBanking</span>
                            </label>
                            <label class="pay-option">
                                <input type="radio" name="payMethod" value="Cash on Delivery (COD)" onchange="handlePaymentMethodChange()">
                                <span>💵 Cash on Delivery</span>
                            </label>
                        </div>
                        <div id="paymentDetailsContainer" style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <div class="form-group" style="margin-bottom:0;">
                                <label>Enter UPI ID *</label>
                                <input type="text" id="chkUpiId" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:8px; color:#fff;" placeholder="e.g. name@upi" required>
                            </div>
                        </div>
                    </div>

                    <div class="checkout-summary-col">
                        <div class="checkout-section-title">📦 ORDER SUMMARY</div>
                        <div class="order-summary-box">
                            ${itemsListSummary}
                            
                            <div style="border-top:1px solid rgba(255,255,255,0.1); margin:10px 0;"></div>
                            
                            <div class="summary-row">
                                <span>Subtotal:</span>
                                <strong>₹${subtotal.toLocaleString()}</strong>
                            </div>
                            ${discountAmt > 0 ? `
                            <div class="summary-row" style="color:var(--accent-gold-light);">
                                <span>VIP Discount (${discountPercent}% OFF):</span>
                                <strong>-₹${discountAmt.toLocaleString()}</strong>
                            </div>` : ''}
                            <div class="summary-row">
                                <span>Express Delivery:</span>
                                <strong style="color:#22c55e;">FREE</strong>
                            </div>
                            
                            <div class="summary-row total">
                                <span>Payable Amount:</span>
                                <strong>₹${totalAmt.toLocaleString()}</strong>
                            </div>

                            <button type="submit" class="btn-place-order">
                                CONFIRM & PLACE ORDER ➔
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modalDiv);
    setTimeout(() => modalDiv.classList.add("active"), 10);
}

function handlePaymentMethodChange() {
    let payMethod = document.querySelector('input[name="payMethod"]:checked').value;
    let container = document.getElementById("paymentDetailsContainer");
    
    document.querySelectorAll('.pay-option').forEach(label => label.classList.remove('selected'));
    document.querySelector('input[name="payMethod"]:checked').parentElement.classList.add('selected');

    if (!container) return;

    if (payMethod.includes("UPI")) {
        container.style.display = "block";
        container.innerHTML = `
            <div class="form-group" style="margin-bottom:0;">
                <label>Enter UPI ID *</label>
                <input type="text" id="chkUpiId" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:8px; color:#fff;" placeholder="e.g. name@upi" required>
            </div>
        `;
    } else if (payMethod.includes("Card")) {
        container.style.display = "block";
        container.innerHTML = `
            <div class="form-group" style="margin-bottom:12px;">
                <label>Card Number *</label>
                <input type="text" id="chkCardNum" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:8px; color:#fff;" placeholder="XXXX XXXX XXXX XXXX" pattern="[0-9]{16}" required>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:0;">
                <div class="form-group">
                    <label>Expiry Date *</label>
                    <input type="text" id="chkExpiry" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:8px; color:#fff;" placeholder="MM/YY" pattern="[0-9]{2}/[0-9]{2}" required>
                </div>
                <div class="form-group">
                    <label>CVV *</label>
                    <input type="password" id="chkCvv" class="form-input" style="width:100%; padding:10px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:8px; color:#fff;" placeholder="123" pattern="[0-9]{3,4}" required>
                </div>
            </div>
        `;
    } else if (payMethod.includes("Net")) {
        container.style.display = "block";
        container.innerHTML = `
            <div class="form-group" style="margin-bottom:0;">
                <label>Select Bank *</label>
                <select id="chkBank" class="form-input" style="width:100%; padding:10px; background:rgba(0,0,0,0.8); border:1px solid rgba(255,255,255,0.2); border-radius:8px; color:#fff;" required>
                    <option value="" disabled selected>Choose your bank...</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                </select>
            </div>
        `;
    } else {
        container.style.display = "none";
        container.innerHTML = "";
    }
}

function closeCheckoutModal(event) {
    let modal = document.getElementById("checkoutModal");
    if (modal) {
        modal.classList.remove("active");
        setTimeout(() => modal.remove(), 350);
    }
}

function placeOrderSubmit(event) {
    if (event) event.preventDefault();

    let name = document.getElementById("chkName").value.trim();
    let phone = document.getElementById("chkPhone").value.trim();
    let email = document.getElementById("chkEmail").value.trim();
    let address = document.getElementById("chkAddress").value.trim();
    let city = document.getElementById("chkCity").value.trim();
    let pin = document.getElementById("chkPin").value.trim();
    let payMethod = document.querySelector('input[name="payMethod"]:checked')?.value || "UPI / GPay";

    let itemsToBuy = checkoutItemState ? [checkoutItemState] : [...cart];
    let subtotal = itemsToBuy.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discountPercent = currentDiscountPercent || 0;
    let discountAmt = Math.round(subtotal * (discountPercent / 100));
    let totalAmt = Math.max(0, subtotal - discountAmt);

    let orderId = "RK-" + Math.floor(100000 + Math.random() * 900000);
    let orderObj = {
        orderId: orderId,
        date: new Date().toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        customerName: name,
        phone: phone,
        email: email,
        address: `${address}, ${city} - ${pin}`,
        items: itemsToBuy,
        totalAmount: totalAmt,
        paymentMethod: payMethod,
        status: "Order Placed & Confirmed",
        stepIndex: 1
    };

    let orders = JSON.parse(localStorage.getItem("rk_orders")) || [];
    orders.unshift(orderObj);
    localStorage.setItem("rk_orders", JSON.stringify(orders));

    updateHeader();

    if (!checkoutItemState) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartCount", "0");
        if (document.getElementById("cartItemsColumn")) renderCartPage();
    }

    closeCheckoutModal();

    showPremiumAlert(`Order #${orderId} has been successfully placed!\n\nDelivery Address: ${name}, ${address}, ${city}.\nEstimated Express Delivery: 2-3 Business Days.`, "🎉 ORDER CONFIRMED!");

    setTimeout(() => {
        openTrackOrderModal(orderId);
    }, 1500);
}


// ==========================================================================
// TRACK ORDER SYSTEM (RK FASHIONS)
// ==========================================================================

function openTrackOrderModal(targetOrderId = null) {
    let existing = document.getElementById("trackOrderModal");
    if (existing) existing.remove();

    let orders = JSON.parse(localStorage.getItem("rk_orders")) || [];
    
    // If no order placed yet, generate sample order for demonstration
    if (orders.length === 0) {
        orders = [{
            orderId: "RK-984210",
            date: "Today",
            customerName: localStorage.getItem("userName") || "Valued Customer",
            phone: "9876543210",
            address: "Flat 402, Park View Heights, MG Road, Mumbai - 400001",
            items: [{ name: "Summer Dress", quantity: 1, price: 1999, category: "WOMEN" }],
            totalAmount: 1999,
            paymentMethod: "UPI / GPay",
            status: "In Transit - Out for Delivery Today",
            stepIndex: 3
        }];
    }

    let activeOrder = targetOrderId ? orders.find(o => o.orderId === targetOrderId) || orders[0] : orders[0];

    let modalDiv = document.createElement("div");
    modalDiv.id = "trackOrderModal";
    modalDiv.className = "track-modal-overlay";
    modalDiv.setAttribute("onclick", "closeTrackOrderModal(event)");

    let itemsHtml = activeOrder.items.map(i => `<span style="display:inline-block; background:rgba(255,255,255,0.08); padding:4px 10px; border-radius:12px; margin-right:6px; margin-top:4px; font-size:12px;">🛍️ ${i.quantity}x ${i.name}</span>`).join("");

    modalDiv.innerHTML = `
        <div class="track-modal-card" onclick="event.stopPropagation()">
            <button class="btn-close-checkout" onclick="closeTrackOrderModal()">✕</button>

            <div style="text-align:center; margin-bottom:20px;">
                <span style="font-size:11px; font-weight:800; letter-spacing:1.5px; color:var(--accent-gold-light); background:rgba(197,160,89,0.15); padding:4px 12px; border-radius:15px; border:1px solid var(--accent-gold);">🚚 RK EXPRESS TRACKING</span>
                <h2 style="font-family:var(--font-serif); font-size:24px; color:#fff; margin-top:8px;">TRACK YOUR ORDER</h2>
                <p style="font-size:13px; color:#94a3b8;">Order ID: <strong style="color:var(--accent-gold-light);">${activeOrder.orderId}</strong> • ${activeOrder.date}</p>
            </div>

            <!-- LIVE STATUS TIMELINE -->
            <div class="track-timeline">
                <div class="timeline-step done">
                    <div class="dot">✓</div>
                    <h4>Order Placed & Verified</h4>
                    <p>Order received & payment confirmed via ${activeOrder.paymentMethod}</p>
                </div>
                <div class="timeline-step ${activeOrder.stepIndex >= 2 ? 'done' : 'active'}">
                    <div class="dot">${activeOrder.stepIndex >= 2 ? '✓' : '📦'}</div>
                    <h4>Packed at RK Fashions Warehouse</h4>
                    <p>Quality check complete & sanitized packaging done</p>
                </div>
                <div class="timeline-step ${activeOrder.stepIndex >= 3 ? (activeOrder.stepIndex === 3 ? 'active' : 'done') : ''}">
                    <div class="dot">${activeOrder.stepIndex >= 3 ? '🚚' : '📍'}</div>
                    <h4>Out for Express Delivery</h4>
                    <p>On the way with Express Courier. Expected Today by 7:00 PM</p>
                </div>
                <div class="timeline-step ${activeOrder.stepIndex >= 4 ? 'done' : ''}">
                    <div class="dot">🏡</div>
                    <h4>Delivered to Doorstep</h4>
                    <p>Delivery to ${activeOrder.address}</p>
                </div>
            </div>

            <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:16px; margin-top:16px;">
                <div style="font-size:12px; color:#cbd5e1; margin-bottom:8px;"><strong>DELIVERY ADDRESS:</strong> ${activeOrder.customerName} (${activeOrder.phone}) - ${activeOrder.address}</div>
                <div style="font-size:12px; color:#cbd5e1;"><strong>ORDERED ITEMS:</strong></div>
                <div style="margin-top:4px;">${itemsHtml}</div>
                <div style="font-size:14px; font-weight:800; color:var(--accent-gold-light); margin-top:10px; text-align:right;">Total: ₹${activeOrder.totalAmount.toLocaleString()}</div>
            </div>

            <div style="display:flex; gap:10px; margin-top:20px;">
                <button class="btn-premium-alert-ok" style="flex:1;" onclick="closeTrackOrderModal()">CLOSE TRACKER</button>
                <button class="btn-premium-alert-ok" style="flex:1; background:rgba(239,68,68,0.1); border-color:#ef4444; color:#ef4444;" onclick="cancelOrder('${activeOrder.orderId}')">CANCEL ORDER</button>
            </div>
        </div>
    `;

    document.body.appendChild(modalDiv);
    setTimeout(() => modalDiv.classList.add("active"), 10);
}

function closeTrackOrderModal(event) {
    let modal = document.getElementById("trackOrderModal");
    if (modal) {
        modal.classList.remove("active");
        setTimeout(() => modal.remove(), 350);
    }
}

function cancelOrder(orderId) {
    let existingConfirm = document.getElementById("premiumConfirmModal");
    if (existingConfirm) existingConfirm.remove();

    let confirmDiv = document.createElement("div");
    confirmDiv.id = "premiumConfirmModal";
    confirmDiv.className = "track-modal-overlay";
    confirmDiv.setAttribute("onclick", "closePremiumConfirmModal()");
    confirmDiv.style.zIndex = "1000000"; // above track order (999999)

    confirmDiv.innerHTML = `
        <div class="track-modal-card" style="max-width: 400px; text-align: center; padding: 40px 20px;" onclick="event.stopPropagation()">
            <div style="font-size: 40px; margin-bottom: 15px;">⚠️</div>
            <h3 style="font-family: var(--font-serif); font-size: 22px; color: #fff; margin-bottom: 10px;">CANCEL ORDER</h3>
            <p style="font-size: 14px; color: #94a3b8; margin-bottom: 25px;">Are you sure you want to cancel this order? This action cannot be undone.</p>
            <div style="display: flex; gap: 10px;">
                <button class="btn-premium-alert-ok" style="flex: 1;" onclick="closePremiumConfirmModal()">KEEP ORDER</button>
                <button class="btn-premium-alert-ok" style="flex: 1; background: rgba(239,68,68,0.1); border-color: #ef4444; color: #ef4444;" onclick="executeCancelOrder('${orderId}')">YES, CANCEL</button>
            </div>
        </div>
    `;

    document.body.appendChild(confirmDiv);
    setTimeout(() => confirmDiv.classList.add("active"), 10);
}

function closePremiumConfirmModal() {
    let modal = document.getElementById("premiumConfirmModal");
    if (modal) {
        modal.classList.remove("active");
        setTimeout(() => modal.remove(), 350);
    }
}

function executeCancelOrder(orderId) {
    let orders = JSON.parse(localStorage.getItem("rk_orders")) || [];
    let orderIndex = orders.findIndex(o => o.orderId === orderId);
    
    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1);
        localStorage.setItem("rk_orders", JSON.stringify(orders));
    }
    
    updateHeader();
    
    closeTrackOrderModal();
    closePremiumConfirmModal();
    
    setTimeout(() => {
        showPremiumSuccessMessage();
    }, 350);
}

function showPremiumSuccessMessage() {
    let existingSuccess = document.getElementById("premiumSuccessModal");
    if (existingSuccess) existingSuccess.remove();

    let successDiv = document.createElement("div");
    successDiv.id = "premiumSuccessModal";
    successDiv.className = "track-modal-overlay";
    successDiv.setAttribute("onclick", "closePremiumSuccessModal()");
    successDiv.style.zIndex = "1000000";

    successDiv.innerHTML = `
        <div class="track-modal-card" style="max-width: 400px; text-align: center; padding: 40px 20px;" onclick="event.stopPropagation()">
            <div style="font-size: 40px; margin-bottom: 15px;">✔️</div>
            <h3 style="font-family: var(--font-serif); font-size: 22px; color: var(--accent-gold-light); margin-bottom: 10px;">ORDER CANCELLED</h3>
            <p style="font-size: 14px; color: #94a3b8; margin-bottom: 25px;">Your order has been cancelled successfully. Your refund (if any) will be processed shortly.</p>
            <button class="btn-premium-alert-ok" onclick="closePremiumSuccessModal()">DONE</button>
        </div>
    `;

    document.body.appendChild(successDiv);
    setTimeout(() => successDiv.classList.add("active"), 10);
}

function closePremiumSuccessModal() {
    let modal = document.getElementById("premiumSuccessModal");
    if (modal) {
        modal.classList.remove("active");
        setTimeout(() => modal.remove(), 350);
    }
}

// ==========================================================================
// SMOOTH SCROLL ANIMATION ENGINE (LEFT & RIGHT CONVERGING IMAGES)
// ==========================================================================

function initSmoothScrollAnimations() {
    document.body.classList.add("js-reveal-enabled");

    const revealElements = document.querySelectorAll(
        ".reveal-left, .reveal-right, .reveal-up, .reveal-scale, .reveal-from-left, .reveal-from-right, .converge-left, .converge-right"
    );

    // 1. IntersectionObserver for threshold-based smooth class reveals
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -5% 0px",
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
            } else {
                const rect = entry.target.getBoundingClientRect();
                if (rect.top > window.innerHeight) {
                    entry.target.classList.remove("reveal-active");
                }
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Real-time Continuous Scroll Scrubbing Parallax Interpolator
    let isTicking = false;

    function handleScrollScrubbing() {
        const viewportHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        const isMobile = screenWidth <= 768;

        const convergePairs = document.querySelectorAll(".converge-pair-row");

        convergePairs.forEach(pair => {
            const rect = pair.getBoundingClientRect();
            const enterPoint = viewportHeight * 0.95;
            const centerPoint = viewportHeight * 0.42;
            
            let progress = (enterPoint - rect.top) / (enterPoint - centerPoint);
            progress = Math.max(0, Math.min(1, progress));

            // Cubic bezier easeOutQuint curve
            const eased = 1 - Math.pow(1 - progress, 4);

            const leftCard = pair.querySelector(".converge-left");
            const rightCard = pair.querySelector(".converge-right");
            const divider = pair.querySelector(".converge-center-divider");

            if (isMobile) {
                // On mobile devices, cards stack vertically - apply vertical reveal and scale without horizontal overflow
                const currentY = 20 * (1 - eased);
                const mobileScale = 0.94 + (0.06 * eased);
                const opacity = Math.min(1, eased * 1.5);

                if (leftCard) {
                    leftCard.style.transform = `translate3d(0, ${currentY}px, 0) scale(${mobileScale})`;
                    leftCard.style.opacity = opacity;
                }

                if (rightCard) {
                    rightCard.style.transform = `translate3d(0, ${currentY}px, 0) scale(${mobileScale})`;
                    rightCard.style.opacity = opacity;
                }
            } else {
                const maxOffset = Math.min(screenWidth * 0.3, 220);

                if (leftCard) {
                    const currentLeftX = -maxOffset * (1 - eased);
                    const leftRotate = -4 * (1 - eased);
                    const leftScale = 0.88 + (0.12 * eased);
                    const opacity = Math.min(1, eased * 1.5);
                    
                    leftCard.style.transform = `translate3d(${currentLeftX}px, 0, 0) rotate(${leftRotate}deg) scale(${leftScale})`;
                    leftCard.style.opacity = opacity;
                }

                if (rightCard) {
                    const currentRightX = maxOffset * (1 - eased);
                    const rightRotate = 4 * (1 - eased);
                    const rightScale = 0.88 + (0.12 * eased);
                    const opacity = Math.min(1, eased * 1.5);

                    rightCard.style.transform = `translate3d(${currentRightX}px, 0, 0) rotate(${rightRotate}deg) scale(${rightScale})`;
                    rightCard.style.opacity = opacity;
                }
            }

            if (divider) {
                divider.style.transform = `scale(${eased}) rotate(${eased * 180}deg)`;
                divider.style.opacity = eased;
            }
        });

        isTicking = false;
    }

    function onScroll() {
        if (!isTicking) {
            requestAnimationFrame(handleScrollScrubbing);
            isTicking = true;
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScrollScrubbing, { passive: true });
    
    // Initial calculation trigger
    handleScrollScrubbing();
}

function replayScrollAnimation() {
    const convergeSection = document.getElementById("converging-runway");
    if (convergeSection) {
        convergeSection.scrollIntoView({ behavior: "smooth", block: "center" });
        const cards = convergeSection.querySelectorAll(".converge-card");
        cards.forEach(card => card.classList.remove("reveal-active"));
        setTimeout(() => {
            cards.forEach(card => card.classList.add("reveal-active"));
        }, 350);
    }
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
    updateHeader();
    updateHeartIcons();
    updateAuthUI();
    createQuickViewModalDOM();
    checkAutoOpenOfferModal();
    initSmoothScrollAnimations();
    initChatbot();
});

// ==========================================
// AI FASHION ASSISTANT
// ==========================================
function initChatbot() {
    if (isAuthPage()) return;
    if (document.getElementById('aiFloatingBtn')) return;
    // 1. Inject Floating Button and Chat Window
    const aiHTML = `
        <!-- Floating Button -->
        <button id="aiFloatingBtn" style="position:fixed; bottom:30px; right:30px; width:60px; height:60px; border-radius:50%; background:var(--primary); color:white; border:none; box-shadow:0 10px 20px rgba(0,0,0,0.2); cursor:pointer; z-index:99999; display:flex; align-items:center; justify-content:center; transition:0.3s;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </button>

        <!-- Chat Window -->
        <div id="aiChatWindow" style="position:fixed; bottom:100px; right:30px; width:360px; height:500px; background:white; border-radius:16px; box-shadow:0 15px 40px rgba(0,0,0,0.2); z-index:99999; display:flex; flex-direction:column; opacity:0; pointer-events:none; transform:translateY(20px); transition:0.3s; overflow:hidden; border:1px solid var(--border-light);">
            <!-- Header -->
            <div style="background:var(--primary); padding:16px 20px; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <div style="width:10px; height:10px; background:#10b981; border-radius:50%; box-shadow:0 0 8px #10b981;"></div>
                    <h3 style="color:white; margin:0; font-family:var(--font-serif); font-size:18px; letter-spacing:0.5px;">AI Stylist</h3>
                </div>
                <button id="aiCloseBtn" style="background:none; border:none; color:white; font-size:20px; cursor:pointer; opacity:0.8;">✕</button>
            </div>
            
            <!-- Messages Area -->
            <div id="aiChatBody" style="flex:1; padding:20px; overflow-y:auto; background:#fafafa; display:flex; flex-direction:column; gap:16px;">
                <div class="ai-msg" style="align-self:flex-start; background:white; padding:12px 16px; border-radius:12px 12px 12px 0; box-shadow:var(--shadow-sm); border:1px solid var(--border-light); max-width:85%; font-size:14px; color:var(--text-main); line-height:1.5;">
                    Hello! I'm your personal AI Fashion Assistant. Ask me for style advice or upload a photo to get personalized recommendations! ✨
                </div>
            </div>

            <!-- Input Area -->
            <div style="padding:16px; background:white; border-top:1px solid var(--border-light); display:flex; gap:10px; align-items:center;">
                <input type="file" id="aiImageUpload" accept="image/*" style="display:none;">
                <button id="aiUploadBtn" title="Upload Image for Analysis" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; display:flex; align-items:center; justify-content:center; padding:8px; border-radius:50%; transition:0.2s;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                </button>
                <input type="text" id="aiInput" placeholder="Ask for outfits..." style="flex:1; border:none; background:#f1f5f9; padding:12px 16px; border-radius:20px; font-size:14px; outline:none; color:var(--text-main);">
                <button id="aiSendBtn" style="background:var(--primary); color:white; border:none; width:40px; height:40px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:0.2s;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', aiHTML);

    const floatingBtn = document.getElementById('aiFloatingBtn');
    const chatWindow = document.getElementById('aiChatWindow');
    const closeBtn = document.getElementById('aiCloseBtn');
    const chatBody = document.getElementById('aiChatBody');
    const input = document.getElementById('aiInput');
    const sendBtn = document.getElementById('aiSendBtn');
    const uploadBtn = document.getElementById('aiUploadBtn');
    const imageUpload = document.getElementById('aiImageUpload');

    // UI Logic
    let isChatOpen = false;
    function toggleChat() {
        isChatOpen = !isChatOpen;
        if (isChatOpen) {
            chatWindow.style.opacity = '1';
            chatWindow.style.pointerEvents = 'auto';
            chatWindow.style.transform = 'translateY(0)';
            floatingBtn.style.transform = 'scale(0)';
            setTimeout(() => input.focus(), 300);
        } else {
            chatWindow.style.opacity = '0';
            chatWindow.style.pointerEvents = 'none';
            chatWindow.style.transform = 'translateY(20px)';
            floatingBtn.style.transform = 'scale(1)';
        }
    }
    floatingBtn.onclick = toggleChat;
    closeBtn.onclick = toggleChat;

    // Messaging Logic
    function addUserMessage(text, imgSrc = null) {
        let msg = `<div class="user-msg" style="align-self:flex-end; background:var(--primary); color:white; padding:12px 16px; border-radius:12px 12px 0 12px; box-shadow:var(--shadow-sm); max-width:85%; font-size:14px; line-height:1.5;">`;
        if (text) msg += `<div>${text}</div>`;
        if (imgSrc) msg += `<img src="${imgSrc}" style="width:100%; max-height:200px; object-fit:cover; border-radius:8px; margin-top:${text ? '10px' : '0'};">`;
        msg += `</div>`;
        chatBody.insertAdjacentHTML('beforeend', msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function addAIMessage(htmlContent) {
        let msg = `<div class="ai-msg" style="align-self:flex-start; background:white; padding:12px 16px; border-radius:12px 12px 12px 0; box-shadow:var(--shadow-sm); border:1px solid var(--border-light); max-width:90%; font-size:14px; color:var(--text-main); line-height:1.5; width:100%;">
            ${htmlContent}
        </div>`;
        chatBody.insertAdjacentHTML('beforeend', msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showTyping() {
        let typing = `<div id="aiTyping" class="ai-msg" style="align-self:flex-start; background:white; padding:12px 16px; border-radius:12px 12px 12px 0; box-shadow:var(--shadow-sm); border:1px solid var(--border-light);">
            <div style="display:flex; gap:4px; align-items:center; height:20px;">
                <div style="width:6px; height:6px; background:#94a3b8; border-radius:50%; animation:aiBounce 1.4s infinite ease-in-out both;"></div>
                <div style="width:6px; height:6px; background:#94a3b8; border-radius:50%; animation:aiBounce 1.4s infinite ease-in-out both; animation-delay:0.2s;"></div>
                <div style="width:6px; height:6px; background:#94a3b8; border-radius:50%; animation:aiBounce 1.4s infinite ease-in-out both; animation-delay:0.4s;"></div>
            </div>
        </div>`;
        chatBody.insertAdjacentHTML('beforeend', typing);
        chatBody.scrollTop = chatBody.scrollHeight;
        
        if (!document.getElementById('aiTypingStyle')) {
            document.head.insertAdjacentHTML('beforeend', `<style id="aiTypingStyle">@keyframes aiBounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }</style>`);
        }
    }

    function removeTyping() {
        let t = document.getElementById('aiTyping');
        if (t) t.remove();
    }

    function buildProductCard(productName, productObj) {
        return `
        <div style="display:flex; flex-direction:column; background:white; border:1px solid var(--border-light); border-radius:8px; overflow:hidden; margin-top:12px;">
            <div style="position:relative; height:120px;">
                <img src="${productObj.image}" style="width:100%; height:100%; object-fit:cover;">
                <button class="heart" title="Add to Wishlist" onclick="event.stopPropagation(); addWishlist('${productName.replace(/'/g, "\\'")}')" style="position:absolute; top:8px; right:8px; background:white; border:none; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); cursor:pointer; color:var(--text-secondary); font-size:16px;">♡</button>
            </div>
            <div style="padding:10px;">
                <div style="font-size:11px; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px;">${productObj.category}</div>
                <div style="font-weight:600; font-size:13px; margin:4px 0; color:var(--text-main); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${productName}</div>
                <div style="color:var(--accent-gold); font-weight:600; font-size:13px; margin-bottom:10px;">${productObj.displayPrice}</div>
                <button onclick="openProduct('${productName.replace(/'/g, "\\'")}')" style="width:100%; background:var(--primary); color:white; border:none; padding:8px; border-radius:6px; font-size:12px; font-weight:600; cursor:pointer; transition:0.2s;">View Product</button>
            </div>
        </div>
        `;
    }

    // AI Core Logic (Simulated)
    function processQuery(query) {
        query = query.toLowerCase();
        let recommended = [];
        let responseText = "";

        // Simulated AI Logic
        if (query.includes("women") || query.includes("girl") || query.includes("party") || query.includes("dress")) {
            responseText = "Here are some stunning styles for women that you might love:";
            recommended = Object.keys(products).filter(p => products[p].category === "WOMEN" || products[p].category === "GIRLS").slice(0, 2);
        } else if (query.includes("men") || query.includes("boy") || query.includes("shirt") || query.includes("jeans") || query.includes("pants")) {
            responseText = "Here are some sharp choices for men:";
            recommended = Object.keys(products).filter(p => products[p].category === "MEN" || products[p].category === "BOYS").slice(0, 2);
        } else if (query.includes("under") || query.includes("cheap") || query.includes("1000") || query.includes("budget")) {
            responseText = "Here are some great options that fit your budget:";
            recommended = Object.keys(products).filter(p => products[p].price <= 1500).slice(0, 2);
        } else {
            responseText = "I found these beautiful pieces that match your vibe:";
            // Pick random 2
            let keys = Object.keys(products);
            recommended.push(keys[Math.floor(Math.random() * keys.length)]);
            recommended.push(keys[Math.floor(Math.random() * keys.length)]);
        }

        let htmlRes = `<div>${responseText}</div>`;
        if (recommended.length > 0) {
            htmlRes += `<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">`;
            recommended.forEach(pName => {
                htmlRes += buildProductCard(pName, products[pName]);
            });
            htmlRes += `</div>`;
        }
        
        addAIMessage(htmlRes);
        updateHeartIcons(); // refresh hearts for new DOM elements
    }

    function processImageAnalysis(fileBase64, fileName) {
        // Mock AI Image Recognition
        setTimeout(() => {
            removeTyping();
            let category = "WOMEN";
            let displayCat = "Women";
            fileName = fileName.toLowerCase();
            
            if(fileName.includes("man") || fileName.includes("men") || fileName.includes("boy")) {
                category = "MEN"; displayCat = "Men";
            }
            
            let htmlRes = `
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px; color:var(--accent-gold); font-weight:600;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    Analysis Complete
                </div>
                <div style="background:#f8fafc; border-left:3px solid var(--accent-gold); padding:8px 12px; margin-bottom:12px; border-radius:0 4px 4px 0; font-size:13px;">
                    <strong>Category detected:</strong> ${displayCat}
                </div>
                <div>Recommended for you based on this image:</div>
            `;
            
            let recommended = Object.keys(products).filter(p => products[p].category === category).slice(0, 2);
            if (recommended.length > 0) {
                htmlRes += `<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">`;
                recommended.forEach(pName => {
                    htmlRes += buildProductCard(pName, products[pName]);
                });
                htmlRes += `</div>`;
            }
            
            addAIMessage(htmlRes);
            updateHeartIcons();
        }, 2000);
    }

    // Event Listeners
    sendBtn.onclick = () => {
        let text = input.value.trim();
        if (!text) return;
        addUserMessage(text);
        input.value = '';
        showTyping();
        setTimeout(() => {
            removeTyping();
            processQuery(text);
        }, 1200);
    };

    input.onkeypress = (e) => {
        if (e.key === 'Enter') sendBtn.click();
    };

    uploadBtn.onclick = () => imageUpload.click();

    imageUpload.onchange = (e) => {
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(event) {
                addUserMessage("Can you find outfits similar to this?", event.target.result);
                showTyping();
                processImageAnalysis(event.target.result, file.name);
            };
            reader.readAsDataURL(file);
        }
        e.target.value = ''; // reset
    };
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER LOGIC & DYNAMIC INJECTION
   ========================================================================== */
function openMobileDrawer() {
    let overlay = document.getElementById("mobileDrawerOverlay");
    let drawer = document.getElementById("mobileDrawer");
    if (!drawer) {
        initMobileDrawer();
        overlay = document.getElementById("mobileDrawerOverlay");
        drawer = document.getElementById("mobileDrawer");
    }
    if (drawer && overlay) {
        drawer.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeMobileDrawer() {
    const overlay = document.getElementById("mobileDrawerOverlay");
    const drawer = document.getElementById("mobileDrawer");
    if (drawer && overlay) {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

function toggleMobileDrawer() {
    const drawer = document.getElementById("mobileDrawer");
    if (drawer && drawer.classList.contains("active")) {
        closeMobileDrawer();
    } else {
        openMobileDrawer();
    }
}

function initMobileDrawer() {
    if (isAuthPage()) return;
    if (document.getElementById("mobileDrawer")) return;

    // Create drawer overlay
    const overlay = document.createElement("div");
    overlay.className = "mobile-drawer-overlay";
    overlay.id = "mobileDrawerOverlay";
    overlay.onclick = closeMobileDrawer;

    // Create drawer container
    const drawer = document.createElement("div");
    drawer.className = "mobile-drawer";
    drawer.id = "mobileDrawer";
    drawer.innerHTML = `
        <div class="drawer-header">
            <span class="drawer-logo">RK FASHIONS</span>
            <button class="drawer-close-btn" onclick="closeMobileDrawer()" aria-label="Close navigation menu">✕</button>
        </div>
        <div class="drawer-links">
            <a href="home.html" class="drawer-link active">🏪 Store Home</a>
            <a href="home.html#converging-runway" class="drawer-link" onclick="closeMobileDrawer()">⚡ Runway Convergence</a>
            <a href="home.html#products" class="drawer-link" onclick="closeMobileDrawer(); if(window.filterProducts) filterProducts('Women');">👗 Women Collection</a>
            <a href="home.html#products" class="drawer-link" onclick="closeMobileDrawer(); if(window.filterProducts) filterProducts('Men');">👔 Men Collection</a>
            <a href="home.html#products" class="drawer-link" onclick="closeMobileDrawer(); if(window.filterProducts) filterProducts('Boys');">👦 Boys Collection</a>
            <a href="home.html#products" class="drawer-link" onclick="closeMobileDrawer(); if(window.filterProducts) filterProducts('Girls');">👧 Girls Collection</a>
            <a href="cart.html" class="drawer-link">🛍️ Shopping Bag</a>
            <a href="wishlist.html" class="drawer-link">💖 Saved Wishlist</a>
            <a href="javascript:void(0)" onclick="closeMobileDrawer(); if(window.openTrackOrderModal) openTrackOrderModal();" class="drawer-link">📦 Track Order</a>
            <a href="index.html" class="drawer-link drawer-login-btn">👤 Login / Account</a>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    // Ensure header has hamburger toggle button
    const header = document.querySelector("header");
    if (header && !header.querySelector(".mobile-menu-toggle")) {
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "icon-btn mobile-menu-toggle";
        toggleBtn.id = "mobileMenuToggle";
        toggleBtn.setAttribute("aria-label", "Toggle Menu");
        toggleBtn.onclick = toggleMobileDrawer;
        toggleBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
        const logo = header.querySelector(".logo");
        if (logo) {
            header.insertBefore(toggleBtn, logo);
        } else {
            header.prepend(toggleBtn);
        }
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileDrawer);
} else {
    initMobileDrawer();
}

