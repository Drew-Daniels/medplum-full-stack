import { config } from "@dotenvx/dotenvx";

config()

import { cleanEnv, str, url } from 'envalid'

const env = cleanEnv(process.env, {
  MEDPLUM_BASE_URL: url({default: 'http://localhost:8103'}),
  MEDPLUM_CLIENT_ID: str(),
  MEDPLUM_CLIENT_SECRET: str()
})

export {
  env
};
