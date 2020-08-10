var savedDoneThresholdPerc = 20;

controller_init = function(){
    model_init()
    view_init()
}

controller_handle_stepStateChange = function(stepId, stateId){
    model_setStepStateId(stepId, stateId)
}

yourSavings = function(){
    let total_complete = 0
    let total_planned = 0

    settings.forEach(
        stepEntry => {
            switch(stepEntry.stepStateId){
                case "done":
                    total_complete = total_complete +
                        stepEntriesConfig[find_stepConfigIndexByStepId(stepEntry.stepId)].reduction
                    break

                case "aspiring":
                    total_planned = total_planned +
                        stepEntriesConfig[find_stepConfigIndexByStepId(stepEntry.stepId)].reduction
                    break;
            }
        }
    )

    return {
        "completed": total_complete,
        "planned": total_planned
    }
}
