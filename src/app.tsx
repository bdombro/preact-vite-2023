import './util/styles.pcss'

import './util/polyfills/web'

// for dev
// import 'preact/debug'
// for prod
import 'preact/devtools'

import {ErrorToast} from './comps/error-toast'
import {OfflineToast} from './comps/offline-toast'
import {ServiceWorkerToasts} from './comps/service-worker-toasts'
import {Toasts} from './comps/toast'
import {router} from './router'
import {Switch} from './util/stackr'

export function App() {
  return (
    <div data-testid="appComponent">
      <Toasts />
      <ErrorToast />
      <OfflineToast />
      <ServiceWorkerToasts />
      <Switch router={router} />
    </div>
  )
}
