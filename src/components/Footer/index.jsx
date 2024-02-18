import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <h2>Made by Ben Langs©</h2>
      <p>
        <ul>
          <a href="https://github.com/BennyBlanco88">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="www.linkedin.com/in/benjamin-f-langs-960215268/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;