import React from "react";
import ContentCard from "@/src/components/cards/ContentCard";
import {ContentListProperties, Notes} from "@/src/types";
import {getSortedPostsData} from "@/src/lib/posts";

const ContentList = ({ type }: ContentListProperties) => {
    const items: Notes[] = getSortedPostsData(type);
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch p-6">
            {items.map((item) => (
                <ContentCard
                    key={item.id}
                    item={item}
                    type={type}
                />
            ))}
        </div>
    );
};

export default ContentList;
