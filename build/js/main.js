"use strict";

// const wheelBtn = document.querySelector('#wheel-btn');
var wheel = document.querySelector('#wheel');
var spins = document.querySelector('#spins'); // const infoStart = document.querySelector('#info-start');

var information = document.querySelector('#information');
var firstStep = document.querySelector('#first-step');
var secondStep = document.querySelector('#second-step');
var wheelSpinBtns = document.querySelectorAll('.btn-spin');
var spinActive = false;

var rotation = function rotation() {
  if (wheel.classList.contains('second-spin') && wheel.classList.contains('first-spin')) {
    return;
  } else if (wheel.classList.contains('first-spin') && !spinActive) {
    wheel.classList.add('second-spin');
    spins.innerHTML = '0';
    spinActive = true;
    setTimeout(function () {
      information.childNodes[1].classList.remove('active');
      information.childNodes[2].classList.add('active');
    }, 3100);
    setTimeout(function () {
      firstStep.classList.remove('active');
      secondStep.classList.add('active');
    }, 4000);
  } else {
    wheel.classList.add('first-spin');
    spins.innerHTML = '1';
    spinActive = true;
    setTimeout(function () {
      information.childNodes[0].classList.remove('active');
      information.childNodes[1].classList.add('active');
      spinActive = false;
    }, 3100);
  }
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = wheelSpinBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var btn = _step.value;
    btn.addEventListener('click', rotation);
  } // infoStart.addEventListener('click', () =>{
  //
  //     wheel.classList.add('first-spin');
  //     spins.innerHTML = '1';
  //     spinActive = true;
  //     setTimeout(()=>{
  //         information.childNodes[0].classList.remove('active');
  //         information.childNodes[1].classList.add('active');
  //         spinActive = false;
  //     }, 3100)
  // });
  // wheelBtn.addEventListener('click', () =>{
  //
  //     if (wheel.classList.contains('second-spin') &&  wheel.classList.contains('first-spin')){
  //         return;
  //     }else if(wheel.classList.contains('first-spin') && !spinActive){
  //         wheel.classList.add('second-spin');
  //         spins.innerHTML = '0';
  //         spinActive = true;
  //         setTimeout(()=>{
  //             information.childNodes[1].classList.remove('active')
  //             information.childNodes[2].classList.add('active')
  //         }, 3100)
  //         setTimeout(()=>{
  //             firstStep.classList.remove('active');
  //             secondStep.classList.add('active');
  //         }, 4000)
  //     }else{
  //         wheel.classList.add('first-spin');
  //         spins.innerHTML = '1';
  //         spinActive = true;
  //         setTimeout(()=>{
  //             information.childNodes[0].classList.remove('active');
  //             information.childNodes[1].classList.add('active');
  //             spinActive = false;
  //         }, 3100)
  //     }
  // });

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsid2hlZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzcGlucyIsImluZm9ybWF0aW9uIiwiZmlyc3RTdGVwIiwic2Vjb25kU3RlcCIsIndoZWVsU3BpbkJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BpbkFjdGl2ZSIsInJvdGF0aW9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJpbm5lckhUTUwiLCJzZXRUaW1lb3V0IiwiY2hpbGROb2RlcyIsInJlbW92ZSIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsSUFBTUMsS0FBSyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZCxDLENBQ0E7O0FBQ0EsSUFBTUUsV0FBVyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBcEI7QUFDQSxJQUFNRyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLElBQU1JLFVBQVUsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTUssYUFBYSxHQUFHTixRQUFRLENBQUNPLGdCQUFULENBQTBCLFdBQTFCLENBQXRCO0FBRUEsSUFBSUMsVUFBVSxHQUFHLEtBQWpCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsTUFBSVYsS0FBSyxDQUFDVyxTQUFOLENBQWdCQyxRQUFoQixDQUF5QixhQUF6QixLQUE0Q1osS0FBSyxDQUFDVyxTQUFOLENBQWdCQyxRQUFoQixDQUF5QixZQUF6QixDQUFoRCxFQUF1RjtBQUNuRjtBQUNILEdBRkQsTUFFTSxJQUFHWixLQUFLLENBQUNXLFNBQU4sQ0FBZ0JDLFFBQWhCLENBQXlCLFlBQXpCLEtBQTBDLENBQUNILFVBQTlDLEVBQXlEO0FBQzNEVCxJQUFBQSxLQUFLLENBQUNXLFNBQU4sQ0FBZ0JFLEdBQWhCLENBQW9CLGFBQXBCO0FBQ0FWLElBQUFBLEtBQUssQ0FBQ1csU0FBTixHQUFrQixHQUFsQjtBQUNBTCxJQUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNBTSxJQUFBQSxVQUFVLENBQUMsWUFBSTtBQUNYWCxNQUFBQSxXQUFXLENBQUNZLFVBQVosQ0FBdUIsQ0FBdkIsRUFBMEJMLFNBQTFCLENBQW9DTSxNQUFwQyxDQUEyQyxRQUEzQztBQUNBYixNQUFBQSxXQUFXLENBQUNZLFVBQVosQ0FBdUIsQ0FBdkIsRUFBMEJMLFNBQTFCLENBQW9DRSxHQUFwQyxDQUF3QyxRQUF4QztBQUNILEtBSFMsRUFHUCxJQUhPLENBQVY7QUFJQUUsSUFBQUEsVUFBVSxDQUFDLFlBQUk7QUFDWFYsTUFBQUEsU0FBUyxDQUFDTSxTQUFWLENBQW9CTSxNQUFwQixDQUEyQixRQUEzQjtBQUNBWCxNQUFBQSxVQUFVLENBQUNLLFNBQVgsQ0FBcUJFLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0gsS0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlILEdBWkssTUFZRDtBQUNEYixJQUFBQSxLQUFLLENBQUNXLFNBQU4sQ0FBZ0JFLEdBQWhCLENBQW9CLFlBQXBCO0FBQ0FWLElBQUFBLEtBQUssQ0FBQ1csU0FBTixHQUFrQixHQUFsQjtBQUNBTCxJQUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNBTSxJQUFBQSxVQUFVLENBQUMsWUFBSTtBQUNYWCxNQUFBQSxXQUFXLENBQUNZLFVBQVosQ0FBdUIsQ0FBdkIsRUFBMEJMLFNBQTFCLENBQW9DTSxNQUFwQyxDQUEyQyxRQUEzQztBQUNBYixNQUFBQSxXQUFXLENBQUNZLFVBQVosQ0FBdUIsQ0FBdkIsRUFBMEJMLFNBQTFCLENBQW9DRSxHQUFwQyxDQUF3QyxRQUF4QztBQUNBSixNQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNILEtBSlMsRUFJUCxJQUpPLENBQVY7QUFLSDtBQUNKLENBekJEOzs7Ozs7O0FBMkJBLHVCQUFlRixhQUFmLDhIQUE2QjtBQUFBLFFBQXJCVyxHQUFxQjtBQUN6QkEsSUFBQUEsR0FBRyxDQUFDQyxnQkFBSixDQUFxQixPQUFyQixFQUE4QlQsUUFBOUI7QUFDSCxHLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3Qgd2hlZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2hlZWwtYnRuJyk7XG5jb25zdCB3aGVlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aGVlbCcpO1xuY29uc3Qgc3BpbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BpbnMnKTtcbi8vIGNvbnN0IGluZm9TdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvLXN0YXJ0Jyk7XG5jb25zdCBpbmZvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvcm1hdGlvbicpO1xuY29uc3QgZmlyc3RTdGVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0LXN0ZXAnKTtcbmNvbnN0IHNlY29uZFN0ZXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Vjb25kLXN0ZXAnKTtcbmNvbnN0IHdoZWVsU3BpbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXNwaW4nKTtcblxubGV0IHNwaW5BY3RpdmUgPSBmYWxzZTtcblxuY29uc3Qgcm90YXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKHdoZWVsLmNsYXNzTGlzdC5jb250YWlucygnc2Vjb25kLXNwaW4nKSAmJiAgd2hlZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXJzdC1zcGluJykpe1xuICAgICAgICByZXR1cm47XG4gICAgfWVsc2UgaWYod2hlZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXJzdC1zcGluJykgJiYgIXNwaW5BY3RpdmUpe1xuICAgICAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtc3BpbicpO1xuICAgICAgICBzcGlucy5pbm5lckhUTUwgPSAnMCc7XG4gICAgICAgIHNwaW5BY3RpdmUgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBpbmZvcm1hdGlvbi5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICBpbmZvcm1hdGlvbi5jaGlsZE5vZGVzWzJdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH0sIDMxMDApXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIGZpcnN0U3RlcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHNlY29uZFN0ZXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0sIDQwMDApXG4gICAgfWVsc2V7XG4gICAgICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LXNwaW4nKTtcbiAgICAgICAgc3BpbnMuaW5uZXJIVE1MID0gJzEnO1xuICAgICAgICBzcGluQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgaW5mb3JtYXRpb24uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGluZm9ybWF0aW9uLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBzcGluQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDMxMDApXG4gICAgfVxufVxuXG5mb3IobGV0IGJ0biBvZiB3aGVlbFNwaW5CdG5zKXtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGlvbilcbn1cblxuLy8gaW5mb1N0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4vL1xuLy8gICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LXNwaW4nKTtcbi8vICAgICBzcGlucy5pbm5lckhUTUwgPSAnMSc7XG4vLyAgICAgc3BpbkFjdGl2ZSA9IHRydWU7XG4vLyAgICAgc2V0VGltZW91dCgoKT0+e1xuLy8gICAgICAgICBpbmZvcm1hdGlvbi5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuLy8gICAgICAgICBpbmZvcm1hdGlvbi5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuLy8gICAgICAgICBzcGluQWN0aXZlID0gZmFsc2U7XG4vLyAgICAgfSwgMzEwMClcbi8vIH0pO1xuXG4vLyB3aGVlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuLy9cbi8vICAgICBpZiAod2hlZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWNvbmQtc3BpbicpICYmICB3aGVlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpcnN0LXNwaW4nKSl7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICB9ZWxzZSBpZih3aGVlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpcnN0LXNwaW4nKSAmJiAhc3BpbkFjdGl2ZSl7XG4vLyAgICAgICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1zcGluJyk7XG4vLyAgICAgICAgIHNwaW5zLmlubmVySFRNTCA9ICcwJztcbi8vICAgICAgICAgc3BpbkFjdGl2ZSA9IHRydWU7XG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCk9Pntcbi8vICAgICAgICAgICAgIGluZm9ybWF0aW9uLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgICAgICAgICAgIGluZm9ybWF0aW9uLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbi8vICAgICAgICAgfSwgMzEwMClcbi8vICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuLy8gICAgICAgICAgICAgZmlyc3RTdGVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuLy8gICAgICAgICAgICAgc2Vjb25kU3RlcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbi8vICAgICAgICAgfSwgNDAwMClcbi8vICAgICB9ZWxzZXtcbi8vICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LmFkZCgnZmlyc3Qtc3BpbicpO1xuLy8gICAgICAgICBzcGlucy5pbm5lckhUTUwgPSAnMSc7XG4vLyAgICAgICAgIHNwaW5BY3RpdmUgPSB0cnVlO1xuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4vLyAgICAgICAgICAgICBpbmZvcm1hdGlvbi5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuLy8gICAgICAgICAgICAgaW5mb3JtYXRpb24uY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbi8vICAgICAgICAgICAgIHNwaW5BY3RpdmUgPSBmYWxzZTtcbi8vICAgICAgICAgfSwgMzEwMClcbi8vICAgICB9XG4vLyB9KTtcblxuXG4iLCIiXX0=
