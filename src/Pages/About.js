import React from "react";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutHeader">
          <h1>Hello, I'm Charlie Rogers</h1>
          <h4>
            I understand you would like to know more about me, well here you
            go!!!
          </h4>
        </div>
        <section className="aboutSection">
          <p>
            I am just a man trying to do better for his family. By giving them
            the things I did not have growing up, or could not obtain when I was
            a younger man. I was in the Military for eight years, and I have
            nothing but a DD-214 to show for it. I didn't know the importance of
            investing in my life after the Military and I didn't take advantage
            of the Military's extra training courses.
          </p>
          <p>
            After the Military, I joined the International Brotherhood of
            Electrical Workers, and started an entertainment company in Oklahoma
            City, Oklahoma. I wanted to build a stronger online presence for my
            company, through did not have the cash flow to pay a freelance
            developer. So I built the website myself and to be honest it was
            horrible and I'm being kind to myself. Never-the-less This is when I
            fell in love with <b>coding</b>. I started working through the
            FreeCodeCamp curriculum in the summer of 2016, I learned the basics
            about <b>HTML</b>,<b> CSS</b> and <b>jQuery</b> but because it was
            geared towards self study with limited help during my start. I fell
            off and focused on working in the electrical field, though after
            being laid off one holiday I applied to Lambda School. It took me
            two months to pass the placement test to get into Lambda, I started
            at Lambda School full time in February 2019 in their Full Stack Web
            Developer track.
          </p>
          <p>
            I can say, without a doubt, that I was not ready. There were many
            nights I wanted to quit. Many nights I was excited that I got some
            thing to work, and even more nights where I studied throughout to
            get a concept. It was not until I talked to my Team Leads, that
            Lambda assigns to every student, that I started to get serious about
            my education. The phrase that resonated with me the most was,
            "Lambda will not let you fail until you give up on yourself and the
            process". After that my Team Lead would force me to research, read
            documentations, and answer random questions about my track's main
            language. I have struggled more then a little bit throughout my time
            at Lambda School, though; one of the best things Lambda will teach
            you is how to learn. I for one, learn by doing, asking questions,
            and redoing. One of the Computer Science instructors put in better
            words{" "}
            <b>
              <i>
                "Do not fake it until you make it, Grind it until you find it."
              </i>
            </b>{" "}
            Now, that is what I do every day by learning some thing new, and
            relearning something I thought I knew. It is because of my drive to
            be better, and be able to provide for my family that I have learned
            and will continue to grind.
          </p>
        </section>
      </div>
      <style jsx>{`
        .aboutContainer {
          margin-top: 6rem;
        }
        .aboutHeader {
          width: 90%;
          margin: 3rem auto;
          text-align: center;
        }
        .aboutSection {
          width: 90%;
          margin: 2rem auto;
        }
      `}</style>
    </>
  );
};

export default About;
