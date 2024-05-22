import {LocalStorageDependency} from './LocalStorageStore';

export class MockLocalStorage<T extends Record<string, object>> implements LocalStorageDependency {
    public currentData: T;

    constructor(data: T) {
        this.currentData = data;
    }

    getItem(key: string): string | null {
        if (this.currentData[key]) {
            return JSON.stringify(this.currentData[key]);
        }

        return null;
    }

    setItem(key: string, value: string): void {
        this.currentData[key as keyof T] = JSON.parse(value);
    }
    clear(): void {
        this.currentData = {} as T;
    }
}
