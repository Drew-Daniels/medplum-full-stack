import { log } from "../../../utils/logger.js";
import { medplum } from "../../../utils/medplum.js";

// Return all diagnostic reports that do not have a status of 'final'
const diagnosticReportsStatusNotFinal = await medplum.searchResources('DiagnosticReport', { 'status:not' : 'final' });

log(diagnosticReportsStatusNotFinal)
