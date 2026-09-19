/**
 * Security Utility — Disable Developer Mode, Inspect Element, and Right Click
 */

export function initDeveloperModeBlocker() {
  // 1. Disable Right Click Context Menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 2. Disable DevTools Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // F12 key
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl + Shift + I (Inspect Elements)
    // Ctrl + Shift + J (Console)
    // Ctrl + Shift + C (Element Selector)
    // Ctrl + Shift + K (Firefox Console)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c', 'K', 'k'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl + U (View Source)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl + S (Save Page)
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });

  // 3. Clear and disable console output in production/client
  try {
    const noop = () => {};
    window.console.log = noop;
    window.console.debug = noop;
    window.console.info = noop;
    window.console.dir = noop;
  } catch (err) {}

  // 4. Periodically clear console
  setInterval(() => {
    try {
      console.clear();
    } catch (e) {}
  }, 1500);

  // 5. DevTools open detector using window resize threshold
  const threshold = 160;
  window.addEventListener('resize', () => {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    if (widthDiff || heightDiff) {
      // DevTools possibly opened docked
      try {
        console.clear();
      } catch (e) {}
    }
  });

  // 6. Disable Pinch-to-Zoom and Multi-Touch Gestures on Mobile
  document.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
  });

  document.addEventListener('gesturechange', (e) => {
    e.preventDefault();
  });

  // 7. Disable Double-Tap to Zoom
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // 8. Disable Ctrl + Wheel and Keyboard Zoom (Ctrl + Plus / Minus)
  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });
}
