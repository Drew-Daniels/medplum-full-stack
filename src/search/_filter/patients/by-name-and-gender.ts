import { log } from "../../../utils/logger.js";
import { medplum } from "../../../utils/medplum.js";

// Search by multiple properties
const patientByNameAndGender = await medplum.searchResources('Patient', { _filter: '(gender eq "male" and name co "sti")', })

log(patientByNameAndGender)
