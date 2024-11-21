"use client";

type DraggableProps = {
    id: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};

function Draggable({ children, id }: DraggableProps) {
    function onDragStart(event: React.DragEvent<HTMLDivElement>) {
        event.dataTransfer.setData("text/html", event.currentTarget.id);
        event.dataTransfer.effectAllowed = "copyMove";
    }

    return (
        <div className="w-full flex items-center justify-center aspect-square bg-neutral-100 border border-neutral-200 rounded-md">
            <div
                id={id}
                draggable
                onDragStart={onDragStart}
                className="inline-block"
            >
                {children}
            </div>
        </div>
    );
}

export { Draggable };
