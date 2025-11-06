import { log } from "../../../utils/logger.js";
import { medplum } from "../../../utils/medplum.js";

const observations = await medplum.searchResources('Observation');

log(observations)
