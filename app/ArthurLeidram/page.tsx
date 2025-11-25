"use client";

import { useRef, useEffect } from "react";
import { Zen_Kurenaido, Parisienne } from "next/font/google";

import { ReginaPromote } from "@/app/_global/_global";

const zenKurenaido = Zen_Kurenaido({
  weight: ["400"],
});

const parisienne = Parisienne({
  weight: ["400"],
});

export default function ArthurLeidram() {
  const meetTheSeiyuuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mTS_el = meetTheSeiyuuRef.current;

    const obsvr1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelector(".meetTheSeiyuu .seiyuuOVL")
              ?.setAttribute(
                "style",
                `-webkit-transform: translateY(3rem); -moz-transform: translateY(3rem); -ms-transform: translateY(3rem); -o-transform: translateY(3rem); transform: translateY(3rem);`
              );
            document
              .querySelector(".meetTheSeiyuu .seiyuuHandwrite")
              ?.setAttribute(
                "style",
                `-webkit-transform: translateY(3rem); -moz-transform: translateY(3rem); -ms-transform: translateY(3rem); -o-transform: translateY(3rem); transform: translateY(3rem);`
              );
            setTimeout(() => {
              document
                .querySelector(".meetTheSeiyuu .seiyuuOVL")
                ?.setAttribute(
                  "style",
                  `opacity: 1; -webkit-transform: initial; -moz-transform: initial; -ms-transform: initial; -o-transform: initial; transform: initial; -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease; transition: 0.5s ease;`
                );
              setTimeout(() => {
                document
                  .querySelector(".meetTheSeiyuu .seiyuuHandwrite")
                  ?.setAttribute(
                    "style",
                    `opacity: 1; -webkit-transform: initial; -moz-transform: initial; -ms-transform: initial; -o-transform: initial; transform: initial; -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease; transition: 0.5s ease;`
                  );
              }, 375);
            }, 125);
          } else {
            document
              .querySelector(".meetTheSeiyuu .seiyuuOVL")
              ?.setAttribute(
                "style",
                `opacity: 0; -webkit-transform: translateY(-3rem); -moz-transform: translateY(-3rem); -ms-transform: translateY(-3rem); -o-transform: translateY(-3rem); transform: translateY(-3rem); -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease; transition: 0.5s ease;`
              );
            setTimeout(() => {
              document
                .querySelector(".meetTheSeiyuu .seiyuuHandwrite")
                ?.setAttribute(
                  "style",
                  `opacity: 0; -webkit-transform: translateY(-3rem); -moz-transform: translateY(-3rem); -ms-transform: translateY(-3rem); -o-transform: translateY(-3rem); transform: translateY(-3rem); -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease; transition: 0.5s ease;`
                );
            }, 375);
          }
        });
      },
      { threshold: 0.75 }
    );

    if (mTS_el) {
      obsvr1.observe(mTS_el);
    }

    return () => {
      if (mTS_el) {
        obsvr1.unobserve(mTS_el);
      }
    };
  }, []);

  return (
    <main>
      <div className="switchTo">
        <img
          src="/web/pfp_Emii.png"
          alt=""
          title="switch to Emii Shion"
          onClick={() => {
            window.open("/EmiiShion", "_blank");
          }}
        />
      </div>
      <div className="heroBG">
        <div>
          <h1
            style={{
              clipPath:
                "polygon(calc(3.75px * 2.875) 0, 100% 0, calc(100% - calc(3.75px * 2.875)) 100%, 0 100%)",
            }}
          >
            Arthur Regina Leidram
          </h1>
          <span
            className={zenKurenaido.className}
            style={{
              clipPath:
                "polygon(calc(3.75px * 2) 0, 100% 0, calc(100% - calc(3.75px * 2)) 100%, 0 100%)",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            アーサー王👑
          </span>
          <br />
          <p
            style={{
              clipPath:
                "polygon(calc(3.75px * 2.875) 0, 100% 0, calc(100% - calc(3.75px * 2.875)) 100%, 0 100%)",
            }}
          >
            the Cursed Legend of the Round Table
            <br />
            the Second Regina
          </p>
        </div>
      </div>
      <div className="vtuberIntro">
        <h1>
          once considered the beloved King of Camelot, one decision had cost her
          everything. she&apos;s set to finish her last journey as the Cursed
          Legend -- opening a new path to redemption as the Regina of the
          future.
        </h1>
      </div>
      <div ref={meetTheSeiyuuRef} className="meetTheSeiyuu">
        <div className="seiyuuHandwrite">
          <div
            style={{
              bottom: "calc(15rem * 0.375)",
              left: "calc(15rem * 0.5)",
              color: "white",
              fontSize: "calc(15rem * 0.15625)",
              transform: "rotate(-5deg)",
            }}
          >
            <p>may the Miraland shine above all,</p>
            <h1
              className={parisienne.className}
              style={{
                fontWeight: "normal",
              }}
            >
              Nashimoto Hiori
            </h1>
          </div>
        </div>
        <div className="seiyuuOVL">
          <img
            style={{
              width: "20rem",
              top: "10rem",
              left: "10rem",
              transform: "rotate(-7.5deg)",
            }}
            src="https://amuleto.jp/renewal/wp/uploads/%E6%A2%A8%E6%9C%AC%E3%81%B2%E3%81%8A%E3%82%8A_%E3%83%90%E3%82%B9%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E6%9C%80%E6%96%B0HP-683x1024.jpg"
            alt=""
          />
          <img
            style={{
              width: "20rem",
              bottom: "15rem",
              right: "10rem",
              transform: "rotate(10deg)",
            }}
            src="https://static.wikia.nocookie.net/video-game-audio/images/7/7a/Hiori_Nashimoto.jpeg"
            alt=""
          />
        </div>
        <div className="seiyuuContent">
          <div
            style={{
              backgroundColor: "#d6d8e540",
              padding: "calc(15rem * 0.25) calc(15rem * 0.125)",
              borderRadius: "1.5rem",
              WebkitBackdropFilter: "blur(1.5rem)",
              backdropFilter: "blur(1.5rem)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p>meet the Benefactor</p>
              <br />
              <h1>Nashimoto Hiori</h1>
              <br />
              <h3 style={{ fontStyle: "italic" }}>
                a Seiyuu unlike any other,
                <br />
                with her dynamic beyond compare.
              </h3>
              <br />
              <div className="seiyuuSocials">
                <i
                  className="bi bi-globe"
                  title="amuleto profile"
                  onClick={() => {
                    window.open(
                      "https://amuleto.jp/talents/nashimotohiori.html"
                    );
                  }}
                ></i>
                <i
                  className="bi bi-twitter-x"
                  title="X"
                  onClick={() => {
                    window.open("https://mobile.x.com/Hio_1o18");
                  }}
                ></i>
              </div>
            </div>
            <br />
            <p>
              born on 18 Oct, Nashimoto Hiori has amassed quite a resume that
              cemented herself as one of the prolific up-and-coming seiyuus of
              the new generation. her ability to perform a wide range of
              characters, from cute and bubbly to serious and intense, has made
              her a sought-after talent in the anime and game industry.
            </p>
            <br />
            <p>
              alongside her stint as the Leidram, she is also known for a few
              notable characters: Florine from &quot;Machine Child&quot;,
              Okuzawa from &quot;Tamagawa Wants to Be a Cat&quot; and the
              infamous Nikki from &quot;Infinity Nikki&quot;!
            </p>
          </div>
        </div>
      </div>
      <div className="LeidramsPast">
        <div className="title">
          <h2>explore the Leidram&apos;s past</h2>
        </div>
        <div className="storySummary">
          <div
            className="LeidramChapter"
            style={{
              marginRight: "0",
            }}
          >
            <img
              src="https://pbs.twimg.com/media/FjWr_eBagAEUzvj?format=jpg&name=large"
              alt=""
            />
            <div>
              <h2>Where Fates Converge</h2>
              <br />
              <p>
                Guided by the mysterious witch, Finn arrived at the distant
                royal capital guarded by the cursed Knights of the Round Table.
              </p>
            </div>
          </div>
          <div
            className="LeidramChapter"
            style={{
              marginRight: "0",
            }}
          >
            <img
              src="https://pbs.twimg.com/media/F3s_Rv1a8AA9yjN?format=png&name=large"
              alt=""
              style={{
                objectPosition: "center 20%",
              }}
            />
            <div>
              <h2>King Arthur, the Cursed Legend</h2>
              <br />
              <p>
                After a hundred years, King Arthur has reached the cursed land
                of Avalon. Accompanying her are the mightiest knight, Lancelot,
                and the Knight of the Sun, Gawain. Upon this remote, isolated
                isle, the final war between the Knights of the Round Table and
                the nine fairies now commences.
              </p>
            </div>
          </div>
          <div
            className="LeidramChapter"
            style={{
              marginRight: "0",
            }}
          >
            <img
              src="https://pbs.twimg.com/media/GKPBjXPbMAA_1Xl?format=jpg&name=large"
              alt=""
            />
            <div>
              <h2>Exiles of the Round Table</h2>
              <br />
              <p>
                The prison island floating at the western edge, and two former
                Knights of the Round Table. Time, which had stood still, begins
                to move once more—
              </p>
            </div>
          </div>
          <div
            className="LeidramChapter"
            style={{
              marginRight: "0",
            }}
          >
            <img
              src="https://pbs.twimg.com/media/GRYkkVZaYAABoeb?format=jpg&name=medium"
              alt=""
            />
            <div>
              <h2>King Arthur&apos;s Respite</h2>
              <br />
              <p>
                King Arthur, transported to the sea by the Archmage. There, an
                impossible figure appears—
              </p>
            </div>
          </div>
          <div
            className="LeidramChapter"
            style={{
              marginRight: "0",
            }}
          >
            <img
              src="https://pbs.twimg.com/media/Gbs1VJHbYAAocVS?format=jpg&name=large"
              alt=""
            />
            <div>
              <h2>Tristan and the Sealed Sword</h2>
              <br />
              <p>
                The Knights of the Round Table reunite with the sorrowful knight
                Tristan in the royal capital. The Saintess encounters the girl
                who is the ultimate weapon in the sealed land――and the curtain
                rises on the decisive battle.
              </p>
            </div>
          </div>
          <div
            className="LeidramChapter"
            style={{
              marginRight: "0",
            }}
          >
            <img
              src="https://pbs.twimg.com/media/GeHp1UQakAEtLrQ?format=jpg&name=large"
              alt=""
            />
            <div>
              <h2>Camelot, the Cursed Kingdom</h2>
              <br />
              <p>
                The true purpose of King Arthur, the destination of her journey.
                The Round Table Saga reaches its grand conclusion!
              </p>
            </div>
          </div>
          <div className="LeidramChapter">
            <img
              src="https://pbs.twimg.com/media/G32iJ91W4AASgpz?format=jpg&name=large"
              alt=""
            />
            <div>
              <h2>Shackled Dawn</h2>
              <br />
              <p>
                King Arthur has fallen. Yet the princess of the snow-bound realm
                prayed in secret, for the return of her Dark King——
              </p>
            </div>
          </div>
        </div>
      </div>
      <ReginaPromote />
    </main>
  );
}
