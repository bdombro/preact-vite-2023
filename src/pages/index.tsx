import {Markdown} from '@slimr/markdown'
import {setPageMeta} from '@slimr/util'

import {Filler} from '~/comps/filler'
import {Layout} from '~/comps/layout-default'

/**
 * A demo of a home page
 */
export default function Index() {
  const {title, description} = setPageMeta({title: 'Home'})
  return (
    <Layout>
      <Layout.Section>
        <h1>{title}</h1>
        <p>{description}</p>
        <button
          id="test-error-boundary"
          onClick={async () => {
            throw new Error('This is a test error.')
          }}
          style={{marginBottom: '1rem'}}
          type="button"
        >
          Click to test error boundary
        </button>
        <button
          id="test-error-boundary"
          className="secondary md"
          // disabled
          onClick={async () => {
            throw new Error('This is a test error.')
          }}
          style={{marginBottom: '1rem'}}
          type="button"
        >
          Click to test error boundary
        </button>
        <button
          id="test-error-boundary"
          className="tertiary lg"
          // disabled
          onClick={async () => {
            throw new Error('This is a test error.')
          }}
          style={{marginBottom: '1rem'}}
          type="button"
        >
          Click to test error boundary
        </button>
        <fieldset>
          <legend>Markdown example:</legend>
          <Markdown
            src={`
              # H1
              ## H2
              ### H3
              #### H4
              ##### H5
              ###### H6

              **Bold** *Italic* [Link](https://google.com) email@email.com

              ***

              > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, or

              
              ***

              - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, or
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, or
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, or

              ***

              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, or
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, or
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, or
          `}
          />
        </fieldset>
        <Filler />
      </Layout.Section>
    </Layout>
  )
}
