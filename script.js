let isVideoPaused = true;
const videoElement = document.getElementById('wifey-video');
const backgroundVideo = document.getElementById('background-video');

async function toggleVideo() {
  const playButton = document.getElementById('play-button');

  try {
    if (isVideoPaused) {
      await videoElement.play();
      backgroundVideo.pause(); // Pause background video when wifey video plays
      playButton.innerText = 'Pause Video';
    } else {
      videoElement.pause();
      backgroundVideo.play(); // Resume background video when wifey video pauses
      playButton.innerText = 'Play Video';
    }
  } catch (error) {
    // Autoplay was prevented, request user interaction
    console.error('Autoplay was prevented. Please interact with the video to play.');
  }

  isVideoPaused = !isVideoPaused;
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

    videoElement.src = content.data.url;
    videoElement.play();
    document.getElementById('play-button').innerText = 'Pause Video';
    isVideoPaused = false;
  } catch (e) {
    console.error("Error fetching Shoti video", e);
  }
}

getRandomVideo();
