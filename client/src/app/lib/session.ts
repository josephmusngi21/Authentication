export function encrypt(data: string): string {
    // Example encryption logic
    return Buffer.from(data).toString('base64');
  }