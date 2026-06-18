*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#0A0F1E;--navy2:#0F1629;--navy3:#162040;
  --cyan:#00D4FF;--cyan2:#00A8CC;
  --white:#E8EDF5;--muted:#7A8499;--steel:#4A5568;
  --glass:rgba(255,255,255,0.04);--glass-b:rgba(255,255,255,0.08);
  --border:rgba(0,212,255,0.15);
}
html{scroll-behavior:smooth}
body{background:var(--navy);color:var(--white);font-family:'DM Sans',sans-serif;font-size:16px;line-height:1.7;overflow-x:hidden}
a{text-decoration:none;color:inherit}
ul{list-style:none}
.container{max-width:1160px;margin:0 auto;padding:0 40px}
.accent{color:var(--cyan)}
.dot{color:var(--cyan)}

/* NAV */
#navbar{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:22px 56px;transition:all 0.3s}
#navbar.scrolled{background:rgba(10,15,30,0.94);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.nav-logo{font-family:'Sora',sans-serif;font-size:1.5rem;font-weight:800;letter-spacing:-1px}
.nav-links{display:flex;gap:40px}
.nav-links a{font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:500;color:var(--muted);letter-spacing:0.02em;transition:color 0.2s}
.nav-links a:hover{color:var(--white)}
.nav-cta{font-family:'DM Sans',sans-serif;font-size:0.85rem;font-weight:600;color:var(--cyan);border:1px solid var(--border);padding:9px 22px;border-radius:6px;transition:all 0.2s;letter-spacing:0.02em}
.nav-cta:hover{background:rgba(0,212,255,0.08);border-color:var(--cyan)}
.nav-link-group{display:flex;gap:10px}
.nav-cta.secondary{color:var(--white);border-color:rgba(255,255,255,0.15)}
.nav-cta.secondary:hover{border-color:var(--cyan);color:var(--cyan)}

/* HERO */
#hero{position:relative;height:100vh;min-height:700px;display:flex;align-items:center;overflow:hidden}
.hero-bg{position:absolute;inset:0;z-index:0;overflow:hidden;background:radial-gradient(ellipse 80% 60% at 30% 20%,#101a33 0%,var(--navy) 55%),var(--navy)}
.grid-overlay{position:absolute;inset:0;background-image:linear-gradient(rgba(0,212,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.05) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse 70% 70% at 50% 40%,black 0%,transparent 75%)}
.circuit-svg{position:absolute;inset:0;width:100%;height:100%;opacity:0.55}
.circuit-lines path{fill:none;stroke:var(--cyan);stroke-width:1.4;stroke-opacity:0.18;stroke-dasharray:6 10;animation:dashflow 26s linear infinite}
.circuit-lines path:nth-child(2){animation-duration:32s;animation-direction:reverse}
.circuit-lines path:nth-child(3){animation-duration:21s}
.circuit-lines path:nth-child(4){animation-duration:29s;animation-direction:reverse}
.circuit-lines path:nth-child(5){animation-duration:24s}
.circuit-nodes circle{fill:var(--cyan);opacity:0.35;animation:nodepulse 3.4s ease-in-out infinite}
.circuit-nodes circle:nth-child(odd){animation-delay:1.1s}
.circuit-nodes circle:nth-child(3n){animation-delay:2s}
@keyframes dashflow{to{stroke-dashoffset:-320}}
@keyframes nodepulse{0%,100%{opacity:0.25;r:4}50%{opacity:0.85;r:6}}
.video-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(10,15,30,0.90) 0%,rgba(10,15,30,0.75) 50%,rgba(10,15,30,0.90) 100%);z-index:1}
.hero-content{position:relative;z-index:2;padding:0 80px;max-width:1000px}
.hero-eyebrow{font-family:'DM Sans',sans-serif;font-size:0.95rem;font-weight:500;color:var(--muted);margin-bottom:18px;letter-spacing:0.05em}
.hero-eyebrow .sep{color:var(--cyan);margin:0 10px}
.hero-title{font-family:'Sora',sans-serif;font-size:clamp(3.8rem,8.5vw,7.5rem);font-weight:800;line-height:1.0;letter-spacing:-3px;margin-bottom:22px;white-space:nowrap}
.hero-subtitle{font-family:'JetBrains Mono',monospace;font-size:0.9rem;color:var(--muted);margin-bottom:36px;min-height:1.6em}
.hero-badges{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:44px}
.badge{font-family:'DM Sans',sans-serif;font-size:0.75rem;font-weight:600;color:var(--cyan);border:1px solid rgba(0,212,255,0.3);padding:5px 14px;border-radius:3px;letter-spacing:0.06em;background:rgba(0,212,255,0.05)}
.hero-cta-group{display:flex;gap:16px;flex-wrap:wrap}
.btn-primary{font-family:'Sora',sans-serif;font-weight:700;font-size:0.9rem;background:var(--cyan);color:var(--navy);padding:14px 34px;border-radius:6px;letter-spacing:0.03em;transition:opacity 0.2s,transform 0.2s}
.btn-primary:hover{opacity:0.88;transform:translateY(-2px)}
.btn-ghost{font-family:'Sora',sans-serif;font-weight:600;font-size:0.9rem;border:1px solid rgba(255,255,255,0.2);color:var(--white);padding:14px 34px;border-radius:6px;transition:all 0.2s}
.btn-ghost:hover{border-color:var(--white);background:rgba(255,255,255,0.05)}
.scroll-hint{position:absolute;bottom:40px;right:56px;z-index:2;display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0.35}
.scroll-hint span{font-family:'JetBrains Mono',monospace;font-size:0.62rem;letter-spacing:0.18em;writing-mode:vertical-rl;color:var(--white)}
.scroll-line{width:1px;height:60px;background:linear-gradient(to bottom,transparent,var(--cyan));animation:scrollpulse 2s ease-in-out infinite}
@keyframes scrollpulse{0%,100%{opacity:0.35;transform:scaleY(1)}50%{opacity:1;transform:scaleY(0.7)}}

