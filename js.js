//opretter forbindelse til mit body element i html
const body = document.body;

//henter mine elementer/billeder med klassen "color" og definerer dem som en liste/"slides"
const slides = document.querySelectorAll(".color");

//henter mine knapper (farve ellipser)
const whiteBtn = document.getElementById("white");
const blackBtn = document.getElementById("black");
const silverBtn = document.getElementById("silver");
const brownBtn = document.getElementById("brown");

//opretter en variabel med navnet "activeSlide", og fortæller at der er 4 aktive slides i den (0 til 3)

let activeSlide = 3;

//liste over de fire farveknapper, så vi kan vise hvilken der er valgt
const buttons = [whiteBtn, blackBtn, silverBtn, brownBtn];

//Gør det muligt at skifte til et bestemt billede ved at gøre billedet aktivt/ikke-aktivt
function setActiveSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  //Sætter en "selector" (ring) om den knap, der er valgt
  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[index].classList.add("active");
}

//Knap events, som bestemmer at når en knap bliver klikket på vises et bestemt billede
whiteBtn.addEventListener("click", () => setActiveSlide(0));
blackBtn.addEventListener("click", () => setActiveSlide(1));
silverBtn.addEventListener("click", () => setActiveSlide(2));
brownBtn.addEventListener("click", () => setActiveSlide(3));

//Sætter "Jacks White" som valgt, når siden loader (matcher .color1.active i HTML)
setActiveSlide(0);

/*HER STYRES ANDEN PRODUKTSIDE (Produktside2) - samme princip som ovenfor,
men med egne id'er, så de to sliders ikke påvirker hinanden. Knapperne
genbruger nu samme .button/ellipse-markup som Produktside1.*/

const slidesB = document.querySelectorAll(".colorB");

const whiteBtn2 = document.getElementById("white2");
const blackBtn2 = document.getElementById("black2");
const silverBtn2 = document.getElementById("silver2");
const brownBtn2 = document.getElementById("brown2");

const buttonsB = [whiteBtn2, blackBtn2, silverBtn2, brownBtn2];

const colorNames2 = [
  "Jacks White",
  "Sabbath Black",
  "Springing Silver",
  "Crisp Brown",
];
const productName2 = document.getElementById("productName2");

function setActiveSlideB(index) {
  slidesB.forEach((slide) => slide.classList.remove("active"));
  slidesB[index].classList.add("active");

  //Sætter en "selector" (ring) om den knap, der er valgt
  buttonsB.forEach((btn) => btn.classList.remove("active"));
  buttonsB[index].classList.add("active");

  productName2.textContent = colorNames2[index];
}

whiteBtn2.addEventListener("click", () => setActiveSlideB(0));
blackBtn2.addEventListener("click", () => setActiveSlideB(1));
silverBtn2.addEventListener("click", () => setActiveSlideB(2));
brownBtn2.addEventListener("click", () => setActiveSlideB(3));

//Sætter "Sabbath Black" som den valgte farve, når siden loader (matcher .colorB2.active i HTML)
setActiveSlideB(1);
