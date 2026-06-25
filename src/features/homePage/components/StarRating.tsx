"use client";

import { useState, MouseEvent } from "react";

export interface StarRatingProps {
    /** The maximum number of stars to display. Defaults to 5. */
    totalStars?: number;
    /** The current active rating value (e.g., 3.5). Defaults to 0. */
    rating?: number;
    /** Callback function triggered when a user clicks a star value. */
    onRatingChange?: (rating: number) => void;
}

export default function StarRating({
    totalStars = 5,
    rating = 0,
    onRatingChange,
}: StarRatingProps) {
    const [hoverRating, setHoverRating] = useState < number | null > (null);

    // Calculates whether the cursor is on the left half or right half of the star
    const getDisplayRating = (e: MouseEvent<HTMLDivElement>, starValue: number): number => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse x position relative to the star element
        return x < rect.width / 2 ? starValue - 0.5 : starValue;
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>, starValue: number): void => {
        const calculatedRating = getDisplayRating(e, starValue);
        setHoverRating(calculatedRating);
    };

    const handleMouseLeave = (): void => {
        setHoverRating(null);
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>, starValue: number): void => {
        if (onRatingChange) {
            const finalRating = getDisplayRating(e, starValue);
            onRatingChange(finalRating);
        }
    };

    // Determine what rating value to visually display
    const activeRating = hoverRating !== null ? hoverRating : rating;

    return (
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {[...Array(totalStars)].map((_, idx) => {
                const starValue = idx + 1;

                // Calculate fill percentage for each individual star box
                let fillPercent = 0;
                if (activeRating >= starValue) {
                    fillPercent = 100;
                } else if (activeRating > starValue - 1) {
                    fillPercent = (activeRating - (starValue - 1)) * 100; // Will be 50 for half stars
                }

                return (
                    <div
                        key={idx}
                        onMouseMove={(e) => handleMouseMove(e, starValue)}
                        onMouseLeave={handleMouseLeave}
                        onClick={(e) => handleClick(e, starValue)}
                        style={{
                            position: "relative",
                            cursor: "pointer",
                            fontSize: "2rem",
                            lineHeight: "1",
                            userSelect: "none",
                            display: "inline-block",
                        }}
                    >
                        {/* Background Empty Star (Gray) */}
                        <span style={{ color: "#D1D5DB" }}>★</span>

                        {/* Foreground Filled Star (Gold Overlay) */}
                        <span
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: `${fillPercent}%`,
                                overflow: "hidden",
                                color: "#1a00ab",
                                pointerEvents: "none", // Ensures overlay doesn't block mouse movement events
                            }}
                        >
                            ★
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
