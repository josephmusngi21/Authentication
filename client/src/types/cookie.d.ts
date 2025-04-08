declare module 'cookie' {
    export function serialize(name: string, value: string, options?: { 
        domain?: string; 
        path?: string; 
        maxAge?: number; 
        expires?: Date; 
        httpOnly?: boolean; 
        secure?: boolean; 
        sameSite?: 'strict' | 'lax' | 'none'; 
    }): string;
    export function parse(cookieHeader: string): Record<string, string>;
  }