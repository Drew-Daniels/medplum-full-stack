import { log } from "../../../utils/logger.js";
import { medplum } from "../../../utils/medplum.js";

// Search by birthdate
const patientByBirthDate = await medplum.searchResources('Patient', { birthdate: '1940-09-05' })

log(patientByBirthDate)
