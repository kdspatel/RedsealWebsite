from core import *

CSS_PRICE = '''
.rsp-price-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:28px;align-items:start}
.rsp-price-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:34px;box-shadow:0 20px 50px rgba(22,25,29,.07)}
.rsp-price-card.hl{border-color:#F0C9CB;box-shadow:0 20px 50px rgba(179,23,31,.12)}
.rsp-pill{display:inline-block;background:var(--tint);color:var(--seal);border:1px solid #F0C9CB;border-radius:999px;padding:6px 14px;font-weight:600;font-size:13px;letter-spacing:.04em;text-transform:uppercase}
.rsp-price-card h1,.rsp-price-card h2{font-size:30px;line-height:1.15;font-weight:700;margin:14px 0 6px;letter-spacing:-.01em}
.rsp-amount{font:700 56px/1 "Space Grotesk",sans-serif;color:var(--seal);margin:10px 0 14px;letter-spacing:-.03em}
.rsp-amount small{font:600 18px Inter,sans-serif;color:var(--muted);letter-spacing:0}
.rsp-price-card>p,.rsp-price-card .sub{color:var(--muted);font-size:16px;line-height:25px}
.rsp-checks{list-style:none;padding:0;margin:20px 0;display:grid;gap:12px}
.rsp-checks li{display:flex;gap:12px;align-items:flex-start;font-size:16px;line-height:24px}
.rsp-checks li::before{content:"";flex:none;margin-top:2px;width:22px;height:22px;border-radius:50%;background:var(--tint) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23B3171F' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 12.5l4 4 8-9'/%3E%3C/svg%3E") center/14px no-repeat}
.rsp-mini{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:18px 0}
.rsp-mini div{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:14px;font-size:14px;line-height:21px;color:var(--muted)}
.rsp-mini strong{display:block;color:var(--ink);font-size:15px;margin-bottom:2px}
.rsp-terms{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin-top:20px}
.rsp-terms h3{font-size:17px;margin-bottom:8px}
.rsp-terms ul{margin:0;padding-left:20px;color:var(--muted);font-size:15px;line-height:24px}
.rsp-why{display:grid;gap:12px;margin-top:16px}
.rsp-why div{display:flex;flex-direction:column;gap:2px;padding:16px;border:1px solid var(--line);border-radius:14px;background:#fff}
.rsp-why strong{font-size:16px}.rsp-why span{color:var(--muted);font-size:15px;line-height:23px}
.rsp-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
.rsp-chips span{background:#fff;border:1px solid #F0C9CB;color:var(--seal);font-weight:600;font-size:14px;padding:8px 14px;border-radius:999px}
.rsp-support{margin-top:16px;font-size:14px;color:var(--muted)}.rsp-support a{color:var(--seal);font-weight:600}
.rsp-terms-check{display:flex;gap:12px;align-items:flex-start;font-size:14px;line-height:21px;color:var(--muted);margin:16px 0}
.rsp-terms-check a{color:var(--seal);text-decoration:underline}
@media(max-width:900px){.rsp-price-grid{grid-template-columns:1fr}.rsp-price-card{padding:24px 20px}.rsp-mini{grid-template-columns:1fr}.rsp-amount{font-size:46px}}
'''

