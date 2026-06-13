
"use client";

import { useState } from "react";
import StarRating from "./StarRating";

interface IRatingBoxProps {
    title: string;
    subtitle: string;
    id: string;
    ratingValue: number;
    obsValue?: string;
    onRatingChange?: (rating: number) => void;
    onObsChange?: (obs: string) => void;
}

export default function RatingBox({ title, subtitle, id, ratingValue, onRatingChange, obsValue = "", onObsChange }: IRatingBoxProps) {
    const [myRating, setMyRating] = useState<number>(ratingValue);
    const [obs, setObs] = useState<string>(obsValue);

    const handleRatingChange = (newRating: number) => {
        setMyRating(newRating);
        if (onRatingChange) onRatingChange(newRating);
    };

    const handleObsChange = (newObs: string) => {
        setObs(newObs);
        if (onObsChange) onObsChange(newObs);
    };

    return (
        <div className="flex flex-col w-full md:w-1/4 p-4 bg-zinc-200 rounded-md">
            <div className="star-title">
                <p className="font-bold">{title}</p>
                <p>{subtitle}</p>
        </div>
            <StarRating
                totalStars={5}
                rating={myRating}
                onRatingChange={handleRatingChange}
            />  
            <p>Seleção: {myRating} estrelas</p>
            <div className="my-3 flex flex-col">
                <label htmlFor={id}>Observações:</label>
                <textarea
                    title={title}
                    id={id}
                    rows={3}
                    onChange={e => handleObsChange(e.target.value)}
                    value={obs}
                    className="py-2.5 px-3 border border-solid border-zinc-400 outline-none resize-y bg-white rounded"
                ></textarea>
            </div>
    </div>
    )
};
