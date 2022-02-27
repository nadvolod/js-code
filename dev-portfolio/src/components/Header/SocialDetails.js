import React from "react";
import { Div3, SocialIcons } from "./HeaderStyles";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { socialUrls } from "../../constants/socialUrls";

const SocialDetails = () => {
  return (
    <>
      <Div3>
        <SocialIcons href={socialUrls.github}>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href={socialUrls.linkedIn}>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href={socialUrls.twitter}>
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href={socialUrls.youtube}>
          <AiFillYoutube size="3rem" />
        </SocialIcons>
      </Div3>
    </>
  );
};

export default SocialDetails;
