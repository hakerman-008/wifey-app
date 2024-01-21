let isWifeyVideoStarted = false;
const wifeyVideoElement = document.getElementById('wifey-video');
const backgroundVideo = document.getElementById('background-video');

async function startWifeyVideo() {
  if (!isWifeyVideoStarted) {
    try {
      await wifeyVideoElement.play();
      backgroundVideo.pause();
    } catch (error) {
      console.error('Wifey video playback error:', error.message);
    }

    isWifeyVideoStarted = true;
  }
}

async function getRandomVideo() {
  try {
    const url = 'https://your-shoti-api.vercel.app/api/v1/get';
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ apikey: "$shoti-1hecj3cvm6r1mf91948" }),
    });
    const content = await rawResponse.json();

    wifeyVideoElement.src = content.data.url;
    wifeyVideoElement.play();
    isWifeyVideoStarted = true;
  } catch (e) {
    console.error("Error fetching Shoti video", e);
  }
}

getRandomVideo();
