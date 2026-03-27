// Minimal timer globals — avoids pulling in full DOM or @types/node
// which can conflict with @types/react-native-web in the workspace.
declare function setTimeout(callback: (...args: any[]) => void, ms?: number, ...args: any[]): number;
declare function clearTimeout(id: number | undefined): void;
