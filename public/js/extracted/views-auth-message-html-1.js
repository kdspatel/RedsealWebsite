const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'info';

    const icon = document.getElementById('icon');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const actions = document.getElementById('actions');

    const config = {
      'verify-sent': {
        icon: '📧',
        title: 'Verification Email Sent',
        message: 'Please check your inbox and click the verification link to activate your account.',
        actions: `
          <a class="btn btn-primary" href="/login">Back to Login</a>
          <a class="btn btn-secondary" href="/resend-verification">Send Again</a>
        `
      },
      'verify-failed': {
        icon: '⚠️',
        title: 'Verification Email Failed',
        message: 'We could not send your verification email right now. Please try again.',
        actions: `
          <a class="btn btn-primary" href="/resend-verification">Try Again</a>
          <a class="btn btn-secondary" href="/login">Back to Login</a>
        `
      },
      'already-verified': {
        icon: '✅',
        title: 'Account Already Verified',
        message: 'Your account is already verified. You can log in now.',
        actions: `
          <a class="btn btn-primary" href="/login">Go to Login</a>
        `
      },
      'reset-no-account': {
        icon: '⚠️',
        title: 'Account Not Found',
        message: 'No Red Seal Practice account exists with that email address. Check the spelling or create a new account.',
        actions: `
          <a class="btn btn-primary" href="/forgot-password">Try Another Email</a>
          <a class="btn btn-secondary" href="/signup">Create Account</a>
        `
      },
      'reset-sent': {
        icon: '🔐',
        title: 'Password Reset Email Sent',
        message: 'Please check your inbox for the reset link. The link is valid for 1 hour.',
        actions: `
          <a class="btn btn-primary" href="/login">Back to Login</a>
          <a class="btn btn-secondary" href="/forgot-password">Send Again</a>
        `
      },
      'reset-success': {
        icon: '✅',
        title: 'Password Updated',
        message: 'Your password has been updated successfully. You can now log in with your new password.',
        actions: `
          <a class="btn btn-primary" href="/login">Go to Login</a>
        `
      },
      'reset-invalid': {
        icon: '⚠️',
        title: 'Reset Link Invalid or Expired',
        message: 'Your password reset link is invalid or has expired. Please request a new one.',
        actions: `
          <a class="btn btn-primary" href="/forgot-password">Request New Link</a>
          <a class="btn btn-secondary" href="/login">Back to Login</a>
        `
      },
      'reset-failed': {
        icon: '⚠️',
        title: 'Password Reset Failed',
        message: 'We could not complete your password reset right now. Please try again.',
        actions: `
          <a class="btn btn-primary" href="/forgot-password">Try Again</a>
          <a class="btn btn-secondary" href="/login">Back to Login</a>
        `
      },
      'info': {
        icon: 'ℹ️',
        title: 'Account Message',
        message: 'Please review the information below.',
        actions: `
          <a class="btn btn-primary" href="/login">Back to Login</a>
        `
      }
    };

    const selected = config[type] || config.info;

    icon.textContent = selected.icon;
    title.textContent = selected.title;
    message.textContent = selected.message;
    actions.innerHTML = selected.actions;