def build(root):
    # append shared css for this family to rs-pages.css (done by build step too)
    body = hero('Unlock Premium Trade Access',
        'Get full access to premium quizzes, timed tests, progress tracking, wrong-question review, and focused study tools designed to help you prepare with confidence.',
        tag='Premium', crumbs=[('Pricing', None)]) + '''
<section class="rsp-sec"><div class="rsh-wrap">
  <div class="rsp-chips" style="margin:-6px 0 28px"><span>4-Month Access</span><span>Separate Trade Expiry</span><span>Premium Review Tools</span></div>
  <div class="rsp-price-grid">
    <div class="rsp-price-card hl">
      <div class="rsp-pill" id="tradePill">Selected Trade</div>
      <h2 id="pageTitle">Premium Trade Access</h2>
      <div class="rsp-amount price" id="priceText">$99 <small>CAD</small></div>
      <p class="sub">Full premium access for the selected trade including practice quizzes, timed tests, result review, wrong-question practice, and progress tracking.</p>
      <div class="rsp-note upsell" id="upsellBox" style="display:none">You already have an active trade. Add this trade now for the lower $40 CAD additional-trade price.</div>
      <div class="rsp-mini">
        <div><strong>Timed practice sessions</strong>Build speed and confidence with exam-style quiz attempts.</div>
        <div><strong>Review and improve</strong>Retake wrong questions and focus on weak areas faster.</div>
      </div>
      <div class="rsp-note"><strong>Separate Trade Expiry:</strong><p>Each trade purchase gets its own separate 4-month access period. If you buy another trade later, that new trade gets its own new expiry date.</p></div>
      <form action="/create-checkout-session" method="POST">
        <input type="hidden" name="trade" id="tradeInput" value="carpentry" />
        <label class="rsp-terms-check"><input type="checkbox" required />
          <span>I have read and agree to the <a href="/terms-and-conditions" target="_blank">Terms &amp; Conditions</a>, Refund Policy, and Examination Preparation Disclaimer.</span></label>
        <button type="submit" class="btn block" id="buyButton">Buy Premium Access</button>
      </form>
      <p class="rsp-support">Questions before buying? Contact <a href="mailto:support@redsealpractice.ca">support@redsealpractice.ca</a></p>
    </div>
    <div class="rsp-price-card">
      <h2>Why premium is worth it</h2>
      <div class="rsp-why">
        <div><strong>Timed test practice</strong><span>Build confidence with realistic timed quiz sessions.</span></div>
        <div><strong>Weak area tracking</strong><span>See which categories need attention and study smarter.</span></div>
        <div><strong>Retake wrong questions</strong><span>Focus on mistakes and improve where it matters most.</span></div>
        <div><strong>Progress dashboard</strong><span>Track score history, best results, averages, and pass-readiness.</span></div>
      </div>
      <div class="rsp-terms"><h3>Terms &amp; Conditions</h3><ul>
        <li>These are practice questions for educational preparation.</li>
        <li>They are not official exam questions.</li>
        <li>Each trade purchase is valid for 4 months from the purchase date.</li>
        <li>Access is non-transferable and for the account holder only.</li>
        <li>Digital purchases are final and non-refundable.</li></ul></div>
    </div>
  </div>
</div></section>'''
    write(root, 'views/pricing.html', page('views/pricing.html', body, active='/pricing', bodyclass='rsp-pricing',
        scripts='<script src="/js/extracted/views-pricing-html-1.min.js?release=%s" defer></script>' % REL))

    body = '''<section class="rsp-center"><div class="rsp-price-card hl" style="max-width:640px;width:100%">
  <span class="rsp-pill">30-day mock test access</span>
  <h1 id="mockTitle">Trade Mock Test</h1>
  <div class="rsp-amount">$20 <small>CAD</small></div>
  <p class="sub">Use this option when you only want to check your current knowledge without purchasing the full premium question bank.</p>
  <ul class="rsp-checks">
    <li>Unlimited retakes of Mock Test 1 for 30 days</li><li>Instant score and pass indication</li>
    <li>Category-by-category performance</li><li>Every attempt can be reviewed from your account</li>
    <li>Access starts after payment and remains active for 30 days</li>
  </ul>
  <form action="/create-mock-checkout-session" method="post">
    <input id="mockTradeInput" type="hidden" name="trade">
    <div class="rsp-terms" style="margin-top:0">
      <label class="rsp-terms-check" style="margin-top:0"><input type="checkbox" name="acceptTerms" required>
        <span>I understand this purchase unlocks <strong>Mock Test 1 only</strong> for the selected trade, with unlimited retakes during the 30-day access period.</span></label>
      <p class="rsp-support" style="margin:0">By purchasing, you agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener">Terms &amp; Conditions</a>, including the digital-access and refund rules.</p>
    </div>
    <button id="mockBuyButton" class="btn block" type="submit" style="margin-top:18px">Buy 30-Day Access — $20 CAD</button>
  </form>
  <p id="mockExisting" class="rsp-note" hidden>You already have active 30-day access for this trade. Open the test and retake it anytime before expiry.</p>
</div></section>'''
    write(root, 'views/mock-test-pricing.html', page('views/mock-test-pricing.html', body, active='/mock-tests', bodyclass='rsp-mockprice',
        scripts='<script src="/js/mock-test-pricing.js?release=%s" defer></script>' % REL))

    body = '''<section class="rsp-center"><div class="rsp-price-card hl" style="max-width:640px;width:100%">
  <span class="rsp-pill">30-day focused access</span>
  <h1 id="slPricingTitle">Level Exam Quiz 1</h1>
  <div class="rsp-amount">$20 <small>CAD</small></div>
  <p class="sub" id="slPricingDescription">Loading selected trade and level...</p>
  <ul class="rsp-checks">
    <li>Unlimited attempts to Quiz 1 for this exact level for 30 days</li>
    <li>Does not unlock Quiz 2, 3, or 4</li>
    <li>Does not unlock another level or trade</li>
    <li>Upgrade to premium for more level quizzes, full-exam practice, explanations, and progress tools</li>
  </ul>
  <form method="post" action="/create-level-test-checkout-session">
    <input type="hidden" name="trade" id="slTrade" />
    <input type="hidden" name="level" id="slLevel" />
    <button class="btn block" id="slBuyButton" type="submit">Buy 30-Day Quiz 1 Access — $20 CAD</button>
  </form>
  <div class="rsp-links"><a href="/level-tests">← Choose another trade or level</a></div>
</div></section>'''
    write(root, 'views/single-level-exam-pricing.html', page('views/single-level-exam-pricing.html', body, active='/level-tests', bodyclass='rsp-slprice',
        scripts='<script src="/js/single-level-exam-pricing.js?release=%s"></script>' % REL))
    # css
    open(os.path.join(root, 'public/css/rs-pages.css'), 'a').write(CSS_PRICE) if False else None
