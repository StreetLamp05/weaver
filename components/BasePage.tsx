import { ReactNode } from "react";

interface BasePageProps {
    title: string;
    description: string;
    children?: ReactNode;
}

export default function BasePage({ title, description, children }: BasePageProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <h1 className="text-5xl font-extrabold text-900">{title}</h1>
            <p className="text-lg text-700 mt-4 max-w-2xl">{description}</p>
            {children}
        </div>
    );
}
