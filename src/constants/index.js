import { FileIcon, House, PlusIcon, Settings, User2Icon } from "lucide-react";

export default {
    NAVLINKS: [

        {
            name: "Overview",
            path: "/dashboard",
            icon: House,
        },
        {
            name: "Add Ad",
            path: "/dashboard/create-ad",
            icon: PlusIcon,
        },
        {
            name: "Vendor Ad",
            path: "/dashboard/ads",
            icon: FileIcon,
        },
        {
            name: "Profile",
            path: "",
            icon: User2Icon,
        },
        {
            name: "Settings",
            path: "",
            icon: Settings,
        }

    ]
    
}
