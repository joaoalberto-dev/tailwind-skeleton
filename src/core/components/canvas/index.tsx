"use client";

import React, {
    type ReactElement,
    createElement,
    useEffect,
    useRef,
    useState,
} from "react";

function Canvas() {
    const [elements, setElements] = useState<ReactElement[]>([]);
    const [_, setSelectedElement] = useState<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.addEventListener("click", (ev) => {
                const target = ev.target as HTMLDivElement;

                if (target && target?.id !== "canvas") {
                    setSelectedElement(target);
                } else {
                    setSelectedElement(null);
                }
            });
        }
    }, []);

    function onDragOver(ev: React.DragEvent<HTMLDivElement>) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    }

    function onDrop(ev: React.DragEvent<HTMLDivElement>) {
        const data = ev.dataTransfer.getData("text/html");

        if (data) {
            const element = document
                .getElementById(data)
                ?.cloneNode(true) as HTMLElement;

            if (element) {
                const child = element.childNodes[0] as HTMLElement;

                const reactElement = createElement(
                    element.nodeName.toLowerCase(),
                    {
                        className: `${child.classList.value} col-start-2 row-start-2`,
                        id: element.id,
                    },
                );

                setElements((prev) => [...prev, reactElement]);
            }
        }
    }

    return (
        <div
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-neutral-100 
            [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"
        >
            <div
                id="canvas"
                ref={canvasRef}
                className="w-[300px] h-[300px] bg-white border border-neutral-200 rounded-md drop-shadow-xl grid grid-cols-10 grid-rows-10"
                onDrop={onDrop}
                onDragOver={onDragOver}
            >
                {elements.map((element) => (
                    <React.Fragment key={element.props.id}>
                        {element}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Canvas;
