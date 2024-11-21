"use client";

type DraggableProps = {
    id: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};

function Draggable({ children }: DraggableProps) {
    return (
        <div className="w-full flex items-center justify-center aspect-square bg-neutral-100 border border-neutral-200 rounded-md">
            {children}
        </div>
    );
}

export { Draggable };
