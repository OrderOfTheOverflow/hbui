/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { ShortHero, MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../hbui/components/code/CodeBlock'
import {
  P,
  Bold,
  H6,
  Red,
  Blue,
  Green,
} from '../../../hbui/elements/typography'
import {
  red,
  green,
  blue,
  purple,
  orange,
} from '../../../hbui/constants/colors'
import colors from '../../../hbui/constants/colors'
import {
  PageRoot,
  Section,
  Container,
  SBLRoot,
  SBLRootContent,
  SBLRootSidebar,
  Separator
} from '../../../hbui/elements/layout'

const LayoutCore = () => (
  <Layout>
    <ShortHero title="Layout" />
    <MainContent>
      <P>
        The single column layout is the simplest layout and consists of a
        single central column housing all the content.
      </P>
      <br />
      <Separator />
      <br />
      <br />
      <H6>The 3 main elements:</H6>
      <br />
      <P isBold>PageRoot</P>
      <br />
      <P>
        Placed at the root of a page, ensures the page always takes the full
        height of the browser window. A great way to ensure the correct
        background color fills the screen.
      </P>
      <br />
      <P isBold>Section</P>
      <br />
      <P>
        Takes the full width of the screen, and is ready to handle a{' '}
        <Bold>Container</Bold> inside.
      </P>
      <br />
      <P isBold>Container</P>
      <br />
      <P>
        Is the central column, within a single-column layout.{' '}
        <Bold>Responsive</Bold> by default.
      </P>
      <br />
      <br />
      <br />
      <H6>Example:</H6>
      <br />
      <P>
        Resize the browser to see the interplay between{' '}
        <Green>PageRoot</Green>, <Red>Section</Red> and <Blue>Container</Blue>
        :
      </P>
      <br />
      <P>
        (Note how the <Green>PageRoot</Green> takes the full screen height,
        the <Red>Section</Red> the full width, and the <Blue>Container</Blue>{' '}
        a constrained central position.)
      </P>
      <br />
      <PageRoot style={{ border: `2px solid ${green}` }}>
        <Section style={{ border: `2px solid ${red}` }}>
          <Container style={{ border: `2px solid ${blue}` }}>
            <P>
              Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur
              blandit tempus porttitor. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Curabitur blandit tempus
              porttitor.
            </P>
          </Container>
        </Section>
      </PageRoot>
      <br />
      <CodeBlock code={codeSingleColumnLayout} />
      <br />
      <br />

      <br />
      <br />
      <P>
        The sidebar layout consists of a sidebar on the left side together
        with a single column layout on the right side.
      </P>
      <br />
      <Separator />
      <br />
      <br />
      <H6>The 3 main elements:</H6>
      <br />
      <P isBold>SBLRoot</P>
      <br />
      <P>
        Placed at the root of a sidebar layout page, handles the containment
        of <Bold>SBLRootSidebar</Bold> and <Bold>SBLRootContent</Bold>.
      </P>
      <br />
      <P isBold>SBLRootSidebar</P>
      <br />
      <P>
        The container for the content in the sidebar, such as navigation. This
        element will be hidden in small screens (mobile) and should be
        replaced with a mobile navigation.
      </P>
      <br />
      <P isBold>SBLRootContent</P>
      <br />
      <P>
        The container where the main content will be placed. A{' '}
        <Red>Section</Red> and <Blue>Container</Blue> elements should be
        placed inside this element to ensure correct responsive behavior.
      </P>
      <br />
      <P>
        Resize the browser to see the responsive behavior in action. Also,
        note how the layout takes the height of your browser window, and how
        the content area is scroolable.
      </P>
      <br />
      <SBLRoot style={{ border: `2px solid ${green}` }}>
        <SBLRootSidebar style={{ border: `2px solid ${purple}` }}>
          <P>Sidebar</P>
        </SBLRootSidebar>
        <SBLRootContent style={{ border: `2px solid ${blue}` }}>
          <Section style={{ border: `2px solid ${red}` }}>
            <Container style={{ border: `2px solid ${blue}` }}>
              <P>
                Nullam id dolor id nibh ultricies vehicula ut id elit.
                Curabitur blandit tempus porttitor. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Curabitur blandit
                tempus porttitor.
              </P>
              <br />
              <P>
                Maecenas faucibus mollis interdum. Vestibulum id ligula porta
                felis euismod semper. Maecenas sed diam eget risus varius
                blandit sit amet non magna. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet. Donec ullamcorper
                nulla non metus auctor fringilla. Nullam id dolor id nibh
                ultricies vehicula ut id elit.
              </P>
              <br />
              <P>
                Cras mattis consectetur purus sit amet fermentum. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia
                quam venenatis vestibulum. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
              </P>
              <br />
              <P>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Cras mattis consectetur purus sit amet fermentum. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Aenean lacinia
                bibendum nulla sed consectetur.
              </P>
              <br />
              <P>
                Donec id elit non mi porta gravida at eget metus. Etiam porta
                sem malesuada magna mollis euismod. Aenean lacinia bibendum
                nulla sed consectetur. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus. Donec sed odio dui. Maecenas faucibus
                mollis interdum.
              </P>
              <br />
              <P>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Aenean lacinia bibendum nulla sed consectetur. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Duis mollis,
                est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit.
              </P>
              <br />
              <P>
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.
                Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Maecenas faucibus mollis interdum.
              </P>
              <br />
              <P>
                Maecenas sed diam eget risus varius blandit sit amet non
                magna. Curabitur blandit tempus porttitor. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec id
                elit non mi porta gravida at eget metus. Curabitur blandit
                tempus porttitor. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Maecenas sed diam eget risus varius blandit sit
                amet non magna.
              </P>
              <br />
              <P>
                Sed posuere consectetur est at lobortis. Donec sed odio dui.
                Aenean lacinia bibendum nulla sed consectetur. Donec sed odio
                dui. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Nulla vitae elit libero, a pharetra augue.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </P>
              <br />
              <P>
                Etiam porta sem malesuada magna mollis euismod. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
                Donec id elit non mi porta gravida at eget metus. Aenean eu
                leo quam. Pellentesque ornare sem lacinia quam venenatis
                vestibulum. Donec ullamcorper nulla non metus auctor
                fringilla.
              </P>
              <br />
              <P>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Donec ullamcorper nulla non metus auctor fringilla.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Sed posuere consectetur est at lobortis. Duis mollis, est non
                commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                sem nec elit.
              </P>
              <br />
              <P>
                Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Donec ullamcorper
                nulla non metus auctor fringilla. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Cras mattis consectetur purus sit amet fermentum. Sed posuere
                consectetur est at lobortis. Etiam porta sem malesuada magna
                mollis euismod.
              </P>
              <br />
            </Container>
          </Section>
        </SBLRootContent>
      </SBLRoot>
      <br />
      <CodeBlock code={codeSideBarLayout} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default LayoutCore

const codeSingleColumnLayout = String.raw`import { PageRoot, Section, Container } from '@hummingbot/hbui/elements/layout'
import { P } from '@hummingbot/hbui/elements/typography'

<PageRoot>
  <Section>
    <Container>
      <P>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor.</P>
    </Container>
  </Section>
</PageRoot>
`

const codeSideBarLayout = String.raw`import { SBLRoot, SBLRootSidebar, SBLRootContent, Section, Container } from '@hummingbot/hbui/elements/layout'
import { P } from '@hummingbot/hbui/elements/typography'

<SBLRoot>
  <SBLRootSidebar>
    <P>Sidebar</P>
  </SBLRootSidebar>
  <SBLRootContent>
    <Section>
      <Container>
        <P>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor.</P>
        <br />
        <P>Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</P>
        <br />
        <P>Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</P>
        <br />
        <P>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</P>
        <br />
        <P>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Maecenas faucibus mollis interdum.</P>
        <br />
        <P>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</P>
        <br />
        <P>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum.</P>
        <br />
        <P>Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.</P>
        <br />
        <P>Sed posuere consectetur est at lobortis. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</P>
        <br />
        <P>Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.</P>
        <br />
        <P>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</P>
        <br />
        <P>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod.</P>
        <br />
      </Container>
    </Section>
  </SBLRootContent>
</SBLRoot>
`
