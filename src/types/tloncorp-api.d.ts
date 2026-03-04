declare module "@tloncorp/api" {
  export function configureClient(...args: any[]): any;
  export function uploadFile(params: {
    blob: Blob;
    fileName: string;
    contentType: string;
  }): Promise<{ url: string }>;
}
