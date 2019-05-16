import { Box, color, Flex } from "@artsy/palette"
import { isHTLAdEnabled } from "Components/Publishing/Ads/EnabledAd"
import { AdDimension, AdUnit } from "Components/Publishing/Typings"
import React, { SFC } from "react"
import styled from "styled-components"
import { ErrorBoundary } from "../../ErrorBoundary"

export interface DisplayPanelProps extends React.HTMLProps<HTMLDivElement> {
  adUnit?: AdUnit
  adDimension?: AdDimension
}

export const NewDisplayPanel: SFC<DisplayPanelProps> = props => {
  const { adDimension, adUnit } = props

  if (!isHTLAdEnabled()) {
    return null
  }

  return (
    <ErrorBoundary>
      <Wrapper m={["auto", "0 auto", "auto"]} color="black100">
        <DisplayPanelContainer
          flexDirection="column"
          className="DisplayPanel__DisplayPanelContainer"
          p={2}
          m={["auto", "auto", "auto", "inherit"]}
        >
          <div
            className="htl-ad"
            data-unit={adUnit}
            data-sizes={adDimension}
            data-eager
          />
        </DisplayPanelContainer>
      </Wrapper>
    </ErrorBoundary>
  )
}

const Wrapper = styled(Box)`
  cursor: pointer;
  text-decoration: none;
  max-width: 360px;
`
const DisplayPanelContainer = styled(Flex)`
  border: 1px solid ${color("black10")};
  max-width: 360px;
  box-sizing: border-box;
`

// Set names for tests and DOM
DisplayPanelContainer.displayName = "DisplayPanelContainer"
Wrapper.displayName = "Wrapper"