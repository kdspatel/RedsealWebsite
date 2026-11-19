from core import *

REQ_MAIL = 'mailto:support@redsealpractice.ca?subject=Please%20add%20my%20trade'
def req_band(text):
    return ('<section class="rs-contact-request" aria-label="Request a trade"><h2>Can’t find your trade?</h2><p>%s</p>'
            '<a href="%s">%s</a></section>') % text

def build(root):
    # ---- trades ----
    body = hero('Choose Your Trade',
        'Every trade page now brings together free questions, mock tests, level exam pages, study guides, exam preparation, certification guidance and passing-score information. Choose a trade to see everything in one place.',
        tag='Complete exam preparation by trade', crumbs=[('Trades', None)], img='/images/pages/trades.jpg') + '''
<section class="rsp-sec"><div class="rsh-wrap">
  <div class="rsp-badges" style="margin:-6px 0 26px"><span>First Trade: $99 CAD</span><span>Additional Trades: $40 CAD</span><span>Separate 4-Month Access</span></div>
  <section class="rsp-band" aria-label="Help starting your Red Seal journey">
    <div><span class="eb">PERSONAL JOURNEY SUPPORT</span><h2>Not sure how to register, get approved, or book your exam?</h2>
    <p>Send us your trade, province, experience and current stage. We will help you understand the next step and point you to the correct provincial or territorial authority.</p></div>
    <div class="rsp-actions"><a class="btn" href="/exam-journey-support">See Where to Start</a>
    <a class="btn ghost email" href="mailto:support@redsealpractice.ca?subject=Help%20with%20my%20Red%20Seal%20journey&body=My%20trade%3A%0AMy%20province%2Fterritory%3A%0AMy%20experience%3A%0AMy%20question%3A">Email Us for Help</a></div>
  </section>
  <div class="expiry-box" id="expiryBox" style="display:none"></div>
  <section class="rsp-toolbar" aria-label="Find your trade">
    <div class="grow"><h2>Find Your Trade Quickly</h2><p>Search by trade name or filter by category. This will stay useful as more trades are added.</p></div>
    <div class="ctrls"><input id="tradeSearchInput" type="search" placeholder="Search plumber, welder, electrician..." autocomplete="off" />
    <select id="tradeCategoryFilter"><option value="">All categories</option></select></div>
    <div id="tradeResultCount" class="count trade-result-count">Loading trades...</div>
  </section>
  <div class="grid" id="tradesGrid"></div>
  <section class="rs-contact-request" aria-label="Request a trade"><h2>Can’t find your trade?</h2>
    <p>Email us with the trade name and province. We’ll review the request and work on adding it to Red Seal Practice.</p>
    <a href="mailto:support@redsealpractice.ca?subject=Please%20add%20my%20trade">Request Your Trade</a></section>
</div></section>'''
    write(root, 'views/trades.html', page('views/trades.html', body, active='/trades', bodyclass='rsp-trades',
        scripts='<script src="/js/extracted/views-trades-html-1.min.js?release=%s" defer></script>' % REL))

    # ---- practice tests ----
    body = hero('Start with a free practice test.',
        'Choose your trade and try sample exam-style questions before purchasing access. Mock tests are listed separately so you can clearly choose between free practice and a full timed exam experience.',
        tag='Free practice by trade', crumbs=[('Practice Tests', None)], img='/images/pages/practice.jpg') + '''
<section class="rsp-sec"><div class="rsh-wrap practice-library">
  <section class="rsp-toolbar practice-toolbar">
    <input id="practiceSearch" type="search" placeholder="Search carpenter, electrician, plumber…" aria-label="Search free practice tests">
    <span id="practiceCount" class="practice-count count">Loading trades…</span>
  </section>
  <section id="practiceGrid" class="practice-grid" aria-live="polite"></section>
  <section class="practice-note"><strong>Looking for a timed full mock exam?</strong> Visit the <a href="/mock-tests">Mock Tests page</a>. Free practice tests and paid mock tests are now separated so users can easily understand the difference.</section>
</div></section>'''
    write(root, 'views/practice-tests.html', page('views/practice-tests.html', body, active='/practice-tests', bodyclass='rsp-practice',
        scripts='<script src="/js/practice-tests.js?release=%s" defer></script>' % REL))

    # ---- mock tests ----
    body = hero('Timed Trade Mock Tests — $20 CAD',
        'Choose a trade for a timed, full-length mock exam experience with 30-day access, unlimited retakes, instant scoring, and category performance. For free sample questions, use the separate Free Practice Tests page.',
        tag='30-day exam practice', crumbs=[('Mock Tests', None)], img='/images/pages/mock.jpg') + '''
<section class="rsp-sec"><div class="rsh-wrap">
  <div class="rsp-badges mock-highlights" style="margin:-6px 0 26px"><span>Unlimited retakes</span><span>Timed exam mode</span><span>Instant result</span><span>30-day access</span></div>
  <section class="rsp-toolbar mock-toolbar"><input id="mockSearch" type="search" placeholder="Search for your trade..."><span id="mockCount" class="count">Loading...</span></section>
  <section id="mockGrid" class="mock-grid"></section>
  <section class="rs-contact-request" aria-label="Request a trade"><h2>Can’t find your trade?</h2>
    <p>Send us the trade name and your province. We’ll review the request and work on adding the correct practice option.</p>
    <a href="mailto:support@redsealpractice.ca?subject=Please%20add%20my%20trade">Email Red Seal Practice</a></section>
</div></section>'''
    write(root, 'views/mock-tests.html', page('views/mock-tests.html', body, active='/mock-tests', bodyclass='rsp-mocktests',
        scripts='<script src="/js/mock-tests.js?release=%s" defer></script>' % REL))

    # ---- mock test (quiz) ----
    body = '''<section class="rsp-hero"><div class="rsh-wrap rsp-hero-in"><div class="mock-test-head"><div>
    <span class="rsp-tag">Timed mock test</span><h1 id="testTitle">Loading mock test…</h1>
    <p>Answer every question before time expires. Submit for an instant result, then retake this same test anytime during your 30-day access period.</p></div>
    <div id="mockTimer" class="mock-timer">03:00:00</div></div></div></section>
<section class="rsp-sec"><div class="rsh-wrap rsp-narrow">
  <div id="mockEmpty" class="mock-empty" hidden><h2>Question bank ready for your content</h2>
    <p>Add questions to the trade file listed in the project. The checkout and access system is already configured.</p></div>
  <form id="mockTestForm"><div id="mockQuestions" class="mock-questions"></div>
    <button id="submitMock" class="btn" type="submit" hidden>Submit Mock Test</button></form>
</div></section>'''
    write(root, 'views/mock-test.html', page('views/mock-test.html', body, active='/mock-tests', bodyclass='rsp-mocktest',
        scripts='<script src="/js/mock-test.js?release=%s" defer></script>' % REL))

    # ---- mock test result ----
    body = '''<section class="rsp-sec"><div class="rsh-wrap">
  <section id="resultCard" class="mock-result-card"><p>Loading result…</p></section></div></section>'''
    write(root, 'views/mock-test-result.html', page('views/mock-test-result.html', body, active='/mock-tests', bodyclass='rsp-mockresult',
        scripts='<script src="/js/mock-test-result.js?release=%s" defer></script>' % REL))

    # ---- single level exams ----
    body = hero('Choose a Trade and Apprenticeship Level',
        'Choose a trade to see its available <strong>challenge-level practice quizzes for $20 CAD</strong>. The next technical-training level is also listed as an information page so learners understand that no challenge quiz is offered for that level and classroom or technical training may be required. Always confirm current eligibility with the responsible provincial or territorial apprenticeship authority.',
        tag='Single level access', crumbs=[('Level Quizzes', None)], img='/images/pages/levels.jpg') + '''
<section class="rsp-sec"><div class="rsh-wrap">
  <div class="sl-points" style="margin:-6px 0 26px"><span>✓ Your selected trade</span><span>✓ Your selected level</span><span>✓ Timed Quiz 1</span><span>✓ Unlimited retakes</span><span>✓ 30-day access</span></div>
  <section class="rsp-toolbar sl-filter-card"><div class="grow"><label for="levelTradeSearch" style="font-weight:600;display:block;margin-bottom:6px">Find your trade</label>
    <input id="levelTradeSearch" type="search" placeholder="Search plumber, electrician, welder..." /></div>
    <p id="levelExamCount" class="sl-muted count"></p></section>
  <section id="singleLevelExamGrid" class="sl-grid" aria-live="polite"></section>
  <section class="rs-contact-request" aria-label="Request a trade"><h2>Can’t find your trade?</h2>
    <p>Send us the trade name and your province. We’ll review the request and work on adding the correct practice option.</p>
    <a href="mailto:support@redsealpractice.ca?subject=Please%20add%20my%20trade">Email Red Seal Practice</a></section>
</div></section>'''
    write(root, 'views/single-level-exams.html', page('views/single-level-exams.html', body, active='/level-tests', bodyclass='rsp-levels',
        scripts='<script src="/js/single-level-exams.js?release=%s"></script>' % REL))

    # ---- trade finder ----
    body = hero('Find My Trade', 'Answer six simple questions to explore trades that may fit your interests.',
        tag='Quick · Personalized · Free', crumbs=[('Find My Trade', None)], img='/images/pages/finder.jpg') + '''
<section class="rsp-sec"><div class="rsh-wrap"><div class="finder-main">
  <div>
    <form id="tradeFinder" class="finder-card">
      <div class="finder-step-row"><strong id="finderStepLabel">Question 1 of 6</strong><span id="finderPercent">17% complete</span></div>
      <div class="finder-progress-line"><span id="finderProgressBar"></span></div>
      <div id="tradeQuestions"></div>
      <div class="finder-nav"><button class="finder-prev" id="finderPrev" type="button">← Previous</button><button class="finder-next" id="finderNext" type="button">Next Question →</button></div>
    </form>
    <section id="tradeFinderResults" class="finder-results" hidden><h2>Your suggested trades</h2><div class="trade-results" id="tradeResultCards"></div>
      <div class="official-disclaimer">Talk with employers, training providers and your provincial apprenticeship authority before making a career decision.</div></section>
  </div>
  <aside class="finder-side">
    <div class="finder-side-card"><h3>Your progress</h3><div class="finder-stat"><span>Answered</span><strong id="finderAnswered">0 of 6</strong></div><div class="finder-stat"><span>Remaining</span><strong id="finderRemaining">6</strong></div></div>
    <div class="finder-side-card"><h3>How it works</h3><div class="finder-stat"><span>1. Answer</span><strong>6 questions</strong></div><div class="finder-stat"><span>2. Match</span><strong>Top interests</strong></div><div class="finder-stat"><span>3. Explore</span><strong>Trade hubs</strong></div></div>
    <div class="finder-side-card finder-note"><h3>Important note</h3><p>This tool suggests trades to explore. It is not a career assessment or an official eligibility decision.</p></div>
  </aside>
</div></div></section>'''
    write(root, 'views/trade-finder.html', page('views/trade-finder.html', body, active='/find-my-trade', bodyclass='rsp-finder',
        scripts='<script src="/js/trade-finder.js?release=%s" defer></script>' % REL))
