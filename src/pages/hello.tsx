import type {RouteMatch} from '@slimr/router'

import {Filler} from '~/comps/filler'
import {Layout} from '~/comps/layout-default'
import {setPageMeta} from '~/util/head'

/**
 * A demo of route with url params
 */
export default function Hello({route}: {route: RouteMatch}) {
  const {description} = setPageMeta({
    title: 'Hello',
    description: 'A demo of route with url params.',
  })
  return (
    <Layout>
      <Layout.Section>
        <h1>Hello, {route.urlParams!.name}.</h1>
        <p>{description}</p>
        <Filler />
      </Layout.Section>
    </Layout>
  )
}
