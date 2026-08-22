"use client";

export default function Home() {
  return (
    <main>
      <div className="pickAVTuber">
        <h1>CHOOSE YOUR VTUBER</h1>
      </div>
      <div className="vtuberSelector">
        <div className="ArthurLeidram">
          <img
            src="/images/model/LeidramVroid.png"
            alt=""
            title="Arthur Regina Leidram, the Second Regina&#x1f451;"
            onClick={() => {
              window.open("ArthurLeidram");
            }}
          />
        </div>
        <div className="EmiiShion">
          <img
            src="/images/model/EmiiVroid.png"
            alt=""
            title="Emii Shion, the First Regina&#x1f423;"
            onClick={() => {
              window.open("EmiiShion");
            }}
          />
        </div>
      </div>
    </main>
  );
}
