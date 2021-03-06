import React from 'react'
import { Router, Route, Link, cleanPath } from 'react-static'
import { easeQuadOut } from 'd3-ease'
import { NodeGroup } from 'react-move'
import { withContext, getContext } from 'recompose'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { isMobile, isTablet, browserName, browserVersion, mobileModel, mobileVendor, osName, osVersion } from 'react-device-detect';
import axios from "axios";

import 'semantic-ui-css/semantic.min.css';
import VICLogo from './asset/VICLogo.png'
//
import Routes from 'react-static-routes'

import './app.css'

// The magic :)
const AnimatedRoutes = getContext({
  // We have to preserve the router context for each route
  // otherwise, a component may rerender with the wrong data
  // during animation
  router: PropTypes.object,
  // We'll also look for the staticURL, so we can disable the animation during static render
  staticURL: PropTypes.string,
})(({ getComponentForPath, router, staticURL }) => (
  <Route
    path="*"
    render={props => {
      // Get the component for this path
      let Comp = getComponentForPath(cleanPath(props.location.pathname))
      if (!Comp) {
        Comp = getComponentForPath('404')
      }
      axios.post(`https://datanaliez.com/api/v1/form/submit/2d490e5efb88666bf2668ca6c766bde598f47b1316ddc0dbcb321baebb8d773c`, {
        path: props.location.pathname,
        browser: `${browserName} ${browserVersion}`,
        osname: osName,
        osversion: osVersion,
        devicename: `${mobileModel} ${mobileVendor}`,
        mobile: `${isMobile}`,
        tablet: `${isTablet}`,
        timestamp: `${(new Date())}`
      })
      // When we're rendering for static HTML, be sure to NOT animate in.
      if (staticURL) {
        return (
          // This relative wrapper is necessary for accurate rehydration :)
          <div style={{ position: 'relative' }}>
            <Comp {...props} />
          </div>
        )
      }

      // Use React-Move to animate the different components coming in and out
      return (
        <NodeGroup
          // React-move will handle the entry and exit of any items we pass in `data`
          data={[
            {
              // pass the current Comp, props, ID and router
              id: props.location.pathname,
              Comp,
              props,
              router,
            },
          ]}
          keyAccessor={d => d.id}
          start={() => ({
            opacity: [0],
            scale: 1,
            translateX: [100],
          })}
          enter={() => ({
            opacity: [1],
            translateX: [0],
            timing: { duration: 500, delay: 200, ease: easeQuadOut },
          })}
          update={() => ({
            opacity: [1],
          })}
          leave={() => ({
            opacity: [0],
            translateX: [-100],
            timing: { duration: 500, ease: easeQuadOut },
          })}
        >
          {nodes => (
            <div style={{ position: 'relative' }}>
              {nodes.map(({ key, data, state: { opacity, translateX } }) => {
                // Here, we override the router context with the one that was
                // passed with each route
                const PreservedRouterContext = withContext(
                  {
                    router: PropTypes.object,
                  },
                  () => ({
                    router: data.router,
                  }),
                )(props => <div {...props} />)

                return (
                  <PreservedRouterContext
                    key="key"
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css" />
                    <data.Comp animationState={{ transform: translateX === 0 ? undefined : `translateX(${translateX}px)`, opacity }} {...data.props} />
                  </PreservedRouterContext>
                )
              })}
            </div>
          )}
        </NodeGroup>
      )
    }}
  />
))

const App = () => (
  <Router>
    <Routes component={AnimatedRoutes} />
  </Router>
)

export default hot(module)(App)
