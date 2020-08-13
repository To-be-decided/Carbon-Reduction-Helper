/* Step state values */
stepStateId_undefined   = ""

/**
 * @summary
 * @type {({summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number}|{summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number}|{summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number}|{summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number}|{summary: string, embedUrl: string, editUrl: string, defaultState: string, stepId: number})[]}
 */
var stepEntriesConfig = [
    {
        "stepId": 10,
        "summary": "Replace gas boiler with an air source heat pump",
        "reduction": 23,
        "defaultState": "adopting",
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vSU47SJDExoBZlMuUMcKxciv-G4TCcy-LLFG6WLu2o5TJb88uQ7RVbq9x0MVrvwII04DwcB5lNdVZ4G/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/u/0/d/1pK1G4sH_IXMSGDAxZJyifKp77WlhjTPUtZSaplVpuWk/edit",
    },
    {
        "stepId": 20,
        "summary": "Replace gas boiler with a ground source heat pump",
        "reduction": 23,
        "defaultState":  stepStateId_undefined,
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vQO1vSeA_MQYjiMZKKbB1tI6Pu9y9j1VAe7fnH7PTzoFS1v1XHfyxoiAmwVHn_THm6DPVoQNQrlTy3w/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/10JEDaNkGi-s6BOkuW99qzfYAtC_mZnSyET0AGJl9CSE/edit#",
    },
    {
        "stepId": 30,
        "summary": "Replace 5 beef (herd) portions per week with poultry",
        "reduction": 20,
        "defaultState":  "adopting",
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vRy_pvL4djiznmVE1iGbxjx3p4N9LZ-BQK1egCcSdqakIm6sUz2n6WGY6nCPzQoGBqvJrULlN7gITep/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/189TdeSvhg5xnG05ojybBP0NcSgevV0SCDQtf_X9Hwg8/edit"
    },
    {
        "stepId": 40,
        "summary": "Replace a petrol car with an electric car",
        "reduction": 17,
        "defaultState":  "completed",
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vQLByAy2Xh2C6aE6wYmgQ70WKHrZTneL23BfIcFQLb7UE-LBfRkTy88KzDKUsPZ5WqSNGpO5JxQRD6P/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/1LpWNo4Q592zBO01xp8IzYpWbKVovOPSReDV9vv598Hc/edit"
    },
    {
        "stepId": 50,
        "summary": "Increase loft insulation from ??cm to ??cm in a gas heated house with an old boiler",
        "reduction": 17,
        "defaultState":  "adopting",
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vSQYSwJwsj4zICvkhOX-rQB6Cyt-xZQMUVNzq8glFSTsI6dT-0zL6mbgXEVNXwexj7NEAUxqRfpUC-0/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/1hKaGpUCPWt0OCTXfa-uaqnpzu7YmqwJRUqDVR9u5y1Q/edit",
    },
    {
        "stepId": 60,
        "summary": "Replace old gas boiler with a new condensing boiler",
        "reduction": 9,
        "defaultState":  "adopting",
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vRkLE8vg0CcJEYu8-xAtkjD8bXBCv4BXpljMxxDBzlAuXqszDafnyrNY5Vtsm01iTya0rWpqwuquI_C/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/1pfhk3K2M_Y3FNotjdDzGpXftBilaDkJ5zqYS5Le2VtA/edit#",
    },{
        "stepId": 70,
        "summary": "Commute by walking rather than driving a petrol car",
        "reduction": 8,
        "embedUrl": "",
        "editUrl": "",
    },{
        "stepId": 80,
        "summary": "Replace 2 beef (herd) portions/week with poultry",
        "reduction": 8,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 90,
        "summary": "Reduce home thermostat by 2 deg C in a house with an old gas central heating",
        "reduction": 7,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 100,
        "summary": "Work 1 day/week at home rather than commuting via a petrol car",
        "reduction": 5,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 110,
        "summary": "Drive rather than fly to holiday location 1,000 miles away",

        "reduction": 8,
        "embedUrl": "",
        "editUrl": "",
},{
        "stepId": 120,
        "summary": "One staycation per year rather than a 1,000 mile flight.",
        "reduction": 5,
        "embedUrl": "",
        "editUrl": "",
}, {
        "stepId": 125,
        "summary": "Add wall insulation in a gas heated house with an old boiler",
        "reduction": 4,
        "defaultState": "adopting",
        "embedUrl": "https://docs.google.com/document/d/e/2PACX-1vSQYSwJwsj4zICvkhOX-rQB6Cyt-xZQMUVNzq8glFSTsI6dT-0zL6mbgXEVNXwexj7NEAUxqRfpUC-0/pub?embedded=true",
        "editUrl": "https://docs.google.com/document/d/1hKaGpUCPWt0OCTXfa-uaqnpzu7YmqwJRUqDVR9u5y1Q/edit",
    },{
    "stepId": 130,
        "summary": "Share a petrol car to work",
        "reduction": 4,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 140,
        "summary": "Install solar PV panels",
        "reduction": 3,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 150,
        "summary": "Switch to a car with 10% better mpg",
        "reduction": 2,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 160,
        "summary": "Switch to commuting by bus rather than a petrol car",
        "reduction": 2,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 170,
        "summary": "Use a train rather than drive on some long trips",
        "reduction": 1.6,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 180,
        "summary": "Install a solar immersion heater diverter feeding a electric hot water tank",
        "reduction": 1,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 190,
        "summary": "Install solar thermal panels with an electric powered hot water system",
        "reduction": 1,
        "embedUrl": "",
        "editUrl": "",
},{
        "stepId": 200,
        "summary": "Fill a dishwasher rather than using a half load",
        "reduction": 0.9,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 210,
        "summary": "Reduce your standby power by 50w",
        "reduction": 0.8,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 220,
        "summary": "Replace vented or condensing tumble dryer with heat pump model",
        "reduction": 0.7,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 230,
        "summary": "Switch to a start-stop car with same MPG",
        "reduction": 0.6,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 240,
        "summary": "Reduce maximum speed on motorway from 70 to 65 mph",
        "reduction": 0.6,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 250,
        "summary": "Convert 5 x 60w incandescent light bulbs to LED",
        "reduction": 0.6,
        "embedUrl": "",
        "editUrl": "",
},{
    "stepId": 260,
        "summary": "Dry clothes on washing line rather than tumble dryer",
        "reduction": 0.2,
        "embedUrl": "",
        "editUrl": "",
}
    ]

let defaultSettings = [
    {"stepId": 10, "stepStateId": ""},
    {"stepId": 20, "stepStateId": ""},
    {"stepId": 30, "stepStateId": ""},
    {"stepId": 40, "stepStateId": ""},
    {"stepId": 50, "stepStateId": ""},
    {"stepId": 60, "stepStateId": ""},
    {"stepId": 70, "stepStateId": ""},
    {"stepId": 80, "stepStateId": ""},
    {"stepId": 90, "stepStateId": ""},
    {"stepId": 100, "stepStateId": ""},
    {"stepId": 110, "stepStateId": ""},
    {"stepId": 120, "stepStateId": ""},
    {"stepId": 125, "stepStateId": ""},
    {"stepId": 130, "stepStateId": ""},
    {"stepId": 140, "stepStateId": ""},
    {"stepId": 150, "stepStateId": ""},
    {"stepId": 160, "stepStateId": ""},
    {"stepId": 170, "stepStateId": ""},
    {"stepId": 180, "stepStateId": ""},
    {"stepId": 190, "stepStateId": ""},
    {"stepId": 200, "stepStateId": ""},
    {"stepId": 210, "stepStateId": ""},
    {"stepId": 220, "stepStateId": ""},
    {"stepId": 230, "stepStateId": ""},
    {"stepId": 240, "stepStateId": ""},
    {"stepId": 250, "stepStateId": ""},
    {"stepId": 260, "stepStateId": ""}
]

let settings=[]

let volatilityConfirmed = false;

model_init = function(){
    model_reload()
}

model_reload = function(){
    model_default()
    loadValues()
}

model_default = function(){
    settings = JSON.parse(JSON.stringify(defaultSettings))
}

model_setStepStateId = function (stepId, stateId) {
    console.log("model_setStepStateId: Setting " + stepId + " as " + stateId)

    let index = find_stepSettingsIndexByStepId(stepId)
    if(index === undefined) return stepStateId_undefined

    settings[index].stepStateId = stateId
    saveValues();
}


/**
 * @summary Get the current step state for the given stepId
 * @param stepId
 * @returns {string}
 */
model_getStepStateId = function (stepId) {
    if(stepId === "") return stepStateId_undefined;

    let index = find_stepSettingsIndexByStepId(stepId)
    if(index === undefined || index === -1){
        console.log("model_getStepStateId(): Failed to find stepId '" + stepId)
        return stepStateId_undefined
    }

    return settings[index].stepStateId
}


/**
 * @summary Get the URL of an HTML file containing more detailed information on the defined step
 * @param stepId
 * @returns {string}
 */
model_getStepEmbedUrl = function(stepId){
    if(stepId === "") return "";

    /* Find step entry config */
    let stepEntryConfig = stepEntriesConfig.find(
        stepEntry => stepEntry.stepId == stepId,
        stepId
    )
    if(stepEntryConfig === undefined) return ""

    return stepEntryConfig.embedUrl
}

/**
 * @summary Get the URL to an editor pre-populated with  HTML file containing more detailed step information
 *
 * @param stepId
 * @returns {string}
 */
