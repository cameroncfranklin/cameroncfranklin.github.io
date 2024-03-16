import React from "react";
import './styles.css';

const ProfileCard = () => {
    return (
<figure class="fir-image-figure">

  <a class="fir-imageover" rel="noopener" target="_blank" href="https://www.linkedin.com/in/cameroncfranklin/">
    <img class="fir-author-image fir-clickcircle" src="https://media.licdn.com/dms/image/D5603AQGGLjGcTP5S9g/profile-displayphoto-shrink_800_800/0/1705427865504?e=1715817600&v=beta&t=tzsSbIW0NALIz42Ww-zi-QqbF0gNUhdPm_a4epOkKb4" alt="David East - Author"/>
    <div class="fir-imageover-color"></div>
    <img class="fir-imageover-image fir-clickcircle" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F55026&psig=AOvVaw0u4bDx5KsPOWP7aDMG_bsM&ust=1710647578699000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCLjXqfzw94QDFQAAAAAdAAAAABAQ" />
  </a>

  <figcaption>
    <div class="fig-author-figure-title">Cameron Franklin</div>
    <div class="fig-author-figure-title">Software Engineer @ Reddit</div>
    <div class="fig-author-figure-title">USC Viterbi Alumnus (MS in CS) </div>
  </figcaption>
</figure>
)
}

export default ProfileCard;