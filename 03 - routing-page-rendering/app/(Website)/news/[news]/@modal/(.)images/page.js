"use client"

import { DUMMY_NEWS } from "@/dummy-news"
import { useRouter } from "next/navigation";

export default function ImagePage({ params }) {
    const newsSlug = params.news;

    const router = useRouter()

    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

    return (
        <>
            <div className="modal-backdrop" onClick={router.back}/>
                <dialog className="modal" open>
                    <div className="fullscreen-image">
                        <img src={`/images/news/${newsItem.image}`} alt={newsItem.slug} />
                    </div>
                </dialog>       

        </>
    )
}