/* SECTIONS */
section{padding:120px 0}
.section-label{font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:var(--cyan);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:16px;opacity:0.6}
.section-title{font-family:'Sora',sans-serif;font-size:clamp(2rem,3.5vw,2.8rem);font-weight:800;line-height:1.15;letter-spacing:-1px;margin-bottom:56px}

/* ABOUT */
#about{background:var(--navy2)}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
.about-text .section-title{margin-bottom:24px}
.about-text p{color:var(--muted);font-size:0.93rem;margin-bottom:16px;font-weight:400}
.about-links{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
.link-pill{font-family:'DM Sans',sans-serif;font-size:0.82rem;font-weight:600;color:var(--cyan);border:1px solid var(--border);padding:8px 18px;border-radius:6px;transition:all 0.2s}
.link-pill:hover{background:rgba(0,212,255,0.08);border-color:var(--cyan)}

/* ARCH DIAGRAM */
.arch-diagram{border:1px solid var(--border);border-radius:12px;overflow:hidden;background:rgba(15,22,41,0.8)}
.arch-header{background:rgba(0,212,255,0.06);padding:14px 20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border)}
.arch-label{font-family:'Sora',sans-serif;font-size:0.82rem;font-weight:700;color:var(--white)}
.arch-region{font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:var(--cyan);opacity:0.7}
.arch-body{padding:20px}
.arch-vpc{border:1px dashed rgba(0,212,255,0.3);border-radius:8px;padding:14px;margin-bottom:14px;position:relative}
.arch-vpc-label{font-family:'JetBrains Mono',monospace;font-size:0.62rem;color:var(--cyan);opacity:0.6;display:block;margin-bottom:10px}
.arch-zones{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.arch-az{border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:10px}
.az-label{font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:var(--muted);display:block;margin-bottom:8px;text-align:center}
.arch-subnet{border-radius:4px;padding:8px;margin-bottom:6px;text-align:center}
.arch-subnet.public{background:rgba(0,212,255,0.05);border:1px solid rgba(0,212,255,0.15)}
.arch-subnet.private{background:rgba(100,100,255,0.05);border:1px solid rgba(100,100,255,0.15)}
.subnet-label{font-family:'JetBrains Mono',monospace;font-size:0.55rem;color:var(--muted);display:block;margin-bottom:6px}
.arch-node{font-family:'DM Sans',sans-serif;font-size:0.72rem;font-weight:600;padding:6px 10px;border-radius:4px;line-height:1.3}
.arch-node small{font-size:0.58rem;font-weight:400;opacity:0.7;display:block}
.arch-node.ec2{background:rgba(255,153,0,0.15);color:#FF9900;border:1px solid rgba(255,153,0,0.3)}
.arch-node.docker{background:rgba(0,150,220,0.15);color:#0096DC;border:1px solid rgba(0,150,220,0.3)}
.arch-node.db{background:rgba(0,180,100,0.15);color:#00B464;border:1px solid rgba(0,180,100,0.3)}
.arch-node.s3{background:rgba(0,212,255,0.15);color:var(--cyan);border:1px solid var(--border)}
.arch-services{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
.arch-svc{font-family:'JetBrains Mono',monospace;font-size:0.62rem;color:var(--muted);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);padding:4px 10px;border-radius:4px}
.arch-cicd{display:flex;align-items:center;gap:10px;justify-content:center}
.cicd-node{font-family:'DM Sans',sans-serif;font-size:0.72rem;font-weight:600;color:var(--cyan);background:rgba(0,212,255,0.08);border:1px solid var(--border);padding:6px 14px;border-radius:4px}
.cicd-arrow{color:var(--cyan);font-size:1rem;opacity:0.5}

/* SKILLS — 3D FLIP */
#skills{background:var(--navy)}
.skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.skill-card{perspective:1000px;height:220px;cursor:default}
.card-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.55s cubic-bezier(0.4,0,0.2,1)}
.skill-card:hover .card-inner{transform:rotateY(180deg)}
.card-front,.card-back{position:absolute;inset:0;border-radius:10px;padding:28px;backface-visibility:hidden;-webkit-backface-visibility:hidden;display:flex;flex-direction:column;justify-content:center}
.card-front{background:var(--glass);border:1px solid var(--border);align-items:center;text-align:center}
.card-back{background:var(--navy3);border:1px solid var(--cyan);transform:rotateY(180deg)}
.skill-icon{font-size:2rem;margin-bottom:14px}
.card-front h3{font-family:'Sora',sans-serif;font-size:0.95rem;font-weight:700;color:var(--white)}
.card-hint{font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:var(--muted);margin-top:8px;letter-spacing:0.1em}
.card-back h3{font-family:'Sora',sans-serif;font-size:0.9rem;font-weight:700;color:var(--cyan);margin-bottom:14px}
.card-back ul li{font-family:'DM Sans',sans-serif;font-size:0.8rem;color:var(--muted);padding:3px 0;padding-left:12px;position:relative}
.card-back ul li::before{content:'›';position:absolute;left:0;color:var(--cyan)}

/* PROJECTS */
#projects{background:var(--navy2)}
.project-featured{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;background:var(--glass);border:1px solid var(--border);border-radius:14px;padding:48px;margin-bottom:40px}
.project-tag{font-family:'JetBrains Mono',monospace;font-size:0.67rem;color:var(--cyan);opacity:0.7;letter-spacing:0.08em;display:block;margin-bottom:10px}
.project-name{font-family:'Sora',sans-serif;font-size:1.8rem;font-weight:800;letter-spacing:-0.5px;margin-bottom:16px}
.project-desc{color:var(--muted);font-size:0.88rem;margin-bottom:18px;line-height:1.7}
.project-highlights li{font-family:'DM Sans',sans-serif;font-size:0.83rem;color:var(--muted);padding:5px 0 5px 16px;position:relative}
.project-highlights li::before{content:'▸';position:absolute;left:0;color:var(--cyan)}
.project-highlights code{font-family:'JetBrains Mono',monospace;font-size:0.76rem;color:var(--cyan);background:rgba(0,212,255,0.08);padding:1px 6px;border-radius:3px}
.project-actions{margin-top:24px}
.monitor-mockup{background:#0D1117;border:1px solid rgba(0,212,255,0.2);border-radius:10px;overflow:hidden}
.monitor-bar{background:#161B22;padding:10px 14px;display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,0.06)}
.m-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.15);display:inline-block}
.m-url{font-family:'JetBrains Mono',monospace;font-size:0.62rem;color:var(--muted);margin-left:8px}
.monitor-screen{padding:18px}
.metric-row{display:flex;align-items:center;gap:10px;margin-bottom:11px}
.metric-label{font-family:'JetBrains Mono',monospace;font-size:0.68rem;color:var(--muted);width:65px;flex-shrink:0}
.metric-bar{flex:1;height:5px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden}
.metric-fill{height:100%;background:linear-gradient(90deg,var(--cyan2),var(--cyan));border-radius:3px;width:0;transition:width 1.2s ease}
.metric-fill.uptime{background:linear-gradient(90deg,#28CA41,#00FF88)}
.metric-val{font-family:'JetBrains Mono',monospace;font-size:0.68rem;color:var(--cyan);width:34px;text-align:right}
.monitor-log{margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.06);font-family:'JetBrains Mono',monospace;font-size:0.65rem}
.monitor-log p{margin-bottom:3px;color:var(--muted)}
.log-ok{color:#28CA41}
.log-warn{color:#FFBD2E}
.more-projects{border:1px solid var(--border);border-radius:10px;padding:32px;background:var(--glass)}
.more-label{font-family:'JetBrains Mono',monospace;font-size:0.72rem;color:var(--muted);margin-bottom:14px}
.chip-list{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}
.chip{font-family:'DM Sans',sans-serif;font-size:0.78rem;font-weight:500;color:var(--white);background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);padding:6px 14px;border-radius:20px}
.link-arrow{font-family:'DM Sans',sans-serif;font-size:0.82rem;font-weight:600;color:var(--cyan);transition:opacity 0.2s}
.link-arrow:hover{opacity:0.7}

/* CONTACT */
#contact{background:var(--navy)}
.contact-inner{max-width:780px;margin:0 auto;text-align:center}
.contact-title{text-align:center}
.contact-sub{color:var(--muted);font-size:0.97rem;margin-bottom:44px;max-width:540px;margin-left:auto;margin-right:auto;margin-top:-24px}
.contact-links{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.contact-card{display:flex;align-items:center;gap:16px;background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:20px 28px;min-width:220px;text-align:left;transition:all 0.2s}
.contact-card:hover{border-color:var(--cyan);background:var(--glass-b);transform:translateY(-2px)}
.contact-icon{font-family:'Sora',sans-serif;font-size:1.2rem;color:var(--cyan);width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:7px;flex-shrink:0;font-weight:700}
.contact-type{font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:var(--muted);letter-spacing:0.08em;margin-bottom:2px}
.contact-val{font-family:'DM Sans',sans-serif;font-size:0.84rem;font-weight:500;color:var(--white)}

/* FOOTER */
footer{background:var(--navy2);border-top:1px solid var(--border);padding:30px 0}
.footer-inner{display:flex;align-items:center;justify-content:space-between}
.footer-logo{font-family:'Sora',sans-serif;font-weight:800;font-size:1.2rem}
.footer-copy{font-family:'DM Sans',sans-serif;font-size:0.78rem;color:var(--muted)}
.footer-top{font-family:'DM Sans',sans-serif;font-size:0.78rem;font-weight:600;color:var(--cyan);opacity:0.6;transition:opacity 0.2s}
.footer-top:hover{opacity:1}

/* REVEAL */
.reveal{opacity:0;transform:translateY(28px);transition:opacity 0.65s ease,transform 0.65s ease}
.reveal.visible{opacity:1;transform:translateY(0)}

/* RESPONSIVE */
@media(max-width:960px){
  .about-grid,.project-featured,.skills-grid{grid-template-columns:1fr}
  .hero-content{padding:0 32px}
  #navbar{padding:16px 24px}
  .hero-title{white-space:normal;font-size:clamp(3rem,10vw,5rem)}
}
@media(max-width:600px){
  .nav-links{display:none}
  section{padding:80px 0}
  .contact-card{width:100%;max-width:340px}
  .footer-inner{flex-direction:column;gap:10px;text-align:center}
}
