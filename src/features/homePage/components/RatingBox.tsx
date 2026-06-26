
"use client";
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
    return (
        <div className="flex flex-col w-full md:w-1/4 p-4 bg-zinc-200 rounded-md">
            <div className="star-title">
                <p className="font-bold">{title}</p>
                <p>{subtitle}</p>
            </div>
            <StarRating
                totalStars={5}
                rating={ratingValue}
                onRatingChange={onRatingChange}
            />
            <p>Seleção: {ratingValue} estrelas</p>
            <div className="my-3 flex flex-col">
                <label htmlFor={id}>Observações:</label>
                <textarea
                    title={title}
                    id={id}
                    rows={3}
                    onChange={e => onObsChange && onObsChange(e.target.value)}
                    value={obsValue}
                    className="py-2.5 px-3 border border-solid border-zinc-400 outline-none resize-y bg-white rounded"
                ></textarea>
            </div>
        </div>
    )
};
