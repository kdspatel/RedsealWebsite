async function loadPricing() {
      const params = new URLSearchParams(window.location.search);
      const trade = params.get('trade') || 'carpentry';

      document.getElementById('tradeInput').value = trade;
      document.getElementById('tradePill').textContent = `Trade: ${trade}`;

      try {
        const res = await fetch(`/api/pricing-info?trade=${encodeURIComponent(trade)}`);
        const data = await res.json();

        if (data.alreadyOwned) {
          window.location.href = `/quiz/${trade}`;
          return;
        }

        document.getElementById('pageTitle').textContent = `${data.tradeTitle} Premium Access`;
        document.getElementById('priceText').innerHTML = `${data.displayPrice.replace(' CAD', '')} <small>CAD</small>`;
        document.getElementById('tradePill').textContent = `Trade: ${data.tradeTitle}`;

        if (data.pricingType === 'upsell') {
          document.getElementById('upsellBox').style.display = 'block';
          document.getElementById('buyButton').textContent = `Add This Trade for ${data.displayPrice}`;
        } else {
          document.getElementById('buyButton').textContent = `Buy 4-Month Access for ${data.displayPrice}`;
        }
      } catch (err) {
        console.error('Pricing info load failed', err);
      }
    }

    loadPricing();
