import { log } from "../../../utils/logger.js";
import { medplum } from "../../../utils/medplum.js";

// Search by birthdate
const nonFemalePatients = await medplum.searchResources('Patient', { 'gender:not': 'female' })

log(nonFemalePatients)
