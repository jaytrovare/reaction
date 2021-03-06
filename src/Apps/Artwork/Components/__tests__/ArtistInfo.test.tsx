import { ArtistInfoFixture } from "Apps/__tests__/Fixtures/Artwork/ArtistInfo"
import { mockTracking } from "Artsy/Analytics"
import { mount } from "enzyme"
import React from "react"
import { graphql } from "react-relay"
import { ArtistInfo } from "../ArtistInfo"

jest.unmock("react-tracking")

graphql`
  query ArtistInfo_Test_Query @raw_response_type {
    artist(id: "banksy") {
      ...ArtistInfo_artist
    }
  }
`

describe("ArtistInfo", () => {
  const getWrapper = props => {
    return mount(<ArtistInfo {...props} />)
  }

  let testProps
  beforeEach(() => {
    testProps = { artist: ArtistInfoFixture }
  })

  describe("ArtistInfo for artwork with complete artist info", () => {
    it("renders a correct component tree", () => {
      const component = getWrapper(testProps)
      expect(component.find("EntityHeader").length).toBe(1)
      expect(component.find("ArtistBio").length).toBe(1)
      expect(component.find("Button").length).toBe(1)
      expect(component.find("Button").text()).toEqual("Show artist insights")
      expect(component.find("MarketInsights").length).toBe(0)
      expect(component.find("SelectedExhibitions").length).toBe(0)
    })

    it("shows artist insights when the 'Show artist insights' button is clicked", () => {
      const component = getWrapper(testProps)
      component.find("Button").simulate("click")
      expect(component.find("MarketInsights").length).toBe(1)
      expect(component.find("SelectedExhibitions").length).toBe(1)
    })
  })

  describe("ArtistInfo for artwork with incomplete artist info", () => {
    it("Hides 'Show artist insights' button if no market insights or selected exhibitions data", async () => {
      const artist = {
        ...ArtistInfoFixture,
        highlights: {
          ...ArtistInfoFixture.highlights,
          partnersConnection: null,
        },
        collections: null,
        auctionResultsConnection: null,
        exhibition_highlights: null,
      }
      const component = getWrapper({ artist })
      expect(component.find("Button").length).toBe(0)
    })

    it("Hides 'Show artist insights' button if exhibition count does not meet minimum", async () => {
      const artist = {
        ...ArtistInfoFixture,
        highlights: {
          ...ArtistInfoFixture.highlights,
          partnersConnection: null,
        },
        collections: null,
        auctionResultsConnection: null,
        exhibition_highlights: {
          ...ArtistInfoFixture.exhibition_highlights,
          length: 1,
        },
      }
      const component = getWrapper({ artist })
      expect(component.find("Button").length).toBe(0)
    })

    it("hides ArtistBio if no data", async () => {
      const artist = {
        ...ArtistInfoFixture,
        biographyBlurb: {
          ...ArtistInfoFixture.biographyBlurb,
          text: null,
        },
      }
      const component = getWrapper({ artist })
      expect(component.find("ArtistBio").length).toBe(0)
    })

    it("hides MarketInsights if no data", async () => {
      const artist = {
        ...ArtistInfoFixture,
        highlights: {
          ...ArtistInfoFixture.highlights,
          partnersConnection: null,
        },
        collections: null,
        auctionResultsConnection: null,
      }
      const component = getWrapper({ artist })
      component.find("Button").simulate("click")
      expect(component.find("MarketInsights").html()).toBe(null)
    })

    it("hides SelectedExhibitions if no data", async () => {
      const artist = {
        ...ArtistInfoFixture,
        exhibition_highlights: [],
      }
      const component = getWrapper({ artist })
      component.find("Button").simulate("click")
      expect(component.find("SelectedExhibitions").html()).toBe(null)
    })
  })

  describe("Analytics", () => {
    it("tracks click on 'Show artist insights' button", () => {
      const { Component, dispatch } = mockTracking(ArtistInfo)
      const component = mount(<Component artist={ArtistInfoFixture as any} />)
      const button = component.find("Button")
      button.simulate("click")
      expect(dispatch).toBeCalledWith({
        action_type: "Click",
        context_module: "Biography",
        subject: "Show artist insights",
        flow: "Artwork about the artist",
        type: "Button",
      })
    })
  })
})
