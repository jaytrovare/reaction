import { Box } from "@artsy/palette"
import { OrderApp_order } from "__generated__/OrderApp_order.graphql"
import { AppContainer } from "Apps/Components/AppContainer"
import { StickyFooter } from "Apps/Order/Components/StickyFooter"
import { Mediator, SystemContextConsumer } from "Artsy"
import { ErrorPage } from "Components/ErrorPage"
import { RouterState, withRouter } from "found"
import React from "react"
import { Meta, Title } from "react-head"
import { graphql } from "react-relay"
import { Elements, StripeProvider } from "react-stripe-elements"
import styled from "styled-components"
import { findCurrentRoute } from "Utils/findCurrentRoute"
import { get } from "Utils/get"
import { ConnectedModalDialog } from "./Dialogs"

declare global {
  interface Window {
    Stripe?: (key: string) => stripe.Stripe
    sd: {
      STRIPE_PUBLISHABLE_KEY: string
    }
  }
}

export interface OrderAppProps extends RouterState {
  params: {
    orderID: string
  }
  order: OrderApp_order
}

interface OrderAppState {
  stripe: stripe.Stripe
}

class OrderApp extends React.Component<OrderAppProps, OrderAppState> {
  mediator: Mediator | null = null
  state = { stripe: null }
  removeTransitionHook: () => void

  componentDidMount() {
    if (!this.removeTransitionHook) {
      this.removeTransitionHook = this.props.router.addTransitionHook(
        this.onTransition
      )
    }

    const artwork = get(
      null,
      () => this.props.order.lineItems.edges[0].node.artwork
    )

    if (artwork && this.mediator && this.mediator.trigger) {
      const { is_offerable, is_acquireable } = artwork
      this.mediator.trigger("enableIntercomForBuyers", {
        is_offerable,
        is_acquireable,
      })
    }

    if (window.Stripe) {
      this.setState({
        stripe: window.Stripe(window.sd.STRIPE_PUBLISHABLE_KEY),
      })
    } else {
      document.querySelector("#stripe-js").addEventListener("load", () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({
          stripe: window.Stripe(window.sd.STRIPE_PUBLISHABLE_KEY),
        })
      })
    }
  }

  componentWillUnmount() {
    if (this.removeTransitionHook) {
      this.removeTransitionHook()
    }
  }

  onTransition = newLocation => {
    if (newLocation === null) {
      // leaving the order page, closing, or refreshing
      const route = findCurrentRoute(this.props.match)
      if (route.shouldWarnBeforeLeaving) {
        return "Are you sure you want to leave? Your changes will not be saved."
      }
    }
    return true
  }

  render() {
    const { children, order } = this.props
    let artworkId

    if (!order) {
      return <ErrorPage code={404} />
    } else {
      artworkId = get(
        this.props,
        props => order.lineItems.edges[0].node.artwork.slug
      )
    }

    return (
      <SystemContextConsumer>
        {({ isEigen, mediator }) => {
          this.mediator = mediator
          return (
            <AppContainer>
              <Title>Checkout | Artsy</Title>
              {isEigen ? (
                <Meta
                  name="viewport"
                  content="width=device-width, user-scalable=no"
                />
              ) : (
                <Meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, maximum-scale=5 viewport-fit=cover"
                />
              )}
              <SafeAreaContainer>
                <StripeProvider stripe={this.state.stripe}>
                  <Elements>
                    <>{children}</>
                  </Elements>
                </StripeProvider>
              </SafeAreaContainer>
              <StickyFooter orderType={order.mode} artworkId={artworkId} />
              <ConnectedModalDialog />
            </AppContainer>
          )
        }}
      </SystemContextConsumer>
    )
  }
}

const OrderAppWithRouter = withRouter(OrderApp)

export { OrderAppWithRouter as OrderApp }

const SafeAreaContainer = styled(Box)`
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  margin-bottom: 75px;
`

graphql`
  fragment OrderApp_order on CommerceOrder {
    mode
    lineItems {
      edges {
        node {
          artwork {
            slug
            is_acquireable: isAcquireable
            is_offerable: isOfferable
          }
        }
      }
    }
  }
`
