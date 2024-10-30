import type { WorkFlowsType } from "@/types/workflowsType";
import { httpClient } from "./httpClient";
const createWorkFlow = async (workFlow: WorkFlowsType) => {
    return httpClient.post('workflow', workFlow)
      .then(res => res.data)
      .catch((error : Error) => {
        console.error(error);
        throw error;
      });
  };

  const getWorkFlows = async () => {
    return httpClient.get('workflows')
      .then(res => {return res.data})
      .catch((error : Error) => {
        console.error(error);
        throw error;
      });
  }
export { createWorkFlow, getWorkFlows };