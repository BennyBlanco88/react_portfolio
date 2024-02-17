import React from "react";
import savorySecretsImage from "../../assets/small/savorySecrets.png";
import dayCalendarImage from "../../assets/small/dayCalendar.png";
import codeQuizImage from "../../assets/small/codeQuiz.png";
import noteTakerImage from "../../assets/small/noteTaker.png";
import techBlogImage from "../../assets/small/techBlog.png";
import groovyGraphicsImage from "../../assets/small/groovyGraphics.png";
import firstPortfolioImage from "../../assets/small/firstPortfolio.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/BennyBlanco88/savory-secrets/">
                {" "}
                <img
                  src={savorySecretsImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="savorySecrets"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Savory Secrets</h4>
              <p>
              During my initial group project in the bootcamp, we were tasked with showcasing our proficiency acquired over the first two months of learning. Collaborating with my team, we developed a website enabling users to explore various recipes. Leveraging the Edamame and YouTube APIs, our platform seamlessly delivered personalized results based on user input.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mysterious-tor-96043-8848ad7df72e.herokuapp.com/">
                {" "}
                <img
                  src={groovyGraphicsImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="groovyGraphics"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Groovy Graphics</h4>
              <p>
              For our second group project in the bootcamp, our team demonstrated proficiency in both front-end and back-end web development. We opted to push our boundaries by integrating AI into our project. Our resulting web application features an AI image generator, empowering users to create custom artwork. This artwork can then be utilized as personalized album covers for their favorite music. {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://thawing-beach-39460-9708fe5d041c.herokuapp.com/">
                {" "}
                <img
                  src={techBlogImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="techBlog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tech Blog</h4>
              <p>
              Developed using the model-view-controller framework, this application enables users to engage in tech-centric discussions with others. Serving as a centralized hub, the platform facilitates sharing, exploring, and conversing about the latest trends, insights, and innovations in the tech industry.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://evening-journey-18478-50f1762612e8.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="noteTaker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that provides the user the ability to add new
                notes, and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bennyblanco88.github.io/code_quiz/">
                {" "}
                <img
                  src={codeQuizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="codeQuiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Coding Quiz</h4>
              <p>
              An intuitive application designed for coders to assess their coding knowledge through a concise quiz while seamlessly tracking their scores. The quiz comprises five questions covering coding basics, with a time limit of 120 seconds for completion. For each missed question, a five-second penalty is incurred. Upon completion, users have the option to save their high scores by entering their initials.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bennyblanco88.github.io/simple_calendar_app/">
                {" "}
                <img
                  src={dayCalendarImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="dayCalendar"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Simple Day Calendar App</h4>
              <p>
              Among my earliest projects in the bootcamp was a straightforward Calendar Application designed to showcase hourly tasks throughout a typical 9-to-5 workday.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bennyblanco88.github.io/my-portfolio/">
                {" "}
                <img
                  src={firstPortfolioImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="firstPortfolio"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>firstPortfolio</h4>
              <p>
              My first project in bootcamp, and one of my favorites, involved crafting my initial portfolio. This portfolio serves as a foundational tool for securing future employment opportunities. It features sections dedicated to showcasing my background, experience, work samples, and a contact form for easy communication.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;