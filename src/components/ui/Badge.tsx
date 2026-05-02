import React from "react";
import { BadgeProps } from "@/src/types"

const Badge = ({ children }: BadgeProps) => {
    return (
        <p className="font-sans text-[11px] font-normal px-2.5 py-1 rounded-full bg-creme text-charbon hover:bg-terracotta hover:text-white transition-all duration-200">
            {children}
        </p>
    );
};

export default Badge;