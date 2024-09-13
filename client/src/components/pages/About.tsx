import { Trans, useTranslation } from "react-i18next";
import { PageMarkdownWrapper } from "components/Post/index";
import { MetaCard } from "../common/MetaCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MarkdownWrapper from "../common/MarkdownWrapper";
import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FaChevronRight, FaLink } from "react-icons/fa";

const H2 = styled.h2`
  margin-top: 2rem !important;
  margin-bottom: 1rem;
`;

const About: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "about" });

  return (
    <PageMarkdownWrapper>
      <MarkdownWrapper>
        <MetaCard
          title="About"
          description="Mirlo provides a user-friendly space to help artists sell digital music, receive financial support, manage mailing lists, and share with their supporters."
        />
        <Link to="/">&#8612; {t("home")}</Link>
        <h1>{t("about")}</h1>
        <p>{t("intro")}</p>
        <H2>{t("ourMission")}</H2>
        <Trans i18nKey="missionStatement" t={t}>
          <p>
            The music industry does not work for artists or listeners and needs
            a radical re-imagining.
          </p>
          <p>
            Mirlo hosts a community of artists, listeners, organizers, and
            coders who are daring to do just that: taking lessons learned from
            working in the solidarity economy and applying them to our platform.
          </p>
          <p>
            We are building an online audio distribution and patronage platform
            that aims to be radical, accessible, open source (free & libre),
            modular, and standards based.
          </p>
        </Trans>

        <div>
          <H2HashLink id="features">{t("features")}</H2HashLink>
          <Trans
            i18nKey="featuresText"
            t={t}
            components={{
              p: <p></p>,
              featuresLink: <Link to="/pages/features"></Link>,
            }}
          />

          <H2HashLink id="pricing">{t("pricing")}</H2HashLink>
          <Trans
            t={t}
            i18nKey="pricingText"
            components={{
              takeRate: <Link to="/team/posts/16"></Link>,
              p: <p></p>,
              giveDirectly: <Link to="/team/support"></Link>,
              i: <em></em>,
            }}
          />
        </div>
        <div>
          <H2HashLink id="story">Our story</H2HashLink>

          <p>
            The idea of Mirlo grew out of conversations that began in late 2022
            as a handful of musicians, technologists, and mutual aid organizers
            began to find each other and reflect on their experiences working
            with two ongoing music cooperative initiatives at the time,{" "}
            <a href="https://ampled.com/">Ampled</a> and{" "}
            <a href="https://resonate.coop/">Resonate</a>. Through those
            conversations, we began to develop a shared analysis of today’s
            precarious music industry and invited others to join us in the
            conversations we published online at{" "}
            <a href="https://funmusic.place">Fun Music Place</a>. We also
            started to{" "}
            <a href="https://funmusic.place/blog/the-spotify-ai-blues/">
              dream together
            </a>{" "}
            about what alternatives that foregrounded mutual aid and the value
            of musical creativity might actually look like. Two of the group
            members, LLK and Si, wrote code for an initial software product.
          </p>
          <p>
            As these conversations unfolded, Bandcamp was sold again, firing
            half of their employees in the process. We realized the heightened
            need for viable alternatives to the corporate giants. Ultimately,
            three of us who were based in the United States{" "}
            <a href="https://mirlo.space/team/posts/10/"> formed an LLC</a> and
            became the{" "}
            <a href="https://mirlo.space/team">
              official co-founders and worker-owners
            </a>{" "}
            , with other contributors continuing to offer support
            internationally. We joined the{" "}
            <a href="https://www.usworker.coop/en/">
              US Federation of Worker Cooperatives
            </a>{" "}
            as a startup member and are currently finalizing our operating
            agreement to incorporate consent-based cooperative governance into
            our foundational protocols, inspired by the principles of{" "}
            <a href="https://www.sociocracyforall.org/sociocracy/">
              Sociocracy
            </a>
            .
          </p>
        </div>
        <div>
          <H2HashLink id="need-support">We need your support</H2HashLink>
          <p>
            Since our soft launch earlier this year, we have been amazed by the
            influx of support from open source developers, musicians, listeners,
            cultural workers, and cooperative proponents. Still, Mirlo is an
            ambitious project.
          </p>

          <p>
            We need your help to make it a reality. To pull it off we need money
            to pay ourselves for our time as well as for all the material costs
            of running a business at this scale. In May, we{" "}
            <a href="https://www.kickstarter.com/projects/mirlo/mirlo">
              ran a successful kickstarter
            </a>{" "}
            which gave us some runway for the rest of this year. It would cover
            our basic costs including legal fees, server fees, travel fees, etc.
            Our estimated budget can be viewed{" "}
            <a href="link to spreadsheet">here</a>.
          </p>
          <p>
            In the meantime, we are seeking ongoing financial support on Mirlo
            itself. Please pitch in on{" "}
            <a href="https://mirlo.space/team/support">our team's</a> support
            page!
          </p>
          <p>
            We've also received a grant from the Greater Washington Center for
            Employee Ownership to{" "}
            <a href="https://mirlo.space/team/posts/72/">
              further cooperative education in DC
            </a>{" "}
            and put on an event in the area next year. If you're in the DMV
            region and would like to participate, please get in touch.
          </p>
        </div>
        <div>
          <H2HashLink id="vision">Our Vision</H2HashLink>
          <p>
            Mirlo aims to bring about a vibrant ecosystem that values creative
            work and ensures that artists don't have to sacrifice basic needs in
            order to follow their inspiration. We believe that in order to bring
            that world about, we need tools to help connect one another through
            music, grounded in the material challenges of musicians struggling
            through the drudgery of isolation and
            hyperindividualism---especially those who come from working-class
            backgrounds and people of the global majority, who are
            disproportionately impacted by today’s dominant systems.
          </p>
          <p>
            Given how much music is mediated through the internet, musicians
            need to have a say in how those tools are built and maintained. We
            believe that an approach that prioritizes long-term sustainability,
            emphasizes transparency, practices informed consent, and welcomes
            serendipity through open standards will offer a path towards these
            goals.
          </p>
          <p>
            We also recognize that some of these ideals will have to be
            negotiated through intense contradictions as they come into conflict
            with the ruins of the market-driven music industry we're living in
            today. To work through those contradictions, we prioritize building
            trust, sharing joy, and fostering resilient relationships to find
            creative pathways towards this vision together.
          </p>
        </div>
        <div>
          <H2HashLink id="faq">FAQ</H2HashLink>
          <h3 id="pricing-faq">Pricing</h3>
          <CollapsibleList>
            <CollapsibleLI
              title="How do payouts work?"
              answer={
                <>
                  We use <a href="https://stripe.com/">Stripe</a> to process
                  payments. Artists will have to create an account with Stripe,
                  linking their bank account or debit card to the service to
                  receive payouts. Then as users purchase their albums or
                  subscribe to them, this money will be sent directly to their
                  Stripe account.
                </>
              }
            />
          </CollapsibleList>
          <h3 id="structure-faq">Structure</h3>
          <CollapsibleList>
            <CollapsibleLI
              title="What makes Mirlo different from other products?"
              id="different-from-other-products"
              answer={
                <>
                  Mirlo allows for direct and ongoing support of artists. It’s
                  different from other crowdfunding platforms because it:
                  <ul>
                    <li>
                      is rooted in mutual aid and is stewared by a worker co-op,
                      which intends to exit-to-community as a multi-stakeholder
                      cooperative;
                    </li>
                    <li>
                      It’s open source and is working together with other
                      similar products to build towards a standard-based and
                      sustainable ecosystem.
                    </li>
                  </ul>
                </>
              }
            />
            <CollapsibleLI
              title="What are the long term goals of Mirlo?"
              id="long-term-goals"
              answer={
                <>
                  <p>
                    Our goals, informed by our{" "}
                    <a href="https://funmusic.place/observations-and-intent/">
                      Observations and Intent
                    </a>
                    , will grow and change along with the community.
                  </p>
                  <p>
                    That said, we would like to make it easier for other groups
                    (like music labels or other co-ops) to install the software.
                    We’d also like to look into building plug-ins and other
                    tools that are useful for artists (for example, plug-ins
                    that help to make your music available on aggregators like
                    Distrokids or other platforms).
                  </p>
                  <p>
                    Eventually, we hope to{" "}
                    <a href="https://blog.fracturedatlas.org/exit-to-community">
                      exit to our community
                    </a>
                    , by bringing in musicians and other key stakeholders into
                    the decision making process.
                  </p>
                </>
              }
            />
            <CollapsibleLI
              title="How are decisions made?"
              answer={
                <>
                  Mirlo is maintained by a worker co-operative heavily rooted in
                  a community of musicians and other interested people. Every
                  feature on the platform is developed with input and insights
                  from the community.
                </>
              }
            />
            <CollapsibleLI
              title="How can I get in touch?"
              answer={
                <>
                  Our community is primarily hanging out on the{" "}
                  <a href="https://discord.gg/XuV7F4YRqB">Discord</a> of our
                  parent project. Come say hi!
                </>
              }
            />
            <CollapsibleLI
              title="Have you heard of &lt;project x>?"
              answer={
                <>
                  Probably! As individuals we’ve worked with and in Resonate and
                  Ampled, and we’re in touch with a couple of other projects
                  that are doing very similar things like jam.coop, faircamp,
                  ampwall, patrontape, tone.audio, and some others. We’re hoping
                  to continue talking to these folks and build towards
                  standardization of resources and tech APIs so that our
                  services can talk to each other and musicians can easily
                  switch between them. If there’s a project you want to talk
                  about, bring it up in our{" "}
                  <a href="https://discord.gg/XuV7F4YRqB">Discord</a>!
                </>
              }
            />
            <CollapsibleLI
              title="What are the main blockers facing Mirlo?"
              answer={
                <>
                  <p>
                    Our main blocker is paying our worker-owners to make space
                    to work on Mirlo. Since we don't take venture capital money
                    to fund our project we are almost entirely dependent on the
                    support of our community. Want to talk about this?{" "}
                    <a href="mailto:mirlodotspace@protonmail.com">via e-mail</a>{" "}
                    or on{" "}
                    <a href="https://discord.gg/XuV7F4YRqB">our Discord</a>.
                  </p>
                  <p>
                    Want to support us with a monthly gift? Do so on{" "}
                    <a href="/team/support">our team's</a> Mirlo profile.
                  </p>
                </>
              }
            />
          </CollapsibleList>
          <h3 id="product">Product</h3>
          <CollapsibleList>
            <CollapsibleLI
              title="Whats on your product roadmap?"
              id="product-roadmap"
              answer={
                <>
                  Check out our{" "}
                  <a href="https://github.com/funmusicplace/mirlo/issues">
                    GitHub issues tracker
                  </a>{" "}
                  for what we're working on, and what's on{" "}
                  <a href="https://github.com/funmusicplace/mirlo/discussions/categories/ideas">
                    our ideas list
                  </a>{" "}
                  to vote on what you'd like to see.
                </>
              }
            />
            <CollapsibleLI
              title="Tell me about your tech stack"
              id="tech-stack"
              answer={
                <>
                  Our front-end is a TypeScript react app and our back-end is a
                  node TypeScript express app. We’re hosted on
                  <a href="https://render.com/">Render</a>. You can see all of{" "}
                  <a href="https://github.com/funmusicplace/mirlo/">
                    our code on GitHub
                  </a>
                </>
              }
            />
            <CollapsibleLI
              title="Are you open source?"
              id="open-source"
              answer={
                <>
                  Yes! And we want your help 🙂.{" "}
                  <a href="https://github.com/funmusicplace/mirlo">
                    Check out our code
                  </a>
                  .
                </>
              }
            />
            <CollapsibleLI
              title="Will you use my music for AI training purposes?"
              id="use-music-ai"
              answer={<>No!</>}
            />
            <CollapsibleLI
              title="Can I help with testing?"
              id="can-help-testing"
              answer={
                <>
                  Yes please! Reach out to either LLK or Si on the{" "}
                  <a href="https://discord.gg/XuV7F4YRqB">Discord</a> to get
                  started.
                </>
              }
            />

            <CollapsibleLI
              title="What file formats do you support?"
              id="file-formats-supported"
              answer={
                <>
                  For upload we support lossless file formats (flac, wav). We
                  convert files across formats to be available to purchasers, as
                  well as converting them to HLS and a couple of mp3 bitrates.
                </>
              }
            />
          </CollapsibleList>
          <h3 id="support">Support, etc</h3>
          <CollapsibleList>
            <CollapsibleLI
              title="Do you have brand / logo guidelines?"
              id="brand-logo-guide"
              answer={
                <>
                  <p>
                    Yes! Check out our{" "}
                    <a href="/public/logo-guidelines-jun-30.pdf">
                      logo guidelines as of June 30, 2024
                    </a>
                    .{" "}
                  </p>
                  <p>
                    Logo downloads:{" "}
                    <a href="/public/Logo-With-Wordmark.svg">
                      SVG with wordmark
                    </a>
                    ,{" "}
                    <a href="/public/Logo_Mirlo_Transparent_RedCircle.svg">
                      SVG logo, red
                    </a>
                    ,{" "}
                    <a href="/public/android-chrome-512x512.png">
                      png logo, red (512x512)
                    </a>
                    ,{" "}
                    <a href="/public/Logo_Mirlo_Transparent_BlackCircle.png">
                      png logo, black and white (285x285)
                    </a>
                  </p>
                </>
              }
            />
            <CollapsibleLI
              title="Can an artist make a listener account, will that be a problem in the future?"
              answer={
                <>
                  <p>
                    There’s only one account type on Mirlo! Any user can make an
                    artist to upload music to at any point. To do so, click on
                    the top right menu and click on “Manage Artist”, this will
                    let you add new artists.
                  </p>
                  <p>
                    Whether or not you want to maintain a separation between
                    your artist account and your listening, is your call
                  </p>
                </>
              }
            />
            <CollapsibleLI
              title="How do I add support tiers?"
              answer={
                <>
                  <p>
                    You can add support tiers by going to your artist's profile,
                    clicking “edit page” (or navigating to it through the top
                    right dropdown menu), and then switching to the “Support
                    tiers” tab. There's an “+ add tier” button that will let you
                    create a support tier.
                  </p>
                  <p>
                    To enable this you'll need to sign up with our payment
                    processor Stripe first.
                  </p>
                </>
              }
            />
            <CollapsibleLI
              title="How can I sell individual tracks?"
              answer={
                <>
                  <p>
                    We currently don’t support selling of individual tracks, but
                    if you want to see this feature implemented,{" "}
                    <a href="https://github.com/funmusicplace/mirlo/discussions/509">
                      upvote it on our ideas tracker
                    </a>
                    .
                  </p>
                </>
              }
            />
            <CollapsibleLI
              title="Image support"
              answer={
                <>
                  <p>
                    For our album, avatar, and background images we encourage
                    people to upload higher resolution images. If you have
                    issues with your specific image, please contact us at{" "}
                    <a href="mailto:mirlodotspace@proton.me">
                      mirlodotspace@proton.me
                    </a>
                  </p>
                </>
              }
            />
          </CollapsibleList>
        </div>
      </MarkdownWrapper>
    </PageMarkdownWrapper>
  );
};

const CollapsibleList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

const CollapsibleLI: React.FC<{
  title: string;
  answer: React.ReactElement;
  id?: string;
}> = ({ title, answer, id }) => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (id && hash === `#${id}`) {
      setIsOpen(true);
    }
  }, [hash, id]);

  return (
    <li
      className={css`
        border-bottom: 1px solid var(--mi-darken-x-background-color);
        margin: 0 !important;
        padding: 0.5rem 1rem;

        > div {
          margin-bottom: 0.75rem;
          margin-top: 0.5rem;
        }
      `}
      id={id}
    >
      <button
        className={css`
          border: none;
          background: none;
          font-size: inherit;
          cursor: pointer;
          color: var(--mi-normal-foreground-color);
          font-weight: normal;
          width: 100%;
          text-align: left;

          display: flex;
          align-items: center;
          ${isOpen && `font-weight: bold;`}

          svg {
            margin-right: 0.5rem;

            ${isOpen && `transform: rotate(90deg)`}
          }
        `}
        onClick={() => {
          setIsOpen((val) => !val);
          if (id) {
            navigate(`#${id}`);
          }
        }}
      >
        <FaChevronRight />
        <span
          className={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
          `}
        >
          {title}
          {id && <FaLink />}
        </span>
      </button>
      {isOpen && <div>{answer}</div>}
    </li>
  );
};

const H2HashLink: React.FC<{
  id: string;
  children: React.ReactElement | null | string;
}> = ({ id, children }) => {
  return (
    <Link
      to={`#${id}`}
      id={id}
      className={css`
        color: inherit;
        text-decoration: none;

        svg {
          margin-left: 1rem;
          font-size: 1rem;
        }
      `}
    >
      {" "}
      <H2>
        {children}
        <FaLink />{" "}
      </H2>
    </Link>
  );
};

export default About;
