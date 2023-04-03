var i = 0;

function timedCount() {
  i =  Math.floor(Math.random() * 100);
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();