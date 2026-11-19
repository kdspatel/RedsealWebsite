from core import *

def build(root):
    # ---------- login ----------
    body = '''<div id="signinToast" class="rsp-toast signin-toast">Signing in...</div>
<div class="rsp-modal"><div class="rsp-dialog"><a class="rsp-x" href="/" aria-label="Close and go to home">×</a>
  <section class="rsp-auth-art auth-benefits" style="--art:url('/images/auth/login-hero.jpg')">
    <div class="rsp-auth-art-in">
      <span class="rsp-tag" id="loginKicker">Focused Canadian trade exam preparation</span>
      <h2 id="loginHeroTitle">Build Your Skills.<br>Build Your <span>Future.</span></h2>
      <ul class="rsp-ticks">
        <li>Trade-specific practice questions</li>
        <li>Detailed explanations</li>
        <li>Track scores and progress</li>
        <li>Pass your Red Seal exam with confidence</li>
      </ul>
      <div class="rsp-trust">''' + SHIELD + '''<div>Prepare smarter with focused Red Seal practice tools.</div></div>
    </div>
  </section>
  <section class="rsp-auth-main">
    <div class="rsp-card">
      <div class="rsp-card-ic" aria-hidden="true">✓</div>
      <h1 id="loginCardTitle">Login</h1>
      <p class="sub" id="loginCardSubtitle">Access your learner account</p>
      <div id="loginAlert" class="rsp-alert auth-alert" role="alert" hidden></div>
      <form action="/login" method="POST" id="loginForm">
        <input type="hidden" name="next" id="loginNext" value="" />
        <div class="rsp-field">
          <label for="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" required />
        </div>
        <div class="rsp-field">
          <label for="password">Password</label>
          <div class="password-wrap">
            <input id="password" name="password" type="password" placeholder="Enter your password" required />
            <button type="button" class="password-toggle" onclick="togglePassword()">Show</button>
          </div>
        </div>
        <div class="rsp-row">
          <label class="remember"><input type="checkbox" name="remember" value="1" checked><span>Remember me</span></label>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <div class="g-recaptcha" data-sitekey="%s"></div>
        <button type="submit" class="btn block login-btn" id="loginSubmitText">Login to My Account</button>
      </form>
      <div class="rsp-links"><a href="/signup">Create account</a><a href="/resend-verification">Resend verification email</a></div>
    </div>
  </section>
</div></div>''' % SITEKEY
    sc = ('<script src="/js/extracted/views-login-html-1.min.js?release=%s" defer></script>\n' % REL) + RECAPTCHA
    write(root, 'views/login.html', page('views/login.html', body, bodyclass='rsp-login', scripts=sc))

    # ---------- signup ----------
    prov = ['Alberta','British Columbia','Manitoba','New Brunswick','Newfoundland and Labrador','Northwest Territories','Nova Scotia','Nunavut','Ontario','Prince Edward Island','Quebec','Saskatchewan','Yukon']
    opts = ''.join('<option>%s</option>' % p for p in prov)
    body = '''<div class="rsp-modal"><div class="rsp-dialog"><a class="rsp-x" href="/" aria-label="Close and go to home">×</a>
  <section class="rsp-auth-art" style="--art:url('/images/auth/auth-background.jpg')" role="img" aria-label="Canadian construction and skilled trades background">
    <div class="rsp-auth-art-in">
      <span class="rsp-tag">Canadian trade exam preparation</span>
      <h2>Build your skills.<br><span>Prepare with confidence.</span></h2>
      <p>Create your learner account to save progress, access purchased exams, and continue studying across devices.</p>
      <ul class="rsp-ticks">
        <li>Trade-specific practice</li>
        <li>Timed mock tests</li>
        <li>Detailed answer review</li>
      </ul>
    </div>
  </section>
  <section class="rsp-auth-main">
    <div class="rsp-card wide" aria-labelledby="signupTitle">
      <div class="rsp-card-ic" aria-hidden="true">✓</div>
      <h1 id="signupTitle">Create Your Account</h1>
      <p class="sub">Start preparing for your Canadian Red Seal or apprenticeship level exam.</p>
      <form action="/signup" method="POST" id="signupForm">
        <input type="hidden" name="signupDeviceId" id="signupDeviceId" value="">
        <div class="rsp-field"><label for="signupName">Full Name</label>
          <input id="signupName" name="name" type="text" autocomplete="name" placeholder="Enter your full name" required></div>
        <div class="rsp-field"><label for="signupEmail">Email Address</label>
          <input id="signupEmail" name="email" type="email" autocomplete="email" placeholder="Enter your email address" required></div>
        <div class="rsp-field"><label for="signupProvince">Province or Territory</label>
          <select id="signupProvince" name="province" autocomplete="address-level1" required>
            <option value="">Choose your province or territory</option>''' + opts + '''
          </select>
          <small>We use this only to show province-aware guidance. Practice questions remain the same.</small></div>
        <div class="rsp-field"><label for="signupPassword">Password</label>
          <input id="signupPassword" name="password" type="password" autocomplete="new-password" placeholder="Create a secure password" required></div>
        <label class="rsp-consent terms-consent">
          <input type="checkbox" required>
          <span><strong>I agree to the account and purchase terms</strong>
          <small>I have read and agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener">Terms &amp; Conditions</a>, Refund Policy, and Examination Preparation Disclaimer.</small></span>
        </label>
        <label class="rsp-consent marketing-consent">
          <input type="checkbox" name="marketingConsent" value="1">
          <span><strong>Send me study tips, exam updates and special offers</strong>
          <small>This is optional. You can unsubscribe from marketing emails at any time.</small></span>
        </label>
        <div class="g-recaptcha" data-sitekey="%s"></div>
        <button type="submit" id="signupButton" class="btn block create-btn">Create Account</button>
      </form>
      <div class="rsp-links"><span>Already have an account? <a href="/login">Log in</a></span><span>🔒 Secure account creation. Your password is encrypted.</span></div>
    </div>
  </section>
</div></div>''' % SITEKEY
    sc = '''<script>
(function () {
  var key = 'rsp_signup_device_id';
  var value = localStorage.getItem(key);
  if (!value) {
    value = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() :
      'rsp-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
    localStorage.setItem(key, value);
  }
  document.getElementById('signupDeviceId').value = value;
}());
</script>
<script src="/js/extracted/views-signup-html-1.min.js?release=%s" defer></script>
%s
%s''' % (REL, RECAPTCHA, CAPTCHA_ERR)
    write(root, 'views/signup.html', page('views/signup.html', body, bodyclass='rsp-signup', scripts=sc))

    # ---------- forgot password ----------
    body = '''<section class="rsp-center"><div class="rsp-card center">
  <div class="rsp-card-ic" aria-hidden="true">🔐</div>
  <h1>Forgot Password</h1>
  <p class="sub">Enter your email and we’ll send you a secure reset link.</p>
  <div class="rsp-note">The reset link will expire in 1 hour for security reasons.</div>
  <form action="/forgot-password" method="POST" style="text-align:left">
    <div class="rsp-field"><input name="email" type="email" placeholder="Email Address" aria-label="Email Address" required /></div>
    <div class="g-recaptcha" data-sitekey="%s"></div>
    <button type="submit" class="btn block">Send Reset Link</button>
  </form>
  %%LINKS%%
</div></section>''' % SITEKEY
    f = orig('views/forgot-password.html')
    links = re.search(r'</form>(.*?)</div>\s*</main>', f, re.S)
    body = body.replace('%LINKS%', '<div class="rsp-links"><a href="/login">← Back to Login</a><span>Need help? <a href="mailto:support@redsealpractice.ca">Contact Support</a></span></div>')
    write(root, 'views/forgot-password.html', page('views/forgot-password.html', body, bodyclass='rsp-forgot', scripts=RECAPTCHA + '\n' + CAPTCHA_ERR))

    # ---------- reset password ----------
    body = '''<section class="rsp-center"><div class="rsp-card center">
  <div class="rsp-card-ic" aria-hidden="true">🔐</div>
  <h1>Reset Password</h1>
  <p class="sub">Enter your new password below to secure your account.</p>
  <form action="/reset-password" method="POST" style="text-align:left">
    <input type="hidden" name="token" id="tokenInput" />
    <div class="rsp-field"><input name="password" type="password" placeholder="New Password" aria-label="New Password" required /></div>
    <button type="submit" class="btn block">Update Password</button>
  </form>
</div></section>'''
    write(root, 'views/reset-password.html', page('views/reset-password.html', body, bodyclass='rsp-reset',
        scripts='<script src="/js/extracted/views-reset-password-html-1.min.js?release=%s" defer></script>' % REL))

    # ---------- resend verification ----------
    body = '''<section class="rsp-center"><div class="rsp-card center">
  <div class="rsp-card-ic" aria-hidden="true">✉️</div>
  <h1>Resend Verification</h1>
  <p class="sub">Enter your email address and we’ll send you a new verification link.</p>
  <form action="/resend-verification" method="POST" id="resendForm" style="text-align:left">
    <div class="rsp-field"><input name="email" type="email" placeholder="Enter your email" aria-label="Email Address" required /></div>
    <div class="g-recaptcha" data-sitekey="%s"></div>
    <button type="submit" class="btn block" id="sendButton">Send Verification Email</button>
  </form>
  <div class="rsp-links"><a href="/login">← Back to Login</a><a href="/forgot-password">Forgot password?</a></div>
</div></section>''' % SITEKEY
    sc = ('<script src="/js/extracted/views-resend-verification-html-1.min.js?release=%s" defer></script>\n' % REL) + RECAPTCHA + '\n' + CAPTCHA_ERR
    write(root, 'views/resend-verification.html', page('views/resend-verification.html', body, bodyclass='rsp-resend', scripts=sc))

    # ---------- status cards ----------
    def card(src, eyebrow, icon, title, text, note_title, note_text, btns, support=''):
        b = '''<section class="rsp-center"><div class="rsp-card center wide">
  <div class="eyebrow">%s</div>
  <div class="icon-wrap">%s</div>
  <h1>%s</h1>
  <p class="muted">%s</p>
  <div class="rsp-note"><strong>%s</strong><p>%s</p></div>
  <div class="rsp-actions">%s</div>%s
</div></section>''' % (eyebrow, icon, title, text, note_title, note_text, btns, support)
        write(root, 'views/' + src + '.html', page('views/%s.html' % src, b, bodyclass='rsp-' + src))
    card('check-email', 'EMAIL VERIFICATION', '📧', 'Check Your Email',
         'We’ve sent you a verification link. Please open your inbox and click the link to activate your account before logging in.',
         'Didn’t see the email?', 'Check your spam or junk folder first. If it still doesn’t appear, you can request a new verification email below.',
         '<a href="/login" class="btn btn-primary">Go to Login</a><a href="/resend-verification" class="btn btn-secondary">Resend Email</a>',
         '<p class="muted" style="margin:18px 0 0;font-size:14px">Need help? Contact us at <a href="mailto:support@redsealpractice.ca" style="color:var(--seal);font-weight:600">support@redsealpractice.ca</a></p>')
    card('verified', 'EMAIL VERIFIED', '✓', 'Email Verified Successfully',
         'Your email has been verified successfully. Your account is now active and ready to use.',
         'You’re all set', 'You can now log in, access your dashboard, explore trades, and continue your exam preparation with confidence.',
         '<a class="btn btn-primary" href="/login">Go to Login</a><a class="btn btn-secondary" href="/">Go to Home</a>')
    card('success', 'PAYMENT CONFIRMED', '✓', 'Payment Successful',
         'Your payment was received successfully. Your premium access should unlock automatically. If it does not appear immediately, refresh after a few seconds.',
         'What happens next?', 'You can now open your account dashboard to view your active trade access, expiry date, and premium quiz availability.',
         '<a class="btn btn-primary" href="/account">Go to My Account</a><a class="btn btn-secondary" href="/trades">View Trades</a>')

    # auth-message (content filled by original script)
    body = '''<section class="rsp-center"><div class="rsp-card center wide">
  <div class="eyebrow">ACCOUNT UPDATE</div>
  <div class="icon" id="icon">ℹ️</div>
  <h1 id="title">Account Message</h1>
  <p class="muted" id="message">Please review the information below.</p>
  <div class="rsp-actions" id="actions"></div>
  <div class="rsp-note" style="margin-top:22px"><strong>Need help?</strong>
    <p>If you need assistance with your account, email <strong style="display:inline">support@redsealpractice.ca</strong> and our team will respond as soon as possible.</p></div>
</div></section>'''
    write(root, 'views/auth-message.html', page('views/auth-message.html', body, bodyclass='rsp-auth-message',
        scripts='<script src="/js/extracted/views-auth-message-html-1.min.js?release=%s" defer></script>' % REL))

    # ---------- error pages ----------
    def err(src, code, title, text, word=False):
        b = '''<section class="rsp-err">
  <div class="code%s">%s</div>
  <h1>%s</h1>
  <p>%s</p>
  <div class="rsp-actions"><a class="btn" href="/">Go to Homepage</a><a class="btn btn-secondary" href="/trades">Explore Trades</a><a class="btn btn-secondary" href="/contact">Contact Support</a></div>
  <div class="quick"><a href="/free/plumber">Free Plumber Practice</a><a href="/level-exams">Level Exams</a><a href="/blog">Study Guides</a></div>
</section>''' % (' word' if word else '', code, title, text)
        write(root, 'views/%s.html' % src, page('views/%s.html' % src, b, bodyclass='rsp-' + src))
    err('404', '404', 'Page Not Found', 'The page you are looking for may have moved, been renamed, or no longer exists. Use the links below to continue studying.')
    err('500', '500', 'Something Went Wrong', 'The server could not complete the request. Please try again, return to the homepage, or contact support if the problem continues.')
    err('maintenance', 'maintenance', 'Maintenance Mode', 'Red Seal Practice is temporarily being updated. Please check back shortly or use the links below once the site is available again.', word=True)
