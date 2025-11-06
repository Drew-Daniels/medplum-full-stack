import { getReferenceString } from "@medplum/core";

import { log } from "../../../utils/logger.js";
import { medplum } from "../../../utils/medplum.js";

const patient = await medplum.readResource('Patient', '65cecece-f69f-49bb-829f-eada95a63110');

// Return all Observations for Patient with ID of '65cecece-f69f-49bb-829f-eada95a63110'
const observations = await medplum.searchResources('Observation', { subject: getReferenceString(patient) });

log(observations)
