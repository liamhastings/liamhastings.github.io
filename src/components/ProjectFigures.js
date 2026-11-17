import React, { useState } from 'react';
import './ProjectFigures.css';

// These figures are sketches of each project's core idea, not screenshots of
// the real apps, and each caption says so.

const recipe = {
    name: 'Tomato soup',
    ingredients: [
        { id: 'tomatoes', name: 'Diced tomatoes', aisle: 'Canned goods' },
        { id: 'onion', name: 'Onion', aisle: 'Produce' },
        { id: 'basil', name: 'Fresh basil', aisle: 'Produce' },
        { id: 'cream', name: 'Cream', aisle: 'Dairy' },
    ],
};

const ANSWERS = [
    { value: 'have', label: 'Have it' },
    { value: 'need', label: 'Need it' },
];

// Cream starts unanswered so there is an obvious first thing to tap.
const initialAnswers = { tomatoes: 'have', onion: 'have', basil: 'need' };

const groupByAisle = ingredients =>
    ingredients.reduce((aisles, ingredient) => {
        const items = aisles[ingredient.aisle] || [];
        return { ...aisles, [ingredient.aisle]: [...items, ingredient.name] };
    }, {});

export const RestockFigure = () => {
    const [answers, setAnswers] = useState(initialAnswers);

    const answer = (id, value) =>
        setAnswers(current => ({ ...current, [id]: value }));

    const inKitchen = recipe.ingredients.filter(i => answers[i.id] === 'have');
    const toBuy = groupByAisle(
        recipe.ingredients.filter(i => answers[i.id] === 'need')
    );

    return (
        <figure className="figure restock-figure">
            <div className="figure-panel">
                <p className="figure-heading">{recipe.name}</p>
                <ul className="restock-ingredients">
                    {recipe.ingredients.map(ingredient => (
                        <li key={ingredient.id}>
                            <span>{ingredient.name}</span>
                            <span className="restock-answers">
                                {ANSWERS.map(({ value, label }) => (
                                    <button
                                        key={value}
                                        type="button"
                                        className={`restock-answer restock-answer-${value}`}
                                        aria-pressed={answers[ingredient.id] === value}
                                        aria-label={`${label}: ${ingredient.name}`}
                                        onClick={() => answer(ingredient.id, value)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="restock-results" aria-live="polite">
                    <div>
                        <p className="figure-subheading">In the kitchen</p>
                        {inKitchen.length === 0 ? (
                            <p className="restock-empty">Nothing recorded yet.</p>
                        ) : (
                            <ul>
                                {inKitchen.map(i => <li key={i.id}>{i.name}</li>)}
                            </ul>
                        )}
                    </div>
                    <div>
                        <p className="figure-subheading">Grocery list</p>
                        {Object.keys(toBuy).length === 0 ? (
                            <p className="restock-empty">Nothing to buy.</p>
                        ) : (
                            <ul>
                                {Object.entries(toBuy).map(([aisle, items]) => (
                                    <li key={aisle}>
                                        <span className="restock-aisle">{aisle}</span>
                                        {items.join(', ')}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <figcaption>
                Try it: answer for each ingredient and both lists fill
                themselves in. A sketch of the idea, not the app's real screen.
            </figcaption>
        </figure>
    );
};

export const ChalkAlertFigure = () => {
    return (
        <figure className="figure chalk-figure">
            <div className="figure-panel">
                <svg
                    viewBox="0 0 360 260"
                    role="img"
                    aria-label="Street map: a chalk report on one street, a ring around it, and parked cars alerted by how close they are."
                >
                    <g className="chalk-streets">
                        <path d="M0 50H360M0 130H360M0 210H360M70 0V260M180 0V260M290 0V260" />
                    </g>
                    <circle className="chalk-area" cx="125" cy="130" r="92" />
                    <path className="chalk-street-hit" d="M33 130H217" />
                    <path className="chalk-report" d="M118 123l14 14M132 123l-14 14" />
                    <circle className="chalk-car chalk-car-street" cx="190" cy="130" r="8" />
                    <circle className="chalk-car chalk-car-area" cx="70" cy="95" r="8" />
                    <circle className="chalk-car chalk-car-area" cx="180" cy="180" r="8" />
                    <circle className="chalk-car chalk-car-out" cx="290" cy="50" r="8" />
                    <circle className="chalk-car chalk-car-out" cx="318" cy="210" r="8" />
                </svg>

                <ul className="chalk-legend">
                    <li>
                        <span className="chalk-key chalk-key-report" aria-hidden="true">
                            &times;
                        </span>
                        Tires chalked here
                    </li>
                    <li>
                        <span className="chalk-key chalk-key-street" aria-hidden="true" />
                        Parked on that street: urgent alert
                    </li>
                    <li>
                        <span className="chalk-key chalk-key-area" aria-hidden="true" />
                        Parked nearby: area alert
                    </li>
                    <li>
                        <span className="chalk-key chalk-key-out" aria-hidden="true" />
                        Out of range: no alert
                    </li>
                </ul>
            </div>
            <figcaption>
                How one report fans out to nearby drivers. A sketch of the
                idea, not the app's real screen.
            </figcaption>
        </figure>
    );
};
