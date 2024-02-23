const fs = require("fs");

const personsData = [
  {
    lastName: "Алтансүх",
    firstName: "Алтаншагай",
    seatNumber: "1D",
    interestedCourse: "CODING",
  },
  {
    lastName: "G",
    firstName: "Jargal",
    seatNumber: "6F",
    interestedCourse: "CODING",
  },
  {
    lastName: "Даваа",
    firstName: "Сонинбаяр",
    seatNumber: "4A",
    interestedCourse: "CODING",
  },
  {
    lastName: "Ананд",
    firstName: "Мөнхбаяр",
    seatNumber: "1B",
    interestedCourse: "CODING",
  },
  {
    lastName: "Munkhbat ",
    firstName: "Sanchir",
    seatNumber: "1E",
    interestedCourse: "CODING",
  },
  {
    lastName: "Баяржаргал",
    firstName: "Мөнгөнцэцэг",
    seatNumber: "2B",
    interestedCourse: "CODING",
  },
  {
    lastName: "uuhii",
    firstName: "Ganchimeg",
    seatNumber: "2C",
    interestedCourse: "CODING",
  },
  {
    lastName: "Turbat",
    firstName: "Daariimaa",
    seatNumber: "1A",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Mungon",
    firstName: "Dolgoon",
    seatNumber: "1D",
    interestedCourse: "CODING",
  },
  {
    lastName: "Ууганбаатар",
    firstName: "Төгөлдөрбаяр",
    seatNumber: "1F",
    interestedCourse: "CODING",
  },
  {
    lastName: "Enhbold",
    firstName: "Saruulchimeg",
    seatNumber: "6C",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Enhdalai",
    firstName: "Nandin-Erdene",
    seatNumber: "6E",
    interestedCourse: "CODING",
  },
  {
    lastName: "Lhavgasuren",
    firstName: "Lhavgajargal",
    seatNumber: "1B",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Atga",
    firstName: "Amin-Erdene",
    seatNumber: "6E",
    interestedCourse: "CODING",
  },
  {
    lastName: "Atga",
    firstName: "Amin-Erdene",
    seatNumber: "6B",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Дамбажанцан",
    firstName: "Чиндолгор",
    seatNumber: "1F",
    interestedCourse: "CODING",
  },
  {
    lastName: "Ariunbold",
    firstName: "Enkhjin",
    seatNumber: "1E",
    interestedCourse: "CODING",
  },
  {
    lastName: "Батзориг ",
    firstName: "Цолмон",
    seatNumber: "3C",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Батмөнх",
    firstName: "Батбаяр",
    seatNumber: "5D",
    interestedCourse: "CODING",
  },
  {
    lastName: "Nemekhbayar",
    firstName: "Saruulbuyan",
    seatNumber: "6D",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Ганзориг",
    firstName: "Сэлэнгэ",
    seatNumber: "1D",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Dorjsuren ",
    firstName: "Munkhzul ",
    seatNumber: "1C",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Ganbat",
    firstName: "Baynjargal",
    seatNumber: "2B",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Ganbold",
    firstName: "Solongo",
    seatNumber: "1A",
    interestedCourse: "CODING",
  },
  {
    lastName: "Bayartogtoh",
    firstName: "Hulan",
    seatNumber: "6B",
    interestedCourse: "CODING",
  },
  {
    lastName: "Бямбадорж",
    firstName: "Бямба-эрдэнэ",
    seatNumber: "2A",
    interestedCourse: "CODING",
  },
  {
    lastName: "Энхболд",
    firstName: "Эрдэнэхан",
    seatNumber: "5D",
    interestedCourse: "CODING",
  },
  {
    lastName: "Пүрэвсүрэн ",
    firstName: "Цэрмаа",
    seatNumber: "2D",
    interestedCourse: "CODING",
  },
  {
    lastName: "Лхагвадорж",
    firstName: "Сүхбат",
    seatNumber: "2D",
    interestedCourse: "CODING",
  },
  {
    lastName: "СУРМААЖАВ",
    firstName: "ТӨР-ЭРДЭНЭ",
    seatNumber: "6A",
    interestedCourse: "CODING",
  },
  {
    lastName: "Баярсайхан",
    firstName: "Мөнхтамир",
    seatNumber: "5C",
    interestedCourse: "CODING",
  },
  {
    lastName: "Өсөхбаяр",
    firstName: "Өсөхбаяр",
    seatNumber: "5A",
    interestedCourse: "CODING",
  },
  {
    lastName: "Баасанцогт",
    firstName: "Хилийнчимэг",
    seatNumber: "2B",
    interestedCourse: "CODING",
  },
  {
    lastName: "Turbat",
    firstName: "Turbat",
    seatNumber: "3C",
    interestedCourse: "CODING",
  },
  {
    lastName: " БААТАР ",
    firstName: " ОЮУНТУЯА",
    seatNumber: "6C",
    interestedCourse: "CODING",
  },
  {
    lastName: "Баярсайхан",
    firstName: "Анарчулуу",
    seatNumber: "4B",
    interestedCourse: "CODING",
  },
  {
    lastName: "Temvvlen",
    firstName: "Temvvlen",
    seatNumber: "4A",
    interestedCourse: "CODING",
  },
  {
    lastName: "Gundari ",
    firstName: "Samaya",
    seatNumber: "3B",
    interestedCourse: "CODING",
  },
  {
    lastName: "Энx-Амгалан",
    firstName: "Чингүүн",
    seatNumber: "3C",
    interestedCourse: "CODING",
  },
  {
    lastName: "Batsukh",
    firstName: "Temuulen",
    seatNumber: "3A",
    interestedCourse: "CODING",
  },
  {
    lastName: "Энххүслэн",
    firstName: "Энххүслэн",
    seatNumber: "4B",
    interestedCourse: "CODING",
  },
  {
    lastName: "Tulga",
    firstName: "Мөнхтулга",
    seatNumber: "4A",
    interestedCourse: "CODING",
  },
  {
    lastName: "Оюунцэцэг",
    firstName: "Баясгалан",
    seatNumber: "3B",
    interestedCourse: "CODING",
  },
  {
    lastName: "ГАН-ЯЛАЛТ",
    firstName: "ЦОГ",
    seatNumber: "1D",
    interestedCourse: "CODING",
  },
  {
    lastName: "Батдорж",
    firstName: "Энхгэрэл",
    seatNumber: "5A",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Анхтуяа",
    firstName: "Батмөнх",
    seatNumber: "2A",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Цэнд-Aюуш",
    firstName: "Цэцэгням",
    seatNumber: "1A",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Батсайхан",
    firstName: "Бибиш",
    seatNumber: "5A",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Jargalsaikhan",
    firstName: "Udval",
    seatNumber: "6A",
    interestedCourse: "DESIGN",
  },
  {
    lastName: "Батдорж",
    firstName: "Энхгэрэл",
    seatNumber: "4A",
    interestedCourse: "DESIGN",
  },
];

// Function to generate HTML for a set of persons
function generateHTMLForPersons(personsData) {
  let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Tickets</title>
            <style>
                /* Regular Styles */
                @font-face {
                    font-family: "GIP";
                    src: url("../fonts/GIP-Black.otf") format("opentype");
                    font-weight: 900;
                    font-style: normal;
                }

                @font-face {
                    font-family: "GIP";
                    src: url("../fonts/GIP-ExtraBold.otf") format("opentype");
                    font-weight: 800;
                    font-style: normal;
                }

                @font-face {
                    font-family: "GIP";
                    src: url("../fonts/GIP-Light.otf") format("opentype");
                    font-weight: 300;
                    font-style: normal;
                }

                /* Continue adding @font-face rules for other regular styles... */

                /* Italic Styles */
                @font-face {
                    font-family: "GIP";
                    src: url("../fonts/GIP-BlackItalic.otf") format("opentype");
                    font-weight: 900;
                    font-style: italic;
                }

                @font-face {
                    font-family: "GIP";
                    src: url("../fonts/GIP-ExtraBoldItalic.otf") format("opentype");
                    font-weight: 800;
                    font-style: italic;
                }

                @font-face {
                    font-family: "GIP";
                    src: url("../fonts/GIP-LightItalic.otf") format("opentype");
                    font-weight: 300;
                    font-style: italic;
                }

                html,
                body {
                    height: 297mm;
                    width: 210mm;
                    font-family: "GIP", sans-serif;
                }

                .box {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .ticketWrapper {
                    position: relative;
                }

                .name {
                    position: absolute;
                    top: 170px;
                    left: 54px;
                    font-weight: 700;
                    font-size: 21px;
                    margin: 0;
                    text-transform: uppercase;
                }

                .program {
                    position: absolute;
                    top: 245px;
                    left: 54px;
                    font-size: 20px;
                    font-weight: 500;
                    margin: 0;
                }

                .room {
                    position: absolute;
                    top: 245px;
                    left: 150px;
                    font-size: 20px;
                    font-weight: 500;
                    margin: 0;
                }

                .seat {
                    position: absolute;
                    top: 245px;
                    left: 243px;
                    font-size: 20px;
                    font-weight: 500;
                    margin: 0;
                }

                .class {
                    position: absolute;
                    top: 245px;
                    left: 327px;
                    font-size: 20px;
                    font-weight: 500;
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <div class="box">
    `;

  personsData.forEach((person) => {
    const ticketHTML = `
            <div class="ticketWrapper">
                <img src="../ticket.png" style="width: 100%" alt="ticket" />
                <p class="name">${person.lastName} ${person.lastName}</p>
                <p class="program">LEAP</p>
                <p class="room"></p>
                <p class="seat">${person.seatNumber}</p>
                <p class="class">${person.interestedCourse}</p>
            </div>
        `;
    html += ticketHTML;
  });

  html += `
            </div>
        </body>
        </html>
    `;

  return html;
}

// Split personsData into sets of 3 persons per A4 page
for (let i = 0; i < personsData.length; i += 3) {
  const currentSet = personsData.slice(i, i + 3);
  const htmlContent = generateHTMLForPersons(currentSet);

  // Write HTML content to a file
  fs.writeFileSync(`page_${Math.floor(i / 3) + 1}.html`, htmlContent, "utf-8");
}

console.log("HTML files generated successfully!");
