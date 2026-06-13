
"use client";

import { useState } from "react";
import StarRating from "./StarRating";

export default function Dispon() {
    const [myRating, setMyRating] = useState<number>(3.5);
    const [obs, setObs] = useState<string>("");

    return (
        <div className="flex flex-col w-full md:w-1/4 p-4 bg-zinc-200 rounded-md">
            <div className="star-title">
                <p>Como você avalia a <b>disponibilidade</b> do Posto de
                    Serviço no horário de serviço?</p>
            </div>
            <StarRating
                totalStars={5}
                rating={myRating}
                onRatingChange={setMyRating}
            />
            <p>Seleção: {myRating} estrelas</p>
            <div className="my-3 flex flex-col">
                <label htmlFor="obs_dispon">Observações:</label>
                <textarea
                    id="obs_dispon"
                    rows={3}
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                    className="py-2.5 px-3 border border-solid border-zinc-400 outline-none resize-y bg-white rounded"
                ></textarea>
            </div>
        </div>
    );
}
