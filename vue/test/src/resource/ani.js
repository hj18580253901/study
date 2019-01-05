var startX, startY
var endX, endY
var reduceX, reduceY, angle
var elLeftArr = []
var $box, width
var boxIndex = []
var marginL = 50
export var anio = function () {
  var $parent = document.querySelector('.carousel')
  $box = Array.prototype.slice.call(document.querySelectorAll('.switchBox'))
  boxIndex = [...($box.keys())]
  width = $box[0].clientWidth
  elLeftArr = Array.from({length: 3}, (item, index) => {
    if (index === 0) {
      return marginL
    } else if (index === 1) {
      return marginL * 2 + width
    } else {
      var num = document.body.clientWidth
      return num
    }
  })
  elLeftArr.unshift(-(width + marginL))
  console.log(elLeftArr)
  initBox(3)
  $parent.addEventListener('touchstart', touch, false)
  $parent.addEventListener('touchend', touch, false)
}
function touch (e) {
  var event = e || window.e
  switch (event.type) {
    case 'touchstart':
      var touch = event.touches[0]
      startX = Math.floor(touch.clientX)
      startY = Math.floor(touch.clientY)
      break
    case 'touchend' || 'touchcancel':
      var end = event.changedTouches[0]
      endX = Math.floor(end.clientX)
      endY = Math.floor(end.clientY)
      break
  }
  if (endX && startX) reduceX = endX - startX
  if (endY && startY) reduceY = endY - startY
  if (reduceX && reduceY) {
    angle = Math.atan2(reduceY, reduceX) * 180 / Math.PI
  }
  if (event.type === 'touchend') {
    if (angle < 45 && angle >= -45) {
      lineUpRight()
    } else if ((angle <= 180 && angle >= 135) || (angle >= -180 && angle <= -135)) {
      console.log('左')
      lineUpLeft()
    }
  }
}
function lineUpLeft () {
  $box.forEach((item, index) => {
    if (item.style.left === elLeftArr[0] + 'px') {
      item.style.cssText = 'left:' + elLeftArr[3] + 'px;transform:scale(1);opacity:0;'
    }
  })
  sortBoxL()
  boxIndex = boxIndex.reduce((pre, item, index, arr) => {
    var n = index + 1
    if (n > arr.length - 1) {
      n = 0
    }
    pre.push(boxIndex[n])
    return pre
  }, [])
}
function lineUpRight () {
  $box.forEach((item, index) => {
    if (item.style.left === elLeftArr[3] + 'px') {
      item.style.cssText = 'left:' + elLeftArr[0] + 'px;transform:scale(1);opacity:0;'
    }
  })
  boxIndex = boxIndex.reduce((pre, item, index, arr) => {
    var n = index - 1
    if (n < 0) {
      n = arr.length - 1
    }
    pre.push(boxIndex[n])
    return pre
  }, [])
  sortBoxR()
}
function initBox (i) {
  $box.forEach((item, index) => {
    if (index <= 1) {
      item.style.left = elLeftArr[index + 1] + 'px'
    } else {
      item.style.cssText = 'left:' + elLeftArr[i] + 'px;opacity:0;'
    }
  })
}
function sortBoxL () {
  $box[boxIndex[0]].style.cssText = 'left:' + elLeftArr[0] + 'px;transform:scale(1);opacity:0'
  $box[boxIndex[1]].style.cssText = 'left:' + elLeftArr[1] + 'px;transform:scale(1.3);opacity:1'
  $box[boxIndex[2]].style.cssText = 'left:' + elLeftArr[2] + 'px;transform:scale(1);opacity:0.7'
}
function sortBoxR () {
  $box[boxIndex[0]].style.cssText = 'left:' + elLeftArr[1] + 'px;transform:scale(1.3);opacity:1'
  $box[boxIndex[1]].style.cssText = 'left:' + elLeftArr[2] + 'px;transform:scale(1);opacity:0.7'
  $box[boxIndex[2]].style.cssText = 'left:' + elLeftArr[3] + 'px;transform:scale(1);opacity:0'
}
