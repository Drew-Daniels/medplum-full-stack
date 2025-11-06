import { log } from "../../../utils/logger.js";
import { medplum } from "../../../utils/medplum.js";

// Search by multiple properties
const patientByNameAndBirthDate = await medplum.searchResources('Patient', { name: 'Dustin', birthdate: '1940-09-05' })

log(patientByNameAndBirthDate)
