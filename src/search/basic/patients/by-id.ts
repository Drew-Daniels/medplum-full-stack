import { log } from "../../../utils/logger.js";
import { medplum } from "../../../utils/medplum.js";

// Search by ID
const patientById = await medplum.readResource('Patient', '65cecece-f69f-49bb-829f-eada95a63110');

log(patientById)
