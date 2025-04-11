import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Grounded Amusing Albatross</title>
          <meta property="og:title" content="Grounded Amusing Albatross" />
        </Head>
        <Navbar8
          page4Description={
            <Fragment>
              <span className="home-text100">
                Select your next adventure path and see where it leads you.
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text101">Start Reading</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text102">#select-book-cover</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text103">Home</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text104">#home</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text105">Choose Your Adventure</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text106">Select Book Cover</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text107">#choose-your-adventure</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text108">
                Welcome to Book Adventure! Start your journey here.
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text109">
                Choose a book cover to begin your story.
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text110">#read-story</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text111">Read Story</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text112">
                Enjoy reading or listening to the story unfold.
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text113">Continue Adventure</span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action2={
            <Fragment>
              <span className="home-text114">Listen to Story</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text115">Read Story</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text116">Choose Your Adventure</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text117">
                Select a book cover to begin your interactive story adventure.
              </span>
            </Fragment>
          }
        ></Hero17>
        <Features24
          feature3Description={
            <Fragment>
              <span className="home-text118">
                Interactive storytelling experience with multiple choices
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text119">Choose Your Own Adventure</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text120">
                Read or listen to the story being narrated
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text121">Select Book Cover</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text122">
                Choose a book cover to start your adventure
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text123">Read or Listen</span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          heading1={
            <Fragment>
              <span className="home-text124">Choose Your Adventure</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text125">
                Select a book cover below to begin your interactive story
                journey.
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text126">Get Started</span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature3Description={
            <Fragment>
              <span className="home-text127">
                The story never ends, with multiple prompts to guide you through
                different adventures.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text128">
                Select from 6 different book covers to start your interactive
                story adventure.
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text129">Interactive Storytelling</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text130">Choose Your Adventure</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text131">
                Read or listen to the story and make choices that determine the
                path of your adventure.
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text132">Endless Possibilities</span>
            </Fragment>
          }
        ></Features25>
        <Pricing14
          plan3Price={
            <Fragment>
              <span className="home-text133">$19.99/month</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text134">Subscribe Now</span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text135">Basic plan</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text136">Subscribe Now</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text137">Enterprise plan</span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text138">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text139">Unlimited adventure choices</span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text140">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text141">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text142">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text143">Ad-free experience</span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text144">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text145">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text146">or $299 yearly</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text147">Get started</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text148">Subscribe Now</span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text149">All features of Plan 2</span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text150">Exclusive bonus content</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text151">$200/yr</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text152">Business plan</span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text153">Feature text goes here</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text154">Get started</span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text155">Personalized recommendations</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text156">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text157">All features of Plan 1</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text158">Pricing plan</span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text159">Feature text goes here</span>
            </Fragment>
          }
          plan1={
            <Fragment>
              <span className="home-text160">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text161">Business plan</span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text162">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text163">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="home-text164">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text165">or $29 monthly</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text166">$14.99/month</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text167">or $49 monthly</span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text168">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text169">Feature text goes here</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text170">or $20 monthly</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text171">$299/yr</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text172">or $499 yearly</span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text173">Feature text goes here</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text174">$499/yr</span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text175">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text176">Offline reading available</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text177">or $200 yearly</span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text178">Access to all stories</span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text179">Early access to new stories</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text180">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text181">Get started</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text182">$9.99/month</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text183">Enterprise plan</span>
            </Fragment>
          }
        ></Pricing14>
        <Steps2
          step1Description={
            <Fragment>
              <span className="home-text184">
                Choose from the 6 different book covers displayed on the screen.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text185">
                After reading the story, you will be presented with several
                prompts to select which adventure path to take next.
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text186">Read or Listen to the Story</span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text187">
                Once you select a book cover, the story will open on the screen.
                You can choose to read it yourself or have it dictated aloud.
              </span>
            </Fragment>
          }
          step1Title={
            <Fragment>
              <span className="home-text188">Select a Book Cover</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text189">Choose Your Adventure</span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text190">
                The story does not end! Keep selecting different paths to
                explore new adventures.
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text191">Continue Exploring</span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          author2Position={
            <Fragment>
              <span className="home-text192">Teacher</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text193">Book Lover</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text194">Sarah Johnson</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text195">Emily Brown</span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text196">
                Such a creative way to engage readers of all ages. My students
                can&apos;t get enough of it!
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text197">Michael Smith</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text198">Writer</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text199">David Lee</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text200">
                I absolutely love the interactive storytelling experience on
                this platform. It&apos;s like being the master of my own
                adventure!
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text201">Parent</span>
            </Fragment>
          }
          review1={
            <Fragment>
              <span className="home-text202">
                5 stars - Highly recommended!
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text203">What Our Readers Say</span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text204">
                My kids are hooked on the stories here. It&apos;s a great way to
                encourage their imagination and reading skills.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text205">
                As a writer myself, I appreciate the unique concept of this
                platform. It&apos;s inspiring to see storytelling taken to new
                heights.
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text206">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="home-text207">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text208">Locations</span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text209">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text210">Bucharest</span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text211">Cluj - Napoca</span>
            </Fragment>
          }
        ></Contact10>
        <Footer4
          link5={
            <Fragment>
              <span className="home-text212">Terms and Conditions</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text213">FAQ</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text214">About Us</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text215">Terms of Service</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text216">Contact Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text217">Privacy Policy</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text218">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text219">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
          .home-text218 {
            display: inline-block;
          }
          .home-text219 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
