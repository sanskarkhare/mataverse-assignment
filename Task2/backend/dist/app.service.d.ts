export declare class AppService {
    getHello(): string;
    Listen(body: any): Promise<{
        data: string;
    }>;
    getAllContact(): Promise<{
        data: string;
    }>;
}
