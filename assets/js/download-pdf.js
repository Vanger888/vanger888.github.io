function downloadPdf() {
  html2pdf(document.body);
}

function init() {
  const downloadButton = document.getElementById('download-pdf');

  if (!downloadButton) {
    return;
  }

  downloadButton.addEventListener('click', downloadPdf);
}

init();