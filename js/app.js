document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('project-grid');
    const searchInput = document.getElementById('project-search');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const themeToggle = document.getElementById('theme-toggle');
    const scrollProgress = document.getElementById('scroll-progress');
    const body = document.body;

    let activeFilter = 'all';
    let searchQuery = '';

    // ────────────────── SCROLL PROGRESS ────────────────── 
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";
    });

    // ────────────────── THEME TOGGLE ────────────────── 
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.className = savedTheme;

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // ────────────────── RENDER PROJECTS ────────────────── 
    function renderProjects() {
        const filtered = projectsData.filter(p => {
            const searchTerms = [
                p.title,
                p.subtitle,
                p.category,
                ...p.tags,
                ...(p.techStack || []),
                p.description,
                p.role
            ].join(' ').toLowerCase();

            const matchesSearch = searchTerms.includes(searchQuery.toLowerCase());
            
            if (activeFilter === 'all') return matchesSearch;
            
            let categoryMatch = false;
            if (activeFilter === 'Mobile') categoryMatch = p.category === 'Mobile';
            if (activeFilter === 'Enterprise') categoryMatch = (p.category === 'ERP' || p.category === 'Retail');
            if (activeFilter === 'E-commerce') categoryMatch = p.category === 'E-commerce';
            if (activeFilter === 'Specialized') categoryMatch = (p.category === 'Hospitality' || p.category === 'Construction');
            
            return categoryMatch && matchesSearch;
        });

        if (filtered.length === 0) {
            projectGrid.innerHTML = `
                <div style="grid-column: 1/-1; padding: 100px 0; text-align: center; color: var(--muted);">
                    <div style="font-size: 3rem; margin-bottom: 20px;">🔍</div>
                    <h3 style="font-family: 'Cabinet Grotesk', sans-serif; font-size: 1.5rem; color: var(--text);">No projects match your search</h3>
                    <p style="margin-top: 10px;">Try adjusting your filters or search terms.</p>
                </div>
            `;
            return;
        }

        projectGrid.innerHTML = filtered.map((p, index) => `
            <div class="pc reveal ${index === 0 ? 'featured' : ''}" data-id="${p.id}" style="--accent-rgb: ${hexToRgb(p.accent)}">
                <div class="pc-body">
                    <div class="pc-top">
                        <span class="pc-cat">${p.category}</span>
                        <span class="badge ${index === 0 ? 'featured-tag' : ''}">${p.status}</span>
                    </div>
                    <div class="pc-ico">${p.icon}</div>
                    <h3 class="pc-name">${p.title}</h3>
                    <p class="pc-desc">${p.subtitle}</p>
                    <div class="pc-chips">
                        ${p.tags.slice(0, 4).map(t => `<span class="chip">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="pc-ft">
                    <div class="pc-view">Case Study <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 10L10 2M10 2H5M10 2v5"/></svg></div>
                </div>
            </div>
        `).join('');

        // Trigger reveal for new elements
        setTimeout(observeReveals, 50);
        
        // Add click events to cards
        document.querySelectorAll('.pc').forEach(card => {
            card.addEventListener('click', () => openModal(card.dataset.id));
        });
    }

    // ────────────────── MODAL LOGIC ────────────────── 
    function openModal(projectId) {
        const p = projectsData.find(item => item.id === projectId);
        if (!p) return;

        modalBody.innerHTML = `
            <div class="m-head">
                <div class="m-cat">${p.category} · ${p.status}</div>
                <h2 class="m-title">${p.title}</h2>
                <p class="m-sub">${p.subtitle}</p>
            </div>
            
            <div class="m-grid">
                <div class="m-main">
                    <div class="m-section">
                        <h4 class="m-h">Architectural Vision</h4>
                        <p class="m-p">${p.description}</p>
                    </div>
                    
                    <div class="m-section">
                        <h4 class="m-h">The Challenge</h4>
                        <p class="m-p">${p.problem}</p>
                    </div>

                    <div class="m-section">
                        <h4 class="m-h">Technical Strategy</h4>
                        <p class="m-p">${p.solution}</p>
                        
                        <div class="m-subgrid">
                            ${p.architecture ? Object.entries(p.architecture).map(([key, val]) => `
                                <div class="m-sub-box">
                                    <div class="m-sub-key">${key}</div>
                                    <div class="m-sub-val">${val}</div>
                                </div>
                            `).join('') : ''}
                        </div>
                    </div>

                    ${p.brands ? `
                    <div class="m-section">
                        <h4 class="m-h">Brand Ecosystem</h4>
                        <div class="m-brand-list">
                            ${p.brands.map(b => `
                                <div class="m-brand-card">
                                    <div class="m-b-header">
                                        <div>
                                            <div class="m-b-name">${b.name}</div>
                                            <div class="m-b-tag">${b.tagline}</div>
                                        </div>
                                        <a href="${b.url}" target="_blank" class="m-b-link">Visit ↗</a>
                                    </div>
                                    <div class="m-b-body">
                                        <div class="m-b-item"><strong>Architecture:</strong> ${b.architecture}</div>
                                        <div class="m-b-item"><strong>Core Logic:</strong> ${b.logic}</div>
                                        <div class="m-b-tags">
                                            ${b.techStack.map(t => `<span class="m-b-mini-tag">${t}</span>`).join('')}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    ${p.logic ? `
                    <div class="m-section">
                        <h4 class="m-h">Core Business Logic</h4>
                        <div class="m-logic-grid">
                            ${p.logic.map(i => `
                                <div class="m-l-card">
                                    <strong>${i.h}</strong>
                                    <p>${i.p}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    <div class="m-section">
                        <h4 class="m-h">System Impact</h4>
                        <p class="m-p">${p.impact}</p>
                    </div>
                </div>
                
                <div class="m-sidebar">
                    <div class="m-side-box highlight">
                        <div class="m-side-h">Architect's Role</div>
                        <p style="font-size: 0.9rem; font-weight: 500; line-height: 1.5;">${p.role}</p>
                    </div>
                    <div class="m-side-box">
                        <div class="m-side-h">Tech Stack</div>
                        <div class="m-tags">
                            ${p.techStack ? p.techStack.map(t => `<span class="m-tag">${t}</span>`).join('') : ''}
                        </div>
                    </div>
                    <div class="m-links">
                        ${p.links?.live ? `<a href="${p.links.live}" target="_blank" class="m-link primary">Visit Live Site</a>` : ''}
                        ${p.links?.playStore ? `<a href="${p.links.playStore}" target="_blank" class="m-link primary">View on Play Store</a>` : ''}
                        ${p.links?.download ? `<a href="${p.links.download}" target="_blank" class="m-link primary">Download App</a>` : ''}
                        <a href="https://wa.me/917592087406" target="_blank" class="m-link secondary">Inquire About This</a>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modalClose.click();
    });

    // ────────────────── ACCESSIBILITY (ESC KEY) ────────────────── 
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modalClose.click();
        }
    });

    // ────────────────── CUSTOM CURSOR GLOW ────────────────── 
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // ────────────────── FILTERING ────────────────── 
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProjects();
    });

    tagButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tagButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderProjects();
        });
    });

    // ────────────────── UTILS ────────────────── 
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
            `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
            '200, 255, 87';
    }

    function observeReveals() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    // Canvas animation (Preserved from original)
    (function initCanvas(){
        const cv = document.getElementById('bg-canvas');
        if(!cv) return;
        const cx = cv.getContext('2d');
        let W, H, pts = [];
        function resize(){
            W = cv.width = window.innerWidth;
            H = cv.height = window.innerHeight;
            pts = [];
            const gap = 80;
            for(let x=0;x<W+gap;x+=gap)
                for(let y=0;y<H+gap;y+=gap)
                    pts.push({x,y,ox:x,oy:y,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*.8+.3,a:Math.random()*.15+.04});
        }
        function draw(){
            cx.clearRect(0,0,W,H);
            pts.forEach(p=>{
                p.x+=p.vx; p.y+=p.vy;
                if(Math.abs(p.x-p.ox)>20)p.vx*=-1;
                if(Math.abs(p.y-p.oy)>20)p.vy*=-1;
                cx.beginPath(); cx.arc(p.x,p.y,p.r,0,Math.PI*2);
                cx.fillStyle=body.classList.contains('dark-mode') ? `rgba(160,160,230,${p.a})` : `rgba(100,100,150,${p.a * 0.5})`;
                cx.fill();
            });
            requestAnimationFrame(draw);
        }
        window.addEventListener('resize',resize);
        resize(); draw();
    })();

    // ────────────────── COUNT UP ANIMATION ────────────────── 
    function initCountUp() {
        const stats = document.querySelectorAll('.sval');
        stats.forEach(stat => {
            const target = parseInt(stat.innerText);
            let count = 0;
            const duration = 1500;
            const increment = target / (duration / 16);
            
            const update = () => {
                count += increment;
                if (count < target) {
                    stat.innerHTML = Math.floor(count) + (stat.innerHTML.includes('sup') ? '<sup>+</sup>' : '');
                    requestAnimationFrame(update);
                } else {
                    stat.innerHTML = target + (stat.innerHTML.includes('sup') ? '<sup>+</sup>' : '');
                }
            };
            update();
        });
    }

    // Initial reveals for static content (Hero, Process, Skills)
    observeReveals();
    
    // Initial project render
    renderProjects();
    
    // Trigger count up once hero is ready
    setTimeout(initCountUp, 800);
});
