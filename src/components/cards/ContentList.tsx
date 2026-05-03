import React from "react";
import ContentCard from "@/src/components/cards/ContentCard";
import {ContentListProperties, Notes} from "@/src/types";
import {getSortedPostsData} from "@/src/lib/posts";

const ContentList = ({ type }: ContentListProperties) => {
    const items: Notes[] = getSortedPostsData(type);
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
                {items.map((item) => (
                    <ContentCard
                        key={item.id}
                        item={item}
                        type={type}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContentList;
