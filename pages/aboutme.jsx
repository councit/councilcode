import Link from "next/link";
import TailwindButton from "../components/TailwindButton";

function AboutMe() {
  return (
    <>
      <p>Hi my name is Taylor Council</p>
      <p>
        I am a self taught software engineer. I feel so grateful to have found
        my passion in coding, and better then that having a career that I love.
        My goal is to bring the readers of this space along with me and share
        lessons I have learned along the way. I live in Seattle with my
        wonderful wife, and whirl wind of a dalmatian. I enjoy learning and
        growing as a developer. I like to spend quality time with my family. As
        a California native, I like to surf when I have the opportunity.
      </p>
      <section>
        <h1 class="text-2xl"> Work History </h1>

        <p>
          I currently work as a senior frontend software engineer for Willow
          Inc. I have had the opportunity to lead large scale projects and
          features. One project that I am really proud of includes leading the
          frontend development for a feature known as [Time
          Series](https://www.willowinc.com/posts/introducing-time-series/).
          Time Series provides trend series data for clients IOT assets. This
          feature provided a great technical challenge. Working with thousands
          of assets taught me lessons in managing state at scale. I learned how
          to manage complex tickets across a global team. **Seattle Children's
          Hospital** At Seattle Children's Hospital (_SCH_) I was a Continuous
          Improvement Consultant. As a consultant I lead improvement work for
          various clinics across the hospital. My focus was in technical
          improvement, and discrete simulation modeling. I enjoyed my time at
          SCH and learned how to apply data science to real world application. I
          was accepted into the Data Science Mentorship program, where I used
          Python to analyse improvement opportunities.
        </p>

        <p>
          **Boeing** Boeing is where my professional career began. I started as
          an Industrial Engineer (_IE_). As an IE I lead process improvement
          projects, leading so cost savings in the millions. I learned how to
          lead large scale projects and work with cross functional teams. After
          working as an IE, I was promoted to an Operations Manager. As an
          Operations Manager, I led a cross functional team of about 40 people.
          This position gave me a crash course in leadership. I was so proud of
          the accomplishments my team was able to achieve. The team successfully
          increased operations to the fastest rate for the 737 program in
          history. My dream is to be a thought leader in software development.
          My success is only possible from the wonderful community that has paid
          their dues before me. I wish to help anyone who wants to become a
          software engineer who might need a little nudge or encouragement along
          the way. There are many mistakes I have made so far (and will continue
          to make). These mistakes have provided valuable lessons that I hope
          can help others. I hope that this blog can continue a conversation of
          self improvement. Thank you for reading, please connect on one of the
          platforms below!
        </p>
      </section>
      <h1 class="text-2xl"> Let's Connect </h1>
      <ul>
        <li>
          <Link href="https://twitter.com/councit">
            <a>Twitter</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/taylorcouncil/">
            <a>LinkedIn</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/councit">
            <a>GitHUb</a>
          </Link>
        </li>
      </ul>

      <Link href="/">
        <a>
          <TailwindButton>Home</TailwindButton>
        </a>
      </Link>
    </>
  );
}

export default AboutMe;
