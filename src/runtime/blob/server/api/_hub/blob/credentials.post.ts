import { eventHandler, readBody } from 'h3'
import { hubBlob } from '../../../utils/blob'
import { requireNuxtHubAuthorization } from '../../../../../utils/auth'
import { requireNuxtHubFeature } from '../../../../../utils/features'

export default eventHandler(async (event) => {
  await requireNuxtHubAuthorization(event)
  requireNuxtHubFeature('blob')

  const options = await readBody(event)
  return hubBlob().createCredentials(options)
})
