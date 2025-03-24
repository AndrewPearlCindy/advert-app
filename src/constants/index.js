import { FileIcon, House, PlusIcon, Settings, StarIcon, TrendingUp, User2Icon, Utensils } from "lucide-react";

export default {
    NAVLINKS: [

        {
            name: "Analytics",
            path: "/dashboard/analytics",
            icon: TrendingUp,
        },
        {
            name: "Create Ad",
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
            path: "/dashboard/reviews",
            icon: StarIcon,
        },
        {
            name: "My Profile",
            path: "/dashboard/myprofile",
            icon: House,
        },

    ]
    
}
