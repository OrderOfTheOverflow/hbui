/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { H1, H6, P } from '../../hbui/elements/typography'
import { MainContent } from '../components/elements/layout'
import Hero from '../../hbui/components/hero/Hero'

const FAQ = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-green dark:border-terminal'>
      <H1 isHeavy>FAQ</H1>
    </Hero>
    <MainContent>
      <H6>What is this?</H6>
      <P>The code and documentation for the <a href='https://www.figma.com/file/hf03Mn2cecwA1ioUxlHg9P/Hummingbot-Design-System-1.3'>Hummingbot Design System</a></P>
      <br />
      <H6>Who can use this?</H6>
      <P>Everyone. This is an open-source project</P>
      <br />
      <H6>How can I use it?</H6>
      <P>If you are a developer, you will want to install the related NPM module: <a href='https://www.npmjs.com/package/@hummingbot/hbui'>@hummingbot/hbui</a>. Then have a look at the elements and components pages to learn how to use the specific parts.</P>
      <P>If you are a designer, have a look at the <a href='/guidelines'>Guidelines</a> and <a href='/design-tokens'>Design tokens</a>.</P>
      <P>If you are a journalist or marketeer, have a look at the <a href='/guidelines/coinalpha-brand'>CoinAlpha brand</a> and <a href='/downloads'>Downloads</a> pages.</P>
      <br />
      <H6>Can I contribute?</H6>
      <P>Yes. Check out the <a href='https://github.com/CoinAlpha/dsm'>project</a> and play around.</P>
      <br />
    </MainContent>
  </Layout>
)

export default FAQ
