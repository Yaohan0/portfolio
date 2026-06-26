const introText =
  "I’m currently a Year 2 cybersecurity student studying at Temasek Polytechnic in Singapore. This space is where I document what I learn, build, break, fix, and slowly get better at.";

const target = document.getElementById("typing-intro");

if (target) {
  let index = 0;

  const type = () => {
    target.textContent = introText.slice(0, index);
    index += 1;

    if (index <= introText.length) {
      window.setTimeout(type, 24);
    } else {
      target.classList.remove("typing-cursor");
    }
  };

  window.setTimeout(type, 450);
}