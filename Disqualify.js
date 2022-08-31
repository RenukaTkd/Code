var OpportunityRibbon = window.OpportunityRibbon || {};
(function () {

    this.executeCustomWorkflowRequest = function (entityId, workflowId) {
        this.EntityId = { "guid": entityId };
        this.entity = { id: workflowId, entityType: "workflow" };
        this.getMetadata = function () {
            return {
                boundParameter: "entity",
                parameterTypes: {
                    "entity": {
                        "typeName": "Microsoft.Dynamics.CRM.workflow",
                        "structuralProperty": 5 // Entity Type
                    },
                    "EntityId": {
                        "typeName": "Edm.Guid",
                        "structuralProperty": 1 // Primitive Type
                    }
                },
                operationType: 0, // This is an action. Use '1' for functions and '2' for CRUD
                operationName: "ExecuteWorkflow",
            };
        };
    };

    this.disqualifyOnClick = function (entityId) {
        debugger;
        var entityId = Xrm.Page.data.entity.getId();
        var triggerCustomWorkflowRequest = new OpportunityRibbon.executeCustomWorkflowRequest(entityId, "82FA5C7D-91D8-4AC8-BB0C-0D01381BB72D");
        Xrm.WebApi.online.execute(triggerCustomWorkflowRequest).then(
            function SuccessCallBack(result) {
                if (result.ok) {
                   
                   

                    


                }
            },
            function (error) {
                console.log("Error Message: %s", error.message);
                // handle error conditions
            }
        );
    };

}).call(OpportunityRibbon);