import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/core/components/ui/sidebar";
import { externalLinks } from "@/core/lib/links";
import { CodeIcon } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import colors from "tailwindcss/colors";

type ColorName = keyof typeof colors;
type ColorValue =
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "950";

const ALLOWED_COLORS = [
    "neutral",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
];

export function AppSidebar() {
    const [activeColor, setActiveColor] = useState<{
        name: ColorName;
        value: ColorValue;
    }>({
        name: "neutral",
        value: "200",
    });

    const colorsList = useMemo(() => {
        const list = [];
        const keys = Object.keys(colors);

        for (const key of keys) {
            if (!ALLOWED_COLORS.includes(key)) continue;

            list.push({
                name: key,
                colors: colors[key as keyof typeof colors],
            });
        }

        return list;
    }, []);

    return (
        <Sidebar>
            <SidebarHeader>
                <h1 className="font-semibold uppercase tracking-widest text-center">
                    Tailwind Skeleton
                </h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader className="font-semibold lowercase">
                        Shapes
                    </SidebarHeader>
                    <div className="grid grid-cols-2 gap-2 place-content-center">
                        <div className="w-full flex items-center justify-center aspect-square bg-neutral-100 border border-neutral-200 rounded-md">
                            <div
                                className={
                                    "w-1/2 aspect-square rounded-md animate-pulse"
                                }
                                style={{
                                    backgroundColor:
                                        colors[activeColor.name][
                                            activeColor.value
                                        ],
                                }}
                            />
                        </div>
                        <div className="w-full flex items-center justify-center aspect-square bg-neutral-100 border border-neutral-200 rounded-md">
                            <div
                                className="w-1/2 aspect-square rounded-full animate-pulse"
                                style={{
                                    backgroundColor:
                                        colors[activeColor.name][
                                            activeColor.value
                                        ],
                                }}
                            />
                        </div>
                    </div>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarHeader className="font-semibold lowercase">
                        Colors
                    </SidebarHeader>
                    <div className="flex flex-col gap-2">
                        {colorsList.map((color) => (
                            <div
                                key={color.name}
                                className="w-full flex justify-evenly"
                            >
                                {Object.entries(color.colors).map(
                                    ([key, value]) => {
                                        const isActive =
                                            activeColor.name === color.name &&
                                            activeColor.value === key;

                                        return (
                                            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                                            <div
                                                onClick={() =>
                                                    setActiveColor({
                                                        name: color.name as ColorName,
                                                        value: key as ColorValue,
                                                    })
                                                }
                                                key={key}
                                                className={`min-w-4 min-h-4 max-w-4 max-h-4 inline-block rounded-md ${isActive ? "ring-2 ring-black" : ""}`}
                                                style={{
                                                    backgroundColor: value,
                                                }}
                                            />
                                        );
                                    },
                                )}
                            </div>
                        ))}
                    </div>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="flex flex-row gap-4 justify-center w-full">
                <Link
                    href={externalLinks.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <CodeIcon className="w-8" />
                </Link>
            </SidebarFooter>
        </Sidebar>
    );
}
