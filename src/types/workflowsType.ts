export interface WorkFlowsType {
    id?: number;
    name: string;
    data_source: string;
    steps: {
      step_type: string;
      parameters?: {
        [key: string]: string | number | (string | number)[];
      };
      model_type?: string;
    }[];
  }