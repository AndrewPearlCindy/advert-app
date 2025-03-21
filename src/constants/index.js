import { FileIcon, House, PlusIcon, Settings, StarIcon, TrendingUp, User2Icon, Utensils } from "lucide-react";

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
            name: "My Ads",
            path: "/dashboard/ads",
            icon: Utensils,
        },
        {
            name: "Reviews",
            path: "",
            icon: StarIcon,
        },
        {
            name: "Analytics",
            path: "",
            icon: TrendingUp,
        },
        {
            name: "Settings",
            path: "",
            icon: Settings,
        }

    ]
    
}
