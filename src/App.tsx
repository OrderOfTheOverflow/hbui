import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from '../hbui/system/GlobalStyles'

import ScrollToTop from './dsmsite/system/ScrollToTop'

// sidebar
import DSMSidebar from './dsmsite/sidebar/DSMSidebar'

// pages
import Home from './dsmsite/pages/home'
import GettingStarted from './dsmsite/pages/gettingstarted'
import Guidelines from './dsmsite/pages/guidelines'
import DesignTokens from './dsmsite/pages/designtokens'
import Code from './dsmsite/pages/code'
import Elements from './dsmsite/pages/elements'
import Components from './dsmsite/pages/components'
import Downloads from './dsmsite/pages/downloads'
import FAQ from './dsmsite/pages/faq/FAQ'

// elements
import LayoutCoreSingle from './dsmsite/pages/elements/layout/LayoutCoreSingle'
import LayoutCoreSidebar from './dsmsite/pages/elements/layout/LayoutCoreSidebar'
import LayoutExtra from './dsmsite/pages/elements/layout/LayoutExtra'
import TypographyElements from './dsmsite/pages/elements/typography/Typography'
import TypographyTests from './dsmsite/pages/elements/typography/Tests'
import ButtonElementRegular from './dsmsite/pages/elements/button/Button'
import ButtonElementSizes from './dsmsite/pages/elements/button/ButtonSizes'
import ButtonElementDisabled from './dsmsite/pages/elements/button/ButtonDisabled'
import InputElement from './dsmsite/pages/elements/input/Input'

// components
import ButtonComponent from './dsmsite/pages/components/button/Button'
import ExternalLinkButton from './dsmsite/pages/components/button/ExternalLinkButton'
import TextInput from './dsmsite/pages/components/textinput/TextInput'
import TextInputCustomLabel from './dsmsite/pages/components/textinput/TextInputCustomLabel'
import TextInputExtendedLabel from './dsmsite/pages/components/textinput/TextInputExtendedLabel'
import TextInputRequired from './dsmsite/pages/components/textinput/TextInputRequired'
import TextInputPrefix from './dsmsite/pages/components/textinput/TextInputPrefix'
import ChipComponent from './dsmsite/pages/components/chip/Chip'
import Spinner from './dsmsite/pages/components/spinner/Spinner'
import Callout from './dsmsite/pages/components/callout/Callout'
import Snackbar from './dsmsite/pages/components/snackbar/Snackbar'
import NavBarPage from './dsmsite/pages/components/navigation/navbar/NavBar'
import BreadcrumbsBarPage from './dsmsite/pages/components/navigation/breadcrumbs/BreadcrumbsBar'
import ComboBoxPage from './dsmsite/pages/components/combobox/ComboBox'
import SwitchPage from './dsmsite/pages/components/switch/Switch'
import CheckboxPage from './dsmsite/pages/components/checkbox/Checkbox'
import CardsPage from './dsmsite/pages/components/cards/Cards'
import VideoComponentsPage from './dsmsite/pages/components/video/Video'
import CodeBlockPage from './dsmsite/pages/components/code/CodeBlock'

import Spacings from './dsmsite/pages/designtokens/spacings/Spacings'

// guidelines
import Colors from './dsmsite/pages/guidelines/colors/Colors'
import TypographyGuidelines from './dsmsite/pages/guidelines/typography/Typography'
import CoinAlphaBrand from './dsmsite/pages/guidelines/coinalpha_brand/CoinAlphaBrand'

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <DSMSidebar />
        <Main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/design-tokens" element={<DesignTokens />} />
            <Route path="/code" element={<Code />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/components" element={<Components />} />

            <Route path="/design-tokens/spacings" element={<Spacings />} />
            
            <Route
              path="/elements/layout-core"
              element={<LayoutCoreSingle />}
            />
            <Route
              path="/elements/layout-core/sidebar"
              element={<LayoutCoreSidebar />}
            />
            <Route path="/elements/layout-extra" element={<LayoutExtra />} />
            <Route path="/elements/typography" element={<TypographyElements />} />
            <Route path="/elements/typography/tests" element={<TypographyTests />} />
            <Route
              path="/elements/button"
              element={<ButtonElementRegular />}
            />
            <Route
              path="/elements/button/large"
              element={<ButtonElementSizes />}
            />
            <Route
              path="/elements/button/disabled"
              element={<ButtonElementDisabled />}
            />
            <Route path="/elements/text-input" element={<InputElement />} />

            <Route path="/components/button" element={<ButtonComponent />} />
            <Route path="/components/externallinkbutton" element={<ExternalLinkButton />} />
            <Route path="/components/chip" element={<ChipComponent />} />
            <Route path="/components/text-input" element={<TextInput />} />
            <Route
              path="/components/text-input/custom-label"
              element={<TextInputCustomLabel />}
            />
            <Route
              path="/components/text-input/extended-label"
              element={<TextInputExtendedLabel />}
            />
            <Route
              path="/components/text-input/required"
              element={<TextInputRequired />}
            />
            <Route
              path="/components/text-input/prefix"
              element={<TextInputPrefix />}
            />
            <Route path="/components/spinner" element={<Spinner />} />
            <Route path="/components/callout" element={<Callout />} />
            <Route path="/components/snackbar" element={<Snackbar />} />
            <Route path="/components/navigation/navbar" element={<NavBarPage />} />
            <Route path="/components/navigation/breadcrumbs" element={<BreadcrumbsBarPage />} />
            <Route path="/components/combobox" element={<ComboBoxPage />} />
            <Route path="/components/switch" element={<SwitchPage />} />
            <Route path="/components/checkbox" element={<CheckboxPage />} />
            <Route path="/components/cards" element={<CardsPage />} />
            <Route path="/components/video" element={<VideoComponentsPage />} />
            <Route path="/components/code" element={<CodeBlockPage />} />

            <Route path="/guidelines/colors" element={<Colors />} />
            <Route path="/guidelines/typography" element={<TypographyGuidelines />} />
            <Route path="/guidelines/coinalpha-brand" element={<CoinAlphaBrand />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  )
}

export default App

const Main = styled.div(() => [
  tw`bg-body transition-all w-full ml-0 md:w-[calc(100% - 270px)] md:ml-[270px]`,
])
