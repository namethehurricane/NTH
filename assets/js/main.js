// Measure header/footer and set CSS vars so the widget max-height math is accurate.
(function () {
  function updateWidgetVars(){
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    var h = header ? header.offsetHeight : 0;
    var f = footer ? footer.offsetHeight : 0;
    document.documentElement.style.setProperty('--header-height', h + 'px');
    document.documentElement.style.setProperty('--footer-height', f + 'px');
  }
  window.addEventListener('load', updateWidgetVars);
  window.addEventListener('resize', updateWidgetVars);
  // Optional: update after a short delay to account for lazy widget insertion
  setTimeout(updateWidgetVars, 1000);
})();
