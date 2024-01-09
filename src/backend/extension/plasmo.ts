export interface PlasmoRequestBody {
  ruleId: number;
  domain: string;
  requestHeaders?: Record<string, string>;
  responseHeaders?: Record<string, string>;
}

export interface ExtensionHelloReply {
  version: string;
}

export type ExtensionRequestReply =
  | {
      success: true;
      ruleId: number;
    }
  | {
      success: false;
      error: string;
    };

interface MmMetadata {
  "prepare-stream": {
    req: PlasmoRequestBody;
    res: ExtensionRequestReply;
  };
  "make-request": {
    req: PlasmoRequestBody;
    res: ExtensionRequestReply;
  };
  hello: {
    req: null;
    res: ExtensionHelloReply;
  };
}

interface MpMetadata {}

declare module "@plasmohq/messaging" {
  interface MessagesMetadata extends MmMetadata {}
  interface PortsMetadata extends MpMetadata {}
}
