const moods = [
  {
    mood: "Happy",
    quotes: [ 
      "Happiness is not something ready made. It comes from your own actions.",
      "Smile — it's your superpower.",
      "Joy is the simplest form of gratitude.",
      "The purpose of our lives is to be happy.",
      "Choose joy, even in small moments.",
      "A cheerful heart is good medicine.",
      "Happiness blooms from within.",
      "Stay close to anything that makes you glad to be alive.",
      "When you’re happy, you shine from the inside out.",
      "Happiness is letting go of what you think life should look like."
    ],
    songs: [
     "https://www.youtube.com/embed/e20EFLNwHuQ",  
     "https://www.youtube.com/embed/6NhJMhbFTNcy",  
     "https://www.youtube.com/embed/2OEL4P1Rz04",  // Lofi happy beats
     "https://www.youtube.com/embed/DWcJFNfaw9c",
     "https://www.youtube.com/embed/CaVnYhhTYsE",
     "https://www.youtube.com/embed/DWcJFNfaw9c",
     "https://www.youtube.com/embed/kXYiU_JCYtU",  // light happy acoustic
     "https://www.youtube.com/embed/jfKfPfyJRdk",  // 24/7 chill lofi
     "https://www.youtube.com/embed/PUUivXgJ2S0",
     "https://www.youtube.com/embed/cWzbxKkmm0Q",
     "https://www.youtube.com/embed/JQbjS0_ZfJ0",  // "All the Stars" — Kendrick Lamar & SZA :contentReference[oaicite:5]{index=5}
     "https://www.youtube.com/embed/GfCqMv--ncA",  // Alt uploader version of "All the Stars" :contentReference[oaicite:6]{index=6}
     "https://www.youtube.com/embed/mI4peiLWF0g",  // All The Stars Remix (feat. The Weeknd) :contentReference[oaicite:7]{index=7}
     "https://www.youtube.com/embed/Mewp4cjrR0s"  
]

  },
  {
    mood: "Sad",
    quotes: [
      "Tears come from the heart, not the brain.",
      "It’s okay to feel lost. Just don’t unpack and live there.",
      "Some days you just have to cry it out.",
      "The soul would have no rainbow had the eyes no tears.",
      "Crying is how your heart speaks when your lips can’t explain the pain.",
      "Sadness flies away on the wings of time.",
      "You can’t protect yourself from sadness without protecting yourself from happiness.",
      "Every storm runs out of rain.",
      "There is no despair so absolute as that which comes with the first moments of our first great sorrow.",
      "Grief is just love with nowhere to go."
],
    songs: [
     "https://www.youtube.com/embed/1ZYbU82GVz4",
     "https://www.youtube.com/embed/jfKfPfyJRdk",
     "https://www.youtube.com/embed/lTRiuFIWV54",
     "https://www.youtube.com/embed/_eGJgdNnUnY",
     "https://www.youtube.com/embed/Twix6ZP1a6M",
     "https://www.youtube.com/embed/YykjpeuMNEk",
     "https://www.youtube.com/embed/gxho2v6y4nQ",
     "https://www.youtube.com/embed/8iU8LPEa4o0",
     "https://www.youtube.com/embed/MkNeIUgNPQ8",
     "https://www.youtube.com/embed/sCbbMZ-q4-I"
]

  },
  {
    mood: "Nostalgic",
    quotes: [
      "Sometimes you never know the value of a moment until it becomes a memory.",
      "Old memories feel like warm blankets.",
      "The past beats inside me like a second heart.",
      "Nothing is ever really lost to us as long as we remember it.",
      "Nostalgia is a dirty liar that insists things were better than they seemed.",
      "Memories take us back, dreams take us forward.",
      "We didn't realize we were making memories, we just knew we were having fun.",
      "Time moves in one direction, memory in another.",
      "The magic of our firsts lives forever.",
      "There are places in your heart you don’t even know exist until a memory touches them."
]
,
    songs: [
     "https://www.youtube.com/embed/1ZJ3AC9xr1A",
     "https://www.youtube.com/embed/4N3N1MlvVc4",
     "https://www.youtube.com/embed/lTRiuFIWV54",
     "https://www.youtube.com/embed/wWzsyhQW50c",
     "https://www.youtube.com/embed/Hl9p5KjTrSI",
     "https://www.youtube.com/embed/cgB3sgTV09w",
     "https://www.youtube.com/embed/AUN5w3QK3nU",
     "https://www.youtube.com/embed/XN6kAZ2gBis",
     "https://www.youtube.com/embed/IjMESxJdWkg",
     "https://www.youtube.com/embed/_3ZV4FIEtOQ"
]

  },
  {
    mood: "Calm",
    quotes: [
      "Peace comes from within. Do not seek it without.",
      "Stillness is the key.",
      "Breathe in deeply and let it all go.",
      "In the midst of movement and chaos, keep stillness inside of you.",
      "Silence is sometimes the best answer.",
      "A calm mind brings inner strength and self-confidence.",
      "Serenity is not freedom from the storm, but peace amid the storm.",
      "Quiet the mind and the soul will speak.",
      "Let your mind be like water — still, reflective, deep.",
      "Sometimes doing nothing is everything."
]
,
    songs: [
     "https://www.youtube.com/embed/2OEL4P1Rz04",
     "https://www.youtube.com/embed/MkNeIUgNPQ8",
     "https://www.youtube.com/embed/xAq2wA4Y-5A",
     "https://www.youtube.com/embed/1ZYbU82GVz4",
     "https://www.youtube.com/embed/yYnkwsAehfY",
     "https://www.youtube.com/embed/BynK0jJu1zA",
     "https://www.youtube.com/embed/ScMzIvxBSi4",
     "https://www.youtube.com/embed/qFZKK7K52uQ",
     "https://www.youtube.com/embed/SQFGszcU_G8",
     "https://www.youtube.com/embed/k6jqx9kZgPM"
]
  }
];
window.onload = () => {
  const buttonsDiv = document.getElementById("moodButtons");

  moods.forEach((moodObj) => {
    const btn = document.createElement("button");
    btn.innerText = moodObj.mood;
    btn.onclick = () => showRandomMoodContent(moodObj);
    buttonsDiv.appendChild(btn);
  });
};

function showRandomMoodContent(moodObj) {
  const randomQuote = moodObj.quotes[Math.floor(Math.random() * moodObj.quotes.length)];
  const randomSong = moodObj.songs[Math.floor(Math.random() * moodObj.songs.length)];

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <p class="quote">"${randomQuote}"</p>
    <div class="video-wrapper">
      <iframe src="${randomSong}" ...></iframe>
    </div>
  `;
}
