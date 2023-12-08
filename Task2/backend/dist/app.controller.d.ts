import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    ListenToStream(body: any): Promise<{
        data: string;
    }>;
    getAllContact(): Promise<{
        data: string;
    }>;
}
