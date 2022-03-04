let filter_taps = document.querySelectorAll('.filter-tap li');

document.querySelectorAll('.filter .all').forEach(box => box.classList.add('active'));

filter_taps.forEach(tap => {
  tap.addEventListener('click', function() {
    filter_taps.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.filter .all').forEach(box => {
      box.classList.remove('active');
      if (box.classList.contains(this.dataset.filter)) {
        setTimeout(() => box.classList.add('active'), 0)
      }
    });
  });
});


let email = document.querySelector('form [type=text]');
let err = document.querySelector('.err');
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener('input', function() {
  if (reg.test(this.value)) {
    err.style.display = 'none'
  } else
    err.style.display = 'block';
});
document.getElementById("submit").onsubmit = function() {
  if (reg.test(email.value) === false) {
    return false;
  }
  return true;
}
let top_btn = document.createElement('i');
let top_div = document.createElement('div');
top_div.className = 'top';
top_div.appendChild(top_btn);
top_btn.className = 'fa-solid fa-circle-chevron-up fa-2x ';


document.body.appendChild(top_div);

window.addEventListener('scroll', () => {
  if (scrollY >= 1000) {
    top_div.classList.add('show');
  }
  else
    top_div.classList.remove('show');
});
top_div.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});
