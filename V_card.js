const yesBtn = document.getElementById("yes");
    const card = document.querySelector(".card");
    const counter = document.getElementById("counter");

    let attempts = 0;

    const messages = [
      "Attempts: 1",
      "Attempts: 2",
      "Attempts: 3",
      "Attempts: 4",
      "Attempts: 5",
      "Attempts: 6",
      "Attempts: 7",
      "Attempts: 8",
      "Attempts: 9",
      "Attempts: 10"
    ];

    yesBtn.addEventListener("mouseenter", () => {
      attempts++;
      counter.textContent = messages[Math.min(attempts - 1, messages.length - 1)];

      // Mercy unlock
      if (attempts >= 10) {
        yesBtn.style.left = "50%";
        yesBtn.style.top = "150px";
        yesBtn.textContent = "lmao ok, im done.";
        yesBtn.onclick = () => {
          alert("YAY 💕 I knew it. I can't wait for King's Spa, I miss you babe 😘");
        };
        return;
      }

      const cardRect = card.getBoundingClientRect();
      const btnRect = yesBtn.getBoundingClientRect();

      const maxX = cardRect.width - btnRect.width;
      const maxY = cardRect.height - btnRect.height;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      yesBtn.style.left = `${x}px`;
      yesBtn.style.top = `${y}px`;
    });