model_getStepEditUrl = function(stepId){
    if(stepId === "") return "";

    let index = find_stepConfigIndexByStepId(stepId)
    if(index === undefined) return ""

    return stepEntriesConfig[index].editUrl
}

model_getStepReduction = function(stepId){
    if(stepId === "") return "";

    /*
    let index = find_stepConfigIndexByStepId(stepId)
    if(index === undefined) return "" */

    return stepEntriesConfig[index].reduction
}

// ============================================

find_stepsByStateId = function(stateId){
    let stepsByStateId=[]

    if(stateId === "all") return JSON.parse(JSON.stringify(settings))

    settings.forEach(
        step => {
            if(step.stepStateId === stateId){
                stepsByStateId.push(step)
            }
        }
    );

    return stepsByStateId
}

find_stepSettingsIndexByStepId = function(stepId){
    let index = settings.findIndex(
        stepEntry => stepEntry.stepId == stepId,
        stepId
    )
    return index
}

find_stepConfigEntryByStepId = function(stepId){
    return stepEntriesConfig[find_stepConfigIndexByStepId(stepId)]
}


find_stepConfigIndexByStepId = function(stepId){
    let index = stepEntriesConfig.findIndex(
        stepEntry => stepEntry.stepId == stepId,
        stepId
    )
    return index
}

saveValues = function(){
    let expire = new Date();

    let cookieValue = JSON.stringify(settings)
    var date = new Date("Februari 10, 2099");
    var dateString = date.toGMTString();

    document.cookie = "crh_settings=" + cookieValue + ";expires="+dateString;

    // @todo Check that cookie was saved correctly
    if(document.cookie == undefined || document.cookie.search("crh_settings=" + cookieValue)==0){
        alert("Could not save changes")
    }
}

function loadValues() {
    let crh_cookiePair = document.cookie
        .split('; ')
        .find(row => row.startsWith('crh_settings'))

    if(crh_cookiePair == undefined){
        console.log("model_init(): CRH Cookie not found continuing with default values")
    }else{
        /* @todo Loading values needs to support new values (maybe by overwriting individual entries in settings so
        any new ones are automatically defaulted.  Work around is to clear cache */
        settings = JSON.parse(crh_cookiePair.split('=')[1]);
    }
}

/**
 * @summary Create HTML code for a dropdown containing a list of steps of a given state.
 * @param stepStateId        The id representing the step state to be filtered for (eg "familiarising")
 * @param openTagContents    The options within the opening tag (eg id="me" value="default")
 * @param additionalEntryCount  The number of additional entries that will be added later.
 *                              If this is 0 and there are no steps fitting the stepStateId criteria,
 *                              an option will be included to summarise no options available.
 *                              Set to 1 to disable the no entries message
 * @returns {string}        HTML representing the drop-down
 * @notes                   The first entry will be set as "selected"
 *                          The dropdown options are in the format
 *                              "13% : Summary of step entry"
 */
create_selectHtmlByStepStateId = function(stepStateId, openTagContents, additionalEntryCount){
    let html=""
    let other=""
    let firstEntry = true

    let htmlByState=[]

    htmlByState['monitoring'] = ""
    htmlByState['familiarising'] = ""
    htmlByState['adopting'] = ""
    htmlByState["completed"] = ""
    htmlByState['never'] = ""

    settings.forEach(
        step => {
            config = find_stepConfigEntryByStepId(step.stepId)
            if(step.stepStateId === "") step.stepStateId = "other"
            htmlByState[step.stepStateId] +=
                '<option value="' + config.stepId +'">'
                + config.reduction + "% : " + config.summary
                + '</option>'
        }
    )

    html = "<select " + openTagContents + '>'
        + "<option disabled>------ Monitoring -------</option>"
        + htmlByState['monitoring']
        + "<option disabled>------ Familiarising -------</option>"
        + htmlByState['familiarising']
        + "<option disabled>------ Adopting -------</option>"
        + htmlByState['adopting']
        + "<option disabled>------ Completed -------</option>"
        + htmlByState["completed"]
        + "<option disabled>------ Undecided -------</option>"
        + htmlByState['other']
        + "<option disabled>------ Rejected -------</option>"
        + htmlByState['never']
        + html + "</select>"

    return html
}

/* @todo Where does it add the new option? */
/**
 * @summary Adds a select option based on the "step" global parameter to the defined selection control.
 * The new option is in the format of
 * <option value="config.stepId">config.summary</option>
 *
 * @param selectControl  The destination "select" control to add the option to.
 */
addOptionToSelectByControl = function(selectControl){
    let config = find_stepConfigEntryByStepId(step)

    option = document.createElement("option")
    option.value = config.stepId
    option.text = config.reduction + "% : " + config.summary

    selectControl.options.add(option, selectControl.options[0]);
}

