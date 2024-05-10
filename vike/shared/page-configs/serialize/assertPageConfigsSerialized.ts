export { assertPageConfigsSerialized }
export { assertPageConfigGlobalSerialized }

import { assert, isObject, hasProp, isArray } from '../../utils.js'
import type { PageConfigGlobalRuntimeSerialized, PageConfigRuntimeSerialized } from './PageConfigSerialized.js'

function assertPageConfigsSerialized(
  pageConfigsSerialized: unknown
): asserts pageConfigsSerialized is PageConfigRuntimeSerialized[] {
  assert(isArray(pageConfigsSerialized))
  pageConfigsSerialized.forEach((pageConfigSerialized) => {
    assert(isObject(pageConfigSerialized))
    assert(hasProp(pageConfigSerialized, 'pageId', 'string'))
    assert(hasProp(pageConfigSerialized, 'routeFilesystem'))
    assert(hasProp(pageConfigSerialized, 'configValuesSerialized'))
  })
}

function assertPageConfigGlobalSerialized(
  pageConfigGlobalSerialized: unknown
): asserts pageConfigGlobalSerialized is PageConfigGlobalRuntimeSerialized {
  assert(hasProp(pageConfigGlobalSerialized, 'configValuesSerialized'))
}
