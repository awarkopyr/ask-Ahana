import html2canvas from 'html2canvas';

const captureScreenshot = () => {
  const element = document.querySelector('.screenshot-target');

  if (element) {
    html2canvas(element)
      .then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'Unique_Journey.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.error('Screenshot capture failed:', err);
      });
  } else {
    console.error('Element not found');
  }
};

export default captureScreenshot;

