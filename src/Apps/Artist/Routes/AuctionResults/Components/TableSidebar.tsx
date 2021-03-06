import React from "react"

import { Flex, Row, Separator } from "@artsy/palette"
import { AuctionFilters } from "./AuctionFilters"

export const TableSidebar = () => {
  return (
    <Flex flexDirection="column">
      <Row>
        <Separator />
      </Row>
      <AuctionFilters />
    </Flex>
  )
}
