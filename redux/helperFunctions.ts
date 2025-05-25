export interface RootActionReturnPropTypes {type: string, payload :any};

export const action = (type: string, payload?: any) : RootActionReturnPropTypes => {
    return {
        type,
        payload
    };
};

export const getActionType = (action: any): string => {
    return action().type;
};