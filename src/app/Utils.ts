export class Utils {
    public static generateId() {
        return `id-${Math.random().toString(36).substr(2, 16)}`;
    }
}