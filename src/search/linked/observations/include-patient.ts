import { log } from "../../../utils/logger.js";
import { medplum } from "../../../utils/medplum.js";

// Return all Observations for Patient with ID of '65cecece-f69f-49bb-829f-eada95a63110'
// const observations = await medplum.searchResources('Observation', { _include: 'Observation:patient', _revinclude: 'Provenance:target'});
const observations = await medplum.searchResources('Observation', { _include: 'Observation:patient' });

log(observations)
