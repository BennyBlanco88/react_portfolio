import React from "react";
import profileImage from "../../assets/largeProfile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Greetings, I'm Benjamin Langs, though I commonly go by Ben. Proudly rooted in Sacramento, California, I've called this vibrant city home all my life. Currently, I contribute my skills to Kaiser Permanente Hospital in a clerical capacity, amassing over 14 years of invaluable experience within its walls.
          </p>
          <p>While I appreciate my role, it's clear it doesn't align with my overarching aspirations. My heart yearns for reunification with my family, who currently reside in Zamora, Spain—a dream I'm fervently pursuing despite the challenging job market overseas and Kaiser Permanente's geographical limitations.</p>
          <p>In my quest to bridge this gap, I've returned to education, earning my AA in Social Sciences last year. This academic pursuit aimed to bolster my resume, making me an attractive candidate for remote work opportunities. Despite securing interviews with three promising companies, I faced the unfortunate constraint of U.S. tax laws prohibiting remote work from outside the country. This setback redirected my focus toward a career in web development, recognizing its global remote work potential.</p>
          <p>I'm on track to complete a rigorous coding bootcamp through U.C. by March 2024, propelling me closer to my dream of reuniting with my loved ones. Beyond academia and professional pursuits, I maintain a fervent passion for an active lifestyle, relishing snowboarding in winter, beach outings in summer, and friendly games of pool in between.</p>
          <p>Driven by self-motivation and a deep-seated determination to pursue my dreams, I understand the importance of maintaining mental acuity and physical vitality to present my best self to the world. While the path ahead remains uncertain, I'm confident that this bootcamp will serve as a gateway to new opportunities and open doors to a brighter future.</p>
        </div>
      </div>
    </section>
  );
}

export default About;