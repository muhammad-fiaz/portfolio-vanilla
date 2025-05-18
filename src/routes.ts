export type Route = {
    path: string;
    view: () => Promise<HTMLElement>;
};

export const routes: Route[] = [
    {
        path: '/',
        view: async () => {
            const { default: Home } = await import('./pages/Home.ts');
            return Home();
        },
    },
    {
        path: '/about',
        view: async () => {
            const { default: About } = await import('./pages/About.ts');
            return About();
        },
    },
    {
        path: '*',  // catch-all route for 404
        view: async () => {
            const { default: NotFound } = await import('./pages/404.ts');
            return NotFound();
        },
    },
];
