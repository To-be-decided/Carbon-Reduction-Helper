/* Step state values
@todo Step state values need to be converted to numeric stateIds, so that state text changes only need to be in one place.
*/
stepStateId_undefined   = ""
stepStateId_maybe       = "maybe"     // Maybe
stepStateId_planTo      = "aspiring"  // Plan to
stepStateId_completed   = "done"      // Completed
stepStateId_na          = "na"        // Not applicable
stepStateId_never       = "never"     // Never

/**
 * @summary
 * @type {({summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number}|{summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number}|{summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number}|{summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number}|{summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number})[]}
 */
let stepMoreInfoData = [
    {
        "stepId": 10,
        "summary": "Replace gas boiler with an air source heat pump",
        "defaultState": stepStateId_planTo,
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vSU47SJDExoBZlMuUMcKxciv-G4TCcy-LLFG6WLu2o5TJb88uQ7RVbq9x0MVrvwII04DwcB5lNdVZ4G/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/u/0/d/1pK1G4sH_IXMSGDAxZJyifKp77WlhjTPUtZSaplVpuWk/edit",
    },
    {
        "stepId": 20,
        "summary": "Replace gas boiler with a ground source heat pump",
        "defaultState":  stepStateId_undefined,
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vQO1vSeA_MQYjiMZKKbB1tI6Pu9y9j1VAe7fnH7PTzoFS1v1XHfyxoiAmwVHn_THm6DPVoQNQrlTy3w/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/10JEDaNkGi-s6BOkuW99qzfYAtC_mZnSyET0AGJl9CSE/edit#",
    },
    {
        "stepId": 30,
        "summary": "Replace 5 beef (herd) portions per week with poultry",
        "defaultState":  stepStateId_planTo,
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vRy_pvL4djiznmVE1iGbxjx3p4N9LZ-BQK1egCcSdqakIm6sUz2n6WGY6nCPzQoGBqvJrULlN7gITep/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/189TdeSvhg5xnG05ojybBP0NcSgevV0SCDQtf_X9Hwg8/edit"
    },
    {
        "stepId": 40,
        "summary": "Replace a petrol car with an electric car",
        "defaultState":  stepStateId_completed,
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vQLByAy2Xh2C6aE6wYmgQ70WKHrZTneL23BfIcFQLb7UE-LBfRkTy88KzDKUsPZ5WqSNGpO5JxQRD6P/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/1LpWNo4Q592zBO01xp8IzYpWbKVovOPSReDV9vv598Hc/edit"
    },
    {
        "stepId": 50,
        "defaultState":  stepStateId_planTo,
        "summary": "Increase loft insulation from ??cm to ??cm in a gas heated house with an old boiler",
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vSQYSwJwsj4zICvkhOX-rQB6Cyt-xZQMUVNzq8glFSTsI6dT-0zL6mbgXEVNXwexj7NEAUxqRfpUC-0/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/1hKaGpUCPWt0OCTXfa-uaqnpzu7YmqwJRUqDVR9u5y1Q/edit",
    },
    {
        "stepId": 60,
        "defaultState":  stepStateId_planTo,
        "summary": "Replace old gas boiler with a new condensing boiler",
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vRkLE8vg0CcJEYu8-xAtkjD8bXBCv4BXpljMxxDBzlAuXqszDafnyrNY5Vtsm01iTya0rWpqwuquI_C/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/1pfhk3K2M_Y3FNotjdDzGpXftBilaDkJ5zqYS5Le2VtA/edit#",
    }
]

let volatilityConfirmed = false;

model_init = function(){
}

model_setStepState = function (stepId, stateId) {
    console.log("Setting status for step " + stepId + " as " + stateId)

    if (!volatilityConfirmed) {
        alert('Warning: Step selections are not be saved in this proof-of-concept or updated on the dashboard.');
        volatilityConfirmed = true;
    }
}

/**
 * @summary Get the current step state for the given stepId
 * @param stepId
 * @returns {string}
 */
model_getStepState = function (stepId) {
    if(stepId === "") return stepStateId_undefined;

    /* Find stepId in moreInfoData */
    let moreInfoDataEntry = stepMoreInfoData.find(
        stepEntry => stepEntry.stepId == stepId,
        stepId
    )
    if(moreInfoDataEntry === undefined) return stepStateId_undefined

    return moreInfoDataEntry.defaultState
}


/**
 * @summary Get the URL of an HTML file containing more detailed information on the defined step
 * @param stepId
 * @returns {string}
 */
model_getStepEmbedUrl = function(stepId){
    if(stepId === "") return "";

    /* Find stepId in moreInfoData */
    let moreInfoDataEntry = stepMoreInfoData.find(
        stepEntry => stepEntry.stepId == stepId,
        stepId
    )
    if(moreInfoDataEntry === undefined) return ""

    return moreInfoDataEntry.embedUrl
}

/**
 * @summary Get the URL to an editor pre-populated with  HTML file containing more detailed step information
 *
 * @param stepId
 * @returns {string}
 */
model_getStepEditUrl = function(stepId){
    if(stepId === "") return "";

    /* Find stepId in moreInfoData */
    let moreInfoDataEntry = stepMoreInfoData.find(
        stepEntry => stepEntry.stepId == stepId,
        stepId
    )
    if(moreInfoDataEntry === undefined) return ""

    return moreInfoDataEntry.editUrl
}