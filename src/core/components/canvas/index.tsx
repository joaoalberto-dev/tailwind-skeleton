"use client";

function Canvas() {
    function onDragOver(ev: React.DragEvent<HTMLDivElement>) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    }

    function onDrop(ev: React.DragEvent<HTMLDivElement>) {
        const data = ev.dataTransfer.getData("text/html");

        if (data) {
            const element = document.getElementById(data)?.cloneNode(true);

            if (element) {
                ev.currentTarget.appendChild(element);
            }
        }
    }

    return (
        <div
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-neutral-100 
            [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"
        >
            <div
                className="w-[300px] h-[300px] bg-white border border-neutral-200 rounded-md drop-shadow-xl"
                onDrop={onDrop}
                onDragOver={onDragOver}
            />
        </div>
    );
}

export default Canvas;
