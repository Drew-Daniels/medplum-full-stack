import { MedplumClient } from "@medplum/core";

import { env } from "./env.js";

const medplum = new MedplumClient({
  baseUrl: env.MEDPLUM_BASE_URL,
  clientId: env.MEDPLUM_CLIENT_ID,
  clientSecret: env.MEDPLUM_CLIENT_SECRET,
})

export {
  medplum
}
