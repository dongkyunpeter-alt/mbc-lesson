document.addEventListener('DOMContentLoaded', () => {
    console.log('Shopping Cart Interactive System Initialized');

    // Default Cart Data
    const defaultCart = [
        { id: 1, name: 'AirPure Linen Robe', price: 128.00, qty: 1, option: 'Oatmeal · M' },
        { id: 2, name: 'Silk Sleep Mask', price: 32.00, qty: 1, option: 'Charcoal · OS' },
        { id: 3, name: 'Ceramic Mist Diffuser', price: 85.00, qty: 1, option: 'Stone · Small' }
    ];

    // Load or Initialize Cart
    let cart = JSON.parse(localStorage.getItem('gemini_cart'));
    if (!cart) {
        cart = [...defaultCart];
        localStorage.setItem('gemini_cart', JSON.stringify(cart));
    }

    // Load or Initialize Promo Discount
    let promoDiscount = parseFloat(localStorage.getItem('gemini_cart_promo')) || 0; // 0.1 for 10%, or fixed cash

    // Update Status Bar Clock Simulation
    const updateClock = () => {
        const clocks = document.querySelectorAll('.status-bar .time');
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clocks.forEach(clock => {
            clock.textContent = `${hours}:${minutes}`;
        });
    };
    updateClock();
    setInterval(updateClock, 10000);

    // Common Haptic Feedback simulation
    const addHapticFeedback = () => {
        const interactiveElements = document.querySelectorAll('button, a.checkout-btn-first, a.checkout-btn-centric, a.checkout-btn-journey, .back-icon, .remove-btn-centric, .remove-btn-journey');
        interactiveElements.forEach(el => {
            el.addEventListener('touchstart', () => {
                el.style.transform = 'scale(0.97)';
                el.style.opacity = '0.85';
            }, { passive: true });
            el.addEventListener('touchend', () => {
                el.style.transform = '';
                el.style.opacity = '';
            }, { passive: true });
        });
    };
    addHapticFeedback();

    // ==========================================
    // Core Calculations
    // ==========================================
    const calculateTotals = () => {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        let discount = 0;
        if (promoDiscount > 0) {
            discount = subtotal * promoDiscount; // percentage
        }
        const shipping = 0; // Free
        const tax = subtotal > 0 ? (subtotal * 0.0877) : 0; // ~8.77% tax (estimated for journey)
        const total = subtotal - discount + tax;

        return {
            subtotal: subtotal.toFixed(2),
            discount: discount.toFixed(2),
            tax: tax.toFixed(2),
            total: total.toFixed(2)
        };
    };

    // Save current cart status to localStorage
    const saveCart = () => {
        localStorage.setItem('gemini_cart', JSON.stringify(cart));
    };

    // ==========================================
    // Page Rendering Handlers
    // ==========================================

    // 1. Theme: Product First (cart-product-first.html)
    const renderProductFirstPage = () => {
        if (!document.querySelector('.theme-product-first')) return;

        // Render quantity values
        cart.forEach(item => {
            const qtyLabel = document.getElementById(`qty-${item.id}`);
            if (qtyLabel) qtyLabel.textContent = item.qty;
        });

        // Hide removed elements initially
        const existingIds = cart.map(item => item.id);
        [1, 2, 3].forEach(id => {
            if (!existingIds.includes(id)) {
                const el = document.getElementById(`item-first-${id}`);
                if (el) el.style.display = 'none';
            }
        });

        // Update pricing labels
        const totals = calculateTotals();
        const subtotalEl = document.getElementById('subtotal-val');
        const totalEl = document.getElementById('total-val');
        if (subtotalEl) subtotalEl.textContent = `$${totals.subtotal}`;
        if (totalEl) totalEl.textContent = `$${totals.subtotal}`; // Shipping is free, so subtotal == total in first design

        // Plus / Minus Button Listeners
        const qtyBtns = document.querySelectorAll('.theme-product-first .qty-btn');
        qtyBtns.forEach(btn => {
            btn.onclick = (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                const item = cart.find(item => item.id === id);
                if (!item) return;

                if (btn.classList.contains('plus')) {
                    item.qty++;
                } else if (btn.classList.contains('minus') && item.qty > 1) {
                    item.qty--;
                }

                saveCart();
                renderProductFirstPage();
            };
        });

        // Remove Button Listeners
        const removeBtns = document.querySelectorAll('.theme-product-first .remove-btn-first');
        removeBtns.forEach(btn => {
            btn.onclick = () => {
                const id = parseInt(btn.getAttribute('data-id'));
                cart = cart.filter(item => item.id !== id);
                
                // Fade out animation
                const row = document.getElementById(`item-first-${id}`);
                if (row) {
                    row.style.transition = 'all 0.3s ease';
                    row.style.opacity = '0';
                    row.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        saveCart();
                        renderProductFirstPage();
                    }, 300);
                }
            };
        });

        // Edit button reset cart utility
        const editBtn = document.querySelector('.theme-product-first .edit-btn');
        if (editBtn) {
            editBtn.onclick = () => {
                cart = [...defaultCart];
                promoDiscount = 0;
                localStorage.removeItem('gemini_cart_promo');
                saveCart();
                location.reload();
            };
        }
    };

    // 2. Theme: Price Centric (cart-price-centric.html)
    const renderPriceCentricPage = () => {
        if (!document.querySelector('.theme-price-centric')) return;

        // Render values
        cart.forEach(item => {
            const qtyLabel = document.getElementById(`centric-qty-${item.id}`);
            if (qtyLabel) qtyLabel.textContent = `Qty: ${item.qty}`;
        });

        // Hide removed elements
        const existingIds = cart.map(item => item.id);
        [1, 2, 3].forEach(id => {
            if (!existingIds.includes(id)) {
                const el = document.getElementById(`item-centric-${id}`);
                if (el) el.style.display = 'none';
            }
        });

        // Totals
        const totals = calculateTotals();
        const bigPriceEl = document.getElementById('centric-big-price');
        if (bigPriceEl) {
            bigPriceEl.textContent = `$${totals.total}`;
        }

        // Apply Promo Discount Badge Update
        const saveBadge = document.querySelector('.theme-price-centric .save-badge');
        if (saveBadge) {
            if (promoDiscount > 0) {
                saveBadge.style.display = 'inline-block';
                const savedAmt = (parseFloat(totals.subtotal) * promoDiscount).toFixed(2);
                saveBadge.textContent = `YOU SAVED $${savedAmt}`;
            } else {
                saveBadge.textContent = 'SAVE 10%: PROMO10';
            }
        }

        // Remove Button
        const removeBtns = document.querySelectorAll('.theme-price-centric .remove-btn-centric');
        removeBtns.forEach(btn => {
            btn.onclick = () => {
                const id = parseInt(btn.getAttribute('data-id'));
                cart = cart.filter(item => item.id !== id);

                const row = document.getElementById(`item-centric-${id}`);
                if (row) {
                    row.style.transition = 'all 0.3s ease';
                    row.style.opacity = '0';
                    row.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        saveCart();
                        renderPriceCentricPage();
                    }, 300);
                }
            };
        });

        // Promo apply listener
        const applyBtn = document.getElementById('promo-apply-btn');
        const promoInput = document.getElementById('promo-code-input');
        if (applyBtn && promoInput) {
            // Apply visual feedback if promo active
            if (promoDiscount > 0) {
                promoInput.value = 'PROMO10';
                applyBtn.textContent = 'APPLIED';
                applyBtn.style.backgroundColor = '#10B981';
            }

            applyBtn.onclick = () => {
                const code = promoInput.value.trim().toUpperCase();
                if (code === 'PROMO10') {
                    promoDiscount = 0.1; // 10% discount
                    localStorage.setItem('gemini_cart_promo', promoDiscount.toString());
                    applyBtn.textContent = 'APPLIED';
                    applyBtn.style.backgroundColor = '#10B981';
                    renderPriceCentricPage();
                    alert('프로모션 코드 "PROMO10" (10% 할인)이 성공적으로 적용되었습니다.');
                } else if (code === '') {
                    promoDiscount = 0;
                    localStorage.removeItem('gemini_cart_promo');
                    applyBtn.textContent = 'APPLY';
                    applyBtn.style.backgroundColor = '';
                    renderPriceCentricPage();
                } else {
                    alert('올바르지 않은 프로모션 코드입니다. "PROMO10"을 입력해 보세요.');
                }
            };
        }
    };

    // 3. Theme: Journey Step (cart-journey-step.html)
    const renderJourneyStepPage = () => {
        if (!document.querySelector('.theme-journey')) return;

        // Hide removed elements
        const existingIds = cart.map(item => item.id);
        [1, 2, 3].forEach(id => {
            if (!existingIds.includes(id)) {
                const el = document.getElementById(`item-journey-${id}`);
                if (el) el.style.display = 'none';
            }
        });

        // Show empty message if all items removed
        if (cart.length === 0) {
            const card = document.getElementById('journey-items-card');
            if (card) {
                card.innerHTML = `<div style="padding: 30px; text-align: center; color: #94a3b8; font-size: 14px;">Your cart is empty.</div>`;
            }
        }

        // Totals
        const totals = calculateTotals();
        const subtotalEl = document.getElementById('journey-subtotal');
        const taxEl = document.getElementById('journey-tax');
        const totalEl = document.getElementById('journey-total');
        
        if (subtotalEl) subtotalEl.textContent = `$${totals.subtotal}`;
        if (taxEl) taxEl.textContent = `$${totals.tax}`;
        if (totalEl) totalEl.textContent = `$${totals.total}`;

        // Remove Button
        const removeBtns = document.querySelectorAll('.theme-journey .remove-btn-journey');
        removeBtns.forEach(btn => {
            btn.onclick = () => {
                const id = parseInt(btn.getAttribute('data-id'));
                cart = cart.filter(item => item.id !== id);

                const row = document.getElementById(`item-journey-${id}`);
                if (row) {
                    row.style.transition = 'all 0.3s ease';
                    row.style.opacity = '0';
                    row.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        saveCart();
                        renderJourneyStepPage();
                    }, 300);
                }
            };
        });

        // Submit action simulation
        const submitBtn = document.getElementById('journey-submit-btn');
        if (submitBtn) {
            submitBtn.onclick = (e) => {
                e.preventDefault();
                alert('주문 단계가 성공적으로 승인되었습니다! 장바구니 데이터가 초기화됩니다.');
                localStorage.removeItem('gemini_cart');
                localStorage.removeItem('gemini_cart_promo');
                window.location.href = 'index.html';
            };
        }
    };

    // Run specific handlers depending on current page
    renderProductFirstPage();
    renderPriceCentricPage();
    renderJourneyStepPage();
});
