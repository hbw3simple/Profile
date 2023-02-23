let cssTroca = false;

function trocarCSS() {
  const linkElement = document.getElementById('css-link');
  const linkpfp = document.getElementById('pfpsrc');

  if (cssTroca) {

    linkElement.setAttribute('href', 'styleblack.css');
    linkpfp.setAttribute('src', 'pfpblack.jpg');
    cssTroca = false;

  } else {

    linkElement.setAttribute('href', 'stylewhite.css');
    linkpfp.setAttribute('src', 'pfpwhite.jpg');
    cssTroca = true;

  }
}

let pfpTroca = false;

function trocarPFP() {

  const linkpfp = document.getElementById('pfpsrc');

  if (pfpTroca) {

    linkpfp.setAttribute('src', 'pfpblack.jpg');
    pfpTroca = false;

  } else {

    linkpfp.setAttribute('src', 'pfpwhite.jpg');
    pfpTroca = true;

  }
}

function replacemain1() {

  var main1 = window.document.getElementById('main-infos')
  var main2 = window.document.getElementById('text-main')

  main2.style.display = "block";
  main1.style.display = "none";
}

function replacemain2() {

  var main1 = window.document.getElementById('main-infos')
  var main2 = window.document.getElementById('text-main')

  main1.style.display = "block";
  main2.style.display = "none";

}

function replacemain3() {

  var main1 = window.document.getElementById('main-infos')
  var main2 = window.document.getElementById('text-main')

  main3.style.display = "block"
  main2.style.display = "none";

}
