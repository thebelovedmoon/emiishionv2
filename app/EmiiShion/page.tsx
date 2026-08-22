"use client";

import { useEffect, useRef } from "react";
import {
  Zen_Kurenaido,
  Parisienne,
  Noto_Serif_Display,
} from "next/font/google";

import { ReginaPromote } from "@/app/_global/_global";

const zenKurenaido = Zen_Kurenaido({
  weight: ["400"],
});

const parisienne = Parisienne({
  weight: ["400"],
});

const notoSerifDisplay = Noto_Serif_Display({
  weight: ["600"],
  style: ["italic"],
});

export default function EmiiShion() {
  const meetTheSeiyuuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document
      .querySelector("link[rel='shortcut icon']")
      ?.setAttribute("href", "/web/pfp_Emii.png");
    document
      .querySelector("link[rel='apple-touch-icon']")
      ?.setAttribute("href", "/web/pfp_Emii.png");
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#fed962");
    document
      .querySelector("meta[name='msapplication-TileColor']")
      ?.setAttribute("content", "#fed962");
    document
      .querySelector("meta[name='msapplication-navbutton-color']")
      ?.setAttribute("content", "#fed962");
    document
      .querySelector("meta[name='apple-mobile-web-app-status-bar-style']")
      ?.setAttribute("content", "#fed962");

    const mTS_el = meetTheSeiyuuRef.current;

    const obsvr1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelector(".meetTheSeiyuu .seiyuuOVL")
              ?.setAttribute(
                "style",
                `-webkit-transform: translateY(3rem); -moz-transform: translateY(3rem); -ms-transform: translateY(3rem); -o-transform: translateY(3rem); transform: translateY(3rem);`,
              );
            document
              .querySelector(".meetTheSeiyuu .seiyuuHandwrite")
              ?.setAttribute(
                "style",
                `-webkit-transform: translateY(3rem); -moz-transform: translateY(3rem); -ms-transform: translateY(3rem); -o-transform: translateY(3rem); transform: translateY(3rem);`,
              );
            setTimeout(() => {
              document
                .querySelector(".meetTheSeiyuu .seiyuuOVL")
                ?.setAttribute(
                  "style",
                  `opacity: 1; -webkit-transform: initial; -moz-transform: initial; -ms-transform: initial; -o-transform: initial; transform: initial; -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease; transition: 0.5s ease;`,
                );
              setTimeout(() => {
                document
                  .querySelector(".meetTheSeiyuu .seiyuuHandwrite")
                  ?.setAttribute(
                    "style",
                    `opacity: 1; -webkit-transform: initial; -moz-transform: initial; -ms-transform: initial; -o-transform: initial; transform: initial; -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease; transition: 0.5s ease;`,
                  );
              }, 375);
            }, 125);
          } else {
            document
              .querySelector(".meetTheSeiyuu .seiyuuOVL")
              ?.setAttribute(
                "style",
                `opacity: 0; -webkit-transform: translateY(-3rem); -moz-transform: translateY(-3rem); -ms-transform: translateY(-3rem); -o-transform: translateY(-3rem); transform: translateY(-3rem); -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease; transition: 0.5s ease;`,
              );
            setTimeout(() => {
              document
                .querySelector(".meetTheSeiyuu .seiyuuHandwrite")
                ?.setAttribute(
                  "style",
                  `opacity: 0; -webkit-transform: translateY(-3rem); -moz-transform: translateY(-3rem); -ms-transform: translateY(-3rem); -o-transform: translateY(-3rem); transform: translateY(-3rem); -webkit-transition: 0.5s ease; -moz-transition: 0.5s ease; -o-transition: 0.5s ease; transition: 0.5s ease;`,
                );
            }, 375);
          }
        });
      },
      { threshold: 0.5 },
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
          src="/web/Leidram2026.png"
          alt=""
          title="switch to Arthur Regina Leidram"
          onClick={() => {
            window.location.replace("/ArthurLeidram");
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
            Emii Shion
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
            絵美紫苑&#x1f423;
          </span>
          <br />
          <p
            style={{
              clipPath:
                "polygon(calc(3.75px * 2.875) 0, 100% 0, calc(100% - calc(3.75px * 2.875)) 100%, 0 100%)",
            }}
          >
            Reincarnated Phoenix Queen
            <br />
            the First Regina
          </p>
        </div>
      </div>
      <div className="vtuberIntro">
        <h1>
          once a sleepy penguin who wished to turn things around for those
          around her, now a Reincarnated Phoenix Queen to finish what she
          started -- a promise that she made to someone she cared about.
        </h1>
      </div>
      <div className="hinamoteNotice">
        <div className="hinamoteFill">
          <div className="hinaMoteCtr">
            <div className="hinamotes">
              <img
                className="hinamote1"
                src="/images/hinamotes/hinasuHeart.png"
                alt="emiish1HinasuHeart"
                title="emiish1HinasuHeart"
              />
              <img
                className="hinamote2"
                src="/images/hinamotes/hinasuPat.png"
                alt="emiish1HinasuPat"
                title="emiish1HinasuPat"
              />
              <img
                className="hinamote3"
                src="/images/hinamotes/hinasuCozy.png"
                alt="eiish1HinasuCozy"
                title="eiish1HinasuCozy"
              />
              <img
                className="hinamote4"
                src="/images/hinamotes/hinasuPeek.png"
                alt="eiish1HinasuPeek"
                title="eiish1HinasuPeek"
              />
              <img
                className="hinamote5"
                src="/images/hinamotes/hinaouNyoom.png"
                alt="eiish1HinaouNyoom"
                title="eiish1HinaouNyoom"
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "3.75rem",
              }}
            ></div>
            <h2>
              preserving the{" "}
              <span style={{ color: "#f0a9a9" }}>Third Maria&#x1f338;</span>
              &apos;s legacy
            </h2>
            <br />
            <p>
              as part of an ongoing effort to recognize the efforts of the Third
              Maria&#x1f338; of VTresMarias -- Hina Oujo, her emotes will be
              gradually available to use on the EmiiShion Twitch channel!!
            </p>
            <br />
            <p>
              more emotes will be added as part of tier 1 sub, including the
              animated ones!!
            </p>
            <br />
            <button
              onClick={() => {
                window.open("https://twitch.tv/EmiiShion/subscribe");
              }}
            >
              subscribe to unlock more
            </button>
          </div>
        </div>
      </div>
      <div ref={meetTheSeiyuuRef} className="meetTheSeiyuu">
        <div className="seiyuuHandwrite">
          <div
            className={notoSerifDisplay.className}
            style={{
              bottom: "calc(15rem * 0.375)",
              left: "calc(15rem * 0.5)",
              color: "#3d374c",
              fontSize: "calc(15rem * 0.15625)",
              transform: "rotate(-5deg)",
              letterSpacing: "-0.08rem",
            }}
          >
            <p>may you be blessed dearly,</p>
            <h1
              className={parisienne.className}
              style={{
                fontWeight: "normal",
              }}
            >
              Aga-chuu
            </h1>
          </div>
        </div>
        <div className="seiyuuOVL">
          <img
            style={{
              width: "20rem",
              top: "10rem",
              right: "10rem",
              transform: "rotate(10deg)",
              pointerEvents: "initial",
              cursor: "help",
            }}
            src="https://pbs.twimg.com/media/GiAU6lybYAAvV0D?format=jpg&name=4096x4096"
            alt=""
            title="aside from vtubing, she also became known as a cosplayer who goes by the title of the Incumbent First CosMaria&#x1f343;💐 -- a title that she proudly held unto since her first stint last year-end of 2023. notably, she's mostly known for her representation as the IRL version of her vtuber self."
          />
          <img
            style={{
              width: "22.5rem",
              aspectRatio: "3 / 4.5",
              objectFit: "cover",
              objectPosition: "60% center",
              bottom: "30rem",
              left: "10rem",
              transform: "rotate(-5deg)",
            }}
            src="https://pbs.twimg.com/media/GiAU6YZacAA_UyX?format=jpg&name=large"
            alt=""
          />
          <img
            style={{
              width: "30rem",
              objectPosition: "60% center",
              bottom: "10rem",
              right: "7.5rem",
              transform: "rotate(7.5deg)",
            }}
            src="https://pbs.twimg.com/media/GNcItWGaUAAY5TP?format=jpg&name=4096x4096"
            alt=""
          />
        </div>
        <div className="seiyuuContent">
          <div
            style={{
              backgroundColor: "#ffffff40",
              padding: "calc(15rem * 0.25) calc(15rem * 0.125)",
              borderRadius: "1.5rem",
              WebkitBackdropFilter: "blur(1.5rem)",
              backdropFilter: "blur(1.5rem)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p>meet the Benefactor</p>
              <br />
              <h1>Aga-chuu</h1>
              <p style={{ fontWeight: "bold" }}>the First Maria&#x1f343;</p>
              <br />
              <h3 style={{ fontStyle: "italic" }}>
                the primary benefactor of the Marias.
                <br />a loving Mother at heart.
              </h3>
              <br />
              <div className="seiyuuSocials">
                <i
                  className="bi bi-flower1"
                  title="V三人のマリア"
                  onClick={() => {
                    window.open("https://vtresmarias.github.io");
                  }}
                ></i>
                <i
                  className="bi bi-globe"
                  title="website"
                  onClick={() => {
                    window.open("https://thebelovedmoon.github.io");
                  }}
                ></i>
                <i
                  className="bi bi-twitter-x"
                  title="X"
                  onClick={() => {
                    window.open("https://mobile.x.com/thebelovedmoon");
                  }}
                ></i>
                <i
                  className="bi bi-facebook"
                  title="facebook"
                  onClick={() => {
                    window.open("https://web.facebook.com/thebelovedmoon");
                  }}
                ></i>
                <i
                  className="bi bi-instagram"
                  title="instagram"
                  onClick={() => {
                    window.open("https://instagram.com/themoon_follow");
                  }}
                ></i>
                <i
                  className="bi bi-threads"
                  title="threads"
                  onClick={() => {
                    window.open("https://threads.com/themoon_follow");
                  }}
                ></i>
                <i
                  className="bi bi-youtube"
                  title="youtube"
                  onClick={() => {
                    window.open("https://youtube.com/@thebelovedmoon");
                  }}
                ></i>
                <i
                  className="bi bi-twitch"
                  title="twitch"
                  onClick={() => {
                    window.open("https://twitch.tv/thebelovedmoon");
                  }}
                ></i>
                <i
                  className="bi bi-tiktok"
                  title="tiktok"
                  onClick={() => {
                    window.open("https://tiktok.com/@themoon_follow");
                  }}
                ></i>
                <i
                  className="bi bi-reddit"
                  title="reddit"
                  onClick={() => {
                    window.open("https://reddit.com/user/thebelovedmoon");
                  }}
                ></i>
                <i
                  className="bi bi-soundwave"
                  title="soundcloud"
                  onClick={() => {
                    window.open("https://soundcloud.com/thebelovedmoon");
                  }}
                ></i>
                <i
                  className="bi bi-github"
                  title="github"
                  onClick={() => {
                    window.open("https://github.com/thebelovedmoon");
                  }}
                ></i>
                <i
                  className="bi bi-envelope-at-fill"
                  title="email"
                  onClick={() => {
                    window.open("mailto:jelsa14018@gmail.com", "_self");
                  }}
                ></i>
              </div>
            </div>
            <br />
            <p>
              born on 15 Mar, Mother Agatha -- colloquially known as Aga-chuu --
              has a deep history with the management of Emii Shion before its
              unveiling as the Alternative; most notably that it was previously
              a part of a vtuber agency wherein it was commandeered by her close
              friend -- the Third Maria&#x1f338; -- before it was formally
              handed over.
            </p>
            <br />
            <p>
              as part of her efforts to diversify her areas of interest as a
              vtuber, she has dedicated this presence to mainly Evertale
              content. however, it didn&apos;t take very long for the two vtuber
              personalities to integrate seamlessly -- meaning some of the
              experiences from the Alternative ended up being carried over to
              her now-called Mainstream presence.
            </p>
            <br />
            <p>
              alongside the aforementioned, she is also the benefactor of other
              vtubers she manages through the vtNet network: Sumiyoi Sakura from
              &quot;Ojou-sama Yomeiri Kousou&quot;, Senri Mana from
              &quot;Princess Connect! Re:Dive&quot;, and Chloe from
              &quot;Detroit: Become Human&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="EmiiAURORA">
        <div className="AURORAtxt">
          <div>
            <h2>
              an ode to AURORA{" "}
              <i
                style={{ display: "inline-block" }}
                className="bi bi-music-note"
              ></i>
            </h2>
            <br />
            <p>
              Emii was originally a part of AURORA&apos;s freshest lineup of
              prospective talents, before she was formally handed over to
              independence due to unforeseen reasons.
            </p>
            <br />
            <p>
              and during her initial tenure, she was being taken care of by a
              familiar face of the vtubing industry at the time: the Third
              Maria&#x1f338; --{" "}
              <span
                onClick={() => {
                  window.open("https://thebelovedmoon.github.io/hinaoujo");
                }}
              >
                Hina Oujo
              </span>
              ; where she was initially named &quot;Suzu&quot;.
            </p>
            <br />
            <p>
              however; 18 days after her formal debut, circumstances came that
              had forced her to prematurely retire from AURORA -- with her
              presence in the shadows, unable to be seen; until the formal
              handover through mutual connections to Aga-chuu, the First
              Maria&#x1f343;.
            </p>
            <br />
            <p>
              bearing the Benefactor of the First Regina -- Aga is then tasked
              to keep Emii&apos;s past legacy alive as she pushes forward for
              its new legacy ahead.
            </p>
            <br />
            <img src="/images/AURORA/AURORA_alt.svg" alt="" />
            <br />
            <br />
            <p style={{ fontSize: "0.625em", fontStyle: "italic" }}>
              &quot;AURORA&quot; is a modified name for AuroraLiveVR, where Emii
              was initially affiliated with.
            </p>
          </div>
        </div>
        <div className="AURORApink">
          <img src="/images/AURORA/EmiiAURORA.png" alt="" />
        </div>
      </div>
      <ReginaPromote />
    </main>
  );
}
