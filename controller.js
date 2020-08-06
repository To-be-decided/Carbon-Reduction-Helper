controller_init = function(){
    model_init()
    view_init()
}

controller_handle_stepStateChange = function(stepId, stateId){
    model_setStepState(stepId, stateId)
}
