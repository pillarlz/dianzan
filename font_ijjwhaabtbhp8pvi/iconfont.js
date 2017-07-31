;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dianzan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M934.912 137.728c-56.832-58.368-132.096-90.624-212.48-90.624-75.264 0-147.968 28.672-203.776 81.408l-7.168 6.656L504.832 128C449.024 75.776 376.832 47.104 301.056 47.104c-80.384 0-155.648 32.256-212.48 90.624C31.744 196.608 0.512 274.944 0.512 357.888c0 83.456 31.232 161.28 88.576 220.16l360.96 372.224c16.896 17.408 38.912 26.624 62.464 26.624 23.552 0 45.568-9.728 62.464-26.624 0 0 356.864-368.128 360.448-372.224 56.832-58.88 88.576-137.216 88.576-220.16C1023.488 274.944 992.256 196.608 934.912 137.728zM270.336 229.376c-48.128 0-87.552 39.424-87.552 87.552 0 11.776-9.728 21.504-21.504 21.504-11.776 0-21.504-9.728-21.504-21.504 0-71.168 57.344-129.024 128-130.56l0 0 2.56 0c11.776 0 21.504 9.728 21.504 21.504C291.84 219.648 282.112 229.376 270.336 229.376z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianzan1-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M514.047 902.223l-9.733-5.171c-17.33-9.248-424.613-229.778-424.613-514.651 0-129.717 97.802-227.517 227.516-227.517 91.661 0 170.836 54.498 206.831 132.742 35.995-78.25 115.169-132.742 206.83-132.742 129.717 0 227.517 97.802 227.517 227.517 0 284.875-407.283 505.403-424.613 514.651l-9.735 5.171zM307.216 196.253c-107.86 0-186.148 78.288-186.148 186.148 0 237.13 331.415 437.537 392.978 472.683 61.564-35.147 392.978-235.553 392.978-472.683 0-107.86-78.288-186.148-186.149-186.148-102.645 0-186.148 83.497-186.148 186.148h-41.364c0.001-102.652-83.498-186.148-186.146-186.148v0zM307.216 196.253z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)