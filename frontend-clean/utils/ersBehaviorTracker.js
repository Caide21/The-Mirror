// ersBehaviorTracker.js
let idleTimer = null;
let lastInteraction = Date.now();
let scrollTimeout = null;
let hoverTimers = new Map();

export function initERS({ endpoint, onFeedback }) {
  // Idle detection
  setInterval(() => {
    const now = Date.now();
    const idleTime = (now - lastInteraction) / 1000;
    if (idleTime > 10) {
      sendERS(endpoint, 'idle', idleTime, onFeedback);
      lastInteraction = now;
    }
  }, 5000);

  // Scroll freeze
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      sendERS(endpoint, 'scroll-freeze', 3000, onFeedback);
    }, 3000);
    lastInteraction = Date.now();
  });

  // Hover hesitation (requires .ers-track-hover class)
  document.querySelectorAll('.ers-track-hover').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      hoverTimers.set(el, Date.now());
    });
    el.addEventListener('mouseleave', () => {
      const enterTime = hoverTimers.get(el);
      const duration = Date.now() - enterTime;
      if (duration > 3000) {
        sendERS(endpoint, 'hover-hesitation', duration, onFeedback, el.dataset.ersLabel || 'unknown');
      }
      hoverTimers.delete(el);
    });
  });

  // Click abort (requires .ers-track-abort class)
  document.querySelectorAll('.ers-track-abort').forEach((el) => {
    el.addEventListener('click', () => {
      setTimeout(() => {
        if (document.referrer && document.referrer.includes(location.hostname)) {
          sendERS(endpoint, 'abort', 0, onFeedback, el.dataset.ersLabel || 'unknown');
        }
      }, 2000);
    });
  });

  // General activity tracker
  ['mousemove', 'keydown', 'mousedown', 'touchstart'].forEach(evt => {
    window.addEventListener(evt, () => {
      lastInteraction = Date.now();
    });
  });
}

async function sendERS(endpoint, type, value, callback, label = null) {
  const payload = {
    signalType: type,
    value,
    label,
    timestamp: new Date().toISOString()
  };

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (callback) callback(data);
  } catch (err) {
    console.error('ERS send error:', err);
  }
}