var _containerWidth = 3000;
var _width, _height, _scrollHeight;
var _movingElements = [];
var _scrollPercent = 0;
var pre = prefix();
var _jsPrefix  = pre.lowercase;
if(_jsPrefix == 'moz') _jsPrefix = 'Moz'
var _cssPrefix = pre.css;
var _positions = [
  {
    name: 'firstObject', 
   	start: {
    	percent: 0, x: 0.2, y: 0.3
  	},
    end: {
      percent: 1, x: 0.88, y: 0.4
    }
  },
  {
    name: 'secondObject', 
   	start: {
    	percent: 0, x: 0.9, y: 0.05
  	},
    end: {
      percent: 0.7, x: 0.3, y: 0.9
    }
  },
  {
    name: 'thirdObject', 
   	start: {
    	percent: 0, x: 0.1, y: 0.5
  	},
    end: {
      percent: 0.8, x: 0.95, y: 0.6
    }
  },
]

// let mainTitle = document.getElementsByClassName("mainTitle")[0];
// let mainTitlePosition = mainTitle.offsetLeft;

resize();
initMovingElements();

function initMovingElements() {
  for (var i = 0; i < _positions.length; i++) {
    _positions[i].diff = {
      percent: _positions[i].end.percent - _positions[i].start.percent,
      x: _positions[i].end.x - _positions[i].start.x,
      y: _positions[i].end.y - _positions[i].start.y,
    }
    var el = document.getElementsByClassName('flyingObject '+_positions[i].name)[0];
    _movingElements.push(el);
  }
}

function resize() {
	_width = window.innerWidth;
    _height = window.innerHeight;
    _scrollWidth = _containerWidth-_height;
}

function updateElements() {
    for (let i = 0; i < _movingElements.length; i++) {
        let p = _positions[i];
        if(_scrollPercent <= p.start.percent) {
            _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.start.x*_containerWidth)+'px, '+(p.start.y*_height)+'px, 0px)';
        } else if(_scrollPercent >= p.end.percent) {
            _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.end.x*_containerWidth)+'px, '+(p.end.y*_height)+'px, 0px)';
        } else {
            _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.start.x*_containerWidth + (p.diff.x*(_scrollPercent-p.start.percent)/p.diff.percent*_containerWidth))+'px, '+
            (p.start.y*_height + (p.diff.y*(_scrollPercent-p.start.percent)/p.diff.percent*_height))+'px, 0px)';
        }
    }

    // mainTitle.style[_jsPrefix+'Transform'] = 'translate3d('+(mainTitlePosition+_scrollOffset)+'px, '+'0px, 0px)';
    // mainTitle.parentNode.classList.add("removeCenter");
}



function loop() {
  _scrollOffset = document.getElementsByClassName("main-wrapper")[0].scrollTop;

  _scrollPercent = _scrollOffset/_scrollWidth || 0;
  updateElements();
  
  window.requestAnimationFrame(loop);
}

loop();

window.addEventListener('resize', resize);

/* prefix detection http://davidwalsh.name/vendor-prefix */

function prefix() {
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('') 
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
}
