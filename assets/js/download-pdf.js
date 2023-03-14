function downloadPdf() {
  const options = {
    filename: 'Serhii_Trotsenko_CVV.pdf',
    margin: 1,
  }
  html2pdf(document.body, options);
}

function init() {
  const downloadButton = document.getElementById('download-pdf');

  if (!downloadButton) {
    return;
  }

  downloadButton.addEventListener('click', downloadPdf);
}

init();