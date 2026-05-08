"use client";

import React from "react";
import Link from "next/link"
import Image from "next/image";

export default function NotFound() {
    return (
        <main className={"flex flex-line items-center justify-center flex-1 min-h-[70vh] md:min-h-[78vh] px-6 text-center gap-6"}>
            <div className={"flex flex-col justify-center items-center"}>
                <h1 className={"text-center capitalize"}>
                    404 <br /> not found
                </h1>
                <Link
                    href="/"
                    className="text-terracotta hover:text-terracotta/70 transition-colors text-sm tracking-widest uppercase border-b border-transparent hover:border-terracotta mt-4 mb-10"
                >
                    &larr; Retour à l&#39;accueil
                </Link>
            </div>
            <Image className={"w-50 h-full"}
                src={"/chibi/bug.png"}
                alt={"bug"}
                width={"500"}
                height={"500"}
            />
        </main>
    )